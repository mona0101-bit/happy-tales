const bookId = Number(new URLSearchParams(location.search).get("id"));
const book = getPathBook(bookId);
const reader = document.getElementById("pathReader");
let nodes;
let currentNode = "start";
let choiceHistory = [];

function discoveredEndingKey() {
  return `happy-tales-path-endings-${book.id}`;
}

function getDiscoveredEndings() {
  try {
    return JSON.parse(localStorage.getItem(discoveredEndingKey()) || "[]");
  } catch {
    return [];
  }
}

function rememberEnding(ending) {
  const endings = getDiscoveredEndings();
  if (!endings.includes(ending)) {
    endings.push(ending);
    localStorage.setItem(discoveredEndingKey(), JSON.stringify(endings));
  }
  return endings;
}

function renderNode() {
  if (!book) {
    reader.innerHTML = `<div class="status blocked">Adventure not found</div><a class="btn primary" href="path-stories.html">Return to Choose Your Path</a>`;
    return;
  }

  const node = nodes[currentNode];
  const progress = choiceHistory.length;
  const discoveredEndings = node.ending ? rememberEnding(node.ending) : getDiscoveredEndings();
  reader.innerHTML = `
    <div class="path-reader-top">
      <a class="back-link" href="path-stories.html">&#8592; All path books</a>
      <div class="path-progress"><span style="width:${node.ending ? 100 : 18 + progress * 27}%"></span></div>
    </div>
    <div class="path-reader-layout">
      <aside class="path-book-panel">
        <img src="${book.cover}" alt="${book.title} illustrated cover">
        <p class="eyebrow">Choose Your Path</p>
        <h1>${book.title}</h1>
        <div class="chips"><span class="chip">${book.minutes} min</span><span class="chip">9 endings</span><span class="chip">3 choices each chapter</span></div>
      </aside>
      <article class="path-page">
        <p class="path-chapter">${node.ending || `Chapter ${progress + 1}`}</p>
        <h2>${node.title}</h2>
        ${node.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
        ${node.choices ? `
          <div class="path-question">What should ${book.hero} do?</div>
          <div class="path-choices">
            ${node.choices.map((choice, index) => `
              <button type="button" data-next="${choice.next}" data-choice="${index}">
                <strong>${choice.label}</strong><span>${choice.detail}</span>
              </button>`).join("")}
          </div>` : `
          <div class="path-ending">
            <strong>${node.ending} discovered!</strong>
            <p>You found ${discoveredEndings.length} of 9 possible endings for this book. Replay and make different choices to discover another route.</p>
            <button class="btn primary" id="replayPath" type="button">Replay this book</button>
            <a class="btn secondary" href="path-stories.html">Choose another book</a>
          </div>`}
      </article>
    </div>`;

  reader.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", () => {
      choiceHistory.push(Number(button.dataset.choice));
      currentNode = button.dataset.next;
      renderNode();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  document.getElementById("replayPath")?.addEventListener("click", () => {
    currentNode = "start";
    choiceHistory = [];
    renderNode();
  });
  const page = reader.querySelector(".path-page");
  HappyLanguage.mountNarrationControls(page, () => `${book.title}. ${node.title}. ${node.paragraphs.join(" ")}`, {
    onTranslation(translation, language) {
      let panel = page.querySelector(".translation-panel");
      if (!panel) {
        panel = document.createElement("section");
        panel.className = "translation-panel";
        page.appendChild(panel);
      }
      panel.innerHTML = `<p class="eyebrow">${HappyLanguage.languages[language].native}</p><p>${translation}</p>`;
    }
  });
}

if (book) {
  document.title = `${book.title} - Choose Your Path`;
  nodes = buildPathNodes(book);
}
renderNode();
