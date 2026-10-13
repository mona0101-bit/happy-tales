const tabs = document.getElementById("gameTabs");
const controls = document.getElementById("gameControls");
const board = document.getElementById("gameBoard");
const actions = document.getElementById("gameActions");
const statusBox = document.getElementById("gameStatus");
const startButton = document.getElementById("startGame");
const scoreBox = document.querySelector("#gameScore strong");
const gameName = document.getElementById("gameName");
const gameEyebrow = document.getElementById("gameEyebrow");
const gameDescription = document.getElementById("gameDescription");
const backToGames = document.getElementById("backToGames");

const gradeOptions = [
  ["preschool", "Preschool"], ["kindergarten", "Kindergarten"], ["grade1", "Grade 1"],
  ["grade2", "Grade 2"], ["grade3", "Grade 3"], ["grade4", "Grade 4"],
  ["grade5", "Grade 5"], ["grade6", "Grade 6"]
];
const levelOptions = [["1", "Level 1"], ["2", "Level 2"], ["3", "Level 3"], ["4", "Level 4"], ["5", "Level 5"]];
let activeGame = "sudoku";
let score = 0;
let roundState = null;
const gameProgressKey = "happy-games-progress-v2";
const gameScoresKey = "happy-games-scores-v2";
const gameSessionKey = "happy-games-current-session-v1";
const questionHistoryKey = "happy-games-question-history-v1";
const arcadeGames = [
  "simon", "tictactoe", "connectfour", "merge", "mines", "slider", "maze", "patterns",
  "scramble", "wordsearch", "reaction", "colormatch", "oddone", "sequence", "typing", "whack"
];
let resumeSession = null;
let restoringSettings = false;
const pointRules = {
  sudoku: { base: 40, label: "Logic stars" },
  crossword: { base: 25, label: "Word gems" },
  blanks: { base: 8, label: "Reading sparks" },
  math: { base: 12, label: "Math power" },
  science: { base: 14, label: "Discovery points" },
  geography: { base: 16, label: "Explorer miles" },
  flags: { base: 18, label: "Flag badges" },
  countries: { base: 20, label: "Detective clues" },
  spelling: { base: 10, label: "Bee points" },
  basketball: { base: 12, label: "Baskets" },
  darts: { base: 15, label: "Bullseye points" },
  soccer: { base: 14, label: "Goals" },
  golf: { base: 16, label: "Golf stars" },
  memory: { base: 10, label: "Memory gems" },
  simon: { base: 12, label: "Light streak" },
  tictactoe: { base: 15, label: "Grid crowns" },
  connectfour: { base: 18, label: "Connect coins" },
  merge: { base: 8, label: "Merge power" },
  mines: { base: 16, label: "Treasure gems" },
  slider: { base: 14, label: "Puzzle moves" },
  maze: { base: 15, label: "Escape stars" },
  patterns: { base: 10, label: "Pattern points" },
  scramble: { base: 12, label: "Word sparks" },
  wordsearch: { base: 14, label: "Hidden words" },
  reaction: { base: 10, label: "Rocket speed" },
  colormatch: { base: 9, label: "Color streak" },
  oddone: { base: 10, label: "Detective points" },
  sequence: { base: 12, label: "Sequence energy" },
  typing: { base: 10, label: "Typing miles" },
  whack: { base: 6, label: "Star hits" }
};

const gameInfo = {
  sudoku: ["Logic challenge", "Sudoku", "Fill every row, column, and box without repeating a number."],
  crossword: ["Word challenge", "Mini Crosswords", "Use each clue to complete a set of connected word answers."],
  blanks: ["Reading challenge", "Fill the Blank", "Choose the word that makes each sentence complete."],
  math: ["Number challenge", "Math Games", "Solve ten questions matched to your reading grade."],
  science: ["Discovery challenge", "Science Games", "Explore animals, space, matter, weather, and living things."],
  geography: ["World challenge", "Geography Games", "Practice continents, oceans, landmarks, and map knowledge."],
  flags: ["World challenge", "Guess the Flag", "Choose how many flags to identify and set your difficulty."],
  countries: ["Map challenge", "Country Detective", "Name a country from its location, capital, neighbors, and special clues."],
  spelling: ["Word challenge", "Spelling Bee", "Listen carefully, use the clue, and spell each word."],
  basketball: ["Learning league", "Basketball Challenge", "Answer a grade-level question, then send the ball toward the hoop."],
  darts: ["Learning league", "Dartboard Challenge", "Solve each question to aim for the colorful scoring rings."],
  soccer: ["Learning league", "Soccer Challenge", "Choose the right answer and take your shot on goal."],
  golf: ["Learning league", "Mini Golf Quest", "Answer a question, then time a colorful putt through the course."],
  memory: ["Brain boost", "Memory Match", "Flip the glowing cards and find every matching pair."],
  simon: ["Memory challenge", "Simon Lights", "Watch the light pattern, then repeat the growing sequence."],
  tictactoe: ["Strategy classic", "Tic-Tac-Toe", "Make a line of three before the clever computer does."],
  connectfour: ["Strategy classic", "Connect Four", "Drop colorful coins and connect four in any direction."],
  merge: ["Number puzzle", "Number Merge", "Slide matching numbers together and build the biggest tile."],
  mines: ["Logic adventure", "Treasure Sweeper", "Use number clues to uncover gems without waking the sleepy traps."],
  slider: ["Picture puzzle", "Sliding Puzzle", "Move tiles into order using the empty space."],
  maze: ["Path challenge", "Maze Escape", "Guide the glowing explorer through a brand-new maze."],
  patterns: ["Thinking challenge", "Pattern Builder", "Study each pattern and choose the piece that comes next."],
  scramble: ["Word challenge", "Word Scramble", "Unscramble lively words before your clue meter runs out."],
  wordsearch: ["Word challenge", "Word Search", "Find every hidden word in the letter grid."],
  reaction: ["Speed challenge", "Rocket Reaction", "Wait for launch, then tap as quickly as you can."],
  colormatch: ["Focus challenge", "Color Match", "Match the meaning of the word, not the color of its letters."],
  oddone: ["Detective challenge", "Odd One Out", "Spot the one symbol that breaks the group pattern."],
  sequence: ["Number challenge", "Sequence Sprint", "Find the next number in an ever-changing sequence."],
  typing: ["Typing challenge", "Typing Trail", "Type each phrase accurately and race along the trail."],
  whack: ["Arcade challenge", "Whack-a-Star", "Tap the shining stars and avoid the storm clouds."]
};
resumeSession = loadGameSession();

const gameCovers = {
  sudoku: { image: "assets/game-covers/game-sudoku.webp", strap: "Logic Lab", className: "cover-sudoku" },
  crossword: { image: "assets/game-covers/game-crossword.webp", strap: "Word Hunt", className: "cover-crossword" },
  blanks: { image: "assets/game-covers/game-blanks.webp", strap: "Story Sprint", className: "cover-blanks" },
  math: { image: "assets/game-covers/game-math.webp", strap: "Number Rush", className: "cover-math" },
  science: { image: "assets/game-covers/game-science.webp", strap: "Discovery Lab", className: "cover-science" },
  geography: { image: "assets/game-covers/game-geography.webp", strap: "World Trek", className: "cover-geography" },
  flags: { image: "assets/game-covers/game-flags.webp", strap: "Flag Dash", className: "cover-flags" },
  countries: { image: "assets/game-covers/game-countries.webp", strap: "Map Mystery", className: "cover-countries" },
  spelling: { image: "assets/game-covers/game-spelling.webp", strap: "Word Arena", className: "cover-spelling" },
  basketball: { image: "assets/game-covers/game-basketball.webp", strap: "Timing Shot", className: "cover-basketball" },
  darts: { image: "assets/game-covers/game-darts.webp", strap: "Arcade Aim", className: "cover-darts" },
  soccer: { image: "assets/game-covers/game-soccer.webp", strap: "Penalty Stars", className: "cover-soccer" },
  golf: { image: "assets/game-covers/game-golf.webp", strap: "Putting Quest", className: "cover-golf" },
  memory: { image: "assets/game-covers/game-memory.webp", strap: "Magic Pairs", className: "cover-memory" },
  simon: { image: "assets/game-covers/game-simon.webp", strap: "Light Loop", className: "cover-simon" },
  tictactoe: { image: "assets/game-covers/game-tictactoe.webp", strap: "Grid Duel", className: "cover-tictactoe" },
  connectfour: { image: "assets/game-covers/game-connectfour.webp", strap: "Four Force", className: "cover-connectfour" },
  merge: { image: "assets/game-covers/game-merge.webp", strap: "Merge Mania", className: "cover-merge" },
  mines: { image: "assets/game-covers/game-mines.webp", strap: "Gem Sweeper", className: "cover-mines" },
  slider: { image: "assets/game-covers/game-slider.webp", strap: "Tile Twist", className: "cover-slider" },
  maze: { image: "assets/game-covers/game-maze.webp", strap: "Maze Escape", className: "cover-maze" },
  patterns: { image: "assets/game-covers/game-patterns.webp", strap: "Pattern Pop", className: "cover-patterns" },
  scramble: { image: "assets/game-covers/game-scramble.webp", strap: "Word Mixer", className: "cover-scramble" },
  wordsearch: { image: "assets/game-covers/game-wordsearch.webp", strap: "Hidden Hunt", className: "cover-wordsearch" },
  reaction: { image: "assets/game-covers/game-reaction.webp", strap: "Rocket Reflex", className: "cover-reaction" },
  colormatch: { image: "assets/game-covers/game-colormatch.webp", strap: "Color Clash", className: "cover-colormatch" },
  oddone: { image: "assets/game-covers/game-oddone.webp", strap: "Spot It", className: "cover-oddone" },
  sequence: { image: "assets/game-covers/game-sequence.webp", strap: "Next Number", className: "cover-sequence" },
  typing: { image: "assets/game-covers/game-typing.webp", strap: "Key Quest", className: "cover-typing" },
  whack: { image: "assets/game-covers/game-whack.webp", strap: "Star Smash", className: "cover-whack" }
};

function enhanceGameCovers() {
  tabs.querySelectorAll("[data-game]").forEach(button => {
    const game = button.dataset.game;
    const cover = gameCovers[game];
    if (!cover || button.querySelector(".game-cover-art")) return;
    const title = button.textContent.trim();
    const glyph = cover.image ? "" : title.split(/\s+/).map(word => word[0]).join("").slice(0, 3).toUpperCase();
    button.classList.add("game-cover-card", cover.className);
    if (cover.image) button.style.setProperty("--cover-image", `url("${cover.image}")`);
    button.innerHTML = `
      <span class="game-cover-art" aria-hidden="true">${glyph ? `<b>${glyph}</b>` : ""}<em>${cover.strap}</em></span>
      <span class="game-cover-copy"><strong>${title}</strong><small>${gameInfo[game][0]}</small></span>`;
  });
}

enhanceGameCovers();

function loadGameSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(gameSessionKey) || "null");
    return saved && gameInfo[saved.game] ? saved : null;
  } catch {
    return null;
  }
}

function currentSettings() {
  return Object.fromEntries(
    [...controls.querySelectorAll("select")].map(select => [select.id, select.value])
  );
}

function currentEntries() {
  return Object.fromEntries(
    [...board.querySelectorAll("input")].map((input, index) => [
      input.id || input.getAttribute("aria-label") || `input-${index}`,
      input.value
    ])
  );
}

function saveGameSession(changes = {}) {
  const previous = loadGameSession() || {};
  const session = {
    ...previous,
    game: activeGame,
    settings: currentSettings(),
    score,
    savedAt: Date.now(),
    ...changes
  };
  localStorage.setItem(gameSessionKey, JSON.stringify(session));
  resumeSession = session;
  return session;
}

function applySavedSettings(settings = {}) {
  restoringSettings = true;
  Object.entries(settings).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (!field || ![...field.options].some(option => option.value === String(value))) return;
    field.value = value;
    field.dispatchEvent(new Event("change", { bubbles: true }));
  });
  restoringSettings = false;
}

function restoreSavedEntries(entries = {}) {
  [...board.querySelectorAll("input")].forEach((input, index) => {
    if (input.readOnly) return;
    const id = input.id || input.getAttribute("aria-label") || `input-${index}`;
    if (Object.hasOwn(entries, id)) input.value = entries[id];
  });
}

function startActiveGame() {
  if (activeGame === "sudoku") startSudoku();
  else if (activeGame === "crossword") startCrossword();
  else if (activeGame === "blanks") startBlanks();
  else if (["math", "science", "geography"].includes(activeGame)) startAcademic(activeGame);
  else if (activeGame === "flags") startFlags();
  else if (activeGame === "countries") startCountryDetective();
  else if (activeGame === "spelling") startSpellingBee();
  else if (activeGame === "memory") startMemoryMatch();
  else if (arcadeGames.includes(activeGame)) startArcadeGame(activeGame);
  else startSportsGame(activeGame);
}

function seeded(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function shuffle(items, seed = Date.now()) {
  const result = [...items];
  const random = seeded(seed);
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

function selectMarkup(id, label, options) {
  return `<label>${label}<select id="${id}">${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join("")}</select></label>`;
}

function setStatus(message, kind = "") {
  statusBox.className = `game-status ${kind}`.trim();
  statusBox.textContent = message;
}

function showAnswerFeedback(selectedButton, answer, right) {
  const answerButtons = [...board.querySelectorAll(".answer-grid button")];
  answerButtons.forEach(button => {
    button.disabled = true;
    const isAnswer = button.dataset.answer.toLowerCase() === String(answer).toLowerCase();
    button.classList.toggle("correct-answer", isAnswer);
    button.classList.toggle("wrong-answer", button === selectedButton && !right);
  });
  const card = selectedButton.closest(".question-card");
  if (!card) return;
  card.querySelector(".answer-feedback")?.remove();
  card.insertAdjacentHTML(
    "beforeend",
    `<div class="answer-feedback ${right ? "is-correct" : "is-wrong"}">
      <strong>${right ? "Correct!" : "Not quite."}</strong>
      <span>${right ? "Excellent work. You chose the right answer." : `The correct answer is ${answer}.`}</span>
    </div>`
  );
}

function rememberQuestions(context, questions) {
  let history = {};
  try {
    history = JSON.parse(localStorage.getItem(questionHistoryKey) || "{}");
  } catch {
    history = {};
  }
  const recent = Array.isArray(history[context]) ? history[context] : [];
  history[context] = [...recent, ...questions.map(question => question.signature || question[0])].slice(-1200);
  localStorage.setItem(questionHistoryKey, JSON.stringify(history));
}

function makeQuestionsUnique(questions, context) {
  let history = {};
  try {
    history = JSON.parse(localStorage.getItem(questionHistoryKey) || "{}");
  } catch {
    history = {};
  }
  const recent = new Set(history[context] || []);
  const used = new Set();
  const unique = [];
  questions.forEach(question => {
    const signature = question.signature || question[0];
    if (used.has(signature) || recent.has(signature)) return;
    const copy = [...question];
    copy.signature = signature;
    used.add(signature);
    unique.push(copy);
  });
  if (!unique.length) {
    delete history[context];
    localStorage.setItem(questionHistoryKey, JSON.stringify(history));
    return makeQuestionsUnique(questions, context);
  }
  rememberQuestions(context, unique);
  return unique;
}


function freshSeed(label = "round") {
  const cryptoValue = window.crypto?.getRandomValues ? window.crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * 1e9);
  return (Date.now() + cryptoValue + String(label).split("").reduce((total, char) => total + char.charCodeAt(0), 0)) >>> 0;
}

function freshRoundQuestions(candidates, context, count = 10) {
  let history = {};
  try {
    history = JSON.parse(localStorage.getItem(questionHistoryKey) || "{}");
  } catch {
    history = {};
  }
  const recent = new Set(history[context] || []);
  const used = new Set();
  let selected = [];
  for (const question of candidates) {
    const signature = question.signature || `${context}:${question[0]}:${question[1] || ""}`;
    if (used.has(signature) || recent.has(signature)) continue;
    const copy = [...question];
    copy.signature = signature;
    used.add(signature);
    selected.push(copy);
    if (selected.length >= count) break;
  }
  if (!selected.length && (history[context] || []).length) {
    delete history[context];
    localStorage.setItem(questionHistoryKey, JSON.stringify(history));
    return freshRoundQuestions(candidates, context, count);
  }
  rememberQuestions(context, selected);
  return selected;
}

function updateTopicTheme() {
  const topic = document.getElementById("mathTopic")?.value ||
    document.getElementById("gameGrade")?.value ||
    document.getElementById("gameLevel")?.value ||
    document.getElementById("flagDifficulty")?.value ||
    document.getElementById("countryDifficulty")?.value ||
    document.getElementById("spellingLevel")?.value ||
    document.getElementById("sportTopic")?.value ||
    activeGame;
  document.body.dataset.gameTopic = topic;
}

function addScore(points) {
  score += points;
  scoreBox.textContent = score;
  const scores = JSON.parse(localStorage.getItem(gameScoresKey) || "{}");
  scores[activeGame] = score;
  localStorage.setItem(gameScoresKey, JSON.stringify(scores));
  saveGameSession();
}

function progressId(extra = "") {
  const level = document.getElementById("gameLevel")?.value ||
    document.getElementById("gameGrade")?.value ||
    document.getElementById("flagDifficulty")?.value ||
    document.getElementById("countryDifficulty")?.value ||
    document.getElementById("spellingLevel")?.value || "default";
  const topic = document.getElementById("mathTopic")?.value || "";
  const sportTopic = document.getElementById("sportTopic")?.value || "";
  return `${activeGame}:${level}:${topic}:${sportTopic}:${extra}`;
}

function getProgress(extra = "") {
  const progress = JSON.parse(localStorage.getItem(gameProgressKey) || "{}");
  return Number(progress[progressId(extra)] || 0) % 100;
}

function setProgress(value, extra = "") {
  const progress = JSON.parse(localStorage.getItem(gameProgressKey) || "{}");
  progress[progressId(extra)] = value % 100;
  localStorage.setItem(gameProgressKey, JSON.stringify(progress));
  updateProgressDisplay(extra);
}

function advanceProgress(extra = "") {
  setProgress(getProgress(extra) + 1, extra);
}

function updateProgressDisplay(extra = "") {
  const display = document.getElementById("gameProgress");
  if (display) display.textContent = `Game ${getProgress(extra) + 1} of 100`;
}

function currentPoints(multiplier = 1) {
  return Math.round(pointRules[activeGame].base * multiplier);
}

function resetStage() {
  if (roundState?.cleanup) roundState.cleanup();
  board.innerHTML = "";
  actions.innerHTML = "";
  setStatus("Choose your settings, then start playing.");
  roundState = null;
}

function renderControls() {
  if (["sudoku", "crossword", "blanks", "memory", ...arcadeGames].includes(activeGame)) {
    controls.innerHTML = selectMarkup("gameLevel", "Difficulty", levelOptions) +
      `<div class="progress-control"><span>Adventure progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("gameLevel").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  } else if (activeGame === "math") {
    controls.innerHTML = selectMarkup("gameGrade", "Grade", gradeOptions) +
      selectMarkup("mathTopic", "Math topic", mathTopics.preschool.map(topic => [topic.id, topic.label])) +
      `<div class="progress-control"><span>Quiz progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("gameGrade").addEventListener("change", () => {
      updateMathTopics();
      updateTopicTheme();
    });
  } else if (["science", "geography"].includes(activeGame)) {
    controls.innerHTML = selectMarkup("gameGrade", "Grade", gradeOptions) +
      `<div class="progress-control"><span>Quiz progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("gameGrade").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  } else if (activeGame === "flags") {
    controls.innerHTML =
      selectMarkup("flagCount", "Number of flags", [["5", "5 flags"], ["10", "10 flags"], ["20", "20 flags"], ["30", "30 flags"], ["50", "50 flags"]]) +
      selectMarkup("flagDifficulty", "Difficulty", [["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard - all countries"]]) +
      `<div class="progress-control"><span>Flag tour</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("flagDifficulty").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  } else if (activeGame === "countries") {
    controls.innerHTML =
      selectMarkup("countryCount", "Number of countries", [["5", "5 countries"], ["10", "10 countries"], ["15", "15 countries"], ["20", "20 countries"]]) +
      selectMarkup("countryDifficulty", "Difficulty", [["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"]]) +
      `<div class="progress-control"><span>Case progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("countryDifficulty").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  } else if (activeGame === "spelling") {
    controls.innerHTML =
      selectMarkup("spellingLevel", "Difficulty", [["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"], ["advanced", "Advanced"], ["expert", "Expert"]]) +
      selectMarkup("spellingCount", "Words in this bee", [["5", "5 words"], ["10", "10 words"], ["15", "15 words"], ["20", "20 words"]]) +
      `<div class="progress-control"><span>Bee progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("spellingLevel").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  } else {
    controls.innerHTML =
      selectMarkup("gameGrade", "Grade", gradeOptions) +
      selectMarkup("sportTopic", "Question topic", [["math", "Math"], ["english", "English"], ["science", "Science"]]) +
      `<div class="progress-control"><span>Season progress</span><strong id="gameProgress"></strong></div>`;
    document.getElementById("gameGrade").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
    document.getElementById("sportTopic").addEventListener("change", () => {
      updateProgressDisplay();
      updateTopicTheme();
    });
  }
  if (document.getElementById("gameProgress")) updateProgressDisplay();
  controls.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", () => {
      if (!restoringSettings) saveGameSession({ started: false, entries: {}, questionIndex: 0, correct: 0 });
    });
  });
  updateTopicTheme();
}

function selectGame(game, options = {}) {
  const button = tabs.querySelector(`[data-game="${game}"]`);
  if (!button || !gameInfo[game]) return;
  saveGameSession({ entries: currentEntries() });
  activeGame = game;
  tabs.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  [gameEyebrow.textContent, gameName.textContent, gameDescription.textContent] = gameInfo[activeGame];
  document.body.dataset.gameTheme = activeGame;
  const savedScores = JSON.parse(localStorage.getItem(gameScoresKey) || "{}");
  score = Number(savedScores[activeGame] || 0);
  scoreBox.textContent = score;
  document.querySelector("#gameScore span").textContent = pointRules[activeGame].label;
  renderControls();
  resetStage();
  saveGameSession({ started: false, entries: {}, questionIndex: 0, correct: 0 });
  document.body.classList.add("game-open");
  if (options.updateHistory !== false) {
    const url = new URL(window.location.href);
    url.searchParams.set("game", activeGame);
    history.pushState({ game: activeGame }, "", url);
  }
  if (options.scroll !== false) window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGameLibrary(options = {}) {
  saveGameSession({ entries: currentEntries() });
  document.body.classList.remove("game-open");
  tabs.querySelectorAll("button").forEach(item => item.classList.remove("active"));
  if (options.updateHistory !== false) {
    const url = new URL(window.location.href);
    url.searchParams.delete("game");
    history.pushState({}, "", url);
  }
  if (options.scroll !== false) window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-game]");
  if (!button) return;
  selectGame(button.dataset.game);
});

backToGames.addEventListener("click", () => showGameLibrary());

window.addEventListener("popstate", () => {
  const requestedGame = new URLSearchParams(window.location.search).get("game");
  if (requestedGame && gameInfo[requestedGame]) selectGame(requestedGame, { updateHistory: false });
  else showGameLibrary({ updateHistory: false });
});

function sudokuSpec(level) {
  if (level <= 2) return { size: 4, boxRows: 2, boxCols: 2, holes: level === 1 ? 6 : 9 };
  if (level === 3) return { size: 6, boxRows: 2, boxCols: 3, holes: 20 };
  return { size: 9, boxRows: 3, boxCols: 3, holes: level === 4 ? 42 : 54 };
}

function createSudoku(level, gameIndex) {
  const spec = sudokuSpec(level);
  const base = Array.from({ length: spec.size }, (_, row) =>
    Array.from({ length: spec.size }, (_, column) =>
      ((row * spec.boxCols + Math.floor(row / spec.boxRows) + column) % spec.size) + 1
    )
  );
  const symbols = shuffle(Array.from({ length: spec.size }, (_, index) => index + 1), 4100 + level * 100 + gameIndex);
  const solution = base.map(row => row.map(value => symbols[value - 1]));
  const cells = shuffle(Array.from({ length: spec.size ** 2 }, (_, index) => index), 9200 + level * 100 + gameIndex);
  const hidden = new Set(cells.slice(0, spec.holes));
  return { ...spec, solution, hidden };
}

function startSudoku() {
  const level = Number(document.getElementById("gameLevel").value);
  const gameIndex = getProgress();
  const puzzle = createSudoku(level, gameIndex);
  roundState = puzzle;
  const grid = document.createElement("div");
  grid.className = "sudoku-grid";
  grid.style.setProperty("--sudoku-size", puzzle.size);
  grid.style.setProperty("--box-cols", puzzle.boxCols);
  puzzle.solution.flat().forEach((value, index) => {
    const row = Math.floor(index / puzzle.size);
    const column = index % puzzle.size;
    const input = document.createElement("input");
    input.className = "sudoku-cell";
    input.inputMode = "numeric";
    input.maxLength = 1;
    input.dataset.answer = value;
    if (!puzzle.hidden.has(index)) {
      input.value = value;
      input.readOnly = true;
      input.classList.add("given");
    }
    if ((column + 1) % puzzle.boxCols === 0 && column < puzzle.size - 1) input.classList.add("box-right");
    if ((row + 1) % puzzle.boxRows === 0 && row < puzzle.size - 1) input.classList.add("box-bottom");
    grid.appendChild(input);
  });
  board.replaceChildren(grid);
  const saved = resumeSession?.game === activeGame && resumeSession.started ? resumeSession : null;
  if (saved?.entries) restoreSavedEntries(saved.entries);
  saveGameSession({ started: true, entries: currentEntries(), questionIndex: 0, correct: 0 });
  actions.innerHTML = `<button class="btn secondary" id="checkSudoku" type="button">Check puzzle</button><button class="btn primary" id="nextSudoku" type="button">Next puzzle</button>`;
  document.getElementById("checkSudoku").addEventListener("click", () => {
    const editable = [...grid.querySelectorAll("input:not(.given)")];
    let correct = 0;
    editable.forEach(input => {
      const right = input.value === input.dataset.answer;
      input.classList.toggle("correct", right);
      input.classList.toggle("wrong", input.value && !right);
      if (right) correct += 1;
    });
    if (correct === editable.length) {
      setStatus("Perfect puzzle! Every number is in the right place.", "success");
      addScore(currentPoints(1 + level * 0.35));
      setTimeout(() => {
        advanceProgress();
        startSudoku();
      }, 1100);
    } else {
      setStatus(`${correct} of ${editable.length} open squares are correct. Keep going!`, "try");
    }
  });
  document.getElementById("nextSudoku").addEventListener("click", () => {
    advanceProgress();
    startSudoku();
  });
  setStatus(`Level ${level}, Game ${gameIndex + 1} of 100. Fill ${puzzle.holes} open squares.`);
}

const crosswordWords = [
  ["CAT", "A small pet that purrs"], ["SUN", "The star we see in daytime"], ["TREE", "A tall plant with a trunk"], ["BOOK", "You read its pages"], ["FROG", "An animal that hops"],
  ["MOON", "It shines in the night sky"], ["BREAD", "Food baked in a loaf"], ["TRAIN", "It travels on tracks"], ["SMILE", "A happy look"], ["CHAIR", "A seat for one person"],
  ["RIVER", "Flowing water"], ["CLOUD", "A white or gray shape in the sky"], ["PLANT", "A living thing with roots"], ["CLOCK", "It tells the time"], ["SHELL", "A hard covering found at the beach"],
  ["PLANET", "A world that travels around a star"], ["GARDEN", "A place where flowers grow"], ["BRIDGE", "It carries a path over water"], ["MARKET", "A place where things are sold"], ["ROCKET", "A vehicle that can travel to space"],
  ["HABITAT", "The natural home of a living thing"], ["COMPASS", "A tool that shows direction"], ["WEATHER", "Rain, wind, sun, and snow"], ["VOLCANO", "A mountain that can erupt"], ["LIBRARY", "A place filled with books"],
  ["ENERGY", "The ability to make things move or change"], ["FRACTION", "A part of a whole number"], ["MIGRATE", "To travel seasonally from one place to another"], ["EQUATOR", "An imaginary line around Earth's middle"], ["CRYSTAL", "A solid with an ordered shape"],
  ["ECOSYSTEM", "Living things and their environment"], ["DEMOCRACY", "Government in which people choose leaders"], ["TELESCOPE", "A tool for viewing distant objects"], ["PENINSULA", "Land surrounded by water on three sides"], ["POLLINATE", "To carry pollen so plants can make seeds"],
  ["ATMOSPHERE", "The layer of gases around a planet"], ["LONGITUDE", "Map lines running north and south"], ["ADAPTATION", "A trait that helps an organism survive"], ["NUMERATOR", "The top number in a fraction"], ["CONSTELLATION", "A named pattern of stars"],
  ["EVAPORATION", "Liquid changing into gas"], ["ARCHIPELAGO", "A group of islands"], ["PHOTOSYNTHESIS", "How plants use light to make food"], ["MULTIPLICATION", "Repeated addition"], ["RESPONSIBILITY", "Taking care of what you are trusted to do"],
  ["BIODIVERSITY", "The variety of living things"], ["CIRCUMFERENCE", "Distance around a circle"], ["HEMISPHERE", "Half of Earth"], ["INVESTIGATION", "A careful search for facts"], ["COMMUNICATION", "Sharing information with others"]
];

function startCrossword() {
  const level = Number(document.getElementById("gameLevel").value);
  const gameIndex = getProgress();
  const levelPool = crosswordWords.slice((level - 1) * 10, level * 10);
  const selected = shuffle(levelPool, 6400 + level * 100 + gameIndex).slice(0, 5);
  roundState = { selected };
  board.innerHTML = `<div class="crossword-list">${selected.map(([answer, clue], index) => `
    <label class="crossword-row"><span><strong>${index + 1}</strong>${clue}</span>
      <input data-answer="${answer}" maxlength="${answer.length}" autocomplete="off" aria-label="Answer ${index + 1}">
      <small>${answer.length} letters</small>
    </label>`).join("")}</div>`;
  actions.innerHTML = `<button class="btn secondary" id="checkWords" type="button">Check answers</button><button class="btn primary" id="nextWords" type="button">Next crossword</button>`;
  const saved = resumeSession?.game === activeGame && resumeSession.started ? resumeSession : null;
  if (saved?.entries) restoreSavedEntries(saved.entries);
  saveGameSession({ started: true, entries: currentEntries(), questionIndex: 0, correct: 0 });
  document.getElementById("checkWords").addEventListener("click", () => {
    const inputs = [...board.querySelectorAll("input")];
    let correct = 0;
    inputs.forEach(input => {
      const right = input.value.trim().toUpperCase() === input.dataset.answer;
      input.classList.toggle("correct", right);
      input.classList.toggle("wrong", input.value && !right);
      if (right) correct += 1;
    });
    setStatus(correct === inputs.length ? "All five words fit. Crossword complete!" : `${correct} of ${inputs.length} clues are correct.`, correct === inputs.length ? "success" : "try");
    if (correct === inputs.length) {
      addScore(currentPoints(1 + level * 0.25));
      setTimeout(() => {
        advanceProgress();
        startCrossword();
      }, 1100);
    }
  });
  document.getElementById("nextWords").addEventListener("click", () => {
    advanceProgress();
    startCrossword();
  });
  setStatus(`Level ${level}, Crossword ${gameIndex + 1} of 100. Solve all five clues.`);
}

const blankQuestions = [
  ["The ___ is hot and bright.", "sun", ["sun", "sock", "cup"]], ["A fish swims in ___.", "water", ["water", "sand", "grass"]], ["We read a ___.", "book", ["book", "shoe", "fork"]], ["Birds can ___.", "fly", ["fly", "bake", "paint"]], ["A puppy is a young ___.", "dog", ["dog", "tree", "boat"]],
  ["The moon appears at ___.", "night", ["night", "lunch", "winter"]], ["Plants need light and ___.", "water", ["water", "metal", "plastic"]], ["We wear boots when it ___.", "rains", ["rains", "sings", "reads"]], ["A triangle has three ___.", "sides", ["sides", "wheels", "pages"]], ["Bees make ___.", "honey", ["honey", "paper", "snow"]],
  ["The past tense of jump is ___.", "jumped", ["jumped", "jumping", "jumps"]], ["A sentence begins with a capital ___.", "letter", ["letter", "number", "color"]], ["An animal's home is its ___.", "habitat", ["habitat", "fraction", "planet"]], ["Water freezes into ___.", "ice", ["ice", "steam", "soil"]], ["A map key explains its ___.", "symbols", ["symbols", "stories", "sounds"]],
  ["The opposite of ancient is ___.", "modern", ["modern", "narrow", "silent"]], ["A verb describes an action or state of ___.", "being", ["being", "color", "size"]], ["The process of plants making food is ___.", "photosynthesis", ["photosynthesis", "migration", "erosion"]], ["A fraction with equal top and bottom values equals ___.", "one", ["one", "zero", "ten"]], ["Earth rotates on its ___.", "axis", ["axis", "ocean", "equator"]],
  ["A detailed comparison using like or as is a ___.", "simile", ["simile", "suffix", "chapter"]], ["The main argument in writing is a ___.", "thesis", ["thesis", "caption", "setting"]], ["Matter changing directly from solid to gas is ___.", "sublimation", ["sublimation", "condensation", "freezing"]], ["Lines of longitude meet at the ___.", "poles", ["poles", "equator", "tropics"]], ["A number divisible only by one and itself is ___.", "prime", ["prime", "decimal", "negative"]]
];

function startBlanks() {
  const level = Number(document.getElementById("gameLevel").value);
  const gameIndex = getProgress();
  const poolStart = (level - 1) * 5;
  const context = `blanks:level-${level}`;
  const candidates = Array.from({ length: 8 }, (_, variation) =>
    shuffle(blankQuestions.slice(poolStart, poolStart + 5), freshSeed(`${context}:${gameIndex}:${variation}`))
      .map((question, index) => {
        const copy = [...question];
        copy.signature = `${context}:${question[0]}:${question[1]}:v${variation}:slot${index}`;
        return copy;
      })
  ).flat();
  const selected = freshRoundQuestions(candidates, context, 5);
  const saved = resumeSession?.game === activeGame && resumeSession.started ? resumeSession : null;
  let current = Math.min(selected.length - 1, Number(saved?.questionIndex || 0));
  let correct = Number(saved?.correct || 0);
  function showQuestion() {
    const [sentence, answer, choices] = selected[current];
    board.innerHTML = `<div class="question-card"><span class="question-count">${current + 1} / ${selected.length}</span><h3>${sentence}</h3><div class="answer-grid">${shuffle(choices, level * 100 + gameIndex * 10 + current).map(choice => `<button type="button" data-answer="${choice}">${choice}</button>`).join("")}</div></div>`;
    board.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
      const right = button.dataset.answer === answer;
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + level * 0.15));
      }
      showAnswerFeedback(button, answer, right);
      setStatus(right ? "Correct!" : `Not quite. The answer is ${answer}.`, right ? "success" : "try");
      setTimeout(() => {
        current += 1;
        saveGameSession({ started: current < selected.length, questionIndex: current, correct, entries: {} });
        if (current < selected.length) showQuestion();
        else {
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${selected.length}</strong><h3>Blank challenge complete!</h3></div>`;
          setStatus("Choose another game or play this one again.", "success");
          setTimeout(() => {
            advanceProgress();
            startBlanks();
          }, 1200);
        }
      }, 700);
    }));
  }
  actions.innerHTML = `<button class="btn primary" id="nextBlankGame" type="button">Next game</button>`;
  document.getElementById("nextBlankGame").addEventListener("click", () => {
    advanceProgress();
    startBlanks();
  });
  saveGameSession({ started: true, questionIndex: current, correct, entries: {} });
  showQuestion();
}

const scienceByGrade = (() => {
  const banks = {
    preschool: {
      topics: ["animals", "weather", "plants", "senses", "day and night", "nature colors"],
      questions: [
        ["Which one is a living thing?", "flower", ["flower", "rock", "shoe"]],
        ["What shines in the daytime sky?", "sun", ["sun", "blanket", "spoon"]],
        ["Which animal has feathers?", "bird", ["bird", "fish", "frog"]],
        ["What do we use to smell a flower?", "nose", ["nose", "knee", "elbow"]],
        ["What falls from clouds when it rains?", "water", ["water", "sand", "paper"]],
        ["Which one grows in soil?", "plant", ["plant", "chair", "ball"]],
        ["Which animal says moo?", "cow", ["cow", "duck", "cat"]],
        ["What do we use to see colors?", "eyes", ["eyes", "feet", "ears"]],
        ["Which is usually green in nature?", "leaf", ["leaf", "snow", "moon"]],
        ["What comes out at night and looks bright?", "stars", ["stars", "bananas", "crayons"]],
        ["Which one can swim?", "fish", ["fish", "pencil", "sock"]],
        ["What keeps a bird warm and helps it fly?", "feathers", ["feathers", "wheels", "buttons"]]
      ]
    },
    kindergarten: {
      topics: ["living things", "seasons", "habitats", "body parts", "weather", "plants"],
      questions: [
        ["What do plant roots take in from soil?", "water", ["water", "music", "cookies"]],
        ["Which season is often the coldest?", "winter", ["winter", "summer", "spring"]],
        ["What sense uses your ears?", "hearing", ["hearing", "taste", "touch"]],
        ["Which animal habitat has lots of water?", "pond", ["pond", "desert", "sidewalk"]],
        ["Which is non-living?", "rock", ["rock", "tree", "dog"]],
        ["What do lungs help us do?", "breathe", ["breathe", "read", "glow"]],
        ["What does a seed need to start growing?", "water", ["water", "paint", "plastic"]],
        ["Which weather can make puddles?", "rain", ["rain", "sunshine", "fog only"]],
        ["Where would a fish most likely live?", "water", ["water", "tree branch", "cloud"]],
        ["What body part helps pump blood?", "heart", ["heart", "hair", "finger"]],
        ["Which one is a baby plant?", "seedling", ["seedling", "pebble", "coin"]],
        ["What do animals need to live?", "food and water", ["food and water", "toys only", "paint"]]
      ]
    },
    grade1: {
      topics: ["life cycles", "plant growth", "weather", "simple machines", "matter", "body systems"],
      questions: [
        ["What state of matter is ice?", "solid", ["solid", "liquid", "gas"]],
        ["What do caterpillars usually become?", "butterflies", ["butterflies", "fish", "rocks"]],
        ["Which body part pumps blood?", "heart", ["heart", "lung", "bone"]],
        ["What tool tells temperature?", "thermometer", ["thermometer", "ruler", "clock"]],
        ["Which simple machine is a ramp?", "inclined plane", ["inclined plane", "pulley", "wheel"]],
        ["Which material is transparent?", "clear glass", ["clear glass", "wood", "brick"]],
        ["What do plants use sunlight to make?", "food", ["food", "rocks", "plastic"]],
        ["What happens to water when it freezes?", "it becomes ice", ["it becomes ice", "it becomes fire", "it disappears forever"]],
        ["Which animal begins life as a tadpole?", "frog", ["frog", "bird", "horse"]],
        ["What do clouds often bring?", "rain", ["rain", "sandwiches", "books"]],
        ["Which force can slow a sliding object?", "friction", ["friction", "sunlight", "sound"]],
        ["What are the three common states of matter?", "solid, liquid, gas", ["solid, liquid, gas", "red, blue, green", "north, south, east"]]
      ]
    },
    grade2: {
      topics: ["ecosystems", "food chains", "water cycle", "earth materials", "energy", "adaptations"],
      questions: [
        ["What causes a shadow?", "light being blocked", ["light being blocked", "sound getting loud", "wind stopping"]],
        ["Which planet is our home?", "Earth", ["Earth", "Mars", "Venus"]],
        ["What helps animals blend into their habitat?", "camouflage", ["camouflage", "gravity", "echo"]],
        ["What is the first stage of many plant life cycles?", "seed", ["seed", "fruit", "flower"]],
        ["What do we call water changing into vapor?", "evaporation", ["evaporation", "freezing", "melting"]],
        ["Which part of a food chain makes its own food?", "producer", ["producer", "consumer", "decomposer"]],
        ["Which is a natural Earth material?", "soil", ["soil", "plastic bag", "rubber tire"]],
        ["What energy do we get from the Sun?", "light and heat", ["light and heat", "sound only", "gravity only"]],
        ["Which animal is adapted for cold water with thick blubber?", "seal", ["seal", "camel", "parrot"]],
        ["What is precipitation?", "water falling from clouds", ["water falling from clouds", "rocks melting", "plants sleeping"]],
        ["What does a decomposer do?", "breaks down dead material", ["breaks down dead material", "makes sunlight", "pushes planets"]],
        ["Which object uses electrical energy?", "lamp", ["lamp", "rock", "paper cup"]]
      ]
    },
    grade3: {
      topics: ["adaptations", "forces", "solar system", "rocks", "renewable energy", "ecosystems"],
      questions: [
        ["What force pulls objects toward Earth?", "gravity", ["gravity", "friction", "magnetism"]],
        ["Which gas do plants use to help make food?", "carbon dioxide", ["carbon dioxide", "helium", "neon"]],
        ["What is a producer?", "an organism that makes its own food", ["an organism that makes its own food", "a rock layer", "a weather tool"]],
        ["Which planet is closest to the Sun?", "Mercury", ["Mercury", "Earth", "Jupiter"]],
        ["What type of rock forms from cooled lava or magma?", "igneous", ["igneous", "sedimentary", "metamorphic"]],
        ["Which energy source is renewable?", "wind", ["wind", "coal", "oil"]],
        ["What force happens when two surfaces rub?", "friction", ["friction", "evaporation", "condensation"]],
        ["What adaptation helps a cactus save water?", "thick stem", ["thick stem", "wide fins", "soft feathers"]],
        ["What does orbit mean?", "to travel around another object", ["to travel around another object", "to melt quickly", "to make sound"]],
        ["What is the role of a consumer in an ecosystem?", "it eats other organisms", ["it eats other organisms", "it makes sunlight", "it turns into soil only"]],
        ["Which tool can measure force?", "spring scale", ["spring scale", "thermometer", "beaker only"]],
        ["What is the center of our solar system?", "Sun", ["Sun", "Moon", "Earth"]]
      ]
    },
    grade4: {
      topics: ["human body", "electricity", "sound", "light", "climate", "earth changes"],
      questions: [
        ["What carries traits from parents to offspring?", "genes", ["genes", "clouds", "minerals"]],
        ["What is erosion?", "movement of weathered material", ["movement of weathered material", "making light", "freezing gas"]],
        ["Which circuit lets electricity flow?", "closed circuit", ["closed circuit", "open circuit", "broken circuit"]],
        ["What organ helps us breathe?", "lungs", ["lungs", "stomach", "skull"]],
        ["What type of energy travels as vibrations through matter?", "sound", ["sound", "gravity", "mass"]],
        ["What happens when light bounces off a surface?", "reflection", ["reflection", "evaporation", "digestion"]],
        ["What is climate?", "usual weather over a long time", ["usual weather over a long time", "today's lunch", "one minute of wind"]],
        ["Which material is a good electrical conductor?", "copper", ["copper", "rubber", "plastic"]],
        ["What system moves blood through the body?", "circulatory system", ["circulatory system", "solar system", "water cycle"]],
        ["What causes sound to be higher or lower?", "pitch", ["pitch", "shadow", "density"]],
        ["What is refraction?", "light bending as it passes through materials", ["light bending as it passes through materials", "soil moving downhill", "water freezing"]],
        ["What breaks rocks into smaller pieces?", "weathering", ["weathering", "photosynthesis", "magnetism"]]
      ]
    },
    grade5: {
      topics: ["cells", "space", "gravity", "chemical changes", "environment", "matter"],
      questions: [
        ["What organelle controls many cell activities?", "nucleus", ["nucleus", "membrane", "vacuole"]],
        ["What is condensation?", "gas changing to liquid", ["gas changing to liquid", "solid changing to gas", "liquid freezing"]],
        ["What causes day and night?", "Earth's rotation", ["Earth's rotation", "the Moon's orbit", "clouds"]],
        ["What force keeps planets in orbit around the Sun?", "gravity", ["gravity", "friction", "static electricity"]],
        ["Which sign can show a chemical change?", "new substance forms", ["new substance forms", "paper is cut", "ice melts"]],
        ["What does an ecosystem include?", "living and nonliving parts", ["living and nonliving parts", "only animals", "only weather"]],
        ["What part of a cell controls what enters and leaves?", "cell membrane", ["cell membrane", "nucleus", "chlorophyll"]],
        ["What is the path Earth takes around the Sun?", "orbit", ["orbit", "axis", "crater"]],
        ["What is a solution?", "a mixture that is evenly mixed", ["a mixture that is evenly mixed", "a broken solid", "a type of planet"]],
        ["Which human activity can reduce landfill waste?", "recycling", ["recycling", "littering", "wasting food"]],
        ["What happens during deposition in the water cycle?", "water vapor turns directly to ice", ["water vapor turns directly to ice", "ice becomes liquid", "water runs downhill"]],
        ["Which structure do plant cells have that animal cells do not?", "cell wall", ["cell wall", "nucleus", "cytoplasm"]]
      ]
    },
    grade6: {
      topics: ["genetics", "plate tectonics", "ecosystems", "scientific method", "physics", "Earth systems"],
      questions: [
        ["What is an independent variable?", "the factor changed in an experiment", ["the factor changed in an experiment", "the measured result", "a constant"]],
        ["What is density?", "mass per unit volume", ["mass per unit volume", "speed over time", "heat transfer"]],
        ["Which process makes new ocean crust?", "seafloor spreading", ["seafloor spreading", "evaporation", "pollination"]],
        ["What is a hypothesis?", "a testable explanation or prediction", ["a testable explanation or prediction", "a final law", "a random guess with no test"]],
        ["What carries genetic information in cells?", "DNA", ["DNA", "water", "oxygen"]],
        ["What boundary can cause earthquakes when plates slide past each other?", "transform boundary", ["transform boundary", "food chain", "weather front"]],
        ["What happens to energy in a food web?", "it flows from one organism to another", ["it flows from one organism to another", "it disappears completely", "it only moves through rocks"]],
        ["What is acceleration?", "change in velocity over time", ["change in velocity over time", "mass divided by volume", "heat moving through air"]],
        ["What variable is measured in an experiment?", "dependent variable", ["dependent variable", "independent variable", "control group only"]],
        ["What is a genotype?", "an organism's genetic makeup", ["an organism's genetic makeup", "its habitat", "a type of rock"]],
        ["What causes convection currents in Earth's mantle?", "heat moving material", ["heat moving material", "sunlight hitting water", "sound waves"]],
        ["What is Newton's first law about?", "objects resist changes in motion", ["objects resist changes in motion", "plants making food", "water changing state"]]
      ]
    }
  };

  function withTopicVariety(item, grade, index, topic) {
    const [question, answer, choices] = item;
    return [
      question,
      answer,
      choices,
      `<div class="science-tag">${topic} • ${gradeOptions.find(([id]) => id === grade)?.[1] || grade}</div>`
    ];
  }

  const output = {};
  Object.entries(banks).forEach(([grade, bank]) => {
    const expanded = [];
    bank.questions.forEach((item, index) => {
      const topic = bank.topics[index % bank.topics.length];
      expanded.push(withTopicVariety(item, grade, index, topic));
      expanded.push(withTopicVariety([`Science vocabulary: which answer best matches this idea? ${item[0]}`, item[1], item[2]], grade, index + 100, topic));
      expanded.push(withTopicVariety([`Choose the best science answer for ${topic}: ${item[0]}`, item[1], item[2]], grade, index + 200, topic));
    });
    output[grade] = expanded;
  });
  return output;
})();

const geographyByGrade = {
  preschool: [["Where do fish live?", "water", ["water", "desert", "road"]], ["Which is land?", "island", ["island", "ocean", "river"]], ["A globe shows ___.", "Earth", ["Earth", "a room", "a book"]]],
  kindergarten: [["What is a very large body of salt water?", "ocean", ["ocean", "hill", "street"]], ["Which direction is opposite north?", "south", ["south", "east", "up"]], ["A map helps us find ___.", "places", ["places", "sounds", "flavors"]]],
  grade1: [["How many continents are there?", "7", ["7", "5", "10"]], ["Which is the largest ocean?", "Pacific", ["Pacific", "Arctic", "Indian"]], ["What is land surrounded by water?", "island", ["island", "valley", "plateau"]]],
  grade2: [["Which continent contains Egypt?", "Africa", ["Africa", "Europe", "Asia"]], ["What is a map symbol guide called?", "legend", ["legend", "chapter", "scale"]], ["What direction is sunrise?", "east", ["east", "west", "north"]]],
  grade3: [["Which line divides north and south?", "Equator", ["Equator", "Prime Meridian", "Tropic"]], ["What is a peninsula?", "land with water on three sides", ["land with water on three sides", "a group of islands", "a deep valley"]], ["Which continent is Brazil in?", "South America", ["South America", "North America", "Europe"]]],
  grade4: [["What measures map distance?", "scale", ["scale", "legend", "compass rose"]], ["Which imaginary line is 0 degrees longitude?", "Prime Meridian", ["Prime Meridian", "Equator", "Arctic Circle"]], ["What is an archipelago?", "a group of islands", ["a group of islands", "a high plain", "a river mouth"]]],
  grade5: [["What is population density?", "people per unit area", ["people per unit area", "births each year", "city height"]], ["Which process makes cities grow?", "urbanization", ["urbanization", "erosion", "rotation"]], ["What is a watershed?", "land draining to one water body", ["land draining to one water body", "a desert spring", "an ocean current"]]],
  grade6: [["What does GDP measure?", "value of goods and services", ["value of goods and services", "mountain height", "rainfall only"]], ["What is cultural diffusion?", "spread of cultural ideas", ["spread of cultural ideas", "movement of tectonic plates", "loss of soil"]], ["Why are ports often major cities?", "trade and transportation", ["trade and transportation", "higher gravity", "fewer people"]]]
};

const englishByGrade = {
  preschool: [["Which word starts with B?", "ball", ["ball", "cat", "sun"]], ["Which two words rhyme?", "cat and hat", ["cat and hat", "dog and sun", "bee and book"]], ["Which is a letter?", "A", ["A", "3", "?"]]],
  kindergarten: [["Which word names a person?", "teacher", ["teacher", "jump", "blue"]], ["Complete the rhyme: log, frog, ___.", "dog", ["dog", "sun", "fish"]], ["Which sentence ends with a question mark?", "Where is it?", ["Where is it?", "I found it.", "Look out!"]]],
  grade1: [["Which word is a noun?", "garden", ["garden", "quickly", "green"]], ["What is the opposite of tall?", "short", ["short", "wide", "fast"]], ["Choose the correct plural of cat.", "cats", ["cats", "cates", "cat's"]]],
  grade2: [["Which word is a verb?", "explore", ["explore", "mountain", "purple"]], ["Choose the sentence with correct capitalization.", "Maya went home.", ["Maya went home.", "maya went home.", "Maya Went Home."]], ["What does enormous mean?", "very large", ["very large", "very quiet", "very quick"]]],
  grade3: [["Which word is an adjective?", "sparkling", ["sparkling", "carefully", "adventure"]], ["Which prefix means again?", "re-", ["re-", "un-", "pre-"]], ["What is the main idea?", "what a text is mostly about", ["what a text is mostly about", "the final word", "the longest sentence"]]],
  grade4: [["Which sentence uses a simile?", "The moon was like a silver coin.", ["The moon was like a silver coin.", "The moon shone.", "The silver moon rose."]], ["What is a synonym for courageous?", "brave", ["brave", "sleepy", "tiny"]], ["Which word has a suffix?", "helpful", ["helpful", "help", "held"]]],
  grade5: [["What does infer mean?", "use clues to form an idea", ["use clues to form an idea", "copy every word", "read only the title"]], ["Which is a metaphor?", "The classroom was a zoo.", ["The classroom was a zoo.", "The classroom was like a zoo.", "The classroom was noisy."]], ["Which transition shows contrast?", "however", ["however", "therefore", "first"]]],
  grade6: [["What is an author's claim?", "the position the author argues", ["the position the author argues", "the story setting", "a dictionary definition"]], ["Which sentence uses personification?", "The wind whispered through the trees.", ["The wind whispered through the trees.", "The wind was strong.", "The trees moved in wind."]], ["What is connotation?", "a feeling associated with a word", ["a feeling associated with a word", "a word's spelling", "the number of syllables"]]]
};

function contextualizeQuestions(questions, gameIndex, context) {
  const guides = ["Maya", "Theo", "Nia", "Arlo", "Zuri", "Kai", "Luna", "Milo", "Ivy", "Remy"];
  const places = ["garden", "harbor", "observatory", "workshop", "meadow", "library", "island", "museum", "station", "trail"];
  return questions.map((question, index) => {
    const guide = guides[(gameIndex + index * 3 + context.length) % guides.length];
    const place = places[(gameIndex * 3 + index + gradeOptions.length) % places.length];
    const mission = gameIndex * 10 + index + 1;
    const prompt = `${guide}'s ${place} mission ${mission}: ${question[0]}`;
    const copy = [prompt, ...question.slice(1)];
    copy.signature = `${context}:${mission}:${question[0]}:${question[1]}`;
    return copy;
  });
}

function sportsQuestions(grade, topic, gameIndex) {
  if (topic === "math") {
    const topics = mathTopics[grade];
    const context = `sports:${activeGame}:${grade}:${topic}`;
    const generated = Array.from({ length: 30 }, (_, index) => {
      const chosen = topics[(gameIndex + index) % topics.length];
      return mathQuestion(grade, chosen.id, index, freshSeed(`${context}:${gameIndex}:${index}`));
    });
    return freshRoundQuestions(contextualizeQuestions(generated.map(ensureValidQuestion), gameIndex, context), context, 10);
  }
  const pool = topic === "science" ? scienceByGrade[grade] : englishByGrade[grade];
  const context = `sports:${activeGame}:${grade}:${topic}`;
  const expanded = Array.from({ length: 4 }, (_, extra) => expandQuestionPool(shuffle(pool, freshSeed(`${context}:${gameIndex}:${extra}`)), gameIndex + extra)).flat();
  return freshRoundQuestions(contextualizeQuestions(expanded.map(ensureValidQuestion), gameIndex, context), context, 10);
}

function sportArenaMarkup(sport, shotNumber = 0) {
  if (sport === "basketball") {
    return `<div class="sport-arena basketball-arena" aria-hidden="true">
      <div class="basket-scoreboard">
        <span>SCORE <strong data-basket-score>0</strong></span>
        <b>ROUND ${Math.floor(shotNumber / 5) + 1}</b>
        <em>BALL ${shotNumber % 5 + 1}/5</em>
      </div>
      <div class="basket-city"></div>
      <div class="basket-yard-wall"><i>HAPPY</i><b>HOOPS</b><em>PLAY • LEARN • SCORE</em></div>
      <div class="basket-fence"></div>
      <div class="basket-court">
        <span class="basket-backboard"></span>
        <span class="basket-rim"></span>
        <span class="basket-net"></span>
        <span class="bunny-paws"><i></i><b></b></span>
        <span class="sport-ball basketball-ball" style="--shot:${shotNumber}"></span>
      </div>
      <strong>SWISH!</strong>
    </div>`;
  }
  if (sport === "darts") {
    const dartNumbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    return `<div class="sport-arena darts-arena" aria-hidden="true">
      <aside class="dart-cabinet-score">
        <div class="arcade-title">HAPPY DARTS</div>
        <div class="arcade-player">PLAYER 1</div>
        <div class="arcade-row"><span>ROUND<strong>${Math.floor(shotNumber / 3) + 1}</strong></span><span>DART<strong>${shotNumber % 3 + 1}</strong></span></div>
        <div class="arcade-score"><span>ROUND SCORE</span><strong data-round-score>0</strong></div>
        <div class="arcade-score accent"><span>DART POINTS</span><strong data-dart-points>?</strong></div>
        <div class="arcade-darts">🎯 × 3</div>
      </aside>
      <div class="dart-room">
        <span class="dartboard-rings"></span>
        <span class="dart-number-ring">${dartNumbers.map((number, index) => `<b style="--number-angle:${index * 18}deg">${number}</b>`).join("")}</span>
        <span class="dart-wall-sign">HAPPY<br>DARTS</span>
        <span class="dart-shelf dart-shelf-left">🥤</span>
        <span class="dart-shelf dart-shelf-right">🏆</span>
        <span class="dart-throw-line"></span>
        <span class="sport-dart" style="--shot:${shotNumber}"></span>
      </div>
      <strong>BULLSEYE!</strong>
    </div>`;
  }
  if (sport === "golf") {
    return `<div class="sport-arena golf-arena" aria-hidden="true">
      <div class="golf-scoreboard"><span>MINI GOLF QUEST</span><b>HOLE ${shotNumber + 1}</b><strong data-golf-score>PAR 3</strong></div>
      <span class="golf-cloud cloud-one"></span><span class="golf-cloud cloud-two"></span>
      <span class="golf-hill"></span><span class="golf-water"></span><span class="golf-bunker"></span>
      <span class="golf-flag"><i></i></span><span class="golf-hole"></span>
      <span class="sport-ball golf-ball"></span>
      <strong>HOLE IN ONE!</strong>
    </div>`;
  }
  return `<div class="sport-arena soccer-arena" aria-hidden="true">
    <div class="soccer-scoreboard"><span>PENALTY KICK</span><b>SHOT ${shotNumber + 1}</b><strong data-soccer-score>0</strong></div>
    <div class="soccer-crowd"></div>
    <div class="soccer-ad-board">HAPPY TALES • SHOOT • SCORE • LEARN</div>
    <span class="soccer-goal"></span>
    <span class="goal-keeper"><i></i><b></b></span>
    <span class="soccer-kicker"></span>
    <span class="sport-ball soccer-ball" style="--shot:${shotNumber}"></span>
    <strong>GOAL!</strong>
  </div>`;
}

function movingMeter(marker, speed = 0.075) {
  let frame = 0;
  const started = performance.now();
  const tick = now => {
    const position = (Math.sin((now - started) * speed / 10) + 1) * 50;
    marker.style.left = `${position}%`;
    marker.dataset.position = position.toFixed(2);
    if (marker.isConnected) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    return Number(marker.dataset.position || 50);
  };
}

function shotResult(accuracy) {
  if (accuracy >= 0.86) return { className: "perfect-shot", label: "Perfect!", multiplier: 1.5 };
  if (accuracy >= 0.58) return { className: "good-shot", label: "Nice shot!", multiplier: 1 };
  return { className: "close-shot", label: "So close!", multiplier: 0.5 };
}

function finishSkillShot(arena, sport, accuracy, basePoints, done, fixedPoints = null) {
  const result = shotResult(accuracy);
  const points = fixedPoints ?? Math.max(1, Math.round(basePoints * result.multiplier));
  arena.classList.add("skill-shot", result.className);
  arena.querySelector(":scope > strong").textContent = sport === "darts"
    ? result.className === "perfect-shot" ? "BULLSEYE!" : result.label.toUpperCase()
    : result.className === "perfect-shot" ? "SWISH!" : result.label.toUpperCase();
  addScore(points);
  const dartPoints = arena.querySelector("[data-dart-points]");
  const roundScore = arena.querySelector("[data-round-score]");
  if (dartPoints) dartPoints.textContent = points;
  if (roundScore) roundScore.textContent = points;
  setStatus(`${result.label} +${points} points`, "success");
  setTimeout(done, 1050);
}

function dartRingResult(accuracy) {
  if (accuracy >= 0.93) return { points: 50, label: "Bullseye", className: "perfect-shot" };
  if (accuracy >= 0.78) return { points: 30, label: "Inner ring", className: "good-shot" };
  if (accuracy >= 0.58) return { points: 20, label: "Middle ring", className: "good-shot" };
  if (accuracy >= 0.34) return { points: 10, label: "Outer ring", className: "close-shot" };
  return { points: 5, label: "Board edge", className: "close-shot" };
}

function startDartAim(arena, basePoints, done, questionCorrect) {
  const targetWidth = questionCorrect ? 18 : 8;
  const meterSpeed = questionCorrect ? 0.025 : 0.13;
  const panel = document.createElement("div");
  panel.className = `sport-skill-panel dart-skill-panel ${questionCorrect ? "easy-shot" : "challenge-shot"}`;
  panel.style.setProperty("--target-width", `${targetWidth}%`);
  panel.style.setProperty("--target-left", `${50 - targetWidth / 2}%`);
  panel.innerHTML = `
    <p><strong>Aim the dart</strong><span>${questionCorrect ? "Correct answer: slower arrow and a wider center!" : "Wrong answer: faster arrow and a smaller center."}</span></p>
    <div class="aim-meter dart-aim-meter">
      <span class="aim-zone"></span>
      <span class="aim-marker" aria-hidden="true"></span>
    </div>
    <div class="dart-points-row"><span>5</span><span>10</span><span>20</span><span>30</span><strong>50</strong><span>30</span><span>20</span><span>10</span><span>5</span></div>
    <button class="sport-shot-button" type="button">Throw dart</button>`;
  arena.after(panel);
  const marker = panel.querySelector(".aim-marker");
  const stopMeter = movingMeter(marker, meterSpeed);
  panel.querySelector("button").addEventListener("click", () => {
    const position = stopMeter();
    const accuracy = Math.max(0, 1 - Math.abs(position - 50) / 50);
    const ring = dartRingResult(accuracy);
    panel.querySelector("button").disabled = true;
    panel.classList.add("locked");
    arena.style.setProperty("--dart-target-x", `calc(${50 + (position - 50) * 0.34}% - 4px)`);
    arena.style.setProperty("--dart-target-y", "calc(50% - 35px)");
    arena.dataset.ring = ring.points;
    finishSkillShot(arena, "darts", accuracy, basePoints, done, ring.points);
    arena.querySelector(":scope > strong").textContent = `${ring.label.toUpperCase()} ${ring.points}`;
    setStatus(`${ring.label}! +${ring.points} points`, "success");
  }, { once: true });
}

function startBasketballAim(arena, basePoints, done, questionCorrect) {
  const targetWidth = questionCorrect ? 22 : 9;
  const meterSpeed = questionCorrect ? 0.022 : 0.13;
  const panel = document.createElement("div");
  panel.className = `sport-skill-panel basketball-skill-panel ${questionCorrect ? "easy-shot" : "challenge-shot"}`;
  panel.style.setProperty("--target-width", `${targetWidth}%`);
  panel.style.setProperty("--target-left", `${50 - targetWidth / 2}%`);
  panel.innerHTML = `
    <p><strong>Time the shot</strong><span>${questionCorrect ? "Stop the arrow in the wide green middle!" : "The green middle is smaller and the arrow is faster."}</span></p>
    <div class="basket-timing-wrap">
      <span class="timing-label">MISS</span>
      <div class="aim-meter basket-timing-meter">
        <span class="aim-zone"><b>SWISH</b></span>
        <span class="aim-marker"></span>
      </div>
      <span class="timing-label">MISS</span>
    </div>
    <button class="sport-shot-button" type="button">Shoot</button>`;
  arena.after(panel);
  const button = panel.querySelector("button");
  const marker = panel.querySelector(".aim-marker");
  const stopMeter = movingMeter(marker, meterSpeed);
  button.addEventListener("click", () => {
    const position = stopMeter();
    const distance = Math.abs(position - 50);
    const made = distance <= targetWidth / 2;
    const accuracy = Math.max(0, 1 - distance / 50);
    button.disabled = true;
    panel.classList.add("locked");
    arena.style.setProperty("--basket-height", `${135 + accuracy * 45}px`);
    arena.classList.add("skill-shot", made ? "made-shot" : "missed-shot");
    arena.querySelector(":scope > strong").textContent = made ? "SWISH!" : distance < 25 ? "OFF THE RIM!" : "MISSED!";
    if (made) {
      const points = accuracy >= 0.94 ? Math.round(basePoints * 1.5) : basePoints;
      addScore(points);
      arena.querySelector("[data-basket-score]").textContent = points;
      setStatus(`Swish! +${points} points`, "success");
    } else {
      setStatus("Missed! Stop the arrow inside the green middle next time.", "try");
    }
    setTimeout(done, 1150);
  }, { once: true });
}

function startGolfPutt(arena, basePoints, done, questionCorrect) {
  const targetWidth = questionCorrect ? 20 : 9;
  const meterSpeed = questionCorrect ? 0.02 : 0.125;
  const panel = document.createElement("div");
  panel.className = `sport-skill-panel golf-skill-panel ${questionCorrect ? "easy-shot" : "challenge-shot"}`;
  panel.style.setProperty("--target-width", `${targetWidth}%`);
  panel.style.setProperty("--target-left", `${50 - targetWidth / 2}%`);
  panel.innerHTML = `
    <p><strong>Time your putt</strong><span>${questionCorrect ? "The cup zone is wider and the power arrow is slower!" : "The cup zone is smaller and the power arrow is faster."}</span></p>
    <div class="aim-meter golf-putt-meter"><span class="aim-zone"><b>CUP</b></span><span class="aim-marker"></span></div>
    <button class="sport-shot-button" type="button">Putt</button>`;
  arena.after(panel);
  const button = panel.querySelector("button");
  const stopMeter = movingMeter(panel.querySelector(".aim-marker"), meterSpeed);
  button.addEventListener("click", () => {
    const position = stopMeter();
    const distance = Math.abs(position - 50);
    const made = distance <= targetWidth / 2;
    button.disabled = true;
    panel.classList.add("locked");
    arena.classList.add("golf-putted", made ? "golf-made" : "golf-missed");
    arena.style.setProperty("--golf-end-x", made ? "79%" : `${62 + position * .27}%`);
    arena.style.setProperty("--golf-end-y", made ? "66%" : `${60 + Math.min(20, distance * .3)}%`);
    arena.querySelector(":scope > strong").textContent = made ? "HOLE IN ONE!" : "SO CLOSE!";
    if (made) {
      const points = distance <= 2 ? Math.round(basePoints * 1.5) : basePoints;
      addScore(points);
      arena.querySelector("[data-golf-score]").textContent = `+${points}`;
      setStatus(`Hole in one! +${points} golf stars`, "success");
    } else {
      setStatus("Close putt! Stop the arrow inside the cup zone next time.", "try");
    }
    setTimeout(done, 1200);
  }, { once: true });
}

const soccerZones = {
  "top-left": { label: "Top left", x: 28, y: 55 },
  "top-right": { label: "Top right", x: 72, y: 55 },
  left: { label: "Left", x: 27, y: 72 },
  middle: { label: "Middle", x: 50, y: 72 },
  right: { label: "Right", x: 73, y: 72 }
};

function startSoccerPenalty(basePoints, done) {
  const arena = board.querySelector(".soccer-arena");
  if (!arena) {
    done();
    return;
  }
  const panel = document.createElement("div");
  panel.className = "sport-skill-panel soccer-skill-panel";
  panel.innerHTML = `
    <p><strong>Choose your shot</strong><span>Click a yellow circle inside the goal. The cat goalkeeper will dive as the dog kicks!</span></p>`;
  arena.after(panel);
  const targets = document.createElement("div");
  targets.className = "soccer-net-targets";
  targets.setAttribute("role", "group");
  targets.setAttribute("aria-label", "Choose where to shoot");
  targets.innerHTML = Object.entries(soccerZones)
    .map(([zone, details]) => `<button type="button" data-soccer-zone="${zone}" aria-label="${details.label}"><span>${details.label}</span></button>`)
    .join("");
  arena.appendChild(targets);
  targets.querySelectorAll("[data-soccer-zone]").forEach(button => button.addEventListener("click", () => {
    const shotZone = button.dataset.soccerZone;
    const zoneNames = Object.keys(soccerZones);
    const keeperZone = zoneNames[Math.floor(Math.random() * zoneNames.length)];
    const shot = soccerZones[shotZone];
    const keeper = soccerZones[keeperZone];
    const scored = shotZone !== keeperZone;
    targets.querySelectorAll("button").forEach(item => item.disabled = true);
    button.classList.add("selected");
    targets.classList.add("shot-chosen");
    arena.dataset.shotZone = shotZone;
    arena.dataset.keeperZone = keeperZone;
    arena.style.setProperty("--soccer-ball-x", `${shot.x}%`);
    arena.style.setProperty("--soccer-ball-y", `${shot.y}%`);
    arena.style.setProperty("--keeper-x", `${keeper.x}%`);
    arena.style.setProperty("--keeper-y", `${keeper.y}%`);
    arena.classList.add("penalty-taken", scored ? "penalty-goal" : "penalty-save");
    arena.querySelector(":scope > strong").textContent = scored ? "GOAL!" : "SAVED!";
    if (scored) {
      addScore(basePoints);
      arena.querySelector("[data-soccer-score]").textContent = basePoints;
      setStatus(`Goal! The keeper dived ${soccerZones[keeperZone].label.toLowerCase()}. +${basePoints} points`, "success");
    } else {
      setStatus(`Saved! The keeper guessed ${soccerZones[keeperZone].label.toLowerCase()} too.`, "try");
    }
    setTimeout(done, 1350);
  }, { once: true }));
}

function startSportSkillShot(sport, basePoints, done, questionCorrect = true) {
  const arena = board.querySelector(".sport-arena");
  if (!arena) {
    done();
    return;
  }
  if (sport === "darts") startDartAim(arena, basePoints, done, questionCorrect);
  else if (sport === "basketball") startBasketballAim(arena, basePoints, done, questionCorrect);
  else if (sport === "golf") startGolfPutt(arena, basePoints, done, questionCorrect);
  else {
    arena.classList.add("scored");
    addScore(basePoints);
    setTimeout(done, 750);
  }
}

function startSportsGame(sport) {
  const grade = document.getElementById("gameGrade").value;
  const topic = document.getElementById("sportTopic").value;
  const gameIndex = getProgress();
  const questions = sportsQuestions(grade, topic, gameIndex);
  runQuiz(questions, {
    points: currentPoints(1 + gradeOptions.findIndex(([value]) => value === grade) * 0.1),
    finish: `${gameInfo[sport][1]} complete!`,
    sport,
    autoNext: () => {
      advanceProgress();
      startSportsGame(sport);
    }
  });
}

const mathTopics = {
  preschool: [
    { id: "counting", label: "Counting to 10" },
    { id: "shapes", label: "Shapes" },
    { id: "patterns", label: "Patterns" }
  ],
  kindergarten: [
    { id: "counting", label: "Counting to 20" },
    { id: "addition", label: "Adding within 10" },
    { id: "compare", label: "More and Less" },
    { id: "shapes", label: "Shapes" }
  ],
  grade1: [
    { id: "addition", label: "Addition" },
    { id: "subtraction", label: "Subtraction" },
    { id: "place-value", label: "Place Value" },
    { id: "time", label: "Time" }
  ],
  grade2: [
    { id: "addition", label: "Two-Digit Addition" },
    { id: "subtraction", label: "Two-Digit Subtraction" },
    { id: "money", label: "Money" },
    { id: "measurement", label: "Measurement" }
  ],
  grade3: [
    { id: "multiplication", label: "Multiplication" },
    { id: "division", label: "Division" },
    { id: "fractions", label: "Fractions" },
    { id: "perimeter", label: "Perimeter" }
  ],
  grade4: [
    { id: "multiplication", label: "Multi-Digit Multiplication" },
    { id: "division", label: "Division" },
    { id: "fractions", label: "Equivalent Fractions" },
    { id: "geometry", label: "Angles and Geometry" }
  ],
  grade5: [
    { id: "decimals", label: "Decimals" },
    { id: "fractions", label: "Fraction Operations" },
    { id: "volume", label: "Volume" },
    { id: "order", label: "Order of Operations" }
  ],
  grade6: [
    { id: "ratios", label: "Ratios" },
    { id: "percent", label: "Percent" },
    { id: "integers", label: "Integers" },
    { id: "algebra", label: "Early Algebra" }
  ]
};

function updateMathTopics() {
  const grade = document.getElementById("gameGrade").value;
  const topicSelect = document.getElementById("mathTopic");
  topicSelect.innerHTML = mathTopics[grade].map(topic => `<option value="${topic.id}">${topic.label}</option>`).join("");
  topicSelect.addEventListener("change", () => {
    updateProgressDisplay();
    updateTopicTheme();
  });
  updateProgressDisplay();
  updateTopicTheme();
}

function choiceSet(answer, offsets = [1, -1], allowNegative = false) {
  const correct = String(answer);
  const numeric = Number(answer);
  const values = [correct];
  offsets.forEach(offset => {
    const candidate = Number.isFinite(numeric) ? String(numeric + offset) : `${correct}${offset}`;
    if ((allowNegative || Number(candidate) >= 0 || !Number.isFinite(Number(candidate))) && !values.includes(candidate)) values.push(candidate);
  });
  let step = 1;
  while (values.length < 3) {
    const candidate = Number.isFinite(numeric) ? String(numeric + step * (step % 2 ? 1 : -1)) : `${correct}-${step}`;
    if ((allowNegative || Number(candidate) >= 0 || !Number.isFinite(Number(candidate))) && !values.includes(candidate)) values.push(candidate);
    step += 1;
  }
  return values.slice(0, 3);
}

function cleanChoices(answer, choices, allowNegative = false) {
  const correct = String(answer);
  const numeric = Number(answer);
  const values = [correct];
  choices.map(String).forEach(choice => {
    if ((allowNegative || Number(choice) >= 0 || !Number.isFinite(Number(choice))) && choice !== correct && !values.includes(choice)) values.push(choice);
  });
  let step = 1;
  while (values.length < 3) {
    const candidate = Number.isFinite(numeric) ? String(numeric + step * (step % 2 ? 1 : -1)) : `${correct}-${step}`;
    if ((allowNegative || Number(candidate) >= 0 || !Number.isFinite(Number(candidate))) && candidate !== correct && !values.includes(candidate)) values.push(candidate);
    step += 1;
  }
  return values.slice(0, 3);
}

function mathQuestion(grade, topic, index, seedValue) {
  const random = seeded(seedValue + index * 41);
  const number = (min, max) => min + Math.floor(random() * (max - min + 1));
  const shapes = [["circle", "○"], ["triangle", "△"], ["square", "□"], ["rectangle", "▭"]];

  if (topic === "counting") {
    const max = grade === "preschool" ? 10 : 20;
    const answer = number(1, max);
    return [`How many stars are shown? ${"★".repeat(Math.min(answer, 20))}`, String(answer), choiceSet(answer, [1, -1])];
  }
  if (topic === "shapes") {
    const [answer, symbol] = shapes[number(0, shapes.length - 1)];
    const otherShapes = shuffle(shapes.map(item => item[0]).filter(shape => shape !== answer), seedValue + index).slice(0, 2);
    return [`What shape is this? ${symbol}`, answer, [answer, ...otherShapes]];
  }
  if (topic === "patterns") {
    const patterns = [["red, blue, red, blue, ___", "red", ["red", "green", "yellow"]], ["1, 2, 1, 2, ___", "1", ["1", "2", "3"]], ["★, ○, ★, ○, ___", "★", ["★", "○", "□"]]];
    return patterns[index % patterns.length];
  }
  if (topic === "compare") {
    const a = number(1, 20), b = number(1, 20);
    const answer = a === b ? "They are equal" : (a > b ? String(a) : String(b));
    return [`Which number is greater: ${a} or ${b}?`, answer, cleanChoices(answer, [String(a), String(b), "They are equal"] )];
  }
  if (topic === "addition") {
    const max = grade === "kindergarten" ? 10 : grade === "grade1" ? 20 : 99;
    const a = number(1, Math.floor(max * 0.65)), b = number(1, Math.floor(max * 0.35));
    return [`${a} + ${b} = ?`, String(a + b), choiceSet(a + b, [2, -2])];
  }
  if (topic === "subtraction") {
    const max = grade === "grade1" ? 20 : 99;
    const answer = number(1, Math.floor(max / 2)), b = number(1, Math.floor(max / 2));
    return [`${answer + b} − ${b} = ?`, String(answer), choiceSet(answer, [2, -2])];
  }
  if (topic === "place-value") {
    const tens = number(1, 9), ones = number(0, 9);
    return [`What number has ${tens} tens and ${ones} ones?`, String(tens * 10 + ones), [String(tens * 10 + ones), String(tens + ones), String(ones * 10 + tens)]];
  }
  if (topic === "time") {
    const hour = number(1, 12);
    return [`A clock's short hand points to ${hour} and its long hand points to 12. What time is it?`, `${hour}:00`, [`${hour}:00`, `${hour}:30`, `${(hour % 12) + 1}:00`]];
  }
  if (topic === "money") {
    const quarters = number(1, 3), dimes = number(1, 4);
    const answer = quarters * 25 + dimes * 10;
    return [`${quarters} quarter${quarters > 1 ? "s" : ""} and ${dimes} dime${dimes > 1 ? "s" : ""} equal how many cents?`, String(answer), choiceSet(answer, [10, -10])];
  }
  if (topic === "measurement") {
    const length = number(5, 50);
    return [`A ribbon is ${length} cm long. Another is 8 cm longer. How long is it?`, String(length + 8), choiceSet(length + 8, [8, -8])];
  }
  if (topic === "multiplication") {
    const max = grade === "grade3" ? 10 : 20;
    const a = number(2, max), b = number(2, grade === "grade3" ? 10 : 12);
    return [`${a} × ${b} = ?`, String(a * b), choiceSet(a * b, [a, -b])];
  }
  if (topic === "division") {
    const divisor = number(2, 12), answer = number(2, grade === "grade3" ? 10 : 15);
    return [`${divisor * answer} ÷ ${divisor} = ?`, String(answer), choiceSet(answer, [2, -2])];
  }
  if (topic === "fractions") {
    if (grade === "grade3") {
      const denominator = number(2, 8), numerator = number(1, denominator - 1);
      return [`Which fraction means ${numerator} out of ${denominator} equal parts?`, `${numerator}/${denominator}`, [`${numerator}/${denominator}`, `${denominator}/${numerator}`, `1/${denominator}`]];
    }
    if (grade === "grade4") {
      const numerator = number(1, 4), denominator = number(numerator + 1, 8);
      return [`Which fraction is equivalent to ${numerator}/${denominator}?`, `${numerator * 2}/${denominator * 2}`, [`${numerator * 2}/${denominator * 2}`, `${numerator + 1}/${denominator + 1}`, `${numerator}/${denominator + 2}`]];
    }
    const denominator = number(3, 8), a = number(1, denominator - 1), b = number(1, denominator - a);
    return [`${a}/${denominator} + ${b}/${denominator} = ?`, `${a + b}/${denominator}`, [`${a + b}/${denominator}`, `${a + b}/${denominator * 2}`, `${a * b}/${denominator}`]];
  }
  if (topic === "perimeter") {
    const length = number(3, 12), width = number(2, 10);
    return [`What is the perimeter of a ${length} by ${width} rectangle?`, String(2 * (length + width)), choiceSet(2 * (length + width), [length, -width])];
  }
  if (topic === "geometry") {
    const angles = [["acute", "less than 90°"], ["right", "exactly 90°"], ["obtuse", "greater than 90° but less than 180°"]];
    const [answer, clue] = angles[index % angles.length];
    return [`What type of angle is ${clue}?`, answer, angles.map(item => item[0])];
  }
  if (topic === "decimals") {
    const tenths = number(1, 9), hundredths = number(1, 9);
    const answer = (tenths / 10 + hundredths / 100).toFixed(2);
    return [`0.${tenths} + 0.0${hundredths} = ?`, answer, [answer, `0.${tenths + hundredths}`, `${tenths + hundredths}.0`]];
  }
  if (topic === "volume") {
    const a = number(2, 8), b = number(2, 6), c = number(2, 5);
    return [`Volume of a ${a} × ${b} × ${c} rectangular prism?`, String(a * b * c), choiceSet(a * b * c, [a * b, -(b * c)])];
  }
  if (topic === "order") {
    const a = number(2, 9), b = number(2, 6), c = number(2, 5);
    return [`${a} + ${b} × ${c} = ?`, String(a + b * c), [String(a + b * c), String((a + b) * c), String(a * b + c)]];
  }
  if (topic === "ratios") {
    const multiplier = number(2, 6), a = number(1, 5), b = number(2, 7);
    return [`A ratio is ${a}:${b}. If the first amount is ${a * multiplier}, what is the second?`, String(b * multiplier), choiceSet(b * multiplier, [multiplier, -multiplier])];
  }
  if (topic === "percent") {
    const percent = [10, 25, 50, 75][index % 4], whole = [20, 40, 60, 80, 100][number(0, 4)];
    const answer = whole * percent / 100;
    return [`What is ${percent}% of ${whole}?`, String(answer), choiceSet(answer, [whole / 10, -whole / 10])];
  }
  if (topic === "integers") {
    const a = number(-12, 12), b = number(-10, 10), answer = a + b;
    return [`${a} + (${b}) = ?`, String(answer), cleanChoices(answer, [String(a - b), String(-answer), String(answer + 2)], true)];
  }
  const x = number(2, 12), add = number(2, 15), total = x + add;
  return [`Solve: x + ${add} = ${total}`, String(x), choiceSet(x, [add, -1])];
}

function expandQuestionPool(pool, gameIndex) {
  return Array.from({ length: 10 }, (_, index) => {
    const source = pool[(gameIndex * 2 + index) % pool.length];
    const [question, answer, choices, visual] = source;
    const variation = (gameIndex + Math.floor(index / pool.length)) % 4;
    if (variation === 1) {
      return [
        `True or false: The correct answer to "${question}" is ${answer}.`,
        "True",
        ["True", "False"],
        visual
      ];
    }
    if (variation === 2) {
      const misconception = choices.find(choice => String(choice).toLowerCase() !== String(answer).toLowerCase());
      return [
        `True or false: The correct answer to "${question}" is ${misconception}.`,
        "False",
        ["True", "False"],
        visual
      ];
    }
    if (variation === 3) {
      return [
        `Which option solves this challenge: ${question}`,
        answer,
        choices,
        visual
      ];
    }
    return source;
  });
}

function ensureValidQuestion(question) {
  const copy = [...question];
  const answer = String(copy[1]);
  const choices = Array.isArray(copy[2]) ? copy[2].map(String) : [];
  copy[2] = cleanChoices(answer, choices, Number(answer) < 0);
  return copy;
}

function startAcademic(subject) {
  const grade = document.getElementById("gameGrade").value;
  const gameIndex = getProgress();
  const generatedQuestions = subject === "math"
    ? Array.from({ length: 40 }, (_, index) => mathQuestion(grade, document.getElementById("mathTopic").value, index, freshSeed(`${subject}:${grade}:${gameIndex}:${index}`)))
    : Array.from({ length: 5 }, (_, extra) => expandQuestionPool(shuffle(subject === "science" ? scienceByGrade[grade] : geographyByGrade[grade], freshSeed(`${subject}:${grade}:${gameIndex}:${extra}`)), gameIndex + extra)).flat();
  const context = `academic:${subject}:${grade}:${document.getElementById("mathTopic")?.value || "general"}`;
  const questions = freshRoundQuestions(contextualizeQuestions(generatedQuestions.map(ensureValidQuestion), gameIndex, context), context, 10);
  runQuiz(questions, {
    points: currentPoints(1 + gradeOptions.findIndex(([value]) => value === grade) * 0.12),
    finish: `${gameInfo[subject][1]} round complete!`,
    autoNext: () => {
      advanceProgress();
      startAcademic(subject);
    }
  });
}

function runQuiz(questions, options = {}) {
  const quizGame = activeGame;
  const saved = resumeSession?.game === activeGame && resumeSession.started ? resumeSession : null;
  let current = Math.min(questions.length - 1, Number(saved?.questionIndex || 0));
  let correct = Number(saved?.correct || 0);
  const seedValue = questions.map(question => question[0]).join("").length;
  function advanceQuestion(delay = 650) {
    setTimeout(() => {
      if (activeGame !== quizGame) return;
      current += 1;
      saveGameSession({ started: current < questions.length, questionIndex: current, correct, entries: {} });
      if (current < questions.length) show();
      else {
        board.innerHTML = `<div class="round-finish"><strong>${correct} / ${questions.length}</strong><h3>${options.finish || "Round complete!"}</h3><p>${correct === questions.length ? "Perfect score!" : "Every round builds your knowledge."}</p></div>`;
        setStatus("Choose new settings or play again.", "success");
        if (options.autoNext) setTimeout(options.autoNext, 1400);
      }
    }, delay);
  }
  function show() {
    const [question, answer, choices, visual] = questions[current];
    board.innerHTML = `${options.sport ? sportArenaMarkup(options.sport, current) : ""}<div class="question-card${options.sport ? " sport-question-card" : ""}">${visual || ""}<span class="question-count">${current + 1} / ${questions.length}</span><h3>${question}</h3><div class="answer-grid">${shuffle(choices, seedValue + current * 17).map(choice => `<button type="button" data-answer="${String(choice).replaceAll('"', "&quot;")}">${choice}</button>`).join("")}</div></div>`;
    board.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
      const right = button.dataset.answer.toLowerCase() === String(answer).toLowerCase();
      showAnswerFeedback(button, answer, right);
      if (["basketball", "darts", "golf"].includes(options.sport)) {
        if (right) correct += 1;
        const message = right
          ? options.sport === "darts"
            ? "Correct! You earned an easier dart throw."
            : options.sport === "golf"
              ? "Correct! You earned an easier putt."
              : "Correct! You earned an easier basketball shot."
          : `The answer is ${answer}. You can still score, but this shot is harder!`;
        setStatus(message, right ? "success" : "try");
        startSportSkillShot(options.sport, options.points || 5, () => advanceQuestion(0), right);
        return;
      }
      if (options.sport === "soccer") {
        if (right) {
          correct += 1;
          setStatus("Correct! Choose where to take your penalty kick.", "success");
          startSoccerPenalty(options.points || 5, () => advanceQuestion(0));
        } else {
          setStatus(`The answer is ${answer}. Get the next one right to earn a penalty kick!`, "try");
          document.querySelector(".soccer-arena")?.classList.add("no-penalty");
          advanceQuestion(900);
        }
        return;
      }
      if (right) {
        correct += 1;
        addScore(options.points || 5);
        document.querySelector(".sport-arena")?.classList.add("scored");
      } else if (options.sport) {
        document.querySelector(".sport-arena")?.classList.add("missed");
      }
      const successMessage = options.sport === "basketball" ? "Correct! Basket scored!"
        : options.sport === "darts" ? "Correct! Bullseye!"
          : options.sport === "soccer" ? "Correct! Goal!"
            : "Correct!";
      setStatus(right ? successMessage : `The answer is ${answer}. Try the next play!`, right ? "success" : "try");
      advanceQuestion();
    }));
  }
  actions.innerHTML = "";
  saveGameSession({ started: true, questionIndex: current, correct, entries: {} });
  show();
}

const countryCodes = "AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS XK YE YT ZA ZM ZW".split(" ");
const displayNames = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames(["en"], { type: "region" }) : null;
const countries = countryCodes.map(code => ({
  code,
  name: displayNames?.of(code) || code,
  flag: String.fromCodePoint(...code.split("").map(letter => 127397 + letter.charCodeAt())),
  image: `assets/flags/${code.toLowerCase()}.svg`
})).filter(country => country.name !== country.code || ["XK"].includes(country.code));
const easyCodes = "CA US MX BR AR GB FR ES IT DE GR EG ZA NG KE IN CN JP KR AU NZ RU SE NO CH NL IE PT TR SA AE".split(" ");
const mediumCodes = easyCodes.concat("CL CO PE VE CU JM IS PL AT BE DK FI CZ HU RO UA MA DZ ET GH TZ UG PK BD LK NP TH VN MY ID PH SG FJ PG".split(" "));

function startFlags() {
  const count = Number(document.getElementById("flagCount").value);
  const difficulty = document.getElementById("flagDifficulty").value;
  const sourceCodes = difficulty === "easy" ? easyCodes : difficulty === "medium" ? mediumCodes : countryCodes;
  const source = countries.filter(country => sourceCodes.includes(country.code));
  const gameIndex = getProgress();
  const context = `flags:${difficulty}:${count}`;
  const selected = shuffle(source, freshSeed(`${context}:${gameIndex}`)).slice(0, Math.min(count * 3, source.length));
  const questions = freshRoundQuestions(selected.map((country, index) => {
    const others = shuffle(source.filter(item => item.code !== country.code), country.code.charCodeAt(0) * 100 + index).slice(0, 3);
    const question = [
      "Which country or territory has this flag?",
      country.name,
      [country.name, ...others.map(item => item.name)],
      `<div class="flag-display"><img src="${country.image}" alt="Mystery country flag" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden>${country.flag}</span></div>`
    ];
    question.signature = `${context}:${country.code}`;
    return question;
  }), context, count);
  runQuiz(questions, {
    points: currentPoints(difficulty === "hard" ? 1.5 : difficulty === "medium" ? 1.2 : 1),
    finish: "Flag round complete!",
    autoNext: () => {
      advanceProgress();
      startFlags();
    }
  });
}

const countryClues = [
  ["Canada", "Ottawa", "North America", "It has the world's longest coastline and a maple leaf on its flag."],
  ["Brazil", "Brasília", "South America", "It contains much of the Amazon rainforest."],
  ["Japan", "Tokyo", "Asia", "It is an island country shaped like a curved chain in the Pacific."],
  ["Italy", "Rome", "Europe", "Its outline is often compared to a boot."],
  ["Egypt", "Cairo", "Africa", "The Nile River and ancient pyramids are found here."],
  ["Australia", "Canberra", "Oceania", "It is both a country and a continent."],
  ["India", "New Delhi", "Asia", "It forms a large triangular peninsula in southern Asia."],
  ["France", "Paris", "Europe", "It is sometimes called the Hexagon because of its outline."],
  ["Chile", "Santiago", "South America", "It is a very long, narrow country along the Pacific coast."],
  ["Greece", "Athens", "Europe", "It has a mainland and thousands of islands in the Mediterranean."],
  ["South Africa", "Pretoria", "Africa", "It sits at the southern tip of Africa and surrounds Lesotho."],
  ["Mexico", "Mexico City", "North America", "It lies south of the United States between two oceans."],
  ["Norway", "Oslo", "Europe", "Its long coast is famous for deep fjords."],
  ["New Zealand", "Wellington", "Oceania", "Its two main islands lie southeast of Australia."],
  ["Madagascar", "Antananarivo", "Africa", "It is a large island off Africa's southeast coast."],
  ["Argentina", "Buenos Aires", "South America", "It stretches from subtropical north to Patagonia in the south."],
  ["United Kingdom", "London", "Europe", "It is an island nation made of England, Scotland, Wales, and Northern Ireland."],
  ["Thailand", "Bangkok", "Asia", "Its outline is sometimes compared to an elephant's head."],
  ["Turkey", "Ankara", "Asia and Europe", "It connects southeastern Europe with western Asia."],
  ["Indonesia", "Jakarta", "Asia", "It is a huge archipelago with thousands of islands."],
  ["Peru", "Lima", "South America", "The Andes and Machu Picchu are found here."],
  ["Iceland", "Reykjavík", "Europe", "This North Atlantic island is known for volcanoes and glaciers."],
  ["Kenya", "Nairobi", "Africa", "The Equator crosses this East African country."],
  ["Vietnam", "Hanoi", "Asia", "It is a long, narrow country on the South China Sea."],
  ["Spain", "Madrid", "Europe", "It shares the Iberian Peninsula with Portugal."],
  ["Morocco", "Rabat", "Africa", "It faces both the Atlantic Ocean and Mediterranean Sea."],
  ["Philippines", "Manila", "Asia", "It is an archipelago of more than seven thousand islands."],
  ["Germany", "Berlin", "Europe", "It lies in central Europe and has nine neighboring countries."],
  ["South Korea", "Seoul", "Asia", "It occupies the southern half of the Korean Peninsula."],
  ["United States", "Washington, D.C.", "North America", "It has fifty states, including Alaska and Hawaii."]
];

function startCountryDetective() {
  const count = Number(document.getElementById("countryCount").value);
  const difficulty = document.getElementById("countryDifficulty").value;
  const gameIndex = getProgress();
  const context = `countries:${difficulty}:${count}`;
  const selected = shuffle(countryClues, freshSeed(`${context}:${gameIndex}`)).slice(0, Math.min(count * 3, countryClues.length));
  const questions = freshRoundQuestions(selected.map((country, index) => {
    const [name, capital, continent, clue] = country;
    const clueText = difficulty === "easy"
      ? `Continent: ${continent}. Capital: ${capital}. ${clue}`
      : difficulty === "medium"
        ? `Continent: ${continent}. ${clue}`
        : `${clue} Its name begins with "${name[0]}".`;
    const others = shuffle(countryClues.filter(item => item[0] !== name), index * 71 + name.length).slice(0, 3);
    const question = [clueText, name, [name, ...others.map(item => item[0])], `<div class="country-shape-card"><span>${continent}</span><strong>?</strong></div>`];
    question.signature = `${context}:${name}:${clueText}`;
    return question;
  }), context, count);
  runQuiz(questions, {
    points: currentPoints(difficulty === "hard" ? 1.5 : difficulty === "medium" ? 1.2 : 1),
    finish: "Country Detective round complete!",
    autoNext: () => {
      advanceProgress();
      startCountryDetective();
    }
  });
}

const spellingWords = {
  easy: [
    ["cat", "A small pet that purrs."], ["sun", "The bright star in our daytime sky."],
    ["jump", "To push yourself up from the ground."], ["fish", "An animal that swims and has gills."],
    ["book", "Something with pages that you read."], ["tree", "A tall plant with a trunk."],
    ["milk", "A white drink from cows or plants."], ["frog", "A small animal that hops."],
    ["play", "To have fun with a game or toy."], ["star", "A bright object seen in the night sky."],
    ["home", "The place where you live."], ["rain", "Water that falls from clouds."],
    ["cake", "A sweet baked treat."], ["blue", "The color of a clear sky."],
    ["hand", "The body part at the end of your arm."], ["smile", "A happy expression on your face."],
    ["train", "A vehicle that travels on tracks."], ["green", "The color of grass."],
    ["chair", "A seat made for one person."], ["happy", "Feeling joyful or pleased."]
  ],
  medium: [
    ["garden", "A place where flowers or vegetables grow."], ["window", "An opening with glass that lets light inside."],
    ["rabbit", "A long-eared animal that hops."], ["yellow", "The color of sunshine or a lemon."],
    ["pencil", "A tool used for writing and drawing."], ["basket", "A container often woven for carrying things."],
    ["winter", "The coldest season of the year."], ["little", "Small in size."],
    ["planet", "A large world that travels around a star."], ["friend", "Someone you like and trust."],
    ["purple", "A color made from red and blue."], ["number", "A symbol used for counting."],
    ["bridge", "A structure that carries a path over something."], ["school", "A place where students learn."],
    ["market", "A place where people buy and sell things."], ["morning", "The early part of the day."],
    ["blanket", "A warm covering used on a bed."], ["kitten", "A young cat."],
    ["people", "More than one person."], ["because", "A word used to give a reason."]
  ],
  hard: [
    ["adventure", "An exciting or unusual experience."], ["beautiful", "Very pleasing to see or hear."],
    ["different", "Not the same."], ["favorite", "Liked more than the others."],
    ["library", "A place where books can be borrowed."], ["calendar", "A chart showing days, weeks, and months."],
    ["chocolate", "A sweet food made from cacao."], ["elephant", "A very large animal with a trunk."],
    ["remember", "To keep something in your mind."], ["surprise", "Something unexpected."],
    ["question", "A sentence that asks for information."], ["together", "With one another."],
    ["whisper", "To speak very softly."], ["journey", "Travel from one place to another."],
    ["enough", "As much as is needed."], ["special", "Different in a good or important way."],
    ["straight", "Without a curve or bend."], ["thoughtful", "Showing care for others."],
    ["knowledge", "Information and understanding gained by learning."], ["mystery", "Something difficult to explain or solve."]
  ],
  advanced: [
    ["necessary", "Required or needed."], ["environment", "The surroundings in which living things exist."],
    ["community", "People living or working together in one place."], ["responsible", "Trusted to take care of a duty."],
    ["imagination", "The ability to form new ideas or pictures in your mind."], ["temperature", "A measure of how hot or cold something is."],
    ["independent", "Able to act or think without help."], ["immediately", "Without waiting."],
    ["opportunity", "A good chance to do something."], ["curiosity", "A strong wish to learn or know."],
    ["appreciate", "To recognize the value of something."], ["rhythm", "A repeated pattern of beats or movement."],
    ["restaurant", "A place where meals are prepared and served."], ["guarantee", "A firm promise that something will happen."],
    ["exaggerate", "To describe something as greater than it really is."], ["conscience", "Your inner sense of right and wrong."],
    ["privilege", "A special right or advantage."], ["recommend", "To suggest something as a good choice."],
    ["accommodate", "To provide enough room or meet a need."], ["pronunciation", "The way a word is spoken."]
  ],
  expert: [
    ["miscellaneous", "Made up of many different kinds of things."], ["entrepreneur", "A person who starts and runs a business."],
    ["conscientious", "Careful to do work correctly and responsibly."], ["onomatopoeia", "A word that imitates a sound."],
    ["metamorphosis", "A major change in form, such as a caterpillar becoming a butterfly."], ["archaeology", "The study of people through objects left behind."],
    ["photosynthesis", "The process plants use to make food from light."], ["choreography", "The planned movements in a dance."],
    ["perseverance", "Continuing even when something is difficult."], ["Mediterranean", "Relating to the sea between Europe, Africa, and Asia."],
    ["acquaintance", "A person you know but not very closely."], ["bureaucracy", "A system managed through many offices and rules."],
    ["camouflage", "Color or pattern that helps something blend in."], ["millennium", "A period of one thousand years."],
    ["questionnaire", "A written set of questions used to collect information."], ["silhouette", "A dark outline of a person or object."],
    ["embarrassment", "The feeling of being self-conscious or ashamed."], ["acquisition", "Something gained or the act of gaining it."],
    ["idiosyncrasy", "An unusual personal habit or characteristic."], ["pneumonia", "An infection that inflames air sacs in the lungs."]
  ]
};

function speakWord(word) {
  if (!window.HappyLanguage?.speakNaturally) {
    setStatus("Audio pronunciation is not available in this browser.", "try");
    return;
  }
  HappyLanguage.speakNaturally(word, {
    language: "en",
    rate: 0.82,
    pitch: 1,
    singlePhrase: true
  });
}

function startSpellingBee() {
  const level = document.getElementById("spellingLevel").value;
  const count = Number(document.getElementById("spellingCount").value);
  const gameIndex = getProgress();
  const context = `spelling:${level}:${count}`;
  const words = freshRoundQuestions(
    shuffle(spellingWords[level], freshSeed(`${context}:${gameIndex}`)).map(item => {
      const copy = [...item];
      copy.signature = `${context}:${item[0]}`;
      return copy;
    }),
    context,
    count
  );
  const saved = resumeSession?.game === activeGame && resumeSession.started ? resumeSession : null;
  let current = Math.min(words.length - 1, Number(saved?.questionIndex || 0));
  let correct = Number(saved?.correct || 0);

  function showWord() {
    const [word, clue] = words[current];
    board.innerHTML = `
      <div class="spelling-card">
        <span class="question-count">${current + 1} / ${words.length}</span>
        <div class="bee-mark" aria-hidden="true">BEE</div>
        <h3>Spell the word you hear.</h3>
        <p><strong>Clue:</strong> ${clue}</p>
        <button class="hear-word" id="hearWord" type="button" aria-label="Hear the spelling word">&#128266; Hear word</button>
        <form id="spellingForm">
          <label for="spellingAnswer">Type the word</label>
          <input id="spellingAnswer" autocomplete="off" autocapitalize="none" spellcheck="false" required>
          <button class="btn primary" type="submit">Check spelling</button>
        </form>
      </div>`;
    document.getElementById("hearWord").addEventListener("click", () => speakWord(word));
    document.getElementById("spellingForm").addEventListener("submit", event => {
      event.preventDefault();
      const input = document.getElementById("spellingAnswer");
      const right = input.value.trim().toLowerCase() === word.toLowerCase();
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + ["easy", "medium", "hard", "advanced", "expert"].indexOf(level) * 0.3));
      }
      input.classList.toggle("correct", right);
      input.classList.toggle("wrong", !right);
      setStatus(right ? "Correct spelling!" : `The correct spelling is "${word}".`, right ? "success" : "try");
      board.querySelectorAll("button, input").forEach(element => element.disabled = true);
      setTimeout(() => {
        current += 1;
        saveGameSession({ started: current < words.length, questionIndex: current, correct, entries: {} });
        if (current < words.length) {
          showWord();
          setTimeout(() => speakWord(words[current][0]), 250);
        } else {
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${words.length}</strong><h3>Spelling Bee complete!</h3><p>${correct === words.length ? "Every word was correct. Brilliant spelling!" : "Practice makes every word easier."}</p></div>`;
          setStatus("Choose another difficulty or play again.", "success");
          setTimeout(() => {
            advanceProgress();
            startSpellingBee();
          }, 1500);
        }
      }, 950);
    });
    setTimeout(() => speakWord(word), 250);
  }

  actions.innerHTML = "";
  saveGameSession({ started: true, questionIndex: current, correct, entries: {} });
  showWord();
}

function startMemoryMatch() {
  const level = Number(document.getElementById("gameLevel").value);
  const pairCounts = [4, 5, 6, 8, 10];
  const pairCount = pairCounts[level - 1];
  const gameIndex = getProgress();
  const symbols = [
    ["&#9733;", "star"], ["&#9728;", "sun"], ["&#9835;", "music"], ["&#9889;", "lightning"],
    ["&#9829;", "heart"], ["&#10052;", "snowflake"], ["&#9992;", "plane"], ["&#9875;", "anchor"],
    ["&#9786;", "smile"], ["&#9824;", "spade"], ["&#9830;", "diamond"], ["&#9788;", "sparkle"],
    ["&#10084;", "love"], ["&#9730;", "umbrella"], ["&#9917;", "ball"], ["&#9775;", "flower"]
  ];
  const memoryHistoryKey = "happy-games-memory-boards-v1";
  const history = JSON.parse(localStorage.getItem(memoryHistoryKey) || "{}");
  const historyContext = `level-${level}`;
  const recentBoards = new Set(history[historyContext] || []);
  let chosen = [];
  let boardSignature = "";
  for (let attempt = 0; attempt < 80; attempt += 1) {
    chosen = shuffle(symbols, 19000 + gameIndex * 71 + level * 13 + attempt * 997).slice(0, pairCount);
    boardSignature = chosen.map(card => card[1]).sort().join("|");
    if (!recentBoards.has(boardSignature)) break;
  }
  if (new Set(chosen.map(card => card[1])).size !== chosen.length) {
    throw new Error("Memory board contains a repeated pair identity.");
  }
  history[historyContext] = [...(history[historyContext] || []), boardSignature].slice(-20);
  localStorage.setItem(memoryHistoryKey, JSON.stringify(history));
  const cards = shuffle(
    chosen.flatMap(([symbol, name]) => [{ symbol, name }, { symbol, name }]),
    23000 + gameIndex * 97 + level
  );
  let first = null;
  let locked = false;
  let matched = 0;
  let moves = 0;

  board.innerHTML = `
    <div class="memory-game">
      <div class="memory-head">
        <div><span>Board ${gameIndex + 1} of 100</span><strong>Find ${pairCount} magical pairs</strong></div>
        <div><span>Moves</span><strong id="memoryMoves">0</strong></div>
      </div>
      <div class="memory-board" style="--memory-columns:${pairCount > 8 ? 5 : 4}">
        ${cards.map((card, index) => `
          <button class="memory-card" type="button" data-card="${index}" data-name="${card.name}" aria-label="Hidden memory card">
            <span class="memory-card-back">?</span>
            <span class="memory-card-face" aria-hidden="true">${card.symbol}</span>
          </button>`).join("")}
      </div>
    </div>`;
  actions.innerHTML = `<button class="btn primary" id="nextMemory" type="button">New board</button>`;
  setStatus("Flip two cards and look for a matching pair.");
  saveGameSession({ started: true, questionIndex: 0, correct: 0, entries: {} });

  board.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      if (locked || card.classList.contains("flipped") || card.classList.contains("matched")) return;
      card.classList.add("flipped");
      card.setAttribute("aria-label", card.dataset.name);
      if (!first) {
        first = card;
        return;
      }

      moves += 1;
      document.getElementById("memoryMoves").textContent = moves;
      if (first.dataset.name === card.dataset.name) {
        first.classList.add("matched");
        card.classList.add("matched");
        matched += 1;
        addScore(currentPoints(1 + level * 0.15));
        setStatus("Match found! Keep going.", "success");
        first = null;
        if (matched === pairCount) {
          setStatus(`Board complete in ${moves} moves!`, "success");
          advanceProgress();
          saveGameSession({ started: false, entries: {} });
        }
        return;
      }

      locked = true;
      setStatus("Not a match. Watch where they hide.", "try");
      const previous = first;
      first = null;
      setTimeout(() => {
        previous.classList.remove("flipped");
        card.classList.remove("flipped");
        previous.setAttribute("aria-label", "Hidden memory card");
        card.setAttribute("aria-label", "Hidden memory card");
        locked = false;
      }, 700);
    });
  });

  document.getElementById("nextMemory").addEventListener("click", startMemoryMatch);
}

function arcadeSeed(offset = 0) {
  return 31000 + getProgress() * 1009 + Number(document.getElementById("gameLevel")?.value || 1) * 131 + offset;
}

function arcadeHeader(title, detail) {
  return `<div class="arcade-game-head"><div><span>Game ${getProgress() + 1} of 100</span><strong>${title}</strong></div><p>${detail}</p></div>`;
}

function finishArcade(message, multiplier = 1) {
  addScore(currentPoints(multiplier));
  advanceProgress();
  saveGameSession({ started: false, entries: {} });
  setStatus(message, "success");
}

function startArcadeGame(game) {
  if (roundState?.cleanup) roundState.cleanup();
  const starters = {
    simon: startSimonLights,
    tictactoe: startTicTacToe,
    connectfour: startConnectFour,
    merge: startNumberMerge,
    mines: startTreasureSweeper,
    slider: startSlidingPuzzle,
    maze: startMazeEscape,
    patterns: startPatternBuilder,
    scramble: startWordScramble,
    wordsearch: startWordSearch,
    reaction: startReactionTest,
    colormatch: startColorMatch,
    oddone: startOddOneOut,
    sequence: startSequenceSprint,
    typing: startTypingTrail,
    whack: startWhackAStar
  };
  starters[game]?.();
}

function startSimonLights() {
  const level = Number(document.getElementById("gameLevel").value);
  const target = 3 + level * 2;
  const random = seeded(arcadeSeed(11));
  const sequence = Array.from({ length: target }, () => Math.floor(random() * 4));
  let round = 1;
  let input = 0;
  let playing = false;
  const timers = [];
  roundState = { cleanup: () => timers.forEach(clearTimeout) };
  board.innerHTML = `${arcadeHeader("Simon Lights", `Repeat ${target} growing light patterns.`)}
    <div class="simon-game">
      <div class="simon-round">Round <strong id="simonRound">1</strong> / ${target}</div>
      <div class="simon-board">
        ${["Sun", "Leaf", "Wave", "Berry"].map((name, index) => `<button type="button" class="simon-pad pad-${index}" data-pad="${index}" aria-label="${name} light"></button>`).join("")}
      </div>
      <button class="btn primary" id="showSimon" type="button">Show pattern</button>
    </div>`;
  actions.innerHTML = "";

  function flash(index, delay) {
    timers.push(setTimeout(() => {
      const pad = board.querySelector(`[data-pad="${index}"]`);
      pad.classList.add("lit");
      timers.push(setTimeout(() => pad.classList.remove("lit"), 420 - level * 35));
    }, delay));
  }
  function showPattern() {
    playing = true;
    input = 0;
    board.querySelectorAll(".simon-pad").forEach(pad => pad.disabled = true);
    sequence.slice(0, round).forEach((value, index) => flash(value, 650 * index));
    timers.push(setTimeout(() => {
      playing = false;
      board.querySelectorAll(".simon-pad").forEach(pad => pad.disabled = false);
      setStatus("Your turn. Repeat the lights.");
    }, round * 650));
  }
  board.querySelector("#showSimon").addEventListener("click", showPattern);
  board.querySelectorAll(".simon-pad").forEach(pad => pad.addEventListener("click", () => {
    if (playing) return;
    const value = Number(pad.dataset.pad);
    pad.classList.add("lit");
    setTimeout(() => pad.classList.remove("lit"), 180);
    if (value !== sequence[input]) {
      setStatus("That light was out of order. The same round will replay.", "try");
      timers.push(setTimeout(showPattern, 700));
      return;
    }
    input += 1;
    if (input < round) return;
    if (round === target) {
      finishArcade("Perfect light memory! Every pattern was correct.", 1 + level * 0.35);
      board.querySelectorAll("button").forEach(button => button.disabled = true);
      return;
    }
    round += 1;
    document.getElementById("simonRound").textContent = round;
    setStatus("Pattern correct! One more light has been added.", "success");
    timers.push(setTimeout(showPattern, 700));
  }));
  setStatus("Press Show pattern and watch carefully.");
}

function startTicTacToe() {
  const level = Number(document.getElementById("gameLevel").value);
  const cells = Array(9).fill("");
  const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  board.innerHTML = `${arcadeHeader("Tic-Tac-Toe", "You are the stars. Make a line of three.")}
    <div class="tic-board">${cells.map((_, index) => `<button type="button" data-cell="${index}" aria-label="Empty square"></button>`).join("")}</div>`;
  actions.innerHTML = `<button class="btn primary" id="newTic" type="button">New match</button>`;

  function winner(mark) {
    return winning.some(line => line.every(index => cells[index] === mark));
  }
  function draw() {
    board.querySelectorAll("[data-cell]").forEach((button, index) => {
      button.textContent = cells[index] === "X" ? "\u2605" : cells[index] === "O" ? "\u25CF" : "";
      button.className = cells[index] ? `mark-${cells[index].toLowerCase()}` : "";
      button.disabled = Boolean(cells[index]);
    });
  }
  function computerMove() {
    const empty = cells.map((value, index) => value ? -1 : index).filter(index => index >= 0);
    if (!empty.length) {
      finishArcade("A clever draw. Nobody left an open line!", 0.7);
      return;
    }
    const findMove = mark => empty.find(index => {
      cells[index] = mark;
      const wins = winner(mark);
      cells[index] = "";
      return wins;
    });
    let move = level >= 3 ? findMove("O") : undefined;
    if (move === undefined && level >= 2) move = findMove("X");
    if (move === undefined && level >= 4 && !cells[4]) move = 4;
    if (move === undefined) move = shuffle(empty, arcadeSeed(empty.length))[0];
    cells[move] = "O";
    draw();
    if (winner("O")) {
      setStatus("The computer made three. Try a new strategy!", "try");
      board.querySelectorAll("[data-cell]").forEach(button => button.disabled = true);
    } else if (cells.every(Boolean)) {
      finishArcade("A clever draw. Nobody left an open line!", 0.7);
    }
  }
  board.querySelectorAll("[data-cell]").forEach(button => button.addEventListener("click", () => {
    cells[Number(button.dataset.cell)] = "X";
    draw();
    if (winner("X")) {
      finishArcade("Three stars in a row. You win!", 1 + level * 0.25);
      board.querySelectorAll("[data-cell]").forEach(item => item.disabled = true);
    } else if (cells.every(Boolean)) {
      finishArcade("A clever draw. The board is full!", 0.7);
    } else {
      setTimeout(computerMove, 350);
    }
  }));
  document.getElementById("newTic").addEventListener("click", startTicTacToe);
  setStatus("Choose any square to begin.");
}

function startConnectFour() {
  const level = Number(document.getElementById("gameLevel").value);
  const rows = 6;
  const columns = 7;
  const grid = Array.from({ length: rows }, () => Array(columns).fill(0));
  board.innerHTML = `${arcadeHeader("Connect Four", "Drop gold coins. The computer uses blue.")}
    <div class="connect-controls">${Array.from({ length: columns }, (_, column) => `<button type="button" data-column="${column}" aria-label="Drop in column ${column + 1}">\u2193</button>`).join("")}</div>
    <div class="connect-board">${Array.from({ length: rows * columns }, (_, index) => `<span data-slot="${index}"></span>`).join("")}</div>`;
  actions.innerHTML = `<button class="btn primary" id="newConnect" type="button">New match</button>`;

  function drop(column, player) {
    for (let row = rows - 1; row >= 0; row -= 1) {
      if (!grid[row][column]) {
        grid[row][column] = player;
        return row;
      }
    }
    return -1;
  }
  function hasFour(player) {
    const directions = [[0,1],[1,0],[1,1],[1,-1]];
    return grid.some((row, y) => row.some((value, x) => value === player && directions.some(([dy, dx]) =>
      [0,1,2,3].every(step => grid[y + dy * step]?.[x + dx * step] === player)
    )));
  }
  function draw() {
    board.querySelectorAll("[data-slot]").forEach((slot, index) => {
      const value = grid[Math.floor(index / columns)][index % columns];
      slot.className = value ? `coin player-${value}` : "";
    });
  }
  function computerMove() {
    const open = Array.from({ length: columns }, (_, index) => index).filter(column => grid[0][column] === 0);
    if (!open.length) {
      finishArcade("The board is full. It is a draw!", 0.7);
      return;
    }
    const find = player => open.find(column => {
      const row = drop(column, player);
      const wins = hasFour(player);
      grid[row][column] = 0;
      return wins;
    });
    let column = level >= 3 ? find(2) : undefined;
    if (column === undefined && level >= 2) column = find(1);
    if (column === undefined) column = shuffle(open, arcadeSeed(open.length + grid.flat().filter(Boolean).length))[0];
    drop(column, 2);
    draw();
    if (hasFour(2)) {
      setStatus("Blue connected four. Try blocking its path earlier!", "try");
      board.querySelectorAll("[data-column]").forEach(button => button.disabled = true);
    }
  }
  board.querySelectorAll("[data-column]").forEach(button => button.addEventListener("click", () => {
    if (drop(Number(button.dataset.column), 1) < 0) return;
    draw();
    if (hasFour(1)) {
      finishArcade("Four gold coins connected. You win!", 1 + level * 0.3);
      board.querySelectorAll("[data-column]").forEach(item => item.disabled = true);
    } else if (grid[0].every(Boolean)) {
      finishArcade("The board is full. It is a draw!", 0.7);
    } else {
      setTimeout(computerMove, 350);
    }
  }));
  document.getElementById("newConnect").addEventListener("click", startConnectFour);
  setStatus("Choose a column for your first gold coin.");
}

function startNumberMerge() {
  const level = Number(document.getElementById("gameLevel").value);
  const size = level >= 4 ? 5 : 4;
  let cells = Array(size * size).fill(0);
  let moves = 0;
  const random = seeded(arcadeSeed(41));
  const addTile = () => {
    const empty = cells.map((value, index) => value ? -1 : index).filter(index => index >= 0);
    if (empty.length) cells[empty[Math.floor(random() * empty.length)]] = random() < 0.85 ? 2 : 4;
  };
  addTile();
  addTile();
  board.innerHTML = `${arcadeHeader("Number Merge", `Combine matching tiles. Reach ${level >= 4 ? 256 : 128}.`)}
    <div class="merge-score">Moves <strong id="mergeMoves">0</strong></div>
    <div class="merge-board" style="--merge-size:${size}"></div>
    <div class="merge-arrows"><button data-move="up">\u2191</button><div><button data-move="left">\u2190</button><button data-move="down">\u2193</button><button data-move="right">\u2192</button></div></div>`;
  actions.innerHTML = `<button class="btn primary" id="newMerge" type="button">New grid</button>`;

  function draw() {
    board.querySelector(".merge-board").innerHTML = cells.map(value => `<span class="tile-${value}">${value || ""}</span>`).join("");
    document.getElementById("mergeMoves").textContent = moves;
  }
  function compress(line) {
    const values = line.filter(Boolean);
    for (let index = 0; index < values.length - 1; index += 1) {
      if (values[index] === values[index + 1]) {
        values[index] *= 2;
        values.splice(index + 1, 1);
      }
    }
    return values.concat(Array(size - values.length).fill(0));
  }
  function move(direction) {
    const before = cells.join(",");
    const next = Array(size * size).fill(0);
    for (let line = 0; line < size; line += 1) {
      const indexes = [];
      for (let step = 0; step < size; step += 1) {
        if (direction === "left") indexes.push(line * size + step);
        if (direction === "right") indexes.push(line * size + size - 1 - step);
        if (direction === "up") indexes.push(step * size + line);
        if (direction === "down") indexes.push((size - 1 - step) * size + line);
      }
      compress(indexes.map(index => cells[index])).forEach((value, index) => next[indexes[index]] = value);
    }
    cells = next;
    if (cells.join(",") === before) return;
    moves += 1;
    addTile();
    draw();
    const target = level >= 4 ? 256 : 128;
    if (cells.some(value => value >= target)) finishArcade(`You built the ${target} tile!`, 1 + level * 0.3);
  }
  board.querySelectorAll("[data-move]").forEach(button => button.addEventListener("click", () => move(button.dataset.move)));
  const keyHandler = event => {
    const direction = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" }[event.key];
    if (direction) {
      event.preventDefault();
      move(direction);
    }
  };
  window.addEventListener("keydown", keyHandler);
  roundState = { cleanup: () => window.removeEventListener("keydown", keyHandler) };
  document.getElementById("newMerge").addEventListener("click", startNumberMerge);
  draw();
  setStatus("Use the arrows or your keyboard to slide every tile.");
}

function startTreasureSweeper() {
  const level = Number(document.getElementById("gameLevel").value);
  const size = 5 + level;
  const trapCount = 2 + level * 2;
  const random = seeded(arcadeSeed(53));
  const traps = new Set();
  while (traps.size < trapCount) traps.add(Math.floor(random() * size * size));
  const revealed = new Set();
  board.innerHTML = `${arcadeHeader("Treasure Sweeper", `Find every safe tile. ${trapCount} sleepy traps are hidden.`)}
    <div class="sweeper-board" style="--sweeper-size:${size}">${Array.from({ length: size * size }, (_, index) => `<button type="button" data-mine="${index}" aria-label="Covered tile"></button>`).join("")}</div>`;
  actions.innerHTML = `<button class="btn primary" id="newMines" type="button">New treasure map</button>`;
  function nearby(index) {
    const row = Math.floor(index / size);
    const column = index % size;
    let count = 0;
    for (let dy = -1; dy <= 1; dy += 1) for (let dx = -1; dx <= 1; dx += 1) {
      const y = row + dy;
      const x = column + dx;
      if (y >= 0 && y < size && x >= 0 && x < size && traps.has(y * size + x)) count += 1;
    }
    return count;
  }
  board.querySelectorAll("[data-mine]").forEach(button => button.addEventListener("click", () => {
    const index = Number(button.dataset.mine);
    if (traps.has(index)) {
      button.classList.add("trap");
      button.textContent = "!";
      setStatus("A sleepy trap woke up. Try a fresh treasure map.", "try");
      board.querySelectorAll("[data-mine]").forEach(item => item.disabled = true);
      return;
    }
    revealed.add(index);
    const count = nearby(index);
    button.classList.add("revealed", `near-${count}`);
    button.textContent = count || "\u25C6";
    button.disabled = true;
    if (revealed.size === size * size - trapCount) finishArcade("Every safe treasure tile was uncovered!", 1 + level * 0.35);
  }));
  document.getElementById("newMines").addEventListener("click", startTreasureSweeper);
  setStatus("Numbers show how many traps touch that tile.");
}

function startSlidingPuzzle() {
  const level = Number(document.getElementById("gameLevel").value);
  const size = level <= 2 ? 3 : 4;
  let tiles = Array.from({ length: size * size }, (_, index) => (index + 1) % (size * size));
  const random = seeded(arcadeSeed(67));
  let empty = tiles.length - 1;
  for (let turn = 0; turn < 80 + level * 20; turn += 1) {
    const row = Math.floor(empty / size);
    const column = empty % size;
    const neighbors = [empty - size, empty + size, column ? empty - 1 : -1, column < size - 1 ? empty + 1 : -1]
      .filter(index => index >= 0 && index < tiles.length);
    const swap = neighbors[Math.floor(random() * neighbors.length)];
    [tiles[empty], tiles[swap]] = [tiles[swap], tiles[empty]];
    empty = swap;
  }
  let moves = 0;
  board.innerHTML = `${arcadeHeader("Sliding Puzzle", `Arrange the numbers from 1 to ${size * size - 1}.`)}
    <div class="slider-moves">Moves <strong id="sliderMoves">0</strong></div>
    <div class="slider-board" style="--slider-size:${size}"></div>`;
  actions.innerHTML = `<button class="btn primary" id="newSlider" type="button">Shuffle again</button>`;
  function draw() {
    board.querySelector(".slider-board").innerHTML = tiles.map((value, index) =>
      `<button type="button" data-tile="${index}" class="${value ? "" : "empty"}">${value || ""}</button>`
    ).join("");
    board.querySelectorAll("[data-tile]").forEach(button => button.addEventListener("click", () => {
      const index = Number(button.dataset.tile);
      const rowDistance = Math.abs(Math.floor(index / size) - Math.floor(empty / size));
      const columnDistance = Math.abs(index % size - empty % size);
      if (rowDistance + columnDistance !== 1) return;
      [tiles[index], tiles[empty]] = [tiles[empty], tiles[index]];
      empty = index;
      moves += 1;
      document.getElementById("sliderMoves").textContent = moves;
      draw();
      if (tiles.every((value, tileIndex) => value === (tileIndex + 1) % tiles.length)) {
        finishArcade(`Puzzle solved in ${moves} moves!`, 1 + level * 0.3);
      }
    }));
  }
  document.getElementById("newSlider").addEventListener("click", startSlidingPuzzle);
  draw();
  setStatus("Select a numbered tile beside the empty square.");
}

function createMaze(size, seedValue) {
  const random = seeded(seedValue);
  const visited = new Set([0]);
  const stack = [0];
  const links = Array.from({ length: size * size }, () => new Set());
  while (stack.length) {
    const current = stack[stack.length - 1];
    const row = Math.floor(current / size);
    const column = current % size;
    const choices = [
      row ? current - size : -1,
      row < size - 1 ? current + size : -1,
      column ? current - 1 : -1,
      column < size - 1 ? current + 1 : -1
    ].filter(index => index >= 0 && !visited.has(index));
    if (!choices.length) {
      stack.pop();
      continue;
    }
    const next = choices[Math.floor(random() * choices.length)];
    links[current].add(next);
    links[next].add(current);
    visited.add(next);
    stack.push(next);
  }
  return links;
}

function startMazeEscape() {
  const level = Number(document.getElementById("gameLevel").value);
  const size = 5 + level;
  const links = createMaze(size, arcadeSeed(79));
  let position = 0;
  let moves = 0;
  const goal = size * size - 1;
  board.innerHTML = `${arcadeHeader("Maze Escape", "Guide the star from START to GOAL.")}
    <div class="maze-moves">Moves <strong id="mazeMoves">0</strong></div>
    <div class="maze-board" style="--maze-size:${size}"></div>
    <div class="maze-controls"><button data-maze-key="ArrowUp">\u2191</button><div><button data-maze-key="ArrowLeft">\u2190</button><button data-maze-key="ArrowDown">\u2193</button><button data-maze-key="ArrowRight">\u2192</button></div></div>`;
  actions.innerHTML = `<button class="btn primary" id="newMaze" type="button">New maze</button>`;
  function draw() {
    board.querySelector(".maze-board").innerHTML = links.map((neighbors, index) => {
      const walls = [
        neighbors.has(index - size) ? "" : " wall-top",
        neighbors.has(index + 1) && index % size < size - 1 ? "" : " wall-right",
        neighbors.has(index + size) ? "" : " wall-bottom",
        neighbors.has(index - 1) && index % size ? "" : " wall-left"
      ].join("");
      return `<span class="${walls}${index === position ? " maze-player" : ""}${index === goal ? " maze-goal" : ""}">${index === position ? "\u2605" : index === goal ? "GO" : ""}</span>`;
    }).join("");
  }
  function move(key) {
    const delta = { ArrowUp: -size, ArrowDown: size, ArrowLeft: -1, ArrowRight: 1 }[key];
    const next = position + delta;
    if (!links[position].has(next)) return;
    position = next;
    moves += 1;
    document.getElementById("mazeMoves").textContent = moves;
    draw();
    if (position === goal) finishArcade(`Maze escaped in ${moves} moves!`, 1 + level * 0.3);
  }
  const keyHandler = event => {
    if (event.key.startsWith("Arrow")) {
      event.preventDefault();
      move(event.key);
    }
  };
  window.addEventListener("keydown", keyHandler);
  roundState = { cleanup: () => window.removeEventListener("keydown", keyHandler) };
  board.querySelectorAll("[data-maze-key]").forEach(button => button.addEventListener("click", () => move(button.dataset.mazeKey)));
  document.getElementById("newMaze").addEventListener("click", startMazeEscape);
  draw();
  setStatus("Use the arrows or keyboard. Walls block closed paths.");
}

function startPatternBuilder() {
  const level = Number(document.getElementById("gameLevel").value);
  const random = seeded(arcadeSeed(83));
  const symbols = ["\u25CF", "\u25B2", "\u25A0", "\u2605", "\u25C6", "\u2665"];
  let round = 0;
  const total = 5 + level;
  let correct = 0;
  actions.innerHTML = "";
  function show() {
    const a = symbols[Math.floor(random() * symbols.length)];
    let b = symbols[Math.floor(random() * symbols.length)];
    while (b === a) b = symbols[Math.floor(random() * symbols.length)];
    let c = symbols[Math.floor(random() * symbols.length)];
    while (c === a || c === b) c = symbols[Math.floor(random() * symbols.length)];
    const patterns = [
      [a,b,a,b,a,b,a],
      [a,a,b,a,a,b,a],
      [a,b,c,a,b,c,a],
      [a,b,b,a,b,b,a],
      [a,a,b,b,a,a,b]
    ];
    const pattern = patterns[(round + level) % patterns.length];
    const answer = pattern.pop();
    const options = shuffle([answer, ...symbols.filter(symbol => symbol !== answer).slice(0, 3)], arcadeSeed(90 + round));
    board.innerHTML = `${arcadeHeader("Pattern Builder", `Challenge ${round + 1} of ${total}`)}
      <div class="pattern-line">${pattern.map(symbol => `<span>${symbol}</span>`).join("")}<span class="missing">?</span></div>
      <div class="pattern-options">${options.map(symbol => `<button type="button" data-pattern="${symbol}">${symbol}</button>`).join("")}</div>`;
    board.querySelectorAll("[data-pattern]").forEach(button => button.addEventListener("click", () => {
      const right = button.dataset.pattern === answer;
      button.classList.add(right ? "correct-answer" : "wrong-answer");
      board.querySelectorAll("[data-pattern]").forEach(item => item.disabled = true);
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + level * 0.1));
        setStatus("Pattern solved!", "success");
      } else {
        setStatus(`The missing piece was ${answer}.`, "try");
      }
      setTimeout(() => {
        round += 1;
        if (round < total) show();
        else {
          advanceProgress();
          saveGameSession({ started: false, entries: {} });
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${total}</strong><h3>Pattern set complete!</h3><p>Every pattern used a different rule.</p></div>`;
        }
      }, 700);
    }));
  }
  show();
}

const arcadeWordBank = [
  ["planet", "A world that travels around a star"], ["garden", "A place where plants grow"],
  ["bridge", "A path over water or a road"], ["pencil", "A tool used for writing"],
  ["rabbit", "A hopping animal with long ears"], ["castle", "A large fortified home"],
  ["rocket", "A vehicle that travels into space"], ["window", "A glass opening in a wall"],
  ["forest", "A large area filled with trees"], ["magnet", "It can pull some metals"],
  ["island", "Land surrounded by water"], ["thunder", "The sound heard during a storm"],
  ["library", "A place with books to borrow"], ["compass", "A tool that shows direction"],
  ["volcano", "A mountain that can erupt"], ["triangle", "A shape with three sides"],
  ["dolphin", "A clever mammal that lives in water"], ["lantern", "A portable light"],
  ["journey", "A trip from one place to another"], ["crystal", "A solid with a repeating structure"],
  ["whisper", "To speak very quietly"], ["harvest", "Gathering ripe crops"],
  ["telescope", "A tool for viewing distant objects"], ["adventure", "An exciting experience"]
];

function scienceArcadeWords() {
  const terms = [
    ["animal", "A living thing that can move and needs food"], ["weather", "What the sky and air are like outside"],
    ["plant", "A living thing that can grow from a seed"], ["senses", "Ways we learn about the world, like seeing and hearing"],
    ["habitat", "The place where an animal or plant lives"], ["season", "A part of the year such as winter or summer"],
    ["matter", "Anything that takes up space"], ["solid", "Matter that keeps its shape"], ["liquid", "Matter that flows and takes the shape of its container"],
    ["energy", "The ability to make things move or change"], ["shadow", "A dark shape made when light is blocked"],
    ["planet", "A large round object that orbits a star"], ["gravity", "A force that pulls objects together"],
    ["friction", "A force that slows motion when surfaces rub"], ["magnet", "An object that pulls some metals"],
    ["ecosystem", "Living and nonliving things interacting in one place"], ["producer", "A living thing that makes its own food"],
    ["consumer", "A living thing that eats other organisms"], ["camouflage", "Color or pattern that helps something blend in"],
    ["erosion", "Movement of weathered rock or soil"], ["circuit", "A path that electricity can travel through"],
    ["reflection", "Light bouncing off a surface"], ["refraction", "Light bending as it passes through materials"],
    ["climate", "Usual weather in a place over a long time"], ["nucleus", "The part of a cell that controls many activities"],
    ["membrane", "A cell covering that controls what enters and leaves"], ["condensation", "Gas changing into a liquid"],
    ["rotation", "A spinning motion"], ["orbit", "The path one object follows around another"],
    ["density", "How much mass is packed into a space"], ["variable", "A factor that can change in an experiment"],
    ["hypothesis", "A testable explanation or prediction"], ["genetics", "The study of inherited traits"],
    ["tectonics", "The study of moving plates in Earth's crust"], ["acceleration", "Change in velocity over time"]
  ];
  return terms;
}

function uniqueArcadeWords(context, level, count) {
  const maxLength = 5 + level * 2;
  const candidates = [...arcadeWordBank, ...scienceArcadeWords()]
    .filter(([word]) => word.length <= maxLength)
    .map(([word, clue]) => {
      const item = [word, clue];
      item.signature = `${context}:${word}:${clue}`;
      return item;
    });
  return freshRoundQuestions(shuffle(candidates, freshSeed(context)), context, count);
}

function startWordScramble() {
  const level = Number(document.getElementById("gameLevel").value);
  const count = 5 + level;
  const words = uniqueArcadeWords(`scramble:science-mix:level-${level}`, level, count);
  let index = 0;
  let correct = 0;
  actions.innerHTML = "";
  function show() {
    const [word, clue] = words[index];
    let mixed = shuffle(word.split(""), arcadeSeed(120 + index)).join("");
    if (mixed === word) mixed = word.slice(1) + word[0];
    board.innerHTML = `${arcadeHeader("Word Scramble", `Word ${index + 1} of ${words.length}`)}
      <div class="scramble-word">${mixed.toUpperCase()}</div><p class="scramble-clue">${clue}</p>
      <form class="arcade-word-form"><input id="scrambleAnswer" autocomplete="off" spellcheck="false" aria-label="Unscrambled word"><button class="btn primary">Check word</button></form>`;
    board.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const answer = document.getElementById("scrambleAnswer").value.trim().toLowerCase();
      const right = answer === word;
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + level * 0.15));
        setStatus("Correct! The letters are back in order.", "success");
      } else {
        setStatus(`The word was ${word}.`, "try");
      }
      board.querySelectorAll("input,button").forEach(item => item.disabled = true);
      setTimeout(() => {
        index += 1;
        if (index < words.length) show();
        else {
          advanceProgress();
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${words.length}</strong><h3>Word mix complete!</h3></div>`;
        }
      }, 750);
    });
  }
  show();
}

function startWordSearch() {
  const level = Number(document.getElementById("gameLevel").value);
  const size = 8 + Math.min(level, 2);
  const random = seeded(arcadeSeed(137));
  const words = uniqueArcadeWords(`wordsearch:science-mix:level-${level}`, level, 4 + level).map(item => item[0].toUpperCase()).filter(word => word.length <= size);
  const grid = Array.from({ length: size }, () => Array(size).fill(""));
  const placements = [];
  words.forEach((word, wordIndex) => {
    let placed = false;
    for (let attempt = 0; attempt < 100 && !placed; attempt += 1) {
      const horizontal = (attempt + wordIndex) % 2 === 0;
      const row = Math.floor(random() * (horizontal ? size : size - word.length + 1));
      const column = Math.floor(random() * (horizontal ? size - word.length + 1 : size));
      const cells = Array.from({ length: word.length }, (_, index) => [row + (horizontal ? 0 : index), column + (horizontal ? index : 0)]);
      if (cells.every(([y, x], index) => !grid[y][x] || grid[y][x] === word[index])) {
        cells.forEach(([y, x], index) => grid[y][x] = word[index]);
        placements.push({ word, cells: cells.map(([y, x]) => y * size + x) });
        placed = true;
      }
    }
  });
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  grid.forEach(row => row.forEach((value, index) => {
    if (!value) row[index] = alphabet[Math.floor(random() * alphabet.length)];
  }));
  let first = null;
  const found = new Set();
  board.innerHTML = `${arcadeHeader("Word Search", "Select the first and last letter of each hidden word.")}
    <div class="wordsearch-list">${placements.map(item => `<span data-search-word="${item.word}">${item.word}</span>`).join("")}</div>
    <div class="wordsearch-grid" style="--wordsearch-size:${size}">${grid.flat().map((letter, index) => `<button type="button" data-letter="${index}">${letter}</button>`).join("")}</div>`;
  actions.innerHTML = `<button class="btn primary" id="newSearch" type="button">New word search</button>`;
  board.querySelectorAll("[data-letter]").forEach(button => button.addEventListener("click", () => {
    const cell = Number(button.dataset.letter);
    if (first === null) {
      first = cell;
      button.classList.add("selected");
      setStatus("Now select the final letter.");
      return;
    }
    const match = placements.find(item =>
      !found.has(item.word) &&
      ((item.cells[0] === first && item.cells.at(-1) === cell) || (item.cells.at(-1) === first && item.cells[0] === cell))
    );
    board.querySelectorAll("[data-letter]").forEach(item => item.classList.remove("selected"));
    first = null;
    if (!match) {
      setStatus("That line is not one of the hidden words.", "try");
      return;
    }
    found.add(match.word);
    match.cells.forEach(index => board.querySelector(`[data-letter="${index}"]`).classList.add("found"));
    board.querySelector(`[data-search-word="${match.word}"]`).classList.add("found");
    addScore(currentPoints(1 + level * 0.1));
    setStatus(`${match.word} found!`, "success");
    if (found.size === placements.length) {
      advanceProgress();
      setStatus("Every hidden word was found!", "success");
    }
  }));
  document.getElementById("newSearch").addEventListener("click", startWordSearch);
  setStatus("Words run left-to-right or top-to-bottom.");
}

function startReactionTest() {
  const level = Number(document.getElementById("gameLevel").value);
  const rounds = 3 + level;
  let current = 0;
  let total = 0;
  let readyAt = 0;
  let waiting = false;
  let timer;
  roundState = { cleanup: () => clearTimeout(timer) };
  board.innerHTML = `${arcadeHeader("Rocket Reaction", `Complete ${rounds} clean launches.`)}
    <button class="reaction-pad waiting" id="reactionPad" type="button"><span>Press to begin</span><strong>\u2605</strong></button>
    <div class="reaction-results" id="reactionResults"></div>`;
  actions.innerHTML = "";
  const pad = document.getElementById("reactionPad");
  function prepare() {
    waiting = true;
    pad.className = "reaction-pad waiting";
    pad.querySelector("span").textContent = "Wait for green...";
    timer = setTimeout(() => {
      waiting = false;
      readyAt = performance.now();
      pad.className = "reaction-pad ready";
      pad.querySelector("span").textContent = "LAUNCH!";
    }, 900 + Math.random() * (2200 - level * 120));
  }
  pad.addEventListener("click", () => {
    if (!readyAt && !waiting) {
      prepare();
      return;
    }
    if (waiting) {
      clearTimeout(timer);
      waiting = false;
      pad.querySelector("span").textContent = "Too soon. Press to retry.";
      setStatus("Wait until the launch pad turns green.", "try");
      return;
    }
    const time = Math.round(performance.now() - readyAt);
    readyAt = 0;
    current += 1;
    total += time;
    document.getElementById("reactionResults").insertAdjacentHTML("beforeend", `<span>${time} ms</span>`);
    if (current === rounds) {
      const average = Math.round(total / rounds);
      finishArcade(`Average reaction: ${average} milliseconds.`, Math.max(0.7, 2 - average / 700));
      pad.disabled = true;
    } else {
      pad.querySelector("span").textContent = "Press for next launch";
      pad.className = "reaction-pad";
    }
  });
  setStatus("Press the launch pad to begin.");
}

function startColorMatch() {
  const level = Number(document.getElementById("gameLevel").value);
  const colors = [
    ["RED", "#e83b55"], ["BLUE", "#2878e8"], ["GREEN", "#16a56b"],
    ["PURPLE", "#854bd8"], ["ORANGE", "#ef812f"], ["PINK", "#e94e9c"]
  ];
  const total = 8 + level * 2;
  let round = 0;
  let correct = 0;
  const random = seeded(arcadeSeed(149));
  function show() {
    const meaning = colors[Math.floor(random() * colors.length)];
    let ink = colors[Math.floor(random() * colors.length)];
    const answerMeaning = level <= 2;
    board.innerHTML = `${arcadeHeader("Color Match", `Round ${round + 1} of ${total}`)}
      <div class="color-rule">${answerMeaning ? "Choose what the word SAYS" : "Choose the INK COLOR"}</div>
      <div class="color-word" style="color:${ink[1]}">${meaning[0]}</div>
      <div class="color-options">${shuffle(colors, arcadeSeed(160 + round)).map(color => `<button type="button" data-color="${color[0]}" style="--choice-color:${color[1]}">${color[0]}</button>`).join("")}</div>`;
    const answer = answerMeaning ? meaning[0] : ink[0];
    board.querySelectorAll("[data-color]").forEach(button => button.addEventListener("click", () => {
      const right = button.dataset.color === answer;
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + level * 0.12));
        setStatus("Sharp focus!", "success");
      } else {
        setStatus(`The correct choice was ${answer}.`, "try");
      }
      board.querySelectorAll("[data-color]").forEach(item => item.disabled = true);
      setTimeout(() => {
        round += 1;
        if (round < total) show();
        else {
          advanceProgress();
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${total}</strong><h3>Color challenge complete!</h3></div>`;
        }
      }, 550);
    }));
  }
  show();
}

function startOddOneOut() {
  const level = Number(document.getElementById("gameLevel").value);
  const total = 8 + level * 2;
  const shapePool = ["circle", "square", "triangle", "diamond", "star", "heart", "hexagon", "pentagon", "oval", "clover"];
  const colorPool = [
    ["ruby", "#f05264"], ["ocean", "#2f80ed"], ["leaf", "#28b86f"], ["sun", "#ffd84d"],
    ["grape", "#8e5cf7"], ["tangerine", "#ff944d"], ["bubblegum", "#ff6fcf"], ["teal", "#22c7b8"],
    ["navy", "#263c96"], ["lime", "#9be15d"]
  ];
  const patterns = ["solid", "dots", "stripes", "ring", "sparkle"];
  const sizes = ["small", "medium", "large"];
  const rotations = [0, 15, 30, 45, 60, 90, 135];
  const recentKey = "happy-games-odd-one-out-history-v2";
  const sessionUsed = new Set();
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem(recentKey) || "[]"); } catch { stored = []; }
  const recent = new Set(stored);
  let round = 0;
  let correct = 0;

  function pickDifferent(pool, current, random) {
    const choices = pool.filter(item => Array.isArray(item) ? item[0] !== current[0] : item !== current);
    return choices[Math.floor(random() * choices.length)];
  }

  function saveSignature(signature) {
    stored = [signature, ...stored.filter(item => item !== signature)].slice(0, 180);
    localStorage.setItem(recentKey, JSON.stringify(stored));
  }

  function makePuzzle() {
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const random = seeded(freshSeed(`odd-one-hard-${round}-${attempt}`));
      const count = Math.min(42, 16 + level * 5 + Math.floor(random() * 4));
      const columns = level >= 5 ? 7 : level >= 3 ? 6 : 5;
      const base = {
        shape: shapePool[Math.floor(random() * shapePool.length)],
        color: colorPool[Math.floor(random() * colorPool.length)],
        pattern: patterns[Math.floor(random() * Math.min(patterns.length, 2 + level))],
        size: sizes[Math.floor(random() * sizes.length)],
        rotation: rotations[Math.floor(random() * rotations.length)]
      };
      const possible = level <= 2 ? ["shape", "color"] : level === 3 ? ["shape", "color", "pattern"] : ["shape", "color", "pattern", "size", "rotation"];
      const oddTypeCount = Math.min(possible.length, level >= 5 ? 2 : 1);
      const oddTypes = shuffle(possible, freshSeed(`odd-types-${round}-${attempt}`)).slice(0, oddTypeCount);
      const odd = { ...base, color: [...base.color] };
      oddTypes.forEach(type => {
        if (type === "shape") odd.shape = pickDifferent(shapePool, base.shape, random);
        if (type === "color") odd.color = pickDifferent(colorPool, base.color, random);
        if (type === "pattern") odd.pattern = pickDifferent(patterns, base.pattern, random);
        if (type === "size") odd.size = pickDifferent(sizes, base.size, random);
        if (type === "rotation") odd.rotation = pickDifferent(rotations, base.rotation, random);
      });
      const oddIndex = Math.floor(random() * count);
      const signature = [base.shape, base.color[0], base.pattern, base.size, base.rotation, oddTypes.join("+"), odd.shape, odd.color[0], odd.pattern, odd.size, odd.rotation, count, oddIndex].join("|");
      if (sessionUsed.has(signature) || recent.has(signature)) continue;
      sessionUsed.add(signature);
      saveSignature(signature);
      return { base, odd, oddTypes, oddIndex, count, columns };
    }
    localStorage.removeItem(recentKey);
    stored = [];
    recent.clear();
    return makePuzzle();
  }

  function shapeMarkup(item) {
    const sizeScale = item.size === "small" ? .72 : item.size === "large" ? 1 : .86;
    return `<span class="odd-shape odd-shape-${item.shape} odd-pattern-${item.pattern}" style="--shape-color:${item.color[1]};--shape-size:${sizeScale};--shape-rotate:${item.rotation}deg"></span>`;
  }

  function show() {
    const puzzle = makePuzzle();
    const hint = level >= 4 ? "Look carefully: the odd item may differ by shape, color, pattern, size, or angle." : "Look for the shape or color that does not match.";
    board.innerHTML = `${arcadeHeader("Odd One Out", `Hard puzzle ${round + 1} of ${total}`)}
      <div class="odd-rule">${hint}</div>
      <div class="odd-grid odd-grid-hard" style="--odd-columns:${puzzle.columns}">${Array.from({ length: puzzle.count }, (_, index) => {
        const item = index === puzzle.oddIndex ? puzzle.odd : puzzle.base;
        return `<button type="button" data-odd="${index === puzzle.oddIndex}" aria-label="Shape ${index + 1}">${shapeMarkup(item)}</button>`;
      }).join("")}</div>`;
    board.querySelectorAll("[data-odd]").forEach(button => button.addEventListener("click", () => {
      const right = button.dataset.odd === "true";
      if (right) {
        correct += 1;
        addScore(currentPoints(1.25 + level * 0.18));
        button.classList.add("correct-answer");
        setStatus("Great eye! You found the only different one.", "success");
      } else {
        button.classList.add("wrong-answer");
        board.querySelector('[data-odd="true"]').classList.add("correct-answer");
        setStatus("Close! The highlighted one was different.", "try");
      }
      board.querySelectorAll("[data-odd]").forEach(item => item.disabled = true);
      setTimeout(() => {
        round += 1;
        if (round < total) show();
        else {
          advanceProgress();
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${total}</strong><h3>Hard detective set complete!</h3><p>Every puzzle used a fresh color/shape combination.</p></div>`;
        }
      }, 650);
    }));
  }
  show();
}

function startSequenceSprint() {
  const level = Number(document.getElementById("gameLevel").value);
  const total = 6 + level;
  let round = 0;
  let correct = 0;
  function makeQuestion() {
    const random = seeded(arcadeSeed(191 + round));
    const type = (round + level) % Math.min(5, level + 2);
    let values;
    let answer;
    if (type === 0) {
      const start = 1 + Math.floor(random() * 10);
      const step = 1 + Math.floor(random() * (3 + level));
      values = Array.from({ length: 5 }, (_, index) => start + step * index);
      answer = start + step * 5;
    } else if (type === 1) {
      const start = 2 + Math.floor(random() * 6);
      values = Array.from({ length: 5 }, (_, index) => start * 2 ** index);
      answer = start * 32;
    } else if (type === 2) {
      const start = 30 + Math.floor(random() * 30);
      const step = 2 + Math.floor(random() * 6);
      values = Array.from({ length: 5 }, (_, index) => start - step * index);
      answer = start - step * 5;
    } else if (type === 3) {
      const start = 1 + Math.floor(random() * 5);
      values = Array.from({ length: 5 }, (_, index) => start + index * index);
      answer = start + 25;
    } else {
      const a = 1 + Math.floor(random() * 4);
      const b = 2 + Math.floor(random() * 5);
      values = [a, b];
      while (values.length < 6) values.push(values.at(-1) + values.at(-2));
      answer = values.pop();
    }
    const options = shuffle([answer, answer + 1, answer - 1, answer + (type === 1 ? values[0] : 3)], arcadeSeed(210 + round));
    return { values, answer, options: [...new Set(options)].slice(0, 4) };
  }
  function show() {
    const question = makeQuestion();
    board.innerHTML = `${arcadeHeader("Sequence Sprint", `Sequence ${round + 1} of ${total}`)}
      <div class="sequence-line">${question.values.map(value => `<span>${value}</span>`).join("")}<span>?</span></div>
      <div class="sequence-options">${question.options.map(value => `<button type="button" data-sequence="${value}">${value}</button>`).join("")}</div>`;
    board.querySelectorAll("[data-sequence]").forEach(button => button.addEventListener("click", () => {
      const right = Number(button.dataset.sequence) === question.answer;
      if (right) {
        correct += 1;
        addScore(currentPoints(1 + level * 0.15));
        setStatus("Sequence solved!", "success");
      } else {
        setStatus(`The next number was ${question.answer}.`, "try");
      }
      board.querySelectorAll("[data-sequence]").forEach(item => item.disabled = true);
      setTimeout(() => {
        round += 1;
        if (round < total) show();
        else {
          advanceProgress();
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${total}</strong><h3>Sequence sprint complete!</h3></div>`;
        }
      }, 600);
    }));
  }
  show();
}

function startTypingTrail() {
  const level = Number(document.getElementById("gameLevel").value);
  const phrases = [
    "Bright stars shine.", "A fox runs past the pond.", "Kind words help friends.",
    "The small rocket crossed the moon.", "Careful readers notice every clue.",
    "A curious scientist records each result.", "The compass pointed toward the hidden bridge.",
    "Practice and patience turn difficult tasks into possible ones.",
    "Every thoughtful question can open a completely new path.",
    "The adventurous explorers mapped the sparkling underground river."
  ];
  const sciencePhrases = [
    "Plants need sunlight and water.", "Gravity pulls objects toward Earth.",
    "A habitat gives animals shelter.", "Scientists test one variable at a time.",
    "Condensation can make clouds form.", "Friction can slow a sliding object.",
    "Cells are tiny parts of living things.", "Earth rotates to make day and night.",
    "Camouflage helps animals hide safely.", "Renewable energy can come from wind."
  ];
  const choices = [...phrases, ...sciencePhrases].filter((_, index) => index <= level * 3 + 7);
  const rounds = 3 + level;
  const selected = freshRoundQuestions(
    shuffle(choices.map(phrase => {
      const item = [phrase, phrase, [phrase]];
      item.signature = `typing:science-mix:level-${level}:${phrase}`;
      return item;
    }), freshSeed(`typing:science-mix:${level}`)),
    `typing:science-mix:level-${level}`,
    rounds
  ).map(item => item[0]);
  let index = 0;
  let correct = 0;
  let startedAt = 0;
  function show() {
    const phrase = selected[index];
    board.innerHTML = `${arcadeHeader("Typing Trail", `Trail ${index + 1} of ${selected.length}`)}
      <div class="typing-phrase">${phrase}</div>
      <form class="typing-form"><input id="typingInput" autocomplete="off" spellcheck="false" aria-label="Type the shown phrase"><button class="btn primary">Finish trail</button></form>`;
    const input = document.getElementById("typingInput");
    startedAt = performance.now();
    input.focus();
    board.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const right = input.value.trim() === phrase;
      const seconds = Math.max(1, (performance.now() - startedAt) / 1000);
      if (right) {
        correct += 1;
        addScore(currentPoints(Math.max(1, phrase.length / seconds / 4)));
        setStatus(`Perfect typing in ${seconds.toFixed(1)} seconds!`, "success");
      } else {
        setStatus("Check capitals, spaces, and punctuation carefully.", "try");
        return;
      }
      setTimeout(() => {
        index += 1;
        if (index < selected.length) show();
        else {
          advanceProgress();
          board.innerHTML = `<div class="round-finish"><strong>${correct} / ${selected.length}</strong><h3>Typing trail complete!</h3></div>`;
        }
      }, 650);
    });
  }
  show();
}

function startWhackAStar() {
  const level = Number(document.getElementById("gameLevel").value);
  const duration = 12 + level * 2;
  const holes = level >= 4 ? 16 : 12;
  let scoreHits = 0;
  let seconds = duration;
  let active = -1;
  let isCloud = false;
  let interval;
  let clock;
  board.innerHTML = `${arcadeHeader("Whack-a-Star", `Tap stars for ${duration} seconds. Avoid storm clouds.`)}
    <div class="whack-score"><span>Time <strong id="whackTime">${seconds}</strong></span><span>Hits <strong id="whackHits">0</strong></span></div>
    <div class="whack-grid">${Array.from({ length: holes }, (_, index) => `<button type="button" data-hole="${index}" aria-label="Empty sky window"></button>`).join("")}</div>
    <button class="btn primary whack-start" id="whackStart" type="button">Start round</button>`;
  actions.innerHTML = "";
  const clearActive = () => {
    board.querySelectorAll("[data-hole]").forEach(hole => {
      hole.className = "";
      hole.textContent = "";
    });
    active = -1;
  };
  const pop = () => {
    clearActive();
    active = Math.floor(Math.random() * holes);
    isCloud = Math.random() < 0.22 + level * 0.02;
    const hole = board.querySelector(`[data-hole="${active}"]`);
    hole.className = isCloud ? "cloud" : "star";
    hole.textContent = isCloud ? "\u2601" : "\u2605";
  };
  function stop() {
    clearInterval(interval);
    clearInterval(clock);
    clearActive();
    board.querySelectorAll("[data-hole]").forEach(hole => hole.disabled = true);
    finishArcade(`Round complete with ${scoreHits} star hits!`, Math.max(0.7, scoreHits / 8));
  }
  roundState = { cleanup: () => { clearInterval(interval); clearInterval(clock); } };
  board.querySelectorAll("[data-hole]").forEach(hole => hole.addEventListener("click", () => {
    if (Number(hole.dataset.hole) !== active) return;
    if (isCloud) {
      scoreHits = Math.max(0, scoreHits - 1);
      setStatus("Storm cloud! One hit was removed.", "try");
    } else {
      scoreHits += 1;
      addScore(currentPoints(0.5 + level * 0.08));
      setStatus("Star hit!", "success");
    }
    document.getElementById("whackHits").textContent = scoreHits;
    clearActive();
  }));
  document.getElementById("whackStart").addEventListener("click", event => {
    event.currentTarget.disabled = true;
    pop();
    interval = setInterval(pop, Math.max(360, 900 - level * 90));
    clock = setInterval(() => {
      seconds -= 1;
      document.getElementById("whackTime").textContent = seconds;
      if (seconds <= 0) stop();
    }, 1000);
  });
  setStatus("Press Start round when you are ready.");
}

startButton.addEventListener("click", () => {
  resumeSession = null;
  saveGameSession({ started: true, entries: {}, questionIndex: 0, correct: 0 });
  startActiveGame();
});

board.addEventListener("input", () => {
  saveGameSession({ started: true, entries: currentEntries() });
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveGameSession({ entries: currentEntries() });
});

window.addEventListener("beforeunload", () => {
  saveGameSession({ entries: currentEntries() });
});

document.body.dataset.gameTheme = activeGame;
document.querySelector("#gameScore span").textContent = pointRules[activeGame].label;
const requestedGame = new URLSearchParams(window.location.search).get("game");
if (requestedGame && gameInfo[requestedGame]) activeGame = requestedGame;
else if (resumeSession?.game && gameInfo[resumeSession.game]) activeGame = resumeSession.game;
document.querySelector("#gameScore span").textContent = pointRules[activeGame].label;
tabs.querySelectorAll("[data-game]").forEach(button => button.classList.remove("active"));
[gameEyebrow.textContent, gameName.textContent, gameDescription.textContent] = gameInfo[activeGame];
document.body.dataset.gameTheme = activeGame;
const initialScores = JSON.parse(localStorage.getItem(gameScoresKey) || "{}");
score = Number(initialScores[activeGame] || 0);
scoreBox.textContent = score;
renderControls();
if (resumeSession?.settings) applySavedSettings(resumeSession.settings);
if (requestedGame && gameInfo[requestedGame]) {
  document.body.classList.add("game-open");
  tabs.querySelector(`[data-game="${activeGame}"]`)?.classList.add("active");
}
if (requestedGame && resumeSession?.started && resumeSession.game === activeGame) {
  startActiveGame();
  setStatus("Welcome back! Your game was restored.", "success");
}
