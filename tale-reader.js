const unlockedKey = "happy-tales-library-unlocks";
const taleId = Number(new URLSearchParams(location.search).get("id"));
const tale = getLibraryTale(taleId);
const content = document.getElementById("taleContent");

function isPremiumLibraryUser() {
  return true;
}

function getUnlocked() {
  return JSON.parse(localStorage.getItem(unlockedKey) || "[]");
}

if (!tale) {
  content.innerHTML = `<div class="status blocked">Tale not found</div><h1>Please return to the library.</h1>`;
} else {
  const unlocked = getUnlocked();
  const premium = isPremiumLibraryUser();
  const alreadyUnlocked = unlocked.includes(tale.id);
  const allowed = true;

  if (false && allowed && !premium && !alreadyUnlocked) {
    unlocked.push(tale.id);
    localStorage.setItem(unlockedKey, JSON.stringify(unlocked));
  }

  document.title = `${tale.title} - Happy Tales`;
  if (!allowed) {
    content.innerHTML = `
      <div class="locked-library-tale">
        <img class="reader-image" src="${tale.cover}" alt="${tale.title} illustrated cover">
        <div class="locked-ending">
          <div class="lock-icon">&#128274;</div>
          <p class="eyebrow">Free tale</p>
          <h2>All library tales are free.</h2>
          <p>Return to the library to keep reading.</p>
        </div>
      </div>`;
  } else {
    const paragraphs = buildLibraryStory(tale);
    content.innerHTML = `
      <div class="daily-reader-head">
        <p class="eyebrow">${tale.theme}</p>
        <h1>${tale.title}</h1>
        <p>${tale.summary}</p>
        <div class="chips"><span class="chip">${tale.gradeLabel}</span><span class="chip">${tale.minutes} minute read</span><span class="chip">${tale.lesson}</span></div>
      </div>
      <img class="reader-image" src="${tale.cover}" alt="${tale.title} illustrated cover">
      <article class="reader-paper">
        ${paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
        <p class="story-finish">The End</p>
      </article>`;
    const paper = content.querySelector(".reader-paper");
    HappyLanguage.mountNarrationControls(paper, () => `${tale.title}. ${paragraphs.join(" ")}. The End.`, {
      onTranslation(translation, language) {
        let panel = paper.querySelector(".translation-panel");
        if (!panel) {
          panel = document.createElement("section");
          panel.className = "translation-panel";
          paper.appendChild(panel);
        }
        panel.innerHTML = `<p class="eyebrow">${HappyLanguage.languages[language].native}</p><p>${translation}</p>`;
      }
    });
  }
}
