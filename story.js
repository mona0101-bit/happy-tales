const storyCountKey = "happy-tales-guest-story-count";
const storyHistoryKey = "happy-tales-story-history";
const guestLimit = 5;

const blockedPatterns = [
  { label: "poor language", words: ["fuck", "shit", "bitch", "asshole", "slur"] },
  { label: "sexual or adult content", words: ["sex", "sexy", "nude", "porn", "adult content"] },
  { label: "illegal or dangerous activity", words: ["steal", "rob", "shoplift", "drugs", "cocaine", "gun", "bomb", "weapon", "hack a bank"] },
  { label: "graphic violence or self-harm", words: ["kill", "murder", "suicide", "self harm", "torture", "graphic blood"] }
];

const surpriseIdeas = [
  "a child discovers a lantern that glows when someone tells the truth",
  "a sleepy cloud needs help finding its favorite star",
  "a paper boat carries a kind message across a garden pond",
  "a tiny library book opens a doorway to a friendly moonlit village",
  "a blanket fort becomes a castle where everyone must learn to share",
  "a lost button leads to a neighborhood kindness adventure",
  "a quiet robot learns how to ask a new friend for help",
  "a rainbow appears only after someone tries again"
];

const characters = [
  "Maya", "Leo", "Nia", "Sam", "Ari", "Jules", "Mina", "Toby", "Zoe", "Noah", "Ivy", "Owen",
  "Elara", "Mateo", "Priya", "Finn", "Amara", "Hugo", "Zuri", "Theo", "Esme", "Kai",
  "Juniper", "Rafi", "Cleo", "Idris", "Tessa", "Bodhi", "Anika", "Rowan", "Sora", "Felix",
  "Lila", "Omar", "Wren", "Dario", "Maeve", "Kian", "Ayla", "Nico", "Freya", "Jasper",
  "Imani", "Remy", "Sana", "Ellis", "Marisol", "Cian", "Ada", "Ravi", "Elodie", "Benji"
];
const helpers = ["a careful firefly", "a friendly moonbeam", "a soft-spoken turtle", "a wooden toy rabbit", "a map that redraws itself", "a tiny bell with a brave ring", "a humming bluebird", "a shy cloud", "a curious fox cub", "a pocket-sized robot"];
const places = ["the backyard garden", "a cozy pillow fort", "the library corner", "a sunny kitchen", "a quiet forest path", "the porch after rain", "a floating market", "a hill of windmills", "a seaside boardwalk", "a workshop beneath the stairs", "a field of giant sunflowers", "a village inside a clock"];
const problems = ["a friend feels left out", "something important has gone missing", "a small mistake needs a kind fix", "the path home looks unfamiliar", "everyone has a different idea", "a promise is difficult to keep", "a celebration cannot begin", "a message has reached the wrong person", "a bridge will only open for a thoughtful answer", "two neighbors have misunderstood each other"];
const goals = ["deliver a mysterious parcel before sunset", "help a newcomer feel welcome", "repair a music box before its final song", "guide a tiny parade home", "prepare a surprise for someone lonely", "solve three playful clues", "return a borrowed treasure", "teach a nervous creature a new skill"];
const discoveries = ["a doorway hidden behind painted leaves", "a note written in sparkling raindrops", "a trail of upside-down footprints", "a small key tucked inside a flower", "a song that points toward the next clue", "a paper star carrying a secret message", "a bridge woven from ribbons", "a friendly shadow that moves on its own"];
const solutions = ["build a plan from everyone's best idea", "turn an accidental mistake into a useful invention", "ask each neighbor for one small piece of help", "trade rushing for careful listening", "share the task so nobody has to solve it alone", "use a kind question to uncover the truth", "practice patiently until the difficult part becomes familiar", "create something new from the objects already nearby"];
const endings = [
  "That night, the room felt peaceful, and the lesson stayed warm in every heart.",
  "By bedtime, everyone had a gentle reason to smile and something kind to remember.",
  "The adventure ended with a deep breath, a cozy blanket, and one proud grin.",
  "When the stars appeared, they knew that small kind choices could brighten a whole day.",
  "The next morning, a tiny thank-you note waited by the window as proof that the adventure had mattered.",
  "They returned home with muddy shoes, happy hearts, and a brand-new story to tell.",
  "From then on, the place felt different because everyone remembered what they had learned together.",
  "The final clue became a keepsake, reminding them that thoughtful choices can change an ordinary day."
];
const plotTypes = ["quest", "mystery", "rescue", "invention", "welcome", "festival"];
const titleAdjectives = ["Bright", "Brave", "Moonlit", "Kind", "Hidden", "Gentle", "Silver", "Whispering", "Clockwork", "Rainbow", "Curious", "Golden", "Secret", "Starlit", "Dancing", "Pocket", "Glasswing", "Singing", "Wandering", "Wonderful"];
const titleNouns = ["Map", "Lantern", "Garden", "Promise", "Star", "Path", "Key", "Compass", "Bridge", "Kite", "Teapot", "Parade", "Door", "Orchard", "Harbor", "Song", "Cloud", "Bell", "River", "Workshop"];
const titlePlaces = ["Morning", "Fireflies", "Cloudberry Vale", "Tideglass Island", "Mossbell Hollow", "Aurora Harbor", "Paperwing Kingdom", "Sunpetal City", "Whispering Reef", "Starlace Canyon", "Clockwork Orchard", "Blue Hills", "Kind Neighbors", "Seven Winds", "Turning Seasons", "Tiny Wonders", "Friendly Stars", "Quiet Courage", "New Beginnings", "Shared Dreams"];
const gradeProfiles = {
  preschool: { label: "Preschool", age: 4, extra: 0 },
  kindergarten: { label: "Kindergarten", age: 5, extra: 0 },
  grade1: { label: "Grade 1", age: 6, extra: 0 },
  grade2: { label: "Grade 2", age: 7, extra: 1 },
  grade3: { label: "Grade 3", age: 8, extra: 1 },
  grade4: { label: "Grade 4", age: 9, extra: 2 },
  grade5: { label: "Grade 5", age: 10, extra: 2 },
  grade6: { label: "Grade 6", age: 11, extra: 3 }
};

const fallbackAIArtwork = [
  {
    image: "assets/moonlit-map.webp",
    alt: "A child exploring a glowing magical garden at night"
  },
  {
    image: "assets/hidden-library.webp",
    alt: "A child discovering a glowing library inside a garden tree"
  },
  {
    image: "assets/rainbow-ribbon.webp",
    alt: "A child sailing across a colorful magical pond"
  }
];

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function findBlockedTopics(text) {
  const normalized = text.toLowerCase();
  return blockedPatterns
    .filter(group => group.words.some(word => normalized.includes(word)))
    .map(group => group.label);
}

function hashText(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick(list, seed) {
  return list[seed % list.length];
}

function buildStory({ grade, mood, lesson, idea, length }) {
  const history = JSON.parse(localStorage.getItem(storyHistoryKey) || "[]");
  const profile = gradeProfiles[grade] || gradeProfiles.grade1;
  const age = profile.age;
  const prompt = idea.trim().replace(/[.!?]+$/, "") || surpriseIdeas.find(item => !history.some(entry => entry.prompt === item)) || `${pick(surpriseIdeas, Date.now())} with a surprising new clue`;
  const promptKey = prompt.toLowerCase();
  const version = history.filter(entry => String(entry.prompt).toLowerCase() === promptKey).length;
  let attempt = 0;
  let seed;
  let fingerprint;
  let elements;

  do {
    seed = hashText(`${age}|${mood}|${lesson}|${prompt}|${version}|${Date.now()}|${attempt}|${Math.random()}`);
    elements = {
      plot: pick(plotTypes, seed + 2),
      character: pick(characters, seed + 3),
      helper: pick(helpers, seed + 5),
      place: pick(places, seed + 7),
      problem: pick(problems, seed + 11),
      goal: pick(goals, seed + 13),
      discovery: pick(discoveries, seed + 17),
      solution: pick(solutions, seed + 19),
      ending: pick(endings, seed + 23)
    };
    fingerprint = `${Object.values(elements).join("|")}|${promptKey}|${version}`;
    attempt += 1;
  } while (history.some(entry => entry.fingerprint === fingerprint) && attempt < 80);

  const { plot, character, helper, place, problem, goal, discovery, solution, ending } = elements;
  let titleAttempt = 0;
  let title;
  do {
    title = `The ${pick(titleAdjectives, seed + 13 + titleAttempt)} ${pick(titleNouns, seed + 17 + titleAttempt * 3)} of ${pick(titlePlaces, seed + 19 + titleAttempt * 7)}`;
    titleAttempt += 1;
  } while (history.some(entry => entry.title === title) && titleAttempt < 200);

  const plots = {
    quest: [
      `${character}, age ${age}, began a ${mood.toLowerCase()} quest in ${place} after hearing about ${prompt}. The mission was to ${goal}.`,
      `At the first turn, ${character} met ${helper}, who revealed ${discovery}. It pointed forward, but also warned that ${problem}.`,
      `They crossed three unusual stops, making a different choice at each one and keeping ${lesson.toLowerCase()} at the center of the journey.`,
      `Near the destination, the obvious route failed. ${character} decided to ${solution}.`,
      `That choice opened the way, completed the quest, and showed why the goal mattered to more than just one person.`
    ],
    mystery: [
      `The mystery of ${prompt} began in ${place}, where ${character}, age ${age}, noticed ${discovery}.`,
      `${helper} had seen the same clue, but could not explain why ${problem}. Together they listed what they knew instead of guessing.`,
      `Each answer led somewhere unexpected, and one mistaken theory became the most useful clue of all.`,
      `${character} chose to ${solution}, revealing a gentle truth that everyone else had overlooked.`,
      `The mystery was solved without blame, and ${lesson.toLowerCase()} became the reason the answer brought people closer.`
    ],
    rescue: [
      `A call for help reached ${character}, age ${age}, in ${place}: ${prompt}.`,
      `With ${helper} nearby, ${character} set out to ${goal}, only to discover that ${problem}.`,
      `The rescue needed calm thinking rather than speed. A surprising sign, ${discovery}, offered a safer path.`,
      `${character} decided to ${solution}, giving every helper an important role.`,
      `The rescue succeeded, and the person being helped felt respected rather than helpless.`
    ],
    invention: [
      `In ${place}, ${character}, age ${age}, decided to build something inspired by ${prompt}. The invention was meant to ${goal}.`,
      `${helper} brought unusual supplies, but the first test failed because ${problem}.`,
      `Instead of throwing the idea away, ${character} studied ${discovery} and found a completely different approach.`,
      `They chose to ${solution}, transforming the failed pieces into the invention's best feature.`,
      `When it finally worked, the invention helped everyone and made ${lesson.toLowerCase()} visible in action.`
    ],
    welcome: [
      `${character}, age ${age}, noticed something new in ${place}: ${prompt}. It was clear that someone needed help feeling at home.`,
      `${helper} suggested they ${goal}, but ${problem} made the first welcome feel awkward.`,
      `Then ${character} discovered ${discovery} and realized that a good welcome begins by learning what another person actually enjoys.`,
      `${character} chose to ${solution}, and the gathering changed from a performance into a real friendship.`,
      `By the end, nobody felt like a visitor, and ${lesson.toLowerCase()} had created a place where everyone belonged.`
    ],
    festival: [
      `The annual celebration in ${place} was about to begin when ${prompt} changed every plan.`,
      `${character}, age ${age}, and ${helper} still hoped to ${goal}, but ${problem}.`,
      `Hidden beneath the decorations was ${discovery}, which inspired a brand-new kind of celebration.`,
      `Instead of rebuilding the old plan, ${character} chose to ${solution}.`,
      `The festival became more meaningful than anyone expected, all because ${lesson.toLowerCase()} mattered more than perfection.`
    ]
  };
  const storyParts = [
    ...plots[plot],
    `A unique clue made of ${version + 2} tiny marks appeared on ${discovery}, ensuring this journey followed a path no earlier adventure had taken.`,
    `${character} reflected on the day and understood how ${lesson.toLowerCase()} had changed the outcome.`,
    ending
  ];
  const paragraphCount = Math.min(storyParts.length, Math.max(3, Number(length) + 3 + profile.extra));
  let paragraphs = storyParts.slice(0, paragraphCount - 1).concat(ending);

  if (grade === "preschool") {
    paragraphs = [
      `${character} saw something new in ${place}. It was about ${prompt}.`,
      `${helper} came to help. They took small steps together.`,
      `A problem appeared. ${character} stopped, looked, and tried again.`,
      `They used ${lesson.toLowerCase()}. The plan worked. Everyone smiled.`,
      ending
    ];
  } else if (grade === "kindergarten") {
    paragraphs = [
      `${character} found a clue in ${place}. The clue was about ${prompt}.`,
      `${helper} joined the search. Together, they hoped to ${goal}.`,
      `The way was not easy because ${problem}. They listened and made a new plan.`,
      `${character} chose to ${solution}. That choice helped everyone.`,
      `They learned why ${lesson.toLowerCase()} matters. ${ending}`
    ];
  } else if (grade === "grade1") {
    paragraphs = paragraphs.map(paragraph => paragraph.replace(/; /g, ". "));
  } else if (profile.extra >= 2) {
    paragraphs.splice(
      Math.min(4, paragraphs.length - 1),
      0,
      `Before deciding, ${character} compared the evidence, considered how each choice might affect others, and revised the plan when a hidden assumption proved incomplete.`
    );
  }

  const story = {
    prompt,
    title,
    paragraphs,
    readingTime: Number(length),
    gradeLabel: profile.label,
    ...fallbackAIArtwork[seed % fallbackAIArtwork.length],
    imageStyle: {
      hue: seed % 42 - 21,
      positionX: 42 + (seed % 17)
    }
  };

  history.push({ prompt, title: story.title, fingerprint, plot, grade, createdAt: new Date().toISOString() });
  localStorage.setItem(storyHistoryKey, JSON.stringify(history.slice(-5000)));
  return story;
}

function getGuestCount() {
  return Number(localStorage.getItem(storyCountKey) || "0");
}

function updateAllowance() {
  const allowance = document.getElementById("storyAllowance");
  const account = getHappyTalesAccount();
  allowance.textContent = account
    ? `Signed in as ${account.name}, ${account.role}. Free unlimited stories are active.`
    : "Free unlimited guest stories are active.";
}

const storyForm = document.getElementById("storyForm");
const storyOutput = document.getElementById("storyOutput");
const submitButton = storyForm.querySelector('button[type="submit"]');

updateAllowance();

storyForm.addEventListener("submit", async event => {
  event.preventDefault();

  const account = getHappyTalesAccount();
  const count = getGuestCount();


  const grade = document.getElementById("grade").value;
  const mood = document.getElementById("mood").value;
  const lesson = document.getElementById("lesson").value;
  const length = document.getElementById("storyLength").value;
  const idea = document.getElementById("idea").value;
  const blocked = findBlockedTopics(`${mood} ${lesson} ${idea}`);

  if (blocked.length) {
    storyOutput.innerHTML = `
      <div class="status blocked">Story blocked by safety rules</div>
      <h2>Please try a child-safe idea.</h2>
      <p>Blocked topic: ${blocked.map(escapeHTML).join(", ")}.</p>
      <p>Try a gentle adventure, learning moment, friendship problem, or bedtime theme.</p>
    `;
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Creating story...";
  storyOutput.innerHTML = `
    <div class="status safe">Creating a brand-new tale</div>
    <h2>Your story is being written.</h2>
    <p>Happy Tales is building a unique tale from your idea and settings.</p>
  `;

  try {
    const story = buildStory({ grade, mood, lesson, idea, length });

    if (!account) {
      localStorage.setItem(storyCountKey, String(count + 1));
    }

    storyOutput.innerHTML = `
      <div class="status safe">Your story is ready</div>
      <h2>${escapeHTML(story.title)}</h2>
      <div class="chips"><span class="chip">${escapeHTML(story.gradeLabel)}</span><span class="chip">${story.readingTime} minute${story.readingTime === 1 ? "" : "s"}</span><span class="chip">${escapeHTML(lesson)}</span></div>
      ${story.paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      <div class="generation-note">This story was created from your prompt and saved to this browser's story history.</div>
    `;
    HappyLanguage.mountNarrationControls(storyOutput, () => `${story.title}. ${story.paragraphs.join(" ")}`, {
      onTranslation(translation, language) {
        let panel = storyOutput.querySelector(".translation-panel");
        if (!panel) {
          panel = document.createElement("section");
          panel.className = "translation-panel";
          storyOutput.appendChild(panel);
        }
        panel.innerHTML = `<p class="eyebrow">${HappyLanguage.languages[language].native}</p><p>${translation}</p>`;
      }
    });
    updateAllowance();
  } catch (error) {
    storyOutput.innerHTML = `
      <div class="status blocked">We could not create this story</div>
      <h2>Please try again.</h2>
      <p>${escapeHTML(error.message)}</p>
      <p>Your free story credit was not used.</p>
    `;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Create story";
  }
});
