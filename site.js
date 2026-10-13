const happyTalesAccountKey = "happy-tales-account";
const happyLanguageKey = "happy-tales-language";
const translationCacheKey = "happy-tales-translation-cache";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let pageTranslationVersion = 0;
let pageTranslationObserver;
let pageTranslationTimer;

function ensureSiteMetadata() {
  const head = document.head;
  const meta = [
    ["meta", { name: "theme-color", content: "#1ec9b7" }],
    ["link", { rel: "icon", href: "assets/happy-tales-icon.svg", type: "image/svg+xml" }],
    ["link", { rel: "manifest", href: "manifest.webmanifest" }]
  ];

  meta.forEach(([tag, attributes]) => {
    const selector = tag === "meta"
      ? `meta[name="${attributes.name}"]`
      : `link[rel="${attributes.rel}"]`;
    if (head.querySelector(selector)) return;
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    head.appendChild(element);
  });
}

const happyLanguages = {
  en: { label: "English", native: "English", speech: "en-US", dir: "ltr" },
  fr: { label: "French", native: "Français", speech: "fr-FR", dir: "ltr" },
  es: { label: "Spanish", native: "Español", speech: "es-ES", dir: "ltr" },
  zh: { label: "Mandarin", native: "中文", speech: "zh-CN", dir: "ltr" },
  it: { label: "Italian", native: "Italiano", speech: "it-IT", dir: "ltr" },
  pt: { label: "Portuguese", native: "Português", speech: "pt-BR", dir: "ltr" },
  de: { label: "German", native: "Deutsch", speech: "de-DE", dir: "ltr" },
  ar: { label: "Arabic", native: "العربية", speech: "ar-SA", dir: "rtl" }
};

const sharedLabels = {
  en: { home: "Home", dashboard: "Dashboard", create: "Create", library: "Library", safety: "Safety", games: "Games", account: "Account", language: "Language", listen: "Read aloud", pause: "Pause", resume: "Resume", stop: "Stop", translate: "Translate story", translating: "Translating..." },
  fr: { home: "Accueil", create: "Créer", library: "Bibliothèque", safety: "Sécurité", games: "Jeux", account: "Compte", language: "Langue", listen: "Lire à voix haute", pause: "Pause", resume: "Reprendre", stop: "Arrêter", translate: "Traduire l'histoire", translating: "Traduction..." },
  es: { home: "Inicio", create: "Crear", library: "Biblioteca", safety: "Seguridad", games: "Juegos", account: "Cuenta", language: "Idioma", listen: "Leer en voz alta", pause: "Pausa", resume: "Continuar", stop: "Detener", translate: "Traducir historia", translating: "Traduciendo..." },
  zh: { home: "首页", create: "创作", library: "故事馆", safety: "安全", games: "游戏", account: "账户", language: "语言", listen: "朗读", pause: "暂停", resume: "继续", stop: "停止", translate: "翻译故事", translating: "正在翻译..." },
  it: { home: "Home", create: "Crea", library: "Biblioteca", safety: "Sicurezza", games: "Giochi", account: "Account", language: "Lingua", listen: "Leggi ad alta voce", pause: "Pausa", resume: "Riprendi", stop: "Ferma", translate: "Traduci storia", translating: "Traduzione..." },
  pt: { home: "Início", create: "Criar", library: "Biblioteca", safety: "Segurança", games: "Jogos", account: "Conta", language: "Idioma", listen: "Ler em voz alta", pause: "Pausar", resume: "Continuar", stop: "Parar", translate: "Traduzir história", translating: "Traduzindo..." },
  de: { home: "Start", create: "Erstellen", library: "Bibliothek", safety: "Sicherheit", games: "Spiele", account: "Konto", language: "Sprache", listen: "Vorlesen", pause: "Pause", resume: "Weiter", stop: "Stopp", translate: "Geschichte übersetzen", translating: "Übersetzung..." },
  ar: { home: "الرئيسية", create: "إنشاء", library: "المكتبة", safety: "الأمان", games: "الألعاب", account: "الحساب", language: "اللغة", listen: "قراءة بصوت عالٍ", pause: "إيقاف مؤقت", resume: "متابعة", stop: "إيقاف", translate: "ترجمة القصة", translating: "جارٍ الترجمة..." }
};

function getHappyTalesAccount() {
  return JSON.parse(localStorage.getItem(happyTalesAccountKey) || "null");
}

function getHappyLanguage() {
  const language = localStorage.getItem(happyLanguageKey) || "en";
  return happyLanguages[language] ? language : "en";
}

function happyLabel(key) {
  return sharedLabels[getHappyLanguage()]?.[key] || sharedLabels.en[key] || key;
}

function updateAccountLinks() {
  const account = getHappyTalesAccount();
  document.querySelectorAll(".account-link").forEach(link => {
    if (account) {
      link.textContent = `${account.username || account.name} (${account.role === "kid" ? "Learner" : account.role})`;
      link.href = "login.html";
    } else if (link.textContent.trim() === "Account") {
      link.textContent = happyLabel("account");
    }
  });
}

function addGamesNavigation() {
  document.querySelectorAll(".nav-links").forEach(nav => {
    if (nav.querySelector('a[href="games.html"]')) return;
    const gamesLink = document.createElement("a");
    gamesLink.href = "games.html";
    gamesLink.textContent = sharedLabels.en.games;
    if (location.pathname.endsWith("/games.html")) gamesLink.setAttribute("aria-current", "page");
    const accountLink = nav.querySelector(".account-link, a[href='login.html']");
    nav.insertBefore(gamesLink, accountLink);
  });
}

function addDashboardNavigation() {
  document.querySelectorAll(".nav-links").forEach(nav => {
    if (nav.querySelector('a[href="dashboard.html"]')) return;
    const dashboardLink = document.createElement("a");
    dashboardLink.href = "dashboard.html";
    dashboardLink.textContent = "Dashboard";
    if (location.pathname.endsWith("/dashboard.html")) dashboardLink.setAttribute("aria-current", "page");
    const createLink = nav.querySelector('a[href="create.html"]');
    nav.insertBefore(dashboardLink, createLink || nav.firstElementChild?.nextSibling || null);
  });
}

function localizeNavigation() {
  const labels = {
    "index.html": "home",
    "dashboard.html": "dashboard",
    "create.html": "create",
    "library.html": "library",
    "safety.html": "safety",
    "games.html": "games"
  };
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (labels[href]) link.textContent = happyLabel(labels[href]);
  });
  updateAccountLinks();
}

function registerHappyTalesApp() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

function addLanguageSelector() {
  document.querySelectorAll(".nav").forEach(nav => {
    if (nav.querySelector(".language-picker")) return;
    const picker = document.createElement("label");
    picker.className = "language-picker";
    picker.innerHTML = `<span>${happyLabel("language")}</span><select aria-label="${happyLabel("language")}">${Object.entries(happyLanguages).map(([code, language]) => `<option value="${code}">${language.native}</option>`).join("")}</select>`;
    const select = picker.querySelector("select");
    select.value = getHappyLanguage();
    select.addEventListener("change", async () => {
      localStorage.setItem(happyLanguageKey, select.value);
      window.speechSynthesis?.cancel();
      applyLanguage();
      await translateWholePage();
      window.dispatchEvent(new CustomEvent("happy-language-change", { detail: { language: select.value } }));
    });
    nav.insertBefore(picker, nav.querySelector(".nav-links"));
  });
}

function enhanceSiteShell() {
  const main = document.querySelector("main");
  if (main && !main.id) main.id = "main-content";

  if (main && !document.querySelector(".skip-link")) {
    const skipLink = document.createElement("a");
    skipLink.className = "skip-link";
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    document.body.prepend(skipLink);
  }

  document.querySelectorAll(".nav").forEach(nav => {
    const links = nav.querySelector(".nav-links");
    if (!links || nav.querySelector(".nav-menu-toggle")) return;

    const button = document.createElement("button");
    button.className = "nav-menu-toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
    button.innerHTML = "<span></span><span></span><span></span>";
    nav.insertBefore(button, links);

    const closeMenu = () => {
      nav.classList.remove("menu-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    };

    button.addEventListener("click", () => {
      const open = nav.classList.toggle("menu-open");
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    links.addEventListener("click", event => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  });

  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const target = (link.getAttribute("href") || "").split("?")[0];
    if (target === currentPage) link.setAttribute("aria-current", "page");
  });

  if (!document.querySelector(".page-scroll-progress")) {
    const progress = document.createElement("div");
    progress.className = "page-scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.append(progress);
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty("--page-progress", String(available > 0 ? Math.min(1, window.scrollY / available) : 0));
    };
    updateProgress();
    document.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  if (!document.querySelector(".back-to-top")) {
    const backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.setAttribute("title", "Back to top");
    backToTop.innerHTML = "&#8593;";
    document.body.append(backToTop);
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const updateBackToTop = () => {
      backToTop.classList.toggle("show", window.scrollY > 520);
      document.querySelectorAll(".nav").forEach(nav => nav.classList.toggle("nav-scrolled", window.scrollY > 20));
    };
    updateBackToTop();
    document.addEventListener("scroll", updateBackToTop, { passive: true });
  }

  if (!document.querySelector('meta[name="theme-color"]')) {
    const theme = document.createElement("meta");
    theme.name = "theme-color";
    theme.content = "#ffffff";
    document.head.append(theme);
  }
}

function applyLanguage() {
  const code = getHappyLanguage();
  document.documentElement.lang = code;
  document.documentElement.dir = happyLanguages[code].dir;
  document.querySelectorAll(".language-picker span").forEach(span => { span.textContent = happyLabel("language"); });
  document.querySelectorAll(".language-picker select").forEach(select => { select.value = code; select.setAttribute("aria-label", happyLabel("language")); });
  localizeNavigation();
  document.body.dataset.language = code;
}

function getTranslationCache() {
  try {
    return JSON.parse(localStorage.getItem(translationCacheKey) || "{}");
  } catch {
    return {};
  }
}

function saveTranslationCache(cache) {
  const trimmed = Object.fromEntries(Object.entries(cache).slice(-1200));
  try {
    localStorage.setItem(translationCacheKey, JSON.stringify(trimmed));
  } catch {
    localStorage.removeItem(translationCacheKey);
  }
}

async function translateTexts(texts, targetLanguage = getHappyLanguage()) {
  if (targetLanguage === "en") return texts;
  const normalized = texts.map(text => String(text || ""));
  const cache = getTranslationCache();
  const results = new Array(normalized.length);
  const missing = [];

  normalized.forEach((text, index) => {
    const cacheId = `${targetLanguage}:${text}`;
    if (!text || cache[cacheId]) {
      results[index] = cache[cacheId] || text;
    } else {
      missing.push({ text, index, cacheId });
    }
  });
  if (!missing.length) return results;

  let translatedMissing = [];
  try {
    if (window.translation?.createTranslator) {
      const translator = await window.translation.createTranslator({
        sourceLanguage: "en",
        targetLanguage
      });
      translatedMissing = await Promise.all(missing.map(item => translator.translate(item.text)));
    }
  } catch {
    // Continue to the secure server translation route.
  }

  if (translatedMissing.length !== missing.length) {
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          texts: missing.map(item => item.text),
          language: targetLanguage
        })
      });
      if (response.ok) {
        const result = await response.json();
        translatedMissing = result.translations || [];
      }
    } catch {
      // Original English remains available when translation services are offline.
    }
  }

  missing.forEach((item, missingIndex) => {
    const translated = translatedMissing[missingIndex] || item.text;
    results[item.index] = translated;
    if (translated !== item.text) cache[item.cacheId] = translated;
  });
  saveTranslationCache(cache);
  return results;
}

async function translateText(text, targetLanguage = getHappyLanguage()) {
  if (!text) return text;
  const translated = await translateTexts([text], targetLanguage);
  return translated[0] || text;
}

function shouldTranslateNode(node) {
  const parent = node.parentElement;
  if (!parent || !node.nodeValue.trim()) return false;
  if (!/\p{L}/u.test(node.nodeValue)) return false;
  if (["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "OPTION"].includes(parent.tagName)) return false;
  return !parent.closest(".language-picker, .brand, [data-no-translate]");
}

function collectPageTranslationItems(root = document.body) {
  const items = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!shouldTranslateNode(node)) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const sourceValue = originalText.get(node);
    items.push({
      type: "text",
      node,
      source: sourceValue.trim(),
      leading: sourceValue.match(/^\s*/)?.[0] || "",
      trailing: sourceValue.match(/\s*$/)?.[0] || ""
    });
  }

  root.querySelectorAll?.("input[placeholder], textarea[placeholder], [title], [aria-label]").forEach(element => {
    if (element.closest(".language-picker, [data-no-translate]")) return;
    const saved = originalAttributes.get(element) || {};
    ["placeholder", "title", "aria-label"].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const source = saved[attribute];
      if (source && /\p{L}/u.test(source)) {
        items.push({ type: "attribute", element, attribute, source });
      }
    });
    originalAttributes.set(element, saved);
  });
  return items;
}

function setPageTranslationState(active, language = getHappyLanguage()) {
  let status = document.querySelector(".page-translation-status");
  if (!status) {
    status = document.createElement("div");
    status.className = "page-translation-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    document.body.append(status);
  }
  status.textContent = active
    ? `${happyLabel("translating")} ${happyLanguages[language].native}`
    : "";
  status.classList.toggle("show", active);
  document.body.classList.toggle("page-translating", active);
}

async function translateWholePage(root = document.body) {
  if (!root) return;
  const language = getHappyLanguage();
  const version = ++pageTranslationVersion;
  const items = collectPageTranslationItems(root);

  if (language === "en") {
    items.forEach(item => {
      if (item.type === "text") item.node.nodeValue = originalText.get(item.node);
      else item.element.setAttribute(item.attribute, item.source);
    });
    setPageTranslationState(false);
    return;
  }

  setPageTranslationState(true, language);
  const batchSize = 45;
  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);
    const translated = await translateTexts(batch.map(item => item.source), language);
    if (version !== pageTranslationVersion || language !== getHappyLanguage()) return;
    batch.forEach((item, itemIndex) => {
      const value = translated[itemIndex] || item.source;
      if (item.type === "text") item.node.nodeValue = `${item.leading}${value}${item.trailing}`;
      else item.element.setAttribute(item.attribute, value);
    });
  }
  setPageTranslationState(false);
}

function watchDynamicTranslations() {
  pageTranslationObserver?.disconnect();
  pageTranslationObserver = new MutationObserver(mutations => {
    if (getHappyLanguage() === "en") return;
    const hasNewContent = mutations.some(mutation =>
      [...mutation.addedNodes].some(node =>
        node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE
      )
    );
    if (!hasNewContent) return;
    clearTimeout(pageTranslationTimer);
    pageTranslationTimer = setTimeout(() => translateWholePage(), 120);
  });
  pageTranslationObserver.observe(document.body, { childList: true, subtree: true });
}

const naturalVoiceHints = [
  "natural", "neural", "premium", "enhanced", "online",
  "aria", "jenny", "guy", "sonia", "ryan", "libby",
  "google", "samantha", "daniel", "serena"
];

function voiceQuality(voice, language) {
  const desired = happyLanguages[language].speech.toLowerCase();
  const voiceLanguage = voice.lang.toLowerCase();
  const name = voice.name.toLowerCase();
  let score = 0;
  if (voiceLanguage === desired) score += 120;
  else if (voiceLanguage.startsWith(language)) score += 80;
  else return -1;
  naturalVoiceHints.forEach((hint, index) => {
    if (name.includes(hint)) score += 55 - Math.min(index, 10);
  });
  if (name.includes("microsoft")) score += 18;
  if (language === "en" && name.includes("zira")) score += 42;
  if (language === "en" && (name.includes("linda") || name.includes("richard"))) score += 28;
  if (name.includes("desktop")) score -= 18;
  if (name.includes("david") || name.includes("mark")) score -= 18;
  if (!voice.localService) score += 12;
  return score;
}

function preferredVoice(language = getHappyLanguage()) {
  return speechSynthesis.getVoices()
    .map(voice => ({ voice, score: voiceQuality(voice, language) }))
    .filter(candidate => candidate.score >= 0)
    .sort((a, b) => b.score - a.score)[0]?.voice || null;
}

function prepareSpeechText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/([.!?])(?=[A-Z])/g, "$1 ")
    .replace(/\.{2,}/g, ".")
    .trim();
}

function speechChunks(text, maximumLength = 1100) {
  const sentences = prepareSpeechText(text).match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
  const chunks = [];
  let chunk = "";
  sentences.forEach(sentence => {
    if (chunk && `${chunk} ${sentence}`.length > maximumLength) {
      chunks.push(chunk.trim());
      chunk = sentence;
    } else {
      chunk = `${chunk} ${sentence}`;
    }
  });
  if (chunk.trim()) chunks.push(chunk.trim());
  return chunks;
}

function speakNaturally(text, options = {}) {
  if (!("speechSynthesis" in window)) return false;
  const language = options.language || getHappyLanguage();
  const voice = preferredVoice(language);
  const chunks = options.singlePhrase ? [prepareSpeechText(text)] : speechChunks(text);
  let index = 0;
  speechSynthesis.cancel();

  const speakNext = () => {
    if (index >= chunks.length) {
      options.onend?.();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = happyLanguages[language].speech;
    utterance.voice = voice;
    utterance.rate = Number(options.rate ?? 0.92);
    utterance.pitch = Number(options.pitch ?? 1);
    utterance.volume = 1;
    utterance.onstart = () => {
      if (index === 0) options.onstart?.(voice);
    };
    utterance.onend = () => {
      index += 1;
      window.setTimeout(speakNext, options.pauseBetween ?? 45);
    };
    utterance.onerror = event => {
      if (event.error !== "canceled" && event.error !== "interrupted") options.onerror?.(event);
    };
    speechSynthesis.speak(utterance);
  };
  speakNext();
  return true;
}

if ("speechSynthesis" in window) {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener?.("voiceschanged", () => speechSynthesis.getVoices(), { once: true });
}

function mountNarrationControls(container, getText, options = {}) {
  if (!container || container.querySelector(".narration-bar")) return;
  const bar = document.createElement("div");
  bar.className = "narration-bar";
  bar.innerHTML = `
    <button type="button" class="narrate-play">&#9654; <span>${happyLabel("listen")}</span></button>
    <button type="button" class="narrate-pause">&#10074;&#10074; <span>${happyLabel("pause")}</span></button>
    <button type="button" class="narrate-stop">&#9632; <span>${happyLabel("stop")}</span></button>
    <button type="button" class="narrate-translate">&#127760; <span>${happyLabel("translate")}</span></button>
    <span class="natural-voice-badge">Smooth voice</span>
    <label><span>Speed</span><select class="narrate-speed"><option value="0.78">Calm</option><option value="0.92" selected>Natural</option><option value="1">Lively</option><option value="1.12">Quick</option></select></label>
    <p class="narration-message" aria-live="polite"></p>`;
  container.prepend(bar);

  let translatedText = "";
  const message = bar.querySelector(".narration-message");
  const play = async () => {
    speechSynthesis.cancel();
    const language = getHappyLanguage();
    const original = getText();
    const text = language === "en" ? original : translatedText || await translateText(original, language);
    const speechLanguage = language !== "en" && text === original ? "en" : language;
    speakNaturally(text, {
      language: speechLanguage,
      rate: Number(bar.querySelector(".narrate-speed").value),
      pitch: 1,
      pauseBetween: 55,
      onstart(voice) {
        bar.classList.add("speaking");
        message.textContent = voice
          ? `Reading with ${voice.name.replace(/Microsoft|Google/gi, "").trim()}.`
          : happyLabel("listen");
      },
      onend() {
        bar.classList.remove("speaking");
        message.textContent = "";
      }
    });
  };
  bar.querySelector(".narrate-play").addEventListener("click", play);
  bar.querySelector(".narrate-pause").addEventListener("click", () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      bar.querySelector(".narrate-pause span").textContent = happyLabel("pause");
    } else {
      speechSynthesis.pause();
      bar.querySelector(".narrate-pause span").textContent = happyLabel("resume");
    }
  });
  bar.querySelector(".narrate-stop").addEventListener("click", () => {
    speechSynthesis.cancel();
    bar.classList.remove("speaking");
    message.textContent = "";
  });
  bar.querySelector(".narrate-translate").addEventListener("click", async () => {
    const language = getHappyLanguage();
    if (language === "en") {
      message.textContent = "Choose another language above.";
      return;
    }
    message.textContent = happyLabel("translating");
    translatedText = await translateText(getText(), language);
    message.textContent = translatedText === getText()
      ? "Translation is unavailable right now. The original English story is still ready to read aloud."
      : `${happyLanguages[language].native} ready.`;
    if (options.onTranslation) options.onTranslation(translatedText, language);
  });
  window.addEventListener("happy-language-change", () => {
    speechSynthesis.cancel();
    translatedText = "";
    bar.querySelector(".narrate-play span").textContent = happyLabel("listen");
    bar.querySelector(".narrate-pause span").textContent = happyLabel("pause");
    bar.querySelector(".narrate-stop span").textContent = happyLabel("stop");
    bar.querySelector(".narrate-translate span").textContent = happyLabel("translate");
  });
}

window.HappyLanguage = {
  languages: happyLanguages,
  get: getHappyLanguage,
  label: happyLabel,
  translateText,
  translateTexts,
  translateWholePage,
  preferredVoice,
  speakNaturally,
  mountNarrationControls
};

ensureSiteMetadata();
addDashboardNavigation();
addGamesNavigation();
addLanguageSelector();
enhanceSiteShell();
collectPageTranslationItems(document.body);
applyLanguage();
translateWholePage();
watchDynamicTranslations();
registerHappyTalesApp();
