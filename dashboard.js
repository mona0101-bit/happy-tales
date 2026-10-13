const dashboardStats = document.getElementById("dashboardStats");
const dashboardRecommendations = document.getElementById("dashboardRecommendations");
const dashboardGreeting = document.getElementById("dashboardGreeting");
const todayPlanList = document.getElementById("todayPlanList");

function readJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function dayPick(items) {
  const day = Math.floor(Date.now() / 86400000);
  return items[day % items.length];
}

function countPathEndings() {
  let total = 0;
  for (let id = 1; id <= 30; id += 1) {
    const endings = readJson(`happy-tales-path-endings-${id}`, []);
    if (Array.isArray(endings)) total += endings.length;
  }
  return total;
}

const account = readJson("happy-tales-account", null);
const storyHistory = readJson("happy-tales-story-history", []);
const storyCount = Number(localStorage.getItem("happy-tales-guest-story-count") || storyHistory.length || 0);
const gameScores = readJson("happy-games-scores-v2", {});
const gameProgress = readJson("happy-games-progress-v2", {});
const questProgress = readJson("happy-tales-starpath-quest", {});
const pathEndings = countPathEndings();

const gamePicks = [
  ["Memory Match", "Build focus with matching pairs.", "games.html?game=memory", "assets/game-covers/game-memory.webp"],
  ["Mini Golf Quest", "Answer, aim, and putt.", "games.html?game=golf", "assets/game-covers/game-golf.webp"],
  ["Word Search", "Find hidden words in a bright grid.", "games.html?game=wordsearch", "assets/game-covers/game-wordsearch.webp"],
  ["Basketball Challenge", "Solve a question and time the shot.", "games.html?game=basketball", "assets/game-covers/game-basketball.webp"],
  ["Flag Dash", "Practice flags and world knowledge.", "games.html?game=flags", "assets/game-covers/game-flags.webp"]
];

const storyPicks = [
  ["The Coral City Compass", "An ocean adventure about courage.", "tale.html?id=1", "assets/tale-covers/tale-01.webp"],
  ["The Red Ball Promise", "A friendship tale about sharing.", "tale.html?id=12", "assets/tale-covers/tale-12.webp"],
  ["The Rooftop Star Map", "A gentle story about noticing wonder.", "tale.html?id=21", "assets/tale-covers/tale-21.webp"],
  ["The Moon Garden", "A quiet magical tale for bedtime.", "tale.html?id=2", "assets/tale-covers/tale-02.webp"]
];

const pathBookId = ((new Date().getDate() + pathEndings) % 30) + 1;
const gamePick = dayPick(gamePicks);
const storyPick = dayPick(storyPicks);
const questWorld = Number(questProgress.currentWorld || 1);
const completedQuestLevels = Array.isArray(questProgress.completed) ? questProgress.completed.length : 0;
const totalGameStars = Object.values(gameScores).reduce((sum, value) => sum + Number(value || 0), 0);
const completedGameModes = Object.keys(gameProgress).length;

dashboardGreeting.textContent = account?.username
  ? `Welcome back, ${account.username}.`
  : "Your next adventure is ready.";

dashboardStats.innerHTML = [
  ["Stories created", storyCount, "New stories stay unique to the prompt."],
  ["Path endings", `${pathEndings} / 270`, "Every replay can discover a new ending."],
  ["Game score", totalGameStars, `${completedGameModes} game modes have saved progress.`],
  ["Starpath Quest", `World ${questWorld}`, `${completedQuestLevels} levels completed in this world.`]
].map(([label, value, note]) => `
  <article class="dashboard-stat">
    <span>${label}</span>
    <strong>${value}</strong>
    <p>${note}</p>
  </article>
`).join("");

todayPlanList.innerHTML = [
  "Read one short library tale.",
  "Play one recommended learning game.",
  "Find one new pathway ending.",
  "Try one Starpath Quest level."
].map(item => `<li>${item}</li>`).join("");

dashboardRecommendations.innerHTML = [
  ["Read today", storyPick[0], storyPick[1], storyPick[2], storyPick[3]],
  ["Play today", gamePick[0], gamePick[1], gamePick[2], gamePick[3]],
  ["Choose a path", "Surprise pathway book", "Find another ending and grow your collection.", `path-reader.html?id=${pathBookId}`, `assets/tale-covers/tale-${String(100 + pathBookId).padStart(3, "0")}.webp`],
  ["Quest today", "Starpath Quest", `Continue World ${questWorld} and unlock the next map.`, "quest.html", "assets/starpath-world-map.webp"]
].map(([kicker, title, text, href, image]) => `
  <article class="dashboard-pick">
    <a href="${href}">
      <img src="${image}" alt="${title}">
      <div>
        <span>${kicker}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <strong>Open &#8594;</strong>
      </div>
    </a>
  </article>
`).join("");
