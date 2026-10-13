const pathGrid = document.getElementById("pathBookGrid");
const pathDashboard = document.getElementById("pathProgressDashboard");

function pathEndingKey(bookId) {
  return `happy-tales-path-endings-${bookId}`;
}

function discoveredEndingsFor(bookId) {
  try {
    const endings = JSON.parse(localStorage.getItem(pathEndingKey(bookId)) || "[]");
    return Array.isArray(endings) ? endings : [];
  } catch {
    return [];
  }
}

function renderPathDashboard() {
  const progress = pathBooks.map(book => ({
    ...book,
    endings: discoveredEndingsFor(book.id)
  }));
  const totalFound = progress.reduce((sum, book) => sum + book.endings.length, 0);
  const completeBooks = progress.filter(book => book.endings.length === 9).length;
  const inProgress = progress
    .filter(book => book.endings.length > 0 && book.endings.length < 9)
    .sort((a, b) => b.endings.length - a.endings.length)[0];
  const surprise = pathBooks[(new Date().getDate() + totalFound) % pathBooks.length];

  pathDashboard.innerHTML = `
    <article class="path-stat-card">
      <span>Endings discovered</span>
      <strong>${totalFound} / ${pathBooks.length * 9}</strong>
      <p>Every new route adds to this collection.</p>
    </article>
    <article class="path-stat-card">
      <span>Books completed</span>
      <strong>${completeBooks} / ${pathBooks.length}</strong>
      <p>A book is complete when all 9 endings are found.</p>
    </article>
    <article class="path-stat-card path-next-card">
      <span>${inProgress ? "Keep exploring" : "Try a surprise"}</span>
      <strong>${inProgress ? inProgress.title : surprise.title}</strong>
      <p>${inProgress ? `${inProgress.endings.length} endings found so far.` : "A fresh pick for today."}</p>
      <a class="btn primary" href="path-reader.html?id=${inProgress ? inProgress.id : surprise.id}">${inProgress ? "Continue book" : "Open surprise"}</a>
    </article>
    <button class="path-reset-progress" id="resetPathProgress" type="button">Reset path progress</button>
  `;

  document.getElementById("resetPathProgress").addEventListener("click", () => {
    pathBooks.forEach(book => localStorage.removeItem(pathEndingKey(book.id)));
    renderPathDashboard();
    renderPathBooks();
  });
}

function renderPathBooks() {
  pathGrid.innerHTML = pathBooks.map(book => {
    const endings = discoveredEndingsFor(book.id);
    const percent = Math.round((endings.length / 9) * 100);
    return `
      <article class="path-book-card ${endings.length === 9 ? "complete" : endings.length ? "started" : ""}">
        <a href="path-reader.html?id=${book.id}">
          <div class="path-cover">
            <img src="${book.cover}" alt="${book.title} illustrated cover">
            <span>${endings.length ? `${endings.length} / 9 found` : "9 endings"}</span>
          </div>
          <div class="path-card-body">
            <p>${book.minutes} min · ${book.lesson}</p>
            <h2>${book.title}</h2>
            <div class="mini-path-progress" aria-label="${endings.length} of 9 endings discovered">
              <i style="width:${percent}%"></i>
            </div>
            <span>${endings.length ? "Continue discovering routes" : "Choose from 3 paths"} &#8594;</span>
          </div>
        </a>
      </article>
    `;
  }).join("");
}

renderPathDashboard();
renderPathBooks();
