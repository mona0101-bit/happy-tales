const bookshelfLibrary = document.getElementById("bookshelfLibrary");
const librarySearch = document.getElementById("librarySearch");
const libraryGrade = document.getElementById("libraryGrade");
const libraryLength = document.getElementById("libraryLength");
const unlockedKey = "happy-tales-library-unlocks";
const shelfTopics = [
  ["Adventure & Discovery", ["adventure", "courage", "bravery", "discovery", "curiosity", "wonder", "perseverance"]],
  ["Friendship & Kindness", ["friendship", "kindness", "helping", "understanding", "compassion", "generosity", "listening"]],
  ["Teamwork & Community", ["teamwork", "cooperation", "community", "responsibility", "communication", "respect"]],
  ["Magic & Imagination", ["imagination", "magic", "celebration", "self-acceptance", "perspective"]],
  ["Nature & Animals", ["ocean", "environment", "care", "healthy", "garden"]],
  ["Learning & Creating", ["science", "invention", "creativity", "problem solving", "practice", "history", "reading"]],
  ["Family & Feelings", ["family", "confidence", "honesty", "patience"]],
  ["Trying New Things", ["trying", "adaptability"]]
];
const gradeShelfNames = ["Wonder Shelf", "Friendship Shelf", "Discovery Shelf", "Imagination Shelf"];

function shelfTopicFor(tale) {
  const theme = `${tale.theme} ${tale.lesson}`.toLowerCase();
  const match = shelfTopics.find(([, keywords]) => keywords.some(keyword => theme.includes(keyword)));
  return match ? match[0] : "More Happy Tales";
}

function isPremiumLibraryUser() {
  return true;
}

function unlockedTales() {
  return JSON.parse(localStorage.getItem(unlockedKey) || "[]");
}

function updateLibraryAccess() {
  document.getElementById("libraryAccess").textContent = "Free access active: all 160 tales are unlocked.";
}

function chunkIntoFullShelves(tales, labels) {
  const shelfCount = Math.max(1, Math.floor(tales.length / 5));
  const baseSize = Math.floor(tales.length / shelfCount);
  const extra = tales.length % shelfCount;
  const shelves = [];
  let offset = 0;

  for (let index = 0; index < shelfCount; index += 1) {
    const size = baseSize + (index < extra ? 1 : 0);
    shelves.push([labels[index % labels.length], tales.slice(offset, offset + size)]);
    offset += size;
  }
  return shelves;
}

function renderLibrary() {
  const query = librarySearch.value.trim().toLowerCase();
  const grade = libraryGrade.value;
  const minutes = libraryLength.value;
  const visible = happyTalesLibrary.filter(tale =>
    (!query || `${tale.title} ${tale.theme} ${tale.summary} ${tale.hero}`.toLowerCase().includes(query)) &&
    (!grade || tale.grade === grade) &&
    (!minutes || String(tale.minutes) === minutes)
  );
  let shelfEntries;
  if (grade && !query && !minutes) {
    const gradeLabel = visible[0]?.gradeLabel || "Reading Level";
    shelfEntries = chunkIntoFullShelves(
      visible,
      gradeShelfNames.map(name => `${gradeLabel} ${name}`)
    );
  } else {
    const shelves = new Map();
    visible.forEach(tale => {
      const topic = shelfTopicFor(tale);
      if (!shelves.has(topic)) shelves.set(topic, []);
      shelves.get(topic).push(tale);
    });
    const fullShelves = [];
    const smallShelfTales = [];
    [...shelves.entries()].forEach(entry => {
      if (entry[1].length >= 5 || query) fullShelves.push(entry);
      else smallShelfTales.push(...entry[1]);
    });
    shelfEntries = smallShelfTales.length
      ? fullShelves.concat(chunkIntoFullShelves(smallShelfTales, ["More Happy Tales"]))
      : fullShelves;
  }

  bookshelfLibrary.innerHTML = shelfEntries.map(([topic, tales], shelfIndex) => `
    <section class="book-shelf">
      <div class="shelf-heading">
        <div>
          <p>Topic shelf ${shelfIndex + 1}</p>
          <h2>${topic}</h2>
        </div>
        <div class="shelf-controls">
          <button type="button" data-scroll="-1" data-shelf="${shelfIndex}" aria-label="View previous ${topic} books">&#8592;</button>
          <button type="button" data-scroll="1" data-shelf="${shelfIndex}" aria-label="View more ${topic} books">&#8594;</button>
        </div>
      </div>
      <div class="shelf-track" data-track="${shelfIndex}">
        ${tales.map(tale => `
          <article class="shelf-book">
            <a href="tale.html?id=${tale.id}">
              <div class="book-cover-wrap">
                <img src="${tale.cover}" alt="${tale.title} illustrated cover">
                <span>${tale.gradeLabel} · ${tale.minutes} min</span>
              </div>
              <h3>${tale.title}</h3>
              <p>${tale.summary}</p>
            </a>
          </article>
        `).join("")}
      </div>
      <div class="wood-shelf-edge" aria-hidden="true"></div>
    </section>
  `).join("");

  document.querySelectorAll("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      const track = document.querySelector(`[data-track="${button.dataset.shelf}"]`);
      track.scrollBy({
        left: Number(button.dataset.scroll) * Math.max(280, track.clientWidth * 0.75),
        behavior: "smooth"
      });
    });
  });
}

librarySearch.addEventListener("input", renderLibrary);
libraryGrade.addEventListener("change", renderLibrary);
libraryLength.addEventListener("change", renderLibrary);
updateLibraryAccess();
renderLibrary();
