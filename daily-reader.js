loadHappyTalesDailyStory().then(readerStory => {
  document.title = `${readerStory.title} - Happy Tales`;
  document.getElementById("readerTitle").textContent = readerStory.title;
  document.getElementById("readerSummary").textContent = readerStory.summary;
  document.getElementById("readerImage").src = readerStory.image;
  document.getElementById("readerImage").alt = readerStory.imageAlt;
  document.getElementById("readerChips").innerHTML = readerStory.chips.map(chip => `<span class="chip">${chip}</span>`).join("");
  document.getElementById("freeStoryPart").innerHTML = readerStory.free.map(paragraph => `<p>${paragraph}</p>`).join("");

  if (hasHappyTalesSubscription()) {
    document.getElementById("lockedEnding").hidden = true;
    const ending = document.getElementById("subscriberEnding");
    ending.hidden = false;
    ending.innerHTML = `
      <div class="status safe">Free ending unlocked</div>
      ${readerStory.ending.map(paragraph => `<p>${paragraph}</p>`).join("")}
      <p class="story-finish">The End</p>
    `;
  }

  const paper = document.querySelector(".reader-paper");
  HappyLanguage.mountNarrationControls(paper, () => {
    const ending = hasHappyTalesSubscription() ? readerStory.ending : [];
    return `${readerStory.title}. ${readerStory.free.concat(ending).join(" ")}`;
  }, {
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
});
