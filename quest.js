const questStorageKey = "happy-tales-starpath-quest";
const gradeLabels = {
  preschool: "Preschool",
  kindergarten: "Kindergarten",
  grade1: "Grade 1",
  grade2: "Grade 2",
  grade3: "Grade 3",
  grade4: "Grade 4",
  grade5: "Grade 5",
  grade6: "Grade 6"
};
const campaignWorlds = [
  { id: 1, name: "Shattered Starlands", subtitle: "Forest, sky, and crystal coast", image: "assets/starpath-world-map.webp", icon: "&#9733;" },
  { id: 2, name: "Ember Volcanoes", subtitle: "Lava rivers and fire temples", image: "assets/world-2-lava.webp", icon: "&#127755;" },
  { id: 3, name: "Frozen Aurora", subtitle: "Ice castles and crystal caverns", image: "assets/world-3-ice.webp", icon: "&#10052;" },
  { id: 4, name: "Dream Candylands", subtitle: "Rainbow bridges and candy forests", image: "assets/world-4-dream.webp", icon: "&#127853;" },
  { id: 5, name: "Cosmic Starlands", subtitle: "Moon islands and the starlight palace", image: "assets/world-5-cosmic.webp", icon: "&#127776;" },
  { id: 6, name: "Jungle Ruins", subtitle: "Ancient vines and hidden temples", image: "assets/world-6-map.webp", icon: "&#127796;" },
  { id: 7, name: "Thunder Peaks", subtitle: "Storm towers and mountain bridges", image: "assets/world-7-map.webp", icon: "&#9889;" },
  { id: 8, name: "Sunken Kingdom", subtitle: "Coral halls and deep-sea gates", image: "assets/world-8-map.webp", icon: "&#128025;" },
  { id: 9, name: "Golden Desert", subtitle: "Sandstone mazes and oasis trails", image: "assets/world-9-map.webp", icon: "&#127964;" },
  { id: 10, name: "Clockwork City", subtitle: "Turning towers and gearwork streets", image: "assets/world-10-map.webp", icon: "&#9881;" },
  { id: 11, name: "Shadow Marsh", subtitle: "Moonlit swamps and glowing paths", image: "assets/world-11-map.webp", icon: "&#127769;" },
  { id: 12, name: "Crystal Highlands", subtitle: "Gem caves and mirrored mountains", image: "assets/world-12-map.webp", icon: "&#128142;" },
  { id: 13, name: "Dragonfire Isles", subtitle: "Flying islands and fiery fortresses", image: "assets/world-13-map.webp", icon: "&#128293;" },
  { id: 14, name: "Aurora Skyway", subtitle: "Rainbow clouds and comet roads", image: "assets/world-14-map.webp", icon: "&#127752;" },
  { id: 15, name: "Heart Star Citadel", subtitle: "The ultimate palace beyond the stars", image: "assets/world-15-map.webp", icon: "&#128081;" }
];
const worldQuestionThemes = [
  { place: "Starlands crystal trail", object: "star crystals" },
  { place: "Ember Volcano fire bridge", object: "ember stones" },
  { place: "Frozen Aurora ice gate", object: "snow crystals" },
  { place: "Dream Candylands rainbow road", object: "candy gems" },
  { place: "Cosmic Starlands moon portal", object: "moon lights" },
  { place: "Jungle Ruins vine temple", object: "jungle relics" },
  { place: "Thunder Peaks storm tower", object: "lightning orbs" },
  { place: "Sunken Kingdom coral gate", object: "pearls" },
  { place: "Golden Desert sun temple", object: "golden scarabs" },
  { place: "Clockwork City gear bridge", object: "clockwork cogs" },
  { place: "Shadow Marsh lantern path", object: "firefly lights" },
  { place: "Crystal Highlands prism cave", object: "rainbow gems" },
  { place: "Dragonfire Isles lava crossing", object: "dragon scales" },
  { place: "Aurora Skyway comet bridge", object: "aurora stars" },
  { place: "Heart Star Citadel final gate", object: "heart crystals" }
];
const pathways = {
  forest: { name: "Forest", symbol: "F", color: "#16a66a" },
  sky: { name: "Sky", symbol: "S", color: "#3478f6" },
  ocean: { name: "Ocean", symbol: "O", color: "#00a9b8" }
};

const characters = {
  fox: { name: "Sunny", species: "fox", icon: "&#129418;" },
  panda: { name: "Poppy", species: "panda", icon: "&#128060;" },
  owl: { name: "Hoot", species: "owl", icon: "&#129417;" },
  dolphin: { name: "Splash", species: "dolphin", icon: "&#128044;" },
  rabbit: { name: "Binky", species: "rabbit", icon: "&#128048;" },
  cat: { name: "Mimi", species: "cat", icon: "&#128049;" },
  bear: { name: "Teddy", species: "bear", icon: "&#128059;" },
  turtle: { name: "Tilly", species: "turtle", icon: "&#128034;" }
};

const levelMonsters = {
  forest: [
    { name: "Mossy Muncher", style: "moss-gobbler", symbol: "&#127807;" },
    { name: "Buttoncap Bouncer", style: "spore-stomper", symbol: "&#127812;" },
    { name: "Bramble Bumper", style: "thornback-beast", symbol: "&#10022;" },
    { name: "Old Root Rufus", style: "root-king", symbol: "&#9819;" }
  ],
  sky: [
    { name: "Cloudy Nibbler", style: "cloud-chomper", symbol: "&#9729;" },
    { name: "Gusty Gus", style: "gust-golem", symbol: "&#8635;" },
    { name: "Sparkle Sphinx", style: "storm-sphinx", symbol: "&#9733;" },
    { name: "Thunder Tumbles", style: "thunder-titan", symbol: "&#9889;" }
  ],
  ocean: [
    { name: "Bubbly Bob", style: "bubble-brute", symbol: "&#9675;" },
    { name: "Riley Reef", style: "reef-rumbler", symbol: "&#10047;" },
    { name: "Kelp Twirler", style: "kelp-kraken", symbol: "&#8767;" },
    { name: "Moonfin Mira", style: "moonfin-guardian", symbol: "&#9789;" }
  ]
};

const campaignLayouts = [
  [[49,88],[39,77],[30,68],[22,56],[14,40],[49,70],[49,55],[53,38],[58,19],[59,77],[68,69],[76,58],[86,43]],
  [[50,89],[42,78],[31,69],[20,57],[12,39],[50,73],[50,57],[49,40],[48,20],[59,78],[69,68],[78,55],[88,36]],
  [[50,88],[36,79],[25,67],[18,52],[12,34],[49,74],[55,60],[61,44],[66,25],[62,80],[74,70],[82,57],[88,41]],
  [[50,89],[39,80],[29,70],[20,58],[14,42],[51,72],[54,57],[50,42],[43,25],[61,80],[72,70],[80,57],[86,39]],
  [[49,89],[36,79],[27,66],[22,49],[30,30],[49,73],[55,58],[63,43],[70,24],[62,80],[73,72],[82,60],[88,43]],
  [[50,88],[38,79],[27,69],[18,56],[13,38],[50,73],[47,57],[52,42],[60,25],[62,79],[72,68],[81,54],[88,36]],
  [[50,89],[40,79],[31,66],[26,49],[20,30],[50,72],[55,56],[60,40],[63,21],[61,80],[71,70],[80,57],[87,40]],
  [[50,89],[37,80],[26,71],[19,58],[15,41],[49,73],[53,58],[58,43],[64,25],[63,80],[73,69],[82,55],[88,37]],
  [[50,89],[40,80],[30,71],[22,59],[16,43],[50,72],[48,56],[53,40],[60,23],[61,80],[72,70],[81,58],[88,42]],
  [[50,89],[37,80],[27,68],[20,53],[16,35],[50,74],[56,59],[62,44],[67,27],[63,80],[74,69],[82,55],[88,38]],
  [[50,89],[39,79],[28,68],[18,54],[13,36],[50,72],[46,56],[51,40],[58,23],[61,80],[72,70],[81,57],[88,40]],
  [[50,89],[38,80],[26,69],[18,55],[12,37],[50,73],[55,57],[60,41],[66,23],[62,80],[73,69],[82,55],[89,36]],
  [[50,89],[39,79],[29,67],[22,51],[18,32],[50,73],[47,57],[52,41],[60,23],[62,80],[73,70],[82,57],[88,40]],
  [[50,89],[37,80],[26,70],[18,57],[13,40],[50,72],[56,56],[63,40],[69,22],[63,80],[74,69],[83,54],[89,36]],
  [[50,89],[39,79],[29,68],[20,54],[14,36],[50,73],[50,56],[50,39],[50,20],[61,79],[72,68],[81,54],[87,36]]
];

function layoutForWorld(worldId) {
  const points = campaignLayouts[worldId - 1] || campaignLayouts[0];
  const ids = ["start","forest1","forest2","forest3","forest4","sky1","sky2","sky3","sky4","ocean1","ocean2","ocean3","ocean4"];
  return Object.fromEntries(ids.map((id, index) => [id, points[index]]));
}

function routeMarkup(layout, ids, className) {
  const points = ids.map(id => layout[id].join(",")).join(" ");
  return `<polyline class="route-shadow" points="${points}"/><polyline class="${className}" points="${points}"/>`;
}

function monsterFor(level) {
  return levelMonsters[level.path][level.stage - 1].name;
}

function monsterDetailsFor(level) {
  return levelMonsters[level.path][level.stage - 1];
}

function monsterMarkup(level) {
  const monster = monsterDetailsFor(level);
  return `<span class="quest-monster monster-${level.path} monster-${monster.style}" aria-label="${monster.name}"><i></i><b aria-hidden="true">${monster.symbol}</b></span>`;
}

const directionLayouts = [
  [
    "#########",
    "#S..*...#",
    "#.#.###.#",
    "#.#...*.#",
    "#.###.#.#",
    "#*....#G#",
    "#########"
  ],
  [
    "#########",
    "#S..#..G#",
    "#.#.#.#.#",
    "#*#...#.#",
    "#.#####.#",
    "#...*...#",
    "#########"
  ],
  [
    "#########",
    "#S....*.#",
    "#.#####.#",
    "#...*.#.#",
    "###.#.#.#",
    "#...#..G#",
    "#########"
  ],
  [
    "#########",
    "#S#.....#",
    "#.#.###*#",
    "#...#...#",
    "#.###.#.#",
    "#*....#G#",
    "#########"
  ]
];

const questLevels = [
  { id: "forest1", stage: 1, path: "forest", title: "Whispering Grove", story: "The Heart Star's green light is trapped beneath roots that hum like tiny instruments.", question: "Which living thing helps a forest make fresh air?", answers: ["Trees", "Rocks", "Clouds"], correct: 0, reward: 3 },
  { id: "sky1", stage: 1, path: "sky", title: "Cloudstep Bridge", story: "A bridge of clouds appears only when its number-stones are placed in the right order.", question: "What number comes next: 4, 8, 12, ___?", answers: ["14", "16", "18"], correct: 1, reward: 3 },
  { id: "ocean1", stage: 1, path: "ocean", title: "Coral Gate", story: "The coral gate needs a kind word before it will open for the sea creatures waiting outside.", question: "Which word means working well with others?", answers: ["Teamwork", "Silence", "Hurry"], correct: 0, reward: 3 },
  { id: "forest2", stage: 2, path: "forest", title: "Mushroom Lanterns", story: "Glowing mushrooms reveal a pattern across the dark woodland floor.", question: "Which symbol completes the pattern: circle, star, circle, star, ___?", answers: ["Square", "Circle", "Triangle"], correct: 1, reward: 4 },
  { id: "sky2", stage: 2, path: "sky", title: "Windmill Heights", story: "Three windmills have stopped, and the floating village is slowly losing power.", question: "Moving air is called what?", answers: ["Wind", "Stone", "Soil"], correct: 0, reward: 4 },
  { id: "ocean2", stage: 2, path: "ocean", title: "Tidepool Code", story: "Tiny crabs tap a secret code on shells beside the rising tide.", question: "If 3 crabs each carry 2 shells, how many shells are there?", answers: ["5", "6", "8"], correct: 1, reward: 4 },
  { id: "forest3", stage: 3, path: "forest", title: "Ancient Tree Door", story: "An old tree opens a wooden door when explorers choose the most thoughtful action.", question: "You find a lost baby bird. What is the safest first step?", answers: ["Ask a trusted adult for help", "Take it far away", "Shout at it"], correct: 0, reward: 5 },
  { id: "sky3", stage: 3, path: "sky", title: "Constellation Race", story: "Stars connect into a trail, but one direction is missing from the navigator's compass.", question: "Which direction is opposite east?", answers: ["North", "West", "South"], correct: 1, reward: 5 },
  { id: "ocean3", stage: 3, path: "ocean", title: "Submarine Garden", story: "A garden beneath the waves needs the correct amount of light to bloom.", question: "Plants use light to make food in a process called what?", answers: ["Evaporation", "Photosynthesis", "Migration"], correct: 1, reward: 5 },
  { id: "forest4", stage: 4, path: "forest", title: "Emerald Star Shrine", story: "The forest shard waits inside a shrine protected by one final number riddle.", question: "What is 7 x 6?", answers: ["36", "42", "48"], correct: 1, reward: 8 },
  { id: "sky4", stage: 4, path: "sky", title: "Summit of Sunbeams", story: "The sky shard floats above the highest cloud, surrounded by three glowing words.", question: "Which word is spelled correctly?", answers: ["Beutiful", "Beautiful", "Beautifull"], correct: 1, reward: 8 },
  { id: "ocean4", stage: 4, path: "ocean", title: "Pearl Moon Palace", story: "The ocean shard is hidden in a palace where every promise must be honest.", question: "Which choice shows honesty?", answers: ["Blame someone else", "Tell the truth about a mistake", "Hide what happened"], correct: 1, reward: 8 }
];

const bonusQuestionPools = {
  "science": [
    {
      "question": "Which animal says moo?",
      "answers": [
        "Cow",
        "Dog",
        "Duck",
        "Cat"
      ],
      "correct": 0
    },
    {
      "question": "What do we use to smell flowers?",
      "answers": [
        "Nose",
        "Hands",
        "Feet",
        "Ears"
      ],
      "correct": 0
    },
    {
      "question": "What falls from clouds as drops?",
      "answers": [
        "Rain",
        "Sand",
        "Leaves",
        "Rocks"
      ],
      "correct": 0
    },
    {
      "question": "Which is a living thing?",
      "answers": [
        "Tree",
        "Chair",
        "Ball",
        "Shoe"
      ],
      "correct": 0
    },
    {
      "question": "What color is grass most often?",
      "answers": [
        "Green",
        "Purple",
        "Black",
        "Orange"
      ],
      "correct": 0
    },
    {
      "question": "What do plants need to grow?",
      "answers": [
        "Water and sunlight",
        "Plastic and metal",
        "Only rocks",
        "Only darkness"
      ],
      "correct": 0
    },
    {
      "question": "Which season is often cold and snowy?",
      "answers": [
        "Winter",
        "Summer",
        "Spring",
        "Autumn"
      ],
      "correct": 0
    },
    {
      "question": "Which animal lives in water and has fins?",
      "answers": [
        "Fish",
        "Horse",
        "Chicken",
        "Rabbit"
      ],
      "correct": 0
    },
    {
      "question": "What lights Earth during the day?",
      "answers": [
        "The Sun",
        "The Moon",
        "A candle",
        "A flashlight"
      ],
      "correct": 0
    },
    {
      "question": "Which object is non-living?",
      "answers": [
        "Rock",
        "Dog",
        "Flower",
        "Bird"
      ],
      "correct": 0
    },
    {
      "question": "What part of a plant takes in water from soil?",
      "answers": [
        "Roots",
        "Petals",
        "Fruit",
        "Seeds"
      ],
      "correct": 0
    },
    {
      "question": "Which material is attracted to a magnet?",
      "answers": [
        "Iron",
        "Wood",
        "Paper",
        "Plastic"
      ],
      "correct": 0
    },
    {
      "question": "What sense uses your ears?",
      "answers": [
        "Hearing",
        "Taste",
        "Smell",
        "Touch"
      ],
      "correct": 0
    },
    {
      "question": "What is a young frog called?",
      "answers": [
        "Tadpole",
        "Cub",
        "Chick",
        "Calf"
      ],
      "correct": 0
    },
    {
      "question": "Which state of matter keeps its own shape?",
      "answers": [
        "Solid",
        "Liquid",
        "Gas",
        "Steam"
      ],
      "correct": 0
    },
    {
      "question": "What is water vapor turning into liquid called?",
      "answers": [
        "Condensation",
        "Melting",
        "Freezing",
        "Cutting"
      ],
      "correct": 0
    },
    {
      "question": "What do animals need to survive?",
      "answers": [
        "Food, water, and shelter",
        "Only toys",
        "Only rocks",
        "Only sunlight"
      ],
      "correct": 0
    },
    {
      "question": "What part of the water cycle falls from clouds?",
      "answers": [
        "Precipitation",
        "Evaporation",
        "Collection",
        "Magnetism"
      ],
      "correct": 0
    },
    {
      "question": "What do herbivores eat?",
      "answers": [
        "Plants",
        "Only meat",
        "Rocks",
        "Metal"
      ],
      "correct": 0
    },
    {
      "question": "Which layer covers most of Earth?",
      "answers": [
        "Water",
        "Plastic",
        "Glass",
        "Metal"
      ],
      "correct": 0
    },
    {
      "question": "Which force pulls objects toward Earth?",
      "answers": [
        "Gravity",
        "Friction only",
        "Light",
        "Sound"
      ],
      "correct": 0
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "answers": [
        "Mars",
        "Venus",
        "Mercury",
        "Neptune"
      ],
      "correct": 0
    },
    {
      "question": "What do bees collect from flowers?",
      "answers": [
        "Nectar",
        "Salt",
        "Sand",
        "Snow"
      ],
      "correct": 0
    },
    {
      "question": "What is at the center of our solar system?",
      "answers": [
        "The Sun",
        "Earth",
        "The Moon",
        "Mars"
      ],
      "correct": 0
    },
    {
      "question": "What helps a fish breathe underwater?",
      "answers": [
        "Gills",
        "Feathers",
        "Fur",
        "Claws"
      ],
      "correct": 0
    },
    {
      "question": "Which organ pumps blood through the body?",
      "answers": [
        "Heart",
        "Lung",
        "Stomach",
        "Brain"
      ],
      "correct": 0
    },
    {
      "question": "What carries electrical energy in a closed circuit?",
      "answers": [
        "Electric current",
        "Sand",
        "Ice",
        "Smoke"
      ],
      "correct": 0
    },
    {
      "question": "What type of energy do we hear?",
      "answers": [
        "Sound energy",
        "Chemical taste",
        "Gravity only",
        "Still water"
      ],
      "correct": 0
    },
    {
      "question": "What happens when light bounces off a mirror?",
      "answers": [
        "Reflection",
        "Evaporation",
        "Digestion",
        "Freezing"
      ],
      "correct": 0
    },
    {
      "question": "Which body system helps you breathe?",
      "answers": [
        "Respiratory system",
        "Digestive system",
        "Skeletal system",
        "Muscular system"
      ],
      "correct": 0
    },
    {
      "question": "What is the basic unit of life?",
      "answers": [
        "Cell",
        "Planet",
        "Rock",
        "Cloud"
      ],
      "correct": 0
    },
    {
      "question": "Which body system moves blood around the body?",
      "answers": [
        "Circulatory system",
        "Digestive system",
        "Skeletal system",
        "Respiratory system"
      ],
      "correct": 0
    },
    {
      "question": "What force keeps planets moving around the Sun?",
      "answers": [
        "Gravity",
        "Friction",
        "Sound",
        "Taste"
      ],
      "correct": 0
    },
    {
      "question": "What is a change that makes a new substance called?",
      "answers": [
        "Chemical change",
        "Physical sorting",
        "Measuring",
        "Mixing colors only"
      ],
      "correct": 0
    },
    {
      "question": "Which structure controls many cell activities?",
      "answers": [
        "Nucleus",
        "Wall outlet",
        "River",
        "Feather"
      ],
      "correct": 0
    },
    {
      "question": "What process do plants use to make food?",
      "answers": [
        "Photosynthesis",
        "Condensation",
        "Erosion",
        "Magnetism"
      ],
      "correct": 0
    },
    {
      "question": "What are inherited traits passed through?",
      "answers": [
        "Genes",
        "Clouds",
        "Rocks",
        "Shadows"
      ],
      "correct": 0
    },
    {
      "question": "What theory explains the movement of Earth's plates?",
      "answers": [
        "Plate tectonics",
        "Photosynthesis",
        "Evaporation",
        "Reflection"
      ],
      "correct": 0
    },
    {
      "question": "What variable is changed on purpose in an experiment?",
      "answers": [
        "Independent variable",
        "Dependent variable",
        "Control group",
        "Conclusion"
      ],
      "correct": 0
    },
    {
      "question": "What type of rock forms from cooled lava or magma?",
      "answers": [
        "Igneous rock",
        "Plastic rock",
        "Paper rock",
        "Cloud rock"
      ],
      "correct": 0
    }
  ],
  "geography": [
    {
      "question": "What is the capital of Canada?",
      "answers": [
        "Ottawa",
        "Washington, D.C.",
        "Mexico City",
        "Brasília"
      ],
      "correct": 0
    },
    {
      "question": "Ottawa is the capital of which country?",
      "answers": [
        "Canada",
        "United States",
        "Mexico",
        "Brazil"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Canada in?",
      "answers": [
        "North America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of United States?",
      "answers": [
        "Washington, D.C.",
        "Mexico City",
        "Brasília",
        "Buenos Aires"
      ],
      "correct": 0
    },
    {
      "question": "Washington, D.C. is the capital of which country?",
      "answers": [
        "United States",
        "Mexico",
        "Brazil",
        "Argentina"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is United States in?",
      "answers": [
        "North America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Mexico?",
      "answers": [
        "Mexico City",
        "Brasília",
        "Buenos Aires",
        "Lima"
      ],
      "correct": 0
    },
    {
      "question": "Mexico City is the capital of which country?",
      "answers": [
        "Mexico",
        "Brazil",
        "Argentina",
        "Peru"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Mexico in?",
      "answers": [
        "North America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Brazil?",
      "answers": [
        "Brasília",
        "Buenos Aires",
        "Lima",
        "Santiago"
      ],
      "correct": 0
    },
    {
      "question": "Brasília is the capital of which country?",
      "answers": [
        "Brazil",
        "Argentina",
        "Peru",
        "Chile"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Brazil in?",
      "answers": [
        "South America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Argentina?",
      "answers": [
        "Buenos Aires",
        "Lima",
        "Santiago",
        "Bogotá"
      ],
      "correct": 0
    },
    {
      "question": "Buenos Aires is the capital of which country?",
      "answers": [
        "Argentina",
        "Peru",
        "Chile",
        "Colombia"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Argentina in?",
      "answers": [
        "South America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Peru?",
      "answers": [
        "Lima",
        "Santiago",
        "Bogotá",
        "Paris"
      ],
      "correct": 0
    },
    {
      "question": "Lima is the capital of which country?",
      "answers": [
        "Peru",
        "Chile",
        "Colombia",
        "France"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Peru in?",
      "answers": [
        "South America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Chile?",
      "answers": [
        "Santiago",
        "Bogotá",
        "Paris",
        "Rome"
      ],
      "correct": 0
    },
    {
      "question": "Santiago is the capital of which country?",
      "answers": [
        "Chile",
        "Colombia",
        "France",
        "Italy"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Chile in?",
      "answers": [
        "South America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Colombia?",
      "answers": [
        "Bogotá",
        "Paris",
        "Rome",
        "Madrid"
      ],
      "correct": 0
    },
    {
      "question": "Bogotá is the capital of which country?",
      "answers": [
        "Colombia",
        "France",
        "Italy",
        "Spain"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Colombia in?",
      "answers": [
        "South America",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of France?",
      "answers": [
        "Paris",
        "Rome",
        "Madrid",
        "Berlin"
      ],
      "correct": 0
    },
    {
      "question": "Paris is the capital of which country?",
      "answers": [
        "France",
        "Italy",
        "Spain",
        "Germany"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is France in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Italy?",
      "answers": [
        "Rome",
        "Madrid",
        "Berlin",
        "Athens"
      ],
      "correct": 0
    },
    {
      "question": "Rome is the capital of which country?",
      "answers": [
        "Italy",
        "Spain",
        "Germany",
        "Greece"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Italy in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Spain?",
      "answers": [
        "Madrid",
        "Berlin",
        "Athens",
        "Oslo"
      ],
      "correct": 0
    },
    {
      "question": "Madrid is the capital of which country?",
      "answers": [
        "Spain",
        "Germany",
        "Greece",
        "Norway"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Spain in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Germany?",
      "answers": [
        "Berlin",
        "Athens",
        "Oslo",
        "Stockholm"
      ],
      "correct": 0
    },
    {
      "question": "Berlin is the capital of which country?",
      "answers": [
        "Germany",
        "Greece",
        "Norway",
        "Sweden"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Germany in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Greece?",
      "answers": [
        "Athens",
        "Oslo",
        "Stockholm",
        "Dublin"
      ],
      "correct": 0
    },
    {
      "question": "Athens is the capital of which country?",
      "answers": [
        "Greece",
        "Norway",
        "Sweden",
        "Ireland"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Greece in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Norway?",
      "answers": [
        "Oslo",
        "Stockholm",
        "Dublin",
        "Cairo"
      ],
      "correct": 0
    },
    {
      "question": "Oslo is the capital of which country?",
      "answers": [
        "Norway",
        "Sweden",
        "Ireland",
        "Egypt"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Norway in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Sweden?",
      "answers": [
        "Stockholm",
        "Dublin",
        "Cairo",
        "Nairobi"
      ],
      "correct": 0
    },
    {
      "question": "Stockholm is the capital of which country?",
      "answers": [
        "Sweden",
        "Ireland",
        "Egypt",
        "Kenya"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Sweden in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Ireland?",
      "answers": [
        "Dublin",
        "Cairo",
        "Nairobi",
        "Pretoria"
      ],
      "correct": 0
    },
    {
      "question": "Dublin is the capital of which country?",
      "answers": [
        "Ireland",
        "Egypt",
        "Kenya",
        "South Africa"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Ireland in?",
      "answers": [
        "Europe",
        "Africa",
        "Asia",
        "Australia"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Egypt?",
      "answers": [
        "Cairo",
        "Nairobi",
        "Pretoria",
        "Abuja"
      ],
      "correct": 0
    },
    {
      "question": "Cairo is the capital of which country?",
      "answers": [
        "Egypt",
        "Kenya",
        "South Africa",
        "Nigeria"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Egypt in?",
      "answers": [
        "Africa",
        "Asia",
        "Australia",
        "Europe"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Kenya?",
      "answers": [
        "Nairobi",
        "Pretoria",
        "Abuja",
        "Rabat"
      ],
      "correct": 0
    },
    {
      "question": "Nairobi is the capital of which country?",
      "answers": [
        "Kenya",
        "South Africa",
        "Nigeria",
        "Morocco"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Kenya in?",
      "answers": [
        "Africa",
        "Asia",
        "Australia",
        "Europe"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of South Africa?",
      "answers": [
        "Pretoria",
        "Abuja",
        "Rabat",
        "Accra"
      ],
      "correct": 0
    },
    {
      "question": "Pretoria is the capital of which country?",
      "answers": [
        "South Africa",
        "Nigeria",
        "Morocco",
        "Ghana"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is South Africa in?",
      "answers": [
        "Africa",
        "Asia",
        "Australia",
        "Europe"
      ],
      "correct": 0
    },
    {
      "question": "What is the capital of Nigeria?",
      "answers": [
        "Abuja",
        "Rabat",
        "Accra",
        "Tokyo"
      ],
      "correct": 0
    },
    {
      "question": "Abuja is the capital of which country?",
      "answers": [
        "Nigeria",
        "Morocco",
        "Ghana",
        "Japan"
      ],
      "correct": 0
    },
    {
      "question": "Which continent is Nigeria in?",
      "answers": [
        "Africa",
        "Asia",
        "Australia",
        "Europe"
      ],
      "correct": 0
    }
  ],
  "english": [
    {
      "question": "Which word rhymes with cat?",
      "answers": [
        "Hat",
        "Sun",
        "Dog",
        "Book"
      ],
      "correct": 0
    },
    {
      "question": "Which letter starts the word dog?",
      "answers": [
        "D",
        "B",
        "M",
        "S"
      ],
      "correct": 0
    },
    {
      "question": "Which word means the opposite of up?",
      "answers": [
        "Down",
        "Over",
        "Blue",
        "Fast"
      ],
      "correct": 0
    },
    {
      "question": "Which word is spelled correctly?",
      "answers": [
        "School",
        "Skool",
        "Scool",
        "Shcool"
      ],
      "correct": 0
    },
    {
      "question": "Which word rhymes with cake?",
      "answers": [
        "Lake",
        "Chair",
        "Book",
        "Tree"
      ],
      "correct": 0
    },
    {
      "question": "Which word names a person?",
      "answers": [
        "Teacher",
        "Run",
        "Blue",
        "Quickly"
      ],
      "correct": 0
    },
    {
      "question": "Which word is a noun?",
      "answers": [
        "Teacher",
        "Run",
        "Quickly",
        "Blue"
      ],
      "correct": 0
    },
    {
      "question": "Which word is a verb?",
      "answers": [
        "Jump",
        "Table",
        "Happy",
        "Green"
      ],
      "correct": 0
    },
    {
      "question": "Which word is an adjective?",
      "answers": [
        "Small",
        "Run",
        "Table",
        "Quickly"
      ],
      "correct": 0
    },
    {
      "question": "Choose the antonym of hot.",
      "answers": [
        "Cold",
        "Warm",
        "Boiling",
        "Sunny"
      ],
      "correct": 0
    },
    {
      "question": "Choose the synonym of happy.",
      "answers": [
        "Glad",
        "Sad",
        "Angry",
        "Sleepy"
      ],
      "correct": 0
    },
    {
      "question": "Which sentence asks a question?",
      "answers": [
        "Where is the book?",
        "The book is here.",
        "I found it.",
        "The book is red."
      ],
      "correct": 0
    },
    {
      "question": "Which sentence is complete?",
      "answers": [
        "The bird flew away.",
        "Because it rained.",
        "Running quickly.",
        "Under the table."
      ],
      "correct": 0
    },
    {
      "question": "Which word is a plural noun?",
      "answers": [
        "Boxes",
        "Box",
        "Runs",
        "Happy"
      ],
      "correct": 0
    },
    {
      "question": "Which word is an adverb?",
      "answers": [
        "Carefully",
        "Careful",
        "Care",
        "Car"
      ],
      "correct": 0
    },
    {
      "question": "Which sentence uses a comma correctly?",
      "answers": [
        "After lunch, we went outside.",
        "After lunch we, went outside.",
        "After, lunch we went outside.",
        "After lunch we went, outside."
      ],
      "correct": 0
    },
    {
      "question": "Which word is a pronoun?",
      "answers": [
        "They",
        "Mountain",
        "Blue",
        "Quickly"
      ],
      "correct": 0
    },
    {
      "question": "Which word is a conjunction?",
      "answers": [
        "Because",
        "Mountain",
        "Quickly",
        "Blue"
      ],
      "correct": 0
    },
    {
      "question": "Which sentence has correct subject-verb agreement?",
      "answers": [
        "The dogs are barking.",
        "The dogs is barking.",
        "The dog are barking.",
        "The dogs be barking."
      ],
      "correct": 0
    },
    {
      "question": "Which word is a proper noun?",
      "answers": [
        "Canada",
        "country",
        "river",
        "teacher"
      ],
      "correct": 0
    },
    {
      "question": "Which sentence uses a semicolon correctly?",
      "answers": [
        "I studied hard; I passed the test.",
        "I studied; hard I passed the test.",
        "I; studied hard I passed the test.",
        "I studied hard I; passed the test."
      ],
      "correct": 0
    },
    {
      "question": "Which word is a preposition?",
      "answers": [
        "Between",
        "Beautiful",
        "Running",
        "Happiness"
      ],
      "correct": 0
    },
    {
      "question": "Which sentence uses an apostrophe for possession?",
      "answers": [
        "Maya's backpack is blue.",
        "Mayas backpack is blue.",
        "Maya backpack's is blue.",
        "Mayas' backpack is blue."
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'happy'.",
      "answers": [
        "glad",
        "cold",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'big'.",
      "answers": [
        "large",
        "down",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'small'.",
      "answers": [
        "tiny",
        "right",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'fast'.",
      "answers": [
        "quick",
        "late",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'smart'.",
      "answers": [
        "clever",
        "outside",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'quiet'.",
      "answers": [
        "silent",
        "after",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'begin'.",
      "answers": [
        "start",
        "night",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'finish'.",
      "answers": [
        "end",
        "full",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'angry'.",
      "answers": [
        "mad",
        "hard",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'easy'.",
      "answers": [
        "simple",
        "far",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'hard'.",
      "answers": [
        "difficult",
        "closed",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose a synonym for 'brave'.",
      "answers": [
        "courageous",
        "old",
        "wrong",
        "slow"
      ],
      "correct": 0
    },
    {
      "question": "Choose an antonym for 'hot'.",
      "answers": [
        "cold",
        "glad",
        "hot",
        "same"
      ],
      "correct": 0
    },
    {
      "question": "Choose an antonym for 'up'.",
      "answers": [
        "down",
        "large",
        "up",
        "same"
      ],
      "correct": 0
    },
    {
      "question": "Choose an antonym for 'left'.",
      "answers": [
        "right",
        "tiny",
        "left",
        "same"
      ],
      "correct": 0
    },
    {
      "question": "Choose an antonym for 'early'.",
      "answers": [
        "late",
        "quick",
        "early",
        "same"
      ],
      "correct": 0
    },
    {
      "question": "Choose an antonym for 'inside'.",
      "answers": [
        "outside",
        "clever",
        "inside",
        "same"
      ],
      "correct": 0
    }
  ],
  "math": [
    {
      "question": "Pip sees 2 moons and 3 stars. How many objects are there altogether?",
      "answers": [
        "5",
        "4",
        "6",
        "2"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 3 moons and 1 stars. How many objects are there altogether?",
      "answers": [
        "4",
        "3",
        "5",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 4 moons and 3 stars. How many objects are there altogether?",
      "answers": [
        "7",
        "6",
        "8",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 5 moons and 1 stars. How many objects are there altogether?",
      "answers": [
        "6",
        "5",
        "7",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 1 moons and 3 stars. How many objects are there altogether?",
      "answers": [
        "4",
        "3",
        "5",
        "1"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 2 moons and 1 stars. How many objects are there altogether?",
      "answers": [
        "3",
        "2",
        "4",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 3 moons and 3 stars. How many objects are there altogether?",
      "answers": [
        "6",
        "5",
        "7",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 4 moons and 1 stars. How many objects are there altogether?",
      "answers": [
        "5",
        "4",
        "6",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 5 moons and 3 stars. How many objects are there altogether?",
      "answers": [
        "8",
        "7",
        "9",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "Pip sees 1 moons and 1 stars. How many objects are there altogether?",
      "answers": [
        "2",
        "1",
        "3",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 2 + 4?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "What is 7 - 3?",
      "answers": [
        "4",
        "3",
        "5",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 4 or 2?",
      "answers": [
        "4",
        "2",
        "They are equal",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "What is 5 - 5?",
      "answers": [
        "0",
        "1",
        "5",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 6 + 8?",
      "answers": [
        "14",
        "13",
        "15",
        "16"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 7 or 3?",
      "answers": [
        "7",
        "3",
        "They are equal",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "What is 8 + 6?",
      "answers": [
        "14",
        "13",
        "15",
        "16"
      ],
      "correct": 0
    },
    {
      "question": "What is 9 - 1?",
      "answers": [
        "8",
        "7",
        "9",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 10 or 4?",
      "answers": [
        "10",
        "4",
        "They are equal",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "What is 7 - 1?",
      "answers": [
        "6",
        "5",
        "7",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 2 + 2?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 5 or 3?",
      "answers": [
        "5",
        "3",
        "They are equal",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "What is 4 + 8?",
      "answers": [
        "12",
        "11",
        "13",
        "14"
      ],
      "correct": 0
    },
    {
      "question": "What is 5 - 3?",
      "answers": [
        "2",
        "1",
        "3",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 6 or 6?",
      "answers": [
        "They are equal",
        "6",
        "7",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 8 + 4?",
      "answers": [
        "12",
        "11",
        "13",
        "14"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 9 or 7?",
      "answers": [
        "9",
        "7",
        "They are equal",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "What is 10 + 2?",
      "answers": [
        "12",
        "11",
        "13",
        "14"
      ],
      "correct": 0
    },
    {
      "question": "What is 5 - 1?",
      "answers": [
        "4",
        "3",
        "5",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 8 or 2?",
      "answers": [
        "8",
        "2",
        "They are equal",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "What is 3 - 3?",
      "answers": [
        "0",
        "1",
        "3",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 4 + 6?",
      "answers": [
        "10",
        "9",
        "11",
        "12"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 5 or 1?",
      "answers": [
        "5",
        "1",
        "They are equal",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "What is 6 + 4?",
      "answers": [
        "10",
        "9",
        "11",
        "12"
      ],
      "correct": 0
    },
    {
      "question": "What is 7 - 7?",
      "answers": [
        "0",
        "1",
        "7",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 9 - 5?",
      "answers": [
        "4",
        "3",
        "5",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "What is 10 + 8?",
      "answers": [
        "18",
        "17",
        "19",
        "20"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 3 or 1?",
      "answers": [
        "3",
        "1",
        "They are equal",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "What is 2 + 6?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "What is 3 - 1?",
      "answers": [
        "2",
        "1",
        "3",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 4 or 4?",
      "answers": [
        "They are equal",
        "4",
        "5",
        "Not correct"
      ],
      "correct": 0
    },
    {
      "question": "What is 7 - 5?",
      "answers": [
        "2",
        "1",
        "3",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "What is 6 + 2?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 7 or 5?",
      "answers": [
        "7",
        "5",
        "They are equal",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "What is 8 + 8?",
      "answers": [
        "16",
        "15",
        "17",
        "18"
      ],
      "correct": 0
    },
    {
      "question": "What is 9 - 3?",
      "answers": [
        "6",
        "5",
        "7",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 10 or 6?",
      "answers": [
        "10",
        "6",
        "They are equal",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "What is 1 - 1?",
      "answers": [
        "0",
        "1",
        "Not correct",
        "Another answer"
      ],
      "correct": 0
    },
    {
      "question": "What is 4 + 2?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "Which number is greater: 8 or 6?",
      "answers": [
        "8",
        "6",
        "They are equal",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "What is 17 + 7?",
      "answers": [
        "24",
        "25",
        "23",
        "34"
      ],
      "correct": 0
    },
    {
      "question": "3 quarters and 5 dimes equal how many cents?",
      "answers": [
        "125",
        "115",
        "135",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "A dragon has 31 gems and gives away 17. How many gems are left?",
      "answers": [
        "14",
        "15",
        "13",
        "48"
      ],
      "correct": 0
    },
    {
      "question": "What is 38 + 22?",
      "answers": [
        "60",
        "61",
        "59",
        "70"
      ],
      "correct": 0
    },
    {
      "question": "2 quarters and 1 dime equal how many cents?",
      "answers": [
        "60",
        "50",
        "70",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "A dragon has 52 gems and gives away 32. How many gems are left?",
      "answers": [
        "20",
        "21",
        "19",
        "84"
      ],
      "correct": 0
    },
    {
      "question": "What is 59 + 2?",
      "answers": [
        "61",
        "62",
        "60",
        "71"
      ],
      "correct": 0
    },
    {
      "question": "1 quarter and 2 dimes equal how many cents?",
      "answers": [
        "45",
        "35",
        "55",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "A dragon has 73 gems and gives away 12. How many gems are left?",
      "answers": [
        "61",
        "62",
        "60",
        "85"
      ],
      "correct": 0
    },
    {
      "question": "What is 80 + 17?",
      "answers": [
        "97",
        "98",
        "96",
        "107"
      ],
      "correct": 0
    }
  ],
  "counting": [
    {
      "question": "★ ★ ★ ★ are red stars; ▲ ▲ are blue triangles. How many red stars are there?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "● ● ● ● ● are red circles; ■ ■ ■ are blue squares. How many red circles are there?",
      "answers": [
        "5",
        "4",
        "6",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ ▲ ▲ ▲ are red triangles; ♥ ♥ ♥ ♥ are blue hearts. How many red triangles are there?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "■ ■ ■ ■ ■ ■ ■ are red squares; ◆ ◆ ◆ ◆ ◆ are blue diamonds. How many red squares are there?",
      "answers": [
        "7",
        "6",
        "8",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are red hearts; ★ ★ are blue stars. How many red hearts are there?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are red diamonds; ● ● ● are blue circles. How many red diamonds are there?",
      "answers": [
        "9",
        "8",
        "10",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "★ are green stars; ▲ ▲ ▲ are yellow triangles. How many green stars are there?",
      "answers": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "● ● are green circles; ■ ■ ■ ■ are yellow squares. How many green circles are there?",
      "answers": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ are green triangles; ♥ ♥ ♥ ♥ ♥ are yellow hearts. How many green triangles are there?",
      "answers": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "■ ■ ■ ■ are green squares; ◆ ◆ are yellow diamonds. How many green squares are there?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ ♥ ♥ ♥ are green hearts; ★ ★ ★ are yellow stars. How many green hearts are there?",
      "answers": [
        "5",
        "4",
        "6",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ ◆ ◆ ◆ are green diamonds; ● ● ● ● are yellow circles. How many green diamonds are there?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "★ ★ ★ ★ ★ ★ ★ are blue stars; ▲ ▲ ▲ ▲ ▲ are purple triangles. How many blue stars are there?",
      "answers": [
        "7",
        "6",
        "8",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "● ● ● ● ● ● ● ● are blue circles; ■ ■ are purple squares. How many blue circles are there?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are blue triangles; ♥ ♥ ♥ are purple hearts. How many blue triangles are there?",
      "answers": [
        "9",
        "8",
        "10",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "■ are blue squares; ◆ ◆ ◆ are purple diamonds. How many blue squares are there?",
      "answers": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ are blue hearts; ★ ★ ★ ★ are purple stars. How many blue hearts are there?",
      "answers": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ are blue diamonds; ● ● ● ● ● are purple circles. How many blue diamonds are there?",
      "answers": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "★ ★ ★ ★ are yellow stars; ▲ ▲ are orange triangles. How many yellow stars are there?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "● ● ● ● ● are yellow circles; ■ ■ ■ are orange squares. How many yellow circles are there?",
      "answers": [
        "5",
        "4",
        "6",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ ▲ ▲ ▲ are yellow triangles; ♥ ♥ ♥ ♥ are orange hearts. How many yellow triangles are there?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "■ ■ ■ ■ ■ ■ ■ are yellow squares; ◆ ◆ ◆ ◆ ◆ are orange diamonds. How many yellow squares are there?",
      "answers": [
        "7",
        "6",
        "8",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are yellow hearts; ★ ★ are orange stars. How many yellow hearts are there?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are yellow diamonds; ● ● ● are orange circles. How many yellow diamonds are there?",
      "answers": [
        "9",
        "8",
        "10",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "★ are purple stars; ▲ ▲ ▲ are pink triangles. How many purple stars are there?",
      "answers": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "● ● are purple circles; ■ ■ ■ ■ are pink squares. How many purple circles are there?",
      "answers": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ are purple triangles; ♥ ♥ ♥ ♥ ♥ are pink hearts. How many purple triangles are there?",
      "answers": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "■ ■ ■ ■ are purple squares; ◆ ◆ are pink diamonds. How many purple squares are there?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ ♥ ♥ ♥ are purple hearts; ★ ★ ★ are pink stars. How many purple hearts are there?",
      "answers": [
        "5",
        "4",
        "6",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ ◆ ◆ ◆ are purple diamonds; ● ● ● ● are pink circles. How many purple diamonds are there?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "★ ★ ★ ★ ★ ★ ★ are orange stars; ▲ ▲ ▲ ▲ ▲ are silver triangles. How many orange stars are there?",
      "answers": [
        "7",
        "6",
        "8",
        "9"
      ],
      "correct": 0
    },
    {
      "question": "● ● ● ● ● ● ● ● are orange circles; ■ ■ are silver squares. How many orange circles are there?",
      "answers": [
        "8",
        "7",
        "9",
        "10"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are orange triangles; ♥ ♥ ♥ are silver hearts. How many orange triangles are there?",
      "answers": [
        "9",
        "8",
        "10",
        "11"
      ],
      "correct": 0
    },
    {
      "question": "■ are orange squares; ◆ ◆ ◆ are silver diamonds. How many orange squares are there?",
      "answers": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": 0
    },
    {
      "question": "♥ ♥ are orange hearts; ★ ★ ★ ★ are silver stars. How many orange hearts are there?",
      "answers": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correct": 0
    },
    {
      "question": "◆ ◆ ◆ are orange diamonds; ● ● ● ● ● are silver circles. How many orange diamonds are there?",
      "answers": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correct": 0
    },
    {
      "question": "★ ★ ★ ★ are pink stars; ▲ ▲ are red triangles. How many pink stars are there?",
      "answers": [
        "4",
        "3",
        "5",
        "6"
      ],
      "correct": 0
    },
    {
      "question": "● ● ● ● ● are pink circles; ■ ■ ■ are red squares. How many pink circles are there?",
      "answers": [
        "5",
        "4",
        "6",
        "7"
      ],
      "correct": 0
    },
    {
      "question": "▲ ▲ ▲ ▲ ▲ ▲ are pink triangles; ♥ ♥ ♥ ♥ are red hearts. How many pink triangles are there?",
      "answers": [
        "6",
        "5",
        "7",
        "8"
      ],
      "correct": 0
    },
    {
      "question": "■ ■ ■ ■ ■ ■ ■ are pink squares; ◆ ◆ ◆ ◆ ◆ are red diamonds. How many pink squares are there?",
      "answers": [
        "7",
        "6",
        "8",
        "9"
      ],
      "correct": 0
    }
  ]
};

const levelWorlds = {
  forest1: { theme: "waterfall-grove", name: "Waterfall Grove", icon: "&#127794;", landmarks: ["&#127795;", "&#127754;", "&#127807;", "&#129704;"] },
  forest2: { theme: "mushroom-swamp", name: "Mushroom Swamp", icon: "&#127812;", landmarks: ["&#127812;", "&#10024;", "&#129716;", "&#127807;"] },
  forest3: { theme: "ancient-castle", name: "Ancient Castle", icon: "&#127984;", landmarks: ["&#127984;", "&#128506;", "&#128682;", "&#128293;"] },
  forest4: { theme: "lava-temple", name: "Lava Temple", icon: "&#127755;", landmarks: ["&#127755;", "&#128293;", "&#129704;", "&#9888;"] },
  sky1: { theme: "cloud-bridges", name: "Cloud Bridges", icon: "&#9729;", landmarks: ["&#9729;", "&#127752;", "&#10024;", "&#128506;"] },
  sky2: { theme: "windmill-towers", name: "Windmill Towers", icon: "&#127905;", landmarks: ["&#127905;", "&#127984;", "&#127811;", "&#9729;"] },
  sky3: { theme: "star-observatory", name: "Star Observatory", icon: "&#128301;", landmarks: ["&#128301;", "&#127776;", "&#9732;", "&#10024;"] },
  sky4: { theme: "storm-fortress", name: "Storm Fortress", icon: "&#9889;", landmarks: ["&#9889;", "&#127984;", "&#127785;", "&#9729;"] },
  ocean1: { theme: "coral-lagoon", name: "Coral Lagoon", icon: "&#129720;", landmarks: ["&#129720;", "&#128031;", "&#129716;", "&#127754;"] },
  ocean2: { theme: "pirate-harbor", name: "Pirate Harbor", icon: "&#9973;", landmarks: ["&#9973;", "&#9875;", "&#128506;", "&#127965;"] },
  ocean3: { theme: "sunken-city", name: "Sunken City", icon: "&#128736;", landmarks: ["&#128736;", "&#129720;", "&#128025;", "&#127754;"] },
  ocean4: { theme: "moon-palace", name: "Moon Palace", icon: "&#127769;", landmarks: ["&#127769;", "&#127984;", "&#10024;", "&#128142;"] }
};

function worldStructures(world) {
  const fortressThemes = ["ancient-castle", "lava-temple", "storm-fortress", "moon-palace"];
  const waterThemes = ["waterfall-grove", "coral-lagoon", "pirate-harbor", "sunken-city"];
  const towerType = fortressThemes.includes(world.theme)
    ? "fortress"
    : waterThemes.includes(world.theme)
      ? "water"
      : "sky";
  return `
    <div class="board-structure structure-a tower-${towerType}" aria-hidden="true"><span class="tower-roof"></span><span class="tower-body"><i></i><b></b></span><span class="tower-base"></span></div>
    <div class="board-structure structure-b tower-${towerType}" aria-hidden="true"><span class="tower-roof"></span><span class="tower-body"><i></i><b></b></span><span class="tower-base"></span></div>`;
}

const defaultQuestState = {
  name: "Star Scout",
  stars: 0,
  character: "fox",
  grade: "preschool",
  completed: [],
  checkpoints: [],
  unlocked: ["forest1", "sky1", "ocean1"],
  currentWorld: 1,
  current: null,
  trail: null,
  completedWorlds: [],
  worldProgress: {},
  bossLives: 3,
  questionHistory: {}
};

function loadQuestState() {
  try {
    const saved = JSON.parse(localStorage.getItem(questStorageKey) || "{}");
    const migratedCharacter = characters[saved.character] ? saved.character : "fox";
    return {
      ...defaultQuestState,
      ...saved,
      character: migratedCharacter,
      grade: gradeLabels[saved.grade] ? saved.grade : "preschool",
      currentWorld: Math.min(campaignWorlds.length, Math.max(1, Number(saved.currentWorld) || 1)),
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      checkpoints: Array.isArray(saved.checkpoints) ? saved.checkpoints : [],
      unlocked: Array.isArray(saved.unlocked) ? saved.unlocked : [...defaultQuestState.unlocked],
      completedWorlds: Array.isArray(saved.completedWorlds) ? saved.completedWorlds : [],
      worldProgress: saved.worldProgress && typeof saved.worldProgress === "object" ? saved.worldProgress : {},
      bossLives: Math.min(3, Math.max(0, Number(saved.bossLives ?? 3))),
      questionHistory: saved.questionHistory && typeof saved.questionHistory === "object" ? saved.questionHistory : {}
    };
  } catch {
    return { ...defaultQuestState };
  }
}

let questState = loadQuestState();
const map = document.getElementById("questMap");
const levelPanel = document.getElementById("questLevel");
const nameInput = document.getElementById("questName");
const gradeInput = document.getElementById("questGrade");
let directionGame = null;
let directionKeyHandler = null;
let rollChallengeHideTimer = null;

function saveQuestState() {
  questState.worldProgress[questState.currentWorld] = {
    completed: [...questState.completed],
    checkpoints: [...questState.checkpoints],
    unlocked: [...questState.unlocked],
    trail: questState.trail
  };
  localStorage.setItem(questStorageKey, JSON.stringify(questState));
}

function loadWorldProgress(worldId) {
  const saved = questState.worldProgress[worldId];
  questState.completed = Array.isArray(saved?.completed) ? [...saved.completed] : [];
  questState.checkpoints = Array.isArray(saved?.checkpoints) ? [...saved.checkpoints] : [];
  questState.unlocked = Array.isArray(saved?.unlocked) ? [...saved.unlocked] : [...defaultQuestState.unlocked];
  questState.trail = saved?.trail || null;
  questState.current = null;
  questState.bossLives = 3;
}

function unlockedWorldCount() {
  let count = 1;
  while (questState.completedWorlds.includes(count) && count < campaignWorlds.length) count += 1;
  return Math.min(campaignWorlds.length, count);
}

function giveQuestionWorldIdentity(question, worldId = questState.currentWorld) {
  const theme = worldQuestionThemes[worldId - 1] || worldQuestionThemes[0];
  return {
    ...question,
    prompt: `${theme.place}: ${question.prompt}`,
    world: worldId,
    worldObject: theme.object
  };
}

function randomQuestSeed() {
  if (globalThis.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    crypto.getRandomValues(value);
    return value[0];
  }
  return Math.floor(Math.random() * 4294967295);
}

function buildUniqueQuestion(grade, seed, boss, difficulty, levelId) {
  const key = `${questState.currentWorld}:${levelId}:${grade}:all`;
  const globalKey = `world:${questState.currentWorld}:${grade}:all`;
  const recent = questState.questionHistory[key] || [];
  const campaignRecent = questState.questionHistory[globalKey] || [];
  let question;
  for (let attempt = 0; attempt < 240; attempt += 1) {
    const baseQuestion = buildGradeQuestion(grade, seed + attempt * 7919, boss, difficulty);
    question = giveQuestionWorldIdentity(baseQuestion);
    if (!recent.includes(question.prompt) && !campaignRecent.includes(baseQuestion.signature)) break;
  }
  questState.questionHistory[key] = [...recent, question.prompt].slice(-40);
  questState.questionHistory[globalKey] = [...campaignRecent, question.signature].slice(-240);
  return question;
}

function saveDirectionTrail() {
  if (!directionGame) return;
  if (questState.completed.includes(directionGame.level.id) && directionGame.reachedGoal) {
    questState.trail = null;
    saveQuestState();
    return;
  }
  questState.trail = {
    levelId: directionGame.level.id,
    position: { ...directionGame.position },
    collected: [...directionGame.collected],
    positionHistory: directionGame.positionHistory.map(position => ({ ...position })),
    movesRemaining: directionGame.movesRemaining,
    lastRoll: directionGame.lastRoll,
    rollCount: directionGame.rollCount,
    pendingRoll: directionGame.pendingRoll,
    reachedGoal: directionGame.reachedGoal,
    questionSeed: directionGame.questionSeed,
    bossQuestion: directionGame.bossQuestion
  };
  saveQuestState();
}

function updateQuestProfile() {
  document.getElementById("questStars").textContent = questState.stars;
  document.getElementById("questCompleted").textContent = `W${questState.currentWorld}: ${questState.completed.length} / 12`;
  const character = characters[questState.character] || characters.fox;
  const avatar = document.getElementById("questAvatar");
  avatar.textContent = "";
  avatar.className = `quest-avatar animal-${questState.character}`;
  avatar.innerHTML = `<span class="avatar-animal animal-${questState.character}" aria-hidden="true">${character.icon}</span><small>${questState.name} the ${character.species}</small>`;
  nameInput.value = questState.name;
  gradeInput.value = questState.grade;
  document.querySelectorAll("[data-character]").forEach(button => {
    button.classList.toggle("selected", button.dataset.character === questState.character);
  });
}

function renderQuestMap() {
  const unlockedWorlds = unlockedWorldCount();
  const selectedWorld = campaignWorlds[questState.currentWorld - 1];
  const previewOnly = selectedWorld.id > unlockedWorlds;
  const positions = layoutForWorld(selectedWorld.id);
  map.innerHTML = `
    <div class="campaign-map-top">
      <button class="campaign-arrow previous" type="button" data-world-direction="-1" aria-label="Previous world" ${questState.currentWorld === 1 ? "disabled" : ""}>&#8592;</button>
      <div class="campaign-world-title"><span>${selectedWorld.icon}</span><div><small>WORLD ${selectedWorld.id} OF ${campaignWorlds.length}</small><strong>${selectedWorld.name}</strong><em>${selectedWorld.subtitle}</em></div></div>
      <button class="campaign-arrow next" type="button" data-world-direction="1" aria-label="Next world" ${questState.currentWorld === campaignWorlds.length ? "disabled" : ""}>&#8594;</button>
    </div>
    <div class="campaign-map-viewport" data-current-world="${selectedWorld.id}">
    <div class="quest-world-map world-${selectedWorld.id}" style="--campaign-map:url('${selectedWorld.image}')">
      <div class="world-region-label region-forest"><span>&#127795;</span> Enchanted Forest</div>
      <div class="world-region-label region-sky"><span>&#9729;</span> Sky Kingdom</div>
      <div class="world-region-label region-ocean"><span>&#8776;</span> Crystal Coast</div>
      <svg class="world-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${routeMarkup(positions, ["start", "forest1", "forest2", "forest3", "forest4"], "route-forest")}
        ${routeMarkup(positions, ["start", "sky1", "sky2", "sky3", "sky4"], "route-sky")}
        ${routeMarkup(positions, ["start", "ocean1", "ocean2", "ocean3", "ocean4"], "route-ocean")}
      </svg>
      <div class="world-start" style="--start-x:${positions.start[0]}%;--start-y:${positions.start[1]}%;"><span class="mini-character animal-${questState.character}">${characters[questState.character].icon}</span><strong>START</strong></div>
      ${questLevels.map(level => {
        const world = levelWorlds[level.id];
        const unlocked = !previewOnly && questState.unlocked.includes(level.id);
        const completed = questState.completed.includes(level.id);
        const checkpoint = questState.checkpoints.includes(level.id);
        const active = questState.current === level.id;
        const [x, y] = positions[level.id];
        return `<button class="world-level-node path-${level.path} stage-${level.stage}${level.stage === 4 ? " boss-gate" : ""}${completed ? " completed" : ""}${checkpoint ? " checkpoint" : ""}${active ? " active" : ""}" style="--node-x:${x}%;--node-y:${y}%;" type="button" data-level="${level.id}" ${unlocked ? "" : "disabled"} aria-label="Level ${level.stage}: ${level.title}">
          <span class="world-node-token">${checkpoint ? "&#10003;" : unlocked ? world.icon : "&#128274;"}<i>${level.stage}</i></span>
          <span class="world-node-landmark" aria-hidden="true">${world.icon}</span>
          <span class="world-node-label"><small>${level.stage === 4 ? "FINAL BOSS" : `LEVEL ${level.stage}`}</small><strong>${world.name}</strong><em>${monsterFor(level)}</em></span>
        </button>`;
      }).join("")}
      <div class="world-map-legend">
        <span><i class="legend-dot forest"></i>Forest</span>
        <span><i class="legend-dot sky"></i>Sky</span>
        <span><i class="legend-dot ocean"></i>Ocean</span>
      </div>
      ${selectedWorld.id > 1 ? `<div class="bonus-world-ribbon${previewOnly ? " preview" : ""}"><span>${selectedWorld.icon}</span><strong>${selectedWorld.name}</strong><small>${previewOnly ? "Preview only" : "Bonus adventure map unlocked"}</small></div>` : ""}
      ${previewOnly ? `<div class="world-preview-lock"><span>&#128274;</span><strong>World preview</strong><p>Complete World ${selectedWorld.id - 1} to unlock this adventure.</p></div>` : ""}
    </div>`;
  map.insertAdjacentHTML("beforeend", `</div>
    <div class="campaign-world-dots" aria-label="Campaign worlds">
      ${campaignWorlds.map(world => `<button type="button" data-world="${world.id}" class="${world.id === selectedWorld.id ? "active " : ""}${world.id > unlockedWorlds ? "preview-locked" : ""}" aria-label="${world.name}${world.id > unlockedWorlds ? " preview" : ""}">${world.id > unlockedWorlds ? "&#128065;" : world.icon}</button>`).join("")}
    </div>
    ${unlockedWorlds < campaignWorlds.length ? `<p class="campaign-lock-note"><span>&#128065;</span> Preview all 15 worlds. Complete World ${unlockedWorlds} to unlock the next adventure.</p>` : '<p class="campaign-lock-note unlocked"><span>&#10024;</span> All 15 worlds unlocked. You reached the ultimate campaign.</p>'}`);

  map.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => openQuestLevel(button.dataset.level));
  });
  map.querySelectorAll("[data-world-direction]").forEach(button => {
    button.addEventListener("click", () => changeCampaignWorld(Number(button.dataset.worldDirection)));
  });
  map.querySelectorAll("[data-world]").forEach(button => {
    button.addEventListener("click", () => selectCampaignWorld(Number(button.dataset.world)));
  });
  const viewport = map.querySelector(".campaign-map-viewport");
  let swipeStart = null;
  viewport.addEventListener("pointerdown", event => {
    swipeStart = event.clientX;
  });
  viewport.addEventListener("pointerup", event => {
    if (swipeStart === null) return;
    const distance = event.clientX - swipeStart;
    swipeStart = null;
    if (Math.abs(distance) > 55) changeCampaignWorld(distance < 0 ? 1 : -1);
  });
  viewport.addEventListener("pointercancel", () => { swipeStart = null; });
}

function selectCampaignWorld(world) {
  if (world < 1 || world > campaignWorlds.length) return;
  const previousWorld = questState.currentWorld;
  questState.worldProgress[previousWorld] = {
    completed: [...questState.completed],
    checkpoints: [...questState.checkpoints],
    unlocked: [...questState.unlocked],
    trail: questState.trail
  };
  questState.currentWorld = world;
  loadWorldProgress(world);
  saveQuestState();
  renderQuestMap();
  levelPanel.className = "quest-level-panel";
  levelPanel.innerHTML = world <= unlockedWorldCount()
    ? `<div class="quest-empty"><span aria-hidden="true">${campaignWorlds[world - 1].icon}</span><h2>World ${world} is ready.</h2><p>Choose a glowing level to begin this adventure.</p></div>`
    : `<div class="quest-empty"><span aria-hidden="true">&#128274;</span><h2>Preview World ${world}.</h2><p>Complete the previous world to play these levels.</p></div>`;
}

function changeCampaignWorld(direction) {
  selectCampaignWorld(Math.min(campaignWorlds.length, Math.max(1, questState.currentWorld + direction)));
}

function openQuestLevel(id) {
  const level = questLevels.find(item => item.id === id);
  if (!level || !questState.unlocked.includes(id) || questState.currentWorld > unlockedWorldCount()) return;
  const continuingLevel = questState.current === id;
  const world = levelWorlds[level.id];
  const campaignDifficulty = Math.min(9, level.stage + Math.floor((questState.currentWorld - 1) / 2));
  const questionSeed = questState.trail?.levelId === id && questState.trail.questionSeed
    ? Number(questState.trail.questionSeed)
    : randomQuestSeed();
  const bossQuestion = questState.trail?.levelId === id && questState.trail.bossQuestion
    ? questState.trail.bossQuestion
    : buildUniqueQuestion(
        questState.grade,
        questionSeed + level.stage * 211 + questState.currentWorld * 137,
        true,
        campaignDifficulty,
        level.id
      );
  bossQuestion.difficulty = `${gradeLabels[questState.grade]} - World ${questState.currentWorld}`;
  if (!continuingLevel) questState.bossLives = 3;
  questState.current = id;
  saveQuestState();
  renderQuestMap();
  levelPanel.className = `quest-level-panel path-${level.path} theme-${world.theme}`;
  levelPanel.innerHTML = `
    <div class="quest-level-top">
      <span>${campaignWorlds[questState.currentWorld - 1].icon} World ${questState.currentWorld} &middot; ${world.name} &middot; Level ${level.stage}</span>
      <strong>+${level.reward} star crystals</strong>
    </div>
    <p class="eyebrow">Current mission</p>
    <h2>${level.title}</h2>
    <p class="quest-story">${level.story}</p>
    <section class="direction-mission">
      <div class="direction-heading">
        <div><p class="eyebrow">${world.name}</p><h3>Guide <span data-hero-name>${questState.name}</span> to ${monsterFor(level)}.</h3></div>
        <div class="trail-crystals"><span>Trail crystals</span><strong id="trailCrystals">0 / 2</strong></div>
      </div>
      <div class="direction-layout">
        <div class="direction-board path-${level.path} theme-${world.theme}" id="directionBoard" role="application" aria-label="${world.name} directional pathway game"></div>
        <div class="direction-controls">
          <div class="dice-panel">
            <span class="quest-die" id="questDie" aria-hidden="true">?</span>
            <div><strong id="movesLeft">Roll to move</strong><small>Answer correctly to earn 1-6 steps</small></div>
          </div>
          <button class="roll-dice" id="rollDice" type="button">Roll the dice</button>
          <p>Every roll has a question. A wrong answer moves you back one space.</p>
          <div class="direction-pad" aria-label="Movement controls">
            <button type="button" data-move="up" aria-label="Move up">&#8593;</button>
            <button type="button" data-move="left" aria-label="Move left">&#8592;</button>
            <button type="button" data-move="down" aria-label="Move down">&#8595;</button>
            <button type="button" data-move="right" aria-label="Move right">&#8594;</button>
          </div>
          <button class="trail-reset" id="resetTrail" type="button">Restart trail</button>
          <p class="direction-message" id="directionMessage" aria-live="polite">Roll and answer to begin moving.</p>
        </div>
      </div>
      <div class="roll-challenge" id="rollChallenge" hidden>
        <div class="roll-challenge-top">
          <span class="roll-challenge-badge">Dice challenge</span>
          <strong id="rollReward"></strong>
        </div>
        <h3 id="rollQuestion"></h3>
        <div class="roll-answer-grid" id="rollAnswers"></div>
        <p class="roll-feedback" id="rollFeedback" aria-live="polite"></p>
      </div>
    </section>
    <div class="quest-challenge locked" id="questChallenge">
      <div class="challenge-lock"><span>&#128274;</span><strong>Reach the monster gate to begin the battle.</strong></div>
      <div class="boss-battle-head">
        ${monsterMarkup(level)}
        <div><p class="eyebrow">${level.stage === 4 ? `${pathways[level.path].name} ultimate boss` : `Level ${level.stage} final boss`}</p><strong>${monsterFor(level)}</strong></div>
        <div class="boss-lives" id="bossLives" aria-label="Three boss battle lives"><span>&#10084;</span><span>&#10084;</span><span>&#10084;</span></div>
      </div>
      <p class="boss-grade-label">${gradeLabels[questState.grade]} challenge</p>
      <h3>${bossQuestion.prompt}</h3>
      <div class="quest-answers">
        ${bossQuestion.answers.map((answer, index) => `<button type="button" data-answer="${index}">${answer}</button>`).join("")}
      </div>
      <p class="quest-feedback" id="questFeedback" aria-live="polite"></p>
    </div>`;
  startDirectionGame(level, bossQuestion, questionSeed);
  levelPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startDirectionGame(level, bossQuestion, questionSeed) {
  if (directionKeyHandler) window.removeEventListener("keydown", directionKeyHandler);
  const layout = directionLayouts[(level.stage + ["forest", "sky", "ocean"].indexOf(level.path)) % directionLayouts.length];
  const grid = layout.map(row => row.split(""));
  let start = { row: 1, col: 1 };
  grid.forEach((row, rowIndex) => row.forEach((tile, colIndex) => {
    if (tile === "S") start = { row: rowIndex, col: colIndex };
  }));
  directionGame = {
    level,
    bossQuestion,
    grid,
    position: { ...start },
    start,
    collected: new Set(),
    positionHistory: [{ ...start }],
    movesRemaining: 0,
    lastRoll: null,
    rollCount: 0,
    pendingRoll: null,
    reachedGoal: false,
    questionSeed
  };
  const savedTrail = questState.trail?.levelId === level.id ? questState.trail : null;
  if (savedTrail) {
    directionGame.position = savedTrail.position || directionGame.position;
    directionGame.collected = new Set(savedTrail.collected || []);
    directionGame.positionHistory = Array.isArray(savedTrail.positionHistory) && savedTrail.positionHistory.length
      ? savedTrail.positionHistory
      : directionGame.positionHistory;
    directionGame.movesRemaining = Number(savedTrail.movesRemaining || 0);
    directionGame.lastRoll = savedTrail.lastRoll || null;
    directionGame.rollCount = Number(savedTrail.rollCount || 0);
    directionGame.pendingRoll = savedTrail.pendingRoll || null;
    directionGame.reachedGoal = Boolean(savedTrail.reachedGoal);
    directionGame.questionSeed = Number(savedTrail.questionSeed || questionSeed);
  }
  renderDirectionBoard();

  levelPanel.querySelectorAll("[data-move]").forEach(button => {
    button.addEventListener("click", () => moveCharacter(button.dataset.move));
  });
  document.getElementById("resetTrail").addEventListener("click", resetDirectionTrail);
  document.getElementById("rollDice").addEventListener("click", rollQuestDice);
  directionKeyHandler = event => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
    const keyDirections = {
      ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
      w: "up", s: "down", a: "left", d: "right"
    };
    const direction = keyDirections[event.key];
    if (!direction) return;
    event.preventDefault();
    moveCharacter(direction);
  };
  window.addEventListener("keydown", directionKeyHandler);
  if (directionGame.pendingRoll) showRollChallenge();
  if (directionGame.reachedGoal) unlockQuestChallenge();
  saveDirectionTrail();
}

function renderDirectionBoard() {
  const board = document.getElementById("directionBoard");
  if (!board || !directionGame) return;
  const world = levelWorlds[directionGame.level.id];
  board.innerHTML = `${worldStructures(world)}
    <div class="rpg-board-hud" aria-hidden="true"><span>${world.icon}</span><strong>${world.name}</strong><em>Stage ${directionGame.level.stage}</em></div>
    <div class="rpg-prop prop-pots" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="rpg-prop prop-column" aria-hidden="true"><i></i></div>
    <div class="rpg-prop prop-shrub" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="board-landmark landmark-a">${world.landmarks[0]}</div>
    <div class="board-landmark landmark-b">${world.landmarks[1]}</div>
    <div class="board-landmark landmark-c">${world.landmarks[2]}</div>
    <div class="board-world-name"><span>${world.icon}</span>${world.name}</div>` + directionGame.grid.flatMap((row, rowIndex) =>
    row.map((tile, colIndex) => {
      const key = `${rowIndex}:${colIndex}`;
      const occupied = directionGame.position.row === rowIndex && directionGame.position.col === colIndex;
      const collected = directionGame.collected.has(key);
      const tileClass = tile === "#" ? "wall" : tile === "G" ? "goal" : "trail";
      const variant = (rowIndex * 9 + colIndex + directionGame.level.stage) % 4;
      const showDecoration = tile === "#" && (rowIndex * 5 + colIndex * 3 + directionGame.level.stage) % 7 === 0;
      return `<div class="direction-tile ${tileClass} tile-variant-${variant}${tile === "*" && !collected ? " crystal" : ""}" data-row="${rowIndex}" data-col="${colIndex}">
        ${tile === "#" ? '<span class="ruin-blocks" aria-hidden="true"><i></i><b></b></span>' : ""}
        ${showDecoration ? `<span class="terrain-decoration prop-${variant}">${world.landmarks[variant]}</span>` : ""}
        ${tile !== "#" && tile !== "G" ? '<span class="trail-stone" aria-hidden="true"></span>' : ""}
        ${tile === "G" ? `<span class="map-unit boss-map-unit"><span class="unit-health"><i></i></span>${monsterMarkup(directionGame.level)}</span>` : ""}
        ${tile === "G" ? '<span class="boss-arena-label">BOSS</span>' : ""}
        ${tile === "*" && !collected ? '<span class="trail-gem"><i></i></span>' : ""}
        ${occupied ? `<span class="map-unit hero-map-unit"><span class="unit-health"><i></i></span><span class="player-character animal-${questState.character}" aria-label="${questState.name} the ${characters[questState.character].species}">${characters[questState.character].icon}</span></span>` : ""}
      </div>`;
    })
  ).join("");
  document.getElementById("trailCrystals").textContent = `${directionGame.collected.size} / 2`;
  const moves = document.getElementById("movesLeft");
  if (moves) moves.textContent = directionGame.movesRemaining > 0
    ? `${directionGame.movesRemaining} move${directionGame.movesRemaining === 1 ? "" : "s"} left`
    : "Roll to move";
  const die = document.getElementById("questDie");
  if (die) die.textContent = directionGame.lastRoll || "?";
  const rollButton = document.getElementById("rollDice");
  if (rollButton) {
    rollButton.disabled = directionGame.movesRemaining > 0 || Boolean(directionGame.pendingRoll) || directionGame.reachedGoal;
    rollButton.textContent = directionGame.pendingRoll
      ? "Answer the question"
      : directionGame.movesRemaining > 0
        ? "Use your moves"
        : "Roll the dice";
  }
}

function moveCharacter(direction) {
  if (!directionGame || directionGame.reachedGoal) return;
  const message = document.getElementById("directionMessage");
  if (directionGame.movesRemaining <= 0) {
    message.textContent = "Roll the dice before moving.";
    return;
  }
  const movement = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  }[direction];
  if (!movement) return;
  const next = {
    row: directionGame.position.row + movement[0],
    col: directionGame.position.col + movement[1]
  };
  const tile = directionGame.grid[next.row]?.[next.col];
  if (!tile || tile === "#") {
    message.textContent = "That way is blocked. Try another direction.";
    document.getElementById("directionBoard").classList.add("blocked-move");
    setTimeout(() => document.getElementById("directionBoard")?.classList.remove("blocked-move"), 180);
    return;
  }
  directionGame.positionHistory.push({ ...next });
  directionGame.position = next;
  directionGame.movesRemaining -= 1;
  const key = `${next.row}:${next.col}`;
  if (tile === "*" && !directionGame.collected.has(key)) {
    directionGame.collected.add(key);
    message.textContent = "Crystal collected. Keep following the pathway.";
  } else {
    message.textContent = directionGame.movesRemaining > 0
      ? `Keep moving. ${directionGame.movesRemaining} step${directionGame.movesRemaining === 1 ? "" : "s"} remain.`
      : "Your moves are used. Roll again.";
  }
  renderDirectionBoard();
  saveDirectionTrail();
  if (tile === "G") unlockQuestChallenge();
}

function rollQuestDice() {
  if (!directionGame || directionGame.reachedGoal || directionGame.pendingRoll || directionGame.movesRemaining > 0) return;
  const button = document.getElementById("rollDice");
  const die = document.getElementById("questDie");
  button.disabled = true;
  die.classList.add("rolling");
  let ticks = 0;
  const animation = setInterval(() => {
    die.textContent = 1 + Math.floor(Math.random() * 6);
    ticks += 1;
    if (ticks < 7) return;
    clearInterval(animation);
    const result = 1 + Math.floor(Math.random() * 6);
    directionGame.lastRoll = result;
    directionGame.rollCount += 1;
    directionGame.pendingRoll = {
      value: result,
      question: buildRollQuestion(directionGame.level, directionGame.rollCount)
    };
    die.textContent = result;
    die.classList.remove("rolling");
    document.getElementById("movesLeft").textContent = `${result} move${result === 1 ? "" : "s"} waiting`;
    document.getElementById("directionMessage").textContent = `You rolled ${result}. Answer correctly to earn the moves.`;
    showRollChallenge();
    renderDirectionBoard();
    saveDirectionTrail();
  }, 55);
}

function buildRollQuestion(level, turn) {
  const stage = Math.min(9, level.stage + Math.floor((questState.currentWorld - 1) / 3));
  const seed = directionGame.questionSeed + turn * 131 + stage * 17 + ["forest", "sky", "ocean"].indexOf(level.path) * 43 + questState.currentWorld * 193;
  const question = buildUniqueQuestion(questState.grade, seed, false, stage, level.id);
  question.difficulty = `${gradeLabels[questState.grade]} - World ${questState.currentWorld}`;
  return question;
}


const megaStarpathQuestions = [{"category": "Counting", "grade": "preschool", "question": "★ ★ ★ ★ are red stars; ▲ ▲ are blue triangles. How many red stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● ● ● ● are red circles; ■ ■ ■ are blue squares. How many red circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ ▲ ▲ ▲ are red triangles; ♥ ♥ ♥ ♥ are blue hearts. How many red triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ ■ ■ ■ are red squares; ◆ ◆ ◆ ◆ ◆ are blue diamonds. How many red squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are red hearts; ★ ★ are blue stars. How many red hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are red diamonds; ● ● ● are blue circles. How many red diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ are green stars; ▲ ▲ ▲ are yellow triangles. How many green stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● are green circles; ■ ■ ■ ■ are yellow squares. How many green circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ are green triangles; ♥ ♥ ♥ ♥ ♥ are yellow hearts. How many green triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ are green squares; ◆ ◆ are yellow diamonds. How many green squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ are green hearts; ★ ★ ★ are yellow stars. How many green hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ are green diamonds; ● ● ● ● are yellow circles. How many green diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ ★ ★ ★ ★ ★ ★ are blue stars; ▲ ▲ ▲ ▲ ▲ are purple triangles. How many blue stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● ● ● ● ● ● ● are blue circles; ■ ■ are purple squares. How many blue circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are blue triangles; ♥ ♥ ♥ are purple hearts. How many blue triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ are blue squares; ◆ ◆ ◆ are purple diamonds. How many blue squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ are blue hearts; ★ ★ ★ ★ are purple stars. How many blue hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ are blue diamonds; ● ● ● ● ● are purple circles. How many blue diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ ★ ★ ★ are yellow stars; ▲ ▲ are orange triangles. How many yellow stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● ● ● ● are yellow circles; ■ ■ ■ are orange squares. How many yellow circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ ▲ ▲ ▲ are yellow triangles; ♥ ♥ ♥ ♥ are orange hearts. How many yellow triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ ■ ■ ■ are yellow squares; ◆ ◆ ◆ ◆ ◆ are orange diamonds. How many yellow squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are yellow hearts; ★ ★ are orange stars. How many yellow hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are yellow diamonds; ● ● ● are orange circles. How many yellow diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ are purple stars; ▲ ▲ ▲ are pink triangles. How many purple stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● are purple circles; ■ ■ ■ ■ are pink squares. How many purple circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ are purple triangles; ♥ ♥ ♥ ♥ ♥ are pink hearts. How many purple triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ are purple squares; ◆ ◆ are pink diamonds. How many purple squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ are purple hearts; ★ ★ ★ are pink stars. How many purple hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ are purple diamonds; ● ● ● ● are pink circles. How many purple diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ ★ ★ ★ ★ ★ ★ are orange stars; ▲ ▲ ▲ ▲ ▲ are silver triangles. How many orange stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● ● ● ● ● ● ● are orange circles; ■ ■ are silver squares. How many orange circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are orange triangles; ♥ ♥ ♥ are silver hearts. How many orange triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ are orange squares; ◆ ◆ ◆ are silver diamonds. How many orange squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ are orange hearts; ★ ★ ★ ★ are silver stars. How many orange hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ are orange diamonds; ● ● ● ● ● are silver circles. How many orange diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ ★ ★ ★ are pink stars; ▲ ▲ are red triangles. How many pink stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● ● ● ● are pink circles; ■ ■ ■ are red squares. How many pink circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ ▲ ▲ ▲ are pink triangles; ♥ ♥ ♥ ♥ are red hearts. How many pink triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ ■ ■ ■ are pink squares; ◆ ◆ ◆ ◆ ◆ are red diamonds. How many pink squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are pink hearts; ★ ★ are red stars. How many pink hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are pink diamonds; ● ● ● are red circles. How many pink diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "★ are silver stars; ▲ ▲ ▲ are green triangles. How many silver stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "● ● are silver circles; ■ ■ ■ ■ are green squares. How many silver circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "▲ ▲ ▲ are silver triangles; ♥ ♥ ♥ ♥ ♥ are green hearts. How many silver triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "■ ■ ■ ■ are silver squares; ◆ ◆ are green diamonds. How many silver squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "♥ ♥ ♥ ♥ ♥ are silver hearts; ★ ★ ★ are green stars. How many silver hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "preschool", "question": "◆ ◆ ◆ ◆ ◆ ◆ are silver diamonds; ● ● ● ● are green circles. How many silver diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ ★ ★ ★ are red stars; ▲ ▲ ▲ ▲ ▲ are blue triangles. How many red stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● ● ● ● are red circles; ■ ■ are blue squares. How many red circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are red triangles; ♥ ♥ ♥ are blue hearts. How many red triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ are red squares; ◆ ◆ ◆ are blue diamonds. How many red squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ are red hearts; ★ ★ ★ ★ are blue stars. How many red hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ are red diamonds; ● ● ● ● ● are blue circles. How many red diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ are green stars; ▲ ▲ are yellow triangles. How many green stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● are green circles; ■ ■ ■ are yellow squares. How many green circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ are green triangles; ♥ ♥ ♥ ♥ are yellow hearts. How many green triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ ■ ■ ■ ■ ■ ■ are green squares; ◆ ◆ ◆ ◆ ◆ are yellow diamonds. How many green squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are green hearts; ★ ★ are yellow stars. How many green hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are green diamonds; ● ● ● are yellow circles. How many green diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ are blue stars; ▲ ▲ ▲ are purple triangles. How many blue stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● are blue circles; ■ ■ ■ ■ are purple squares. How many blue circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ are blue triangles; ♥ ♥ ♥ ♥ ♥ are purple hearts. How many blue triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ ■ ■ ■ are blue squares; ◆ ◆ are purple diamonds. How many blue squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ ♥ ♥ ♥ are blue hearts; ★ ★ ★ are purple stars. How many blue hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ ◆ ◆ ◆ are blue diamonds; ● ● ● ● are purple circles. How many blue diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ ★ ★ ★ are yellow stars; ▲ ▲ ▲ ▲ ▲ are orange triangles. How many yellow stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● ● ● ● are yellow circles; ■ ■ are orange squares. How many yellow circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are yellow triangles; ♥ ♥ ♥ are orange hearts. How many yellow triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ are yellow squares; ◆ ◆ ◆ are orange diamonds. How many yellow squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ are yellow hearts; ★ ★ ★ ★ are orange stars. How many yellow hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ are yellow diamonds; ● ● ● ● ● are orange circles. How many yellow diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ are purple stars; ▲ ▲ are pink triangles. How many purple stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● are purple circles; ■ ■ ■ are pink squares. How many purple circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ are purple triangles; ♥ ♥ ♥ ♥ are pink hearts. How many purple triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ ■ ■ ■ ■ ■ ■ are purple squares; ◆ ◆ ◆ ◆ ◆ are pink diamonds. How many purple squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are purple hearts; ★ ★ are pink stars. How many purple hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are purple diamonds; ● ● ● are pink circles. How many purple diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ are orange stars; ▲ ▲ ▲ are silver triangles. How many orange stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● are orange circles; ■ ■ ■ ■ are silver squares. How many orange circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ are orange triangles; ♥ ♥ ♥ ♥ ♥ are silver hearts. How many orange triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ ■ ■ ■ are orange squares; ◆ ◆ are silver diamonds. How many orange squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ ♥ ♥ ♥ are orange hearts; ★ ★ ★ are silver stars. How many orange hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ ◆ ◆ ◆ are orange diamonds; ● ● ● ● are silver circles. How many orange diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ ★ ★ ★ are pink stars; ▲ ▲ ▲ ▲ ▲ are red triangles. How many pink stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● ● ● ● are pink circles; ■ ■ are red squares. How many pink circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are pink triangles; ♥ ♥ ♥ are red hearts. How many pink triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ are pink squares; ◆ ◆ ◆ are red diamonds. How many pink squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ are pink hearts; ★ ★ ★ ★ are red stars. How many pink hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ are pink diamonds; ● ● ● ● ● are red circles. How many pink diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "★ ★ ★ ★ are silver stars; ▲ ▲ are green triangles. How many silver stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "● ● ● ● ● are silver circles; ■ ■ ■ are green squares. How many silver circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "▲ ▲ ▲ ▲ ▲ ▲ are silver triangles; ♥ ♥ ♥ ♥ are green hearts. How many silver triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "■ ■ ■ ■ ■ ■ ■ are silver squares; ◆ ◆ ◆ ◆ ◆ are green diamonds. How many silver squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are silver hearts; ★ ★ are green stars. How many silver hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "kindergarten", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are silver diamonds; ● ● ● are green circles. How many silver diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ are red stars; ▲ ▲ ▲ are blue triangles. How many red stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● are red circles; ■ ■ ■ ■ are blue squares. How many red circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ are red triangles; ♥ ♥ ♥ ♥ ♥ are blue hearts. How many red triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ ■ ■ ■ are red squares; ◆ ◆ are blue diamonds. How many red squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ ♥ ♥ ♥ are red hearts; ★ ★ ★ are blue stars. How many red hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ ◆ ◆ ◆ are red diamonds; ● ● ● ● are blue circles. How many red diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ ★ ★ ★ ★ ★ ★ are green stars; ▲ ▲ ▲ ▲ ▲ are yellow triangles. How many green stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● ● ● ● ● ● ● are green circles; ■ ■ are yellow squares. How many green circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are green triangles; ♥ ♥ ♥ are yellow hearts. How many green triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ are green squares; ◆ ◆ ◆ are yellow diamonds. How many green squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ are green hearts; ★ ★ ★ ★ are yellow stars. How many green hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ are green diamonds; ● ● ● ● ● are yellow circles. How many green diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ ★ ★ ★ are blue stars; ▲ ▲ are purple triangles. How many blue stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● ● ● ● are blue circles; ■ ■ ■ are purple squares. How many blue circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ ▲ ▲ ▲ are blue triangles; ♥ ♥ ♥ ♥ are purple hearts. How many blue triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ ■ ■ ■ ■ ■ ■ are blue squares; ◆ ◆ ◆ ◆ ◆ are purple diamonds. How many blue squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are blue hearts; ★ ★ are purple stars. How many blue hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are blue diamonds; ● ● ● are purple circles. How many blue diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ are yellow stars; ▲ ▲ ▲ are orange triangles. How many yellow stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● are yellow circles; ■ ■ ■ ■ are orange squares. How many yellow circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ are yellow triangles; ♥ ♥ ♥ ♥ ♥ are orange hearts. How many yellow triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ ■ ■ ■ are yellow squares; ◆ ◆ are orange diamonds. How many yellow squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ ♥ ♥ ♥ are yellow hearts; ★ ★ ★ are orange stars. How many yellow hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ ◆ ◆ ◆ are yellow diamonds; ● ● ● ● are orange circles. How many yellow diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ ★ ★ ★ ★ ★ ★ are purple stars; ▲ ▲ ▲ ▲ ▲ are pink triangles. How many purple stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● ● ● ● ● ● ● are purple circles; ■ ■ are pink squares. How many purple circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are purple triangles; ♥ ♥ ♥ are pink hearts. How many purple triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ are purple squares; ◆ ◆ ◆ are pink diamonds. How many purple squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ are purple hearts; ★ ★ ★ ★ are pink stars. How many purple hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ are purple diamonds; ● ● ● ● ● are pink circles. How many purple diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ ★ ★ ★ are orange stars; ▲ ▲ are silver triangles. How many orange stars are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● ● ● ● are orange circles; ■ ■ ■ are silver squares. How many orange circles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ ▲ ▲ ▲ are orange triangles; ♥ ♥ ♥ ♥ are silver hearts. How many orange triangles are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ ■ ■ ■ ■ ■ ■ are orange squares; ◆ ◆ ◆ ◆ ◆ are silver diamonds. How many orange squares are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ are orange hearts; ★ ★ are silver stars. How many orange hearts are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are orange diamonds; ● ● ● are silver circles. How many orange diamonds are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ are pink stars; ▲ ▲ ▲ are red triangles. How many pink stars are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● are pink circles; ■ ■ ■ ■ are red squares. How many pink circles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ are pink triangles; ♥ ♥ ♥ ♥ ♥ are red hearts. How many pink triangles are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ ■ ■ ■ are pink squares; ◆ ◆ are red diamonds. How many pink squares are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ ♥ ♥ ♥ are pink hearts; ★ ★ ★ are red stars. How many pink hearts are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ ◆ ◆ ◆ are pink diamonds; ● ● ● ● are red circles. How many pink diamonds are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "★ ★ ★ ★ ★ ★ ★ are silver stars; ▲ ▲ ▲ ▲ ▲ are green triangles. How many silver stars are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "● ● ● ● ● ● ● ● are silver circles; ■ ■ are green squares. How many silver circles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are silver triangles; ♥ ♥ ♥ are green hearts. How many silver triangles are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "■ are silver squares; ◆ ◆ ◆ are green diamonds. How many silver squares are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "♥ ♥ are silver hearts; ★ ★ ★ ★ are green stars. How many silver hearts are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade1", "question": "◆ ◆ ◆ are silver diamonds; ● ● ● ● ● are green circles. How many silver diamonds are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● ● ● ● are red circles; ■ ■ are blue squares. How many red circles are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ ▲ ▲ ▲ are red triangles; ♥ ♥ ♥ are blue hearts. How many red triangles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ ■ ■ ■ are red squares; ◆ ◆ ◆ ◆ are blue diamonds. How many red squares are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ are red hearts; ★ ★ ★ ★ ★ are blue stars. How many red hearts are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are red diamonds; ● ● are blue circles. How many red diamonds are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ ★ ★ ★ ★ ★ ★ are green stars; ▲ ▲ ▲ are yellow triangles. How many green stars are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● are green circles; ■ ■ ■ are yellow squares. How many green circles are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ are green triangles; ♥ ♥ ♥ ♥ are yellow hearts. How many green triangles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ are green squares; ◆ ◆ ◆ ◆ ◆ are yellow diamonds. How many green squares are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ are green hearts; ★ ★ are yellow stars. How many green hearts are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ are green diamonds; ● ● ● are yellow circles. How many green diamonds are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ ★ ★ ★ are blue stars; ▲ ▲ ▲ ▲ are purple triangles. How many blue stars are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● ● ● ● ● ● ● are blue circles; ■ ■ ■ ■ ■ are purple squares. How many blue circles are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are blue triangles; ♥ ♥ are purple hearts. How many blue triangles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ ■ ■ ■ ■ ■ ■ are blue squares; ◆ ◆ ◆ are purple diamonds. How many blue squares are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ are blue hearts; ★ ★ ★ are purple stars. How many blue hearts are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ are blue diamonds; ● ● ● ● are purple circles. How many blue diamonds are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ are yellow stars; ▲ ▲ ▲ ▲ ▲ are orange triangles. How many yellow stars are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● ● ● ● are yellow circles; ■ ■ are orange squares. How many yellow circles are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ ▲ ▲ ▲ are yellow triangles; ♥ ♥ ♥ are orange hearts. How many yellow triangles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ ■ ■ ■ are yellow squares; ◆ ◆ ◆ ◆ are orange diamonds. How many yellow squares are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ are yellow hearts; ★ ★ ★ ★ ★ are orange stars. How many yellow hearts are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are yellow diamonds; ● ● are orange circles. How many yellow diamonds are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ ★ ★ ★ ★ ★ ★ are purple stars; ▲ ▲ ▲ are pink triangles. How many purple stars are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● are purple circles; ■ ■ ■ are pink squares. How many purple circles are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ are purple triangles; ♥ ♥ ♥ ♥ are pink hearts. How many purple triangles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ are purple squares; ◆ ◆ ◆ ◆ ◆ are pink diamonds. How many purple squares are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ are purple hearts; ★ ★ are pink stars. How many purple hearts are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ are purple diamonds; ● ● ● are pink circles. How many purple diamonds are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ ★ ★ ★ are orange stars; ▲ ▲ ▲ ▲ are silver triangles. How many orange stars are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● ● ● ● ● ● ● are orange circles; ■ ■ ■ ■ ■ are silver squares. How many orange circles are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ are orange triangles; ♥ ♥ are silver hearts. How many orange triangles are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ ■ ■ ■ ■ ■ ■ are orange squares; ◆ ◆ ◆ are silver diamonds. How many orange squares are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ are orange hearts; ★ ★ ★ are silver stars. How many orange hearts are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ are orange diamonds; ● ● ● ● are silver circles. How many orange diamonds are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ are pink stars; ▲ ▲ ▲ ▲ ▲ are red triangles. How many pink stars are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● ● ● ● are pink circles; ■ ■ are red squares. How many pink circles are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ ▲ ▲ ▲ are pink triangles; ♥ ♥ ♥ are red hearts. How many pink triangles are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ ■ ■ ■ are pink squares; ◆ ◆ ◆ ◆ are red diamonds. How many pink squares are there?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ ♥ ♥ ♥ are pink hearts; ★ ★ ★ ★ ★ are red stars. How many pink hearts are there?", "answers": ["7", "6", "8", "9"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ are pink diamonds; ● ● are red circles. How many pink diamonds are there?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "★ ★ ★ ★ ★ ★ ★ ★ ★ are silver stars; ▲ ▲ ▲ are green triangles. How many silver stars are there?", "answers": ["9", "8", "10", "11"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "● are silver circles; ■ ■ ■ are green squares. How many silver circles are there?", "answers": ["1", "0", "2", "3"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "▲ ▲ are silver triangles; ♥ ♥ ♥ ♥ are green hearts. How many silver triangles are there?", "answers": ["2", "1", "3", "4"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "■ ■ ■ are silver squares; ◆ ◆ ◆ ◆ ◆ are green diamonds. How many silver squares are there?", "answers": ["3", "2", "4", "5"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "♥ ♥ ♥ ♥ are silver hearts; ★ ★ are green stars. How many silver hearts are there?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Counting", "grade": "grade2", "question": "◆ ◆ ◆ ◆ ◆ are silver diamonds; ● ● ● are green circles. How many silver diamonds are there?", "answers": ["5", "4", "6", "7"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 2 moons and 3 stars. How many objects are there altogether?", "answers": ["5", "4", "6", "2"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 3 moons and 1 stars. How many objects are there altogether?", "answers": ["4", "3", "5", "Not correct"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 4 moons and 3 stars. How many objects are there altogether?", "answers": ["7", "6", "8", "4"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 5 moons and 1 stars. How many objects are there altogether?", "answers": ["6", "5", "7", "Not correct"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 1 moons and 3 stars. How many objects are there altogether?", "answers": ["4", "3", "5", "1"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 2 moons and 1 stars. How many objects are there altogether?", "answers": ["3", "2", "4", "Not correct"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 3 moons and 3 stars. How many objects are there altogether?", "answers": ["6", "5", "7", "3"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 4 moons and 1 stars. How many objects are there altogether?", "answers": ["5", "4", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 5 moons and 3 stars. How many objects are there altogether?", "answers": ["8", "7", "9", "5"], "correct": 0}, {"category": "Math", "grade": "preschool", "question": "Pip sees 1 moons and 1 stars. How many objects are there altogether?", "answers": ["2", "1", "3", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 2 + 4?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 7 - 3?", "answers": ["4", "3", "5", "7"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 4 or 2?", "answers": ["4", "2", "They are equal", "5"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 5 - 5?", "answers": ["0", "1", "5", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 6 + 8?", "answers": ["14", "13", "15", "16"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 7 or 3?", "answers": ["7", "3", "They are equal", "8"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 8 + 6?", "answers": ["14", "13", "15", "16"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 9 - 1?", "answers": ["8", "7", "9", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 10 or 4?", "answers": ["10", "4", "They are equal", "11"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 7 - 1?", "answers": ["6", "5", "7", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 2 + 2?", "answers": ["4", "3", "5", "6"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 5 or 3?", "answers": ["5", "3", "They are equal", "6"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 4 + 8?", "answers": ["12", "11", "13", "14"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 5 - 3?", "answers": ["2", "1", "3", "5"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 6 or 6?", "answers": ["They are equal", "6", "7", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 8 + 4?", "answers": ["12", "11", "13", "14"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 9 or 7?", "answers": ["9", "7", "They are equal", "10"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 10 + 2?", "answers": ["12", "11", "13", "14"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 5 - 1?", "answers": ["4", "3", "5", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 8 or 2?", "answers": ["8", "2", "They are equal", "9"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 3 - 3?", "answers": ["0", "1", "3", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 4 + 6?", "answers": ["10", "9", "11", "12"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 5 or 1?", "answers": ["5", "1", "They are equal", "6"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 6 + 4?", "answers": ["10", "9", "11", "12"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 7 - 7?", "answers": ["0", "1", "7", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 9 - 5?", "answers": ["4", "3", "5", "9"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 10 + 8?", "answers": ["18", "17", "19", "20"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 3 or 1?", "answers": ["3", "1", "They are equal", "4"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 2 + 6?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 3 - 1?", "answers": ["2", "1", "3", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 4 or 4?", "answers": ["They are equal", "4", "5", "Not correct"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 7 - 5?", "answers": ["2", "1", "3", "7"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 6 + 2?", "answers": ["8", "7", "9", "10"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 7 or 5?", "answers": ["7", "5", "They are equal", "8"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 8 + 8?", "answers": ["16", "15", "17", "18"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 9 - 3?", "answers": ["6", "5", "7", "9"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 10 or 6?", "answers": ["10", "6", "They are equal", "11"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 1 - 1?", "answers": ["0", "1", "Not correct", "Another answer"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "What is 4 + 2?", "answers": ["6", "5", "7", "8"], "correct": 0}, {"category": "Math", "grade": "kindergarten", "question": "Which number is greater: 8 or 6?", "answers": ["8", "6", "They are equal", "9"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 17 + 7?", "answers": ["24", "25", "23", "34"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "3 quarters and 5 dimes equal how many cents?", "answers": ["125", "115", "135", "8"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 31 gems and gives away 17. How many gems are left?", "answers": ["14", "15", "13", "48"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 38 + 22?", "answers": ["60", "61", "59", "70"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "2 quarters and 1 dime equal how many cents?", "answers": ["60", "50", "70", "3"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 52 gems and gives away 32. How many gems are left?", "answers": ["20", "21", "19", "84"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 59 + 2?", "answers": ["61", "62", "60", "71"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "1 quarter and 2 dimes equal how many cents?", "answers": ["45", "35", "55", "3"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 73 gems and gives away 12. How many gems are left?", "answers": ["61", "62", "60", "85"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 80 + 17?", "answers": ["97", "98", "96", "107"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "4 quarters and 3 dimes equal how many cents?", "answers": ["130", "120", "140", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 27 gems and gives away 14. How many gems are left?", "answers": ["13", "14", "12", "41"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 21 + 32?", "answers": ["53", "54", "52", "63"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "3 quarters and 4 dimes equal how many cents?", "answers": ["115", "105", "125", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 35 gems and gives away 7. How many gems are left?", "answers": ["28", "29", "27", "42"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 42 + 12?", "answers": ["54", "55", "53", "64"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "2 quarters and 5 dimes equal how many cents?", "answers": ["100", "90", "110", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 56 gems and gives away 22. How many gems are left?", "answers": ["34", "35", "33", "78"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 63 + 27?", "answers": ["90", "91", "89", "100"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "1 quarter and 1 dime equal how many cents?", "answers": ["35", "25", "45", "2"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 77 gems and gives away 2. How many gems are left?", "answers": ["75", "76", "74", "79"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 84 + 7?", "answers": ["91", "92", "90", "101"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "4 quarters and 2 dimes equal how many cents?", "answers": ["120", "110", "130", "6"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 18 gems and gives away 17. How many gems are left?", "answers": ["1", "2", "0", "35"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 25 + 22?", "answers": ["47", "48", "46", "57"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "3 quarters and 3 dimes equal how many cents?", "answers": ["105", "95", "115", "6"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 39 gems and gives away 32. How many gems are left?", "answers": ["7", "8", "6", "71"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 46 + 2?", "answers": ["48", "49", "47", "58"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "2 quarters and 4 dimes equal how many cents?", "answers": ["90", "80", "100", "6"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 60 gems and gives away 12. How many gems are left?", "answers": ["48", "49", "47", "72"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 67 + 17?", "answers": ["84", "85", "83", "94"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "1 quarter and 5 dimes equal how many cents?", "answers": ["75", "65", "85", "6"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 81 gems and gives away 27. How many gems are left?", "answers": ["54", "55", "53", "108"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 88 + 32?", "answers": ["120", "121", "119", "130"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "4 quarters and 1 dime equal how many cents?", "answers": ["110", "100", "120", "5"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 22 gems and gives away 7. How many gems are left?", "answers": ["15", "16", "14", "29"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 29 + 12?", "answers": ["41", "42", "40", "51"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "3 quarters and 2 dimes equal how many cents?", "answers": ["95", "85", "105", "5"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 43 gems and gives away 22. How many gems are left?", "answers": ["21", "22", "20", "65"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 50 + 27?", "answers": ["77", "78", "76", "87"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "2 quarters and 3 dimes equal how many cents?", "answers": ["80", "70", "90", "5"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 64 gems and gives away 2. How many gems are left?", "answers": ["62", "63", "61", "66"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 71 + 7?", "answers": ["78", "79", "77", "88"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "1 quarter and 4 dimes equal how many cents?", "answers": ["65", "55", "75", "5"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 85 gems and gives away 17. How many gems are left?", "answers": ["68", "69", "67", "102"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 12 + 22?", "answers": ["34", "35", "33", "44"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "4 quarters and 5 dimes equal how many cents?", "answers": ["150", "140", "160", "9"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 32 gems and gives away 26. How many gems are left?", "answers": ["6", "7", "5", "58"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 33 + 2?", "answers": ["35", "36", "34", "45"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "3 quarters and 1 dime equal how many cents?", "answers": ["85", "75", "95", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 47 gems and gives away 12. How many gems are left?", "answers": ["35", "36", "34", "59"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 54 + 17?", "answers": ["71", "72", "70", "81"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "2 quarters and 2 dimes equal how many cents?", "answers": ["70", "60", "80", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "A dragon has 68 gems and gives away 27. How many gems are left?", "answers": ["41", "42", "40", "95"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "What is 75 + 32?", "answers": ["107", "108", "106", "117"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "1 quarter and 3 dimes equal how many cents?", "answers": ["55", "45", "65", "4"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "A dragon has 89 gems and gives away 7. How many gems are left?", "answers": ["82", "83", "81", "96"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "What is 16 + 12?", "answers": ["28", "29", "27", "38"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "4 quarters and 4 dimes equal how many cents?", "answers": ["140", "130", "150", "8"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "A dragon has 30 gems and gives away 22. How many gems are left?", "answers": ["8", "9", "7", "52"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 3 × 6?", "answers": ["18", "21", "12", "9"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 40 ÷ 10?", "answers": ["4", "10", "5", "40"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 5 × 4?", "answers": ["20", "25", "16", "9"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 48 ÷ 8?", "answers": ["6", "8", "7", "48"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 7 × 2?", "answers": ["14", "21", "12", "9"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 48 ÷ 6?", "answers": ["8", "6", "9", "48"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 9 × 10?", "answers": ["90", "99", "80", "19"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 40 ÷ 4?", "answers": ["10", "4", "11", "40"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 11 × 8?", "answers": ["88", "99", "80", "19"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 24 ÷ 2?", "answers": ["12", "2", "13", "24"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 2 × 6?", "answers": ["12", "14", "6", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 30 ÷ 10?", "answers": ["3", "10", "4", "30"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 4 × 4?", "answers": ["16", "20", "12", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 40 ÷ 8?", "answers": ["5", "8", "6", "40"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 6 × 2?", "answers": ["12", "18", "10", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 42 ÷ 6?", "answers": ["7", "6", "8", "42"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 8 × 10?", "answers": ["80", "88", "70", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 36 ÷ 4?", "answers": ["9", "4", "10", "36"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 10 × 8?", "answers": ["80", "90", "72", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 22 ÷ 2?", "answers": ["11", "2", "12", "22"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 12 × 6?", "answers": ["72", "84", "66", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 20 ÷ 10?", "answers": ["2", "10", "3", "20"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 3 × 4?", "answers": ["12", "15", "8", "7"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 32 ÷ 8?", "answers": ["4", "8", "5", "32"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 5 × 2?", "answers": ["10", "15", "8", "7"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 36 ÷ 6?", "answers": ["6", "7", "36", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 7 × 10?", "answers": ["70", "77", "60", "17"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 32 ÷ 4?", "answers": ["8", "4", "9", "32"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 9 × 8?", "answers": ["72", "81", "64", "17"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 20 ÷ 2?", "answers": ["10", "2", "11", "20"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 11 × 6?", "answers": ["66", "77", "60", "17"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 120 ÷ 10?", "answers": ["12", "10", "13", "120"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 2 × 4?", "answers": ["8", "10", "4", "6"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 24 ÷ 8?", "answers": ["3", "8", "4", "24"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 4 × 2?", "answers": ["8", "12", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 30 ÷ 6?", "answers": ["5", "6", "30", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 6 × 10?", "answers": ["60", "66", "50", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 28 ÷ 4?", "answers": ["7", "4", "8", "28"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 8 × 8?", "answers": ["64", "72", "56", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 18 ÷ 2?", "answers": ["9", "2", "10", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 10 × 6?", "answers": ["60", "70", "54", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 110 ÷ 10?", "answers": ["11", "10", "12", "110"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 12 × 4?", "answers": ["48", "60", "44", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 16 ÷ 8?", "answers": ["2", "8", "3", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 3 × 2?", "answers": ["6", "9", "4", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 24 ÷ 6?", "answers": ["4", "6", "5", "24"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 5 × 10?", "answers": ["50", "55", "40", "15"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 24 ÷ 4?", "answers": ["6", "4", "7", "24"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 7 × 8?", "answers": ["56", "63", "48", "15"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 16 ÷ 2?", "answers": ["8", "2", "9", "16"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 9 × 6?", "answers": ["54", "63", "48", "15"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 100 ÷ 10?", "answers": ["10", "11", "100", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 11 × 4?", "answers": ["44", "55", "40", "15"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 96 ÷ 8?", "answers": ["12", "8", "13", "96"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 2 × 2?", "answers": ["4", "6", "2", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 18 ÷ 6?", "answers": ["3", "6", "4", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 4 × 10?", "answers": ["40", "44", "30", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 20 ÷ 4?", "answers": ["5", "4", "6", "20"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 6 × 8?", "answers": ["48", "54", "40", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 14 ÷ 2?", "answers": ["7", "2", "8", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 8 × 6?", "answers": ["48", "56", "42", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 90 ÷ 10?", "answers": ["9", "10", "90", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 10 × 4?", "answers": ["40", "50", "36", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 88 ÷ 8?", "answers": ["11", "8", "12", "88"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 12 × 2?", "answers": ["24", "36", "22", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 12 ÷ 6?", "answers": ["2", "6", "3", "12"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 3 × 10?", "answers": ["30", "33", "20", "13"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 16 ÷ 4?", "answers": ["4", "5", "16", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 5 × 8?", "answers": ["40", "45", "32", "13"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "What is 12 ÷ 2?", "answers": ["6", "2", "7", "12"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 4 by 5?", "answers": ["18", "20", "9", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 3/8 + 3/8?", "answers": ["6/8", "3/8", "7/8", "5/8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 6 by 11?", "answers": ["66", "34", "17", "68"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 7 by 2?", "answers": ["18", "14", "9", "20"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 3/4 + 3/4?", "answers": ["6/4", "3/4", "4/4", "5/4"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 9 by 8?", "answers": ["72", "34", "17", "74"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 10 by 11?", "answers": ["42", "110", "21", "44"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 9/10 + 9/10?", "answers": ["18/10", "9/10", "10/10", "17/10"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 12 by 5?", "answers": ["60", "34", "17", "62"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 13 by 8?", "answers": ["42", "104", "21", "44"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 2/6 + 2/6?", "answers": ["4/6", "2/6", "5/6", "3/6"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 15 by 2?", "answers": ["30", "34", "17", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 16 by 5?", "answers": ["42", "80", "21", "44"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 4/12 + 4/12?", "answers": ["8/12", "4/12", "9/12", "7/12"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 3 by 11?", "answers": ["33", "28", "14", "35"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 4 by 2?", "answers": ["12", "8", "6", "14"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 4/8 + 4/8?", "answers": ["1", "4/8", "8/8", "7/8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 6 by 8?", "answers": ["48", "28", "14", "50"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 7 by 11?", "answers": ["36", "77", "18", "38"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 9 by 5?", "answers": ["45", "28", "14", "47"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 10 by 8?", "answers": ["36", "80", "18", "38"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 6/10 + 6/10?", "answers": ["12/10", "6/10", "10/10", "11/10"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 12 by 2?", "answers": ["24", "28", "14", "26"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 13 by 5?", "answers": ["36", "65", "18", "38"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 15 by 11?", "answers": ["165", "52", "26", "167"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 16 by 2?", "answers": ["36", "32", "18", "38"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 8/12 + 8/12?", "answers": ["16/12", "8/12", "12/12", "15/12"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 3 by 8?", "answers": ["24", "22", "11", "26"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 4 by 11?", "answers": ["30", "44", "15", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 5/8 + 5/8?", "answers": ["10/8", "5/8", "8/8", "9/8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 6 by 5?", "answers": ["30", "22", "11", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 7 by 8?", "answers": ["30", "56", "15", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 9 by 2?", "answers": ["18", "22", "11", "20"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 10 by 5?", "answers": ["30", "50", "15", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 3/10 + 3/10?", "answers": ["6/10", "3/10", "7/10", "5/10"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 12 by 11?", "answers": ["132", "46", "23", "134"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 13 by 2?", "answers": ["30", "26", "15", "32"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 15 by 8?", "answers": ["120", "46", "23", "122"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 16 by 11?", "answers": ["54", "176", "27", "56"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 1/12 + 1/12?", "answers": ["2/12", "1/12", "3/12", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 3 by 5?", "answers": ["15", "16", "8", "17"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 4 by 8?", "answers": ["24", "32", "12", "26"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 6/8 + 6/8?", "answers": ["12/8", "6/8", "8/8", "11/8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 6 by 2?", "answers": ["12", "16", "8", "14"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 7 by 5?", "answers": ["24", "35", "12", "26"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 9 by 11?", "answers": ["99", "40", "20", "101"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 10 by 2?", "answers": ["24", "20", "12", "26"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 12 by 8?", "answers": ["96", "40", "20", "98"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 13 by 11?", "answers": ["48", "143", "24", "50"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 15 by 5?", "answers": ["75", "40", "20", "77"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the perimeter of a rectangle that is 16 by 8?", "answers": ["48", "128", "24", "50"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 5/12 + 5/12?", "answers": ["10/12", "5/12", "11/12", "9/12"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is the area of a rectangle that is 3 by 2?", "answers": ["6", "10", "5", "8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "What is 7/8 + 7/8?", "answers": ["14/8", "7/8", "8/8", "13/8"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 2 + 5 × 7.", "answers": ["37", "49", "17", "14"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 4 × 8 × 6 rectangular prism?", "answers": ["192", "32", "48", "196"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 50% of 140?", "answers": ["70", "75", "50", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 5 + 2 × 6.", "answers": ["17", "42", "16", "13"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 7 × 3 × 3 rectangular prism?", "answers": ["63", "21", "9", "70"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 20% of 200?", "answers": ["40", "45", "160", "20"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 8 + 11 × 5.", "answers": ["63", "95", "93", "24"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 2 × 5 × 6 rectangular prism?", "answers": ["60", "10", "30", "62"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 75% of 260?", "answers": ["195", "200", "65", "75"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 11 + 8 × 4.", "answers": ["43", "76", "92", "23"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 5 × 7 × 3 rectangular prism?", "answers": ["105", "35", "21", "110"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 25% of 320?", "answers": ["80", "85", "240", "25"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 14 + 5 × 3.", "answers": ["29", "57", "73", "22"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 8 × 2 × 6 rectangular prism?", "answers": ["96", "16", "12", "104"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 10% of 380?", "answers": ["38", "43", "342", "10"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 17 + 2 × 2.", "answers": ["21", "38", "36", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 3 × 4 × 3 rectangular prism?", "answers": ["36", "12", "39", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 50% of 440?", "answers": ["220", "225", "50", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 20 + 11 × 9.", "answers": ["119", "279", "229", "40"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 6 × 6 × 6 rectangular prism?", "answers": ["216", "36", "222", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 20% of 500?", "answers": ["100", "105", "400", "20"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 3 + 8 × 8.", "answers": ["67", "88", "32", "19"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 9 × 8 × 3 rectangular prism?", "answers": ["216", "72", "24", "225"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 75% of 560?", "answers": ["420", "425", "140", "75"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 6 + 5 × 7.", "answers": ["41", "77", "37", "18"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 4 × 3 × 6 rectangular prism?", "answers": ["72", "12", "18", "76"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 25% of 620?", "answers": ["155", "160", "465", "25"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 9 + 2 × 6.", "answers": ["21", "66", "24", "17"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 7 × 5 × 3 rectangular prism?", "answers": ["105", "35", "15", "112"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is 10% of 80?", "answers": ["8", "13", "72", "10"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 12 + 11 × 5.", "answers": ["67", "115", "137", "28"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 2 × 7 × 6 rectangular prism?", "answers": ["84", "14", "42", "86"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 15 + 8 × 4.", "answers": ["47", "92", "124", "27"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 5 × 2 × 3 rectangular prism?", "answers": ["30", "10", "6", "35"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 18 + 5 × 3.", "answers": ["33", "69", "93", "26"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 8 × 4 × 6 rectangular prism?", "answers": ["192", "32", "24", "200"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 1 + 2 × 2.", "answers": ["5", "6", "4", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 3 × 6 × 3 rectangular prism?", "answers": ["54", "18", "57", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 4 + 11 × 9.", "answers": ["103", "135", "53", "24"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 6 × 8 × 6 rectangular prism?", "answers": ["288", "48", "294", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 7 + 8 × 8.", "answers": ["71", "120", "64", "23"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 9 × 3 × 3 rectangular prism?", "answers": ["81", "27", "9", "90"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 10 + 5 × 7.", "answers": ["45", "105", "57", "22"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 4 × 5 × 6 rectangular prism?", "answers": ["120", "20", "30", "124"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 13 + 2 × 6.", "answers": ["25", "90", "32", "21"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 7 × 7 × 3 rectangular prism?", "answers": ["147", "49", "21", "154"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 16 + 11 × 5.", "answers": ["71", "135", "181", "32"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 2 × 2 × 6 rectangular prism?", "answers": ["24", "4", "12", "26"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 19 + 8 × 4.", "answers": ["51", "108", "156", "31"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 5 × 4 × 3 rectangular prism?", "answers": ["60", "20", "12", "65"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 2 + 5 × 3.", "answers": ["17", "21", "13", "10"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 8 × 6 × 6 rectangular prism?", "answers": ["288", "48", "36", "296"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 5 + 2 × 2.", "answers": ["9", "14", "12", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 3 × 8 × 3 rectangular prism?", "answers": ["72", "24", "75", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 8 + 11 × 9.", "answers": ["107", "171", "97", "28"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "What is the volume of a 6 × 3 × 6 rectangular prism?", "answers": ["108", "18", "114", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "Use order of operations: 11 + 8 × 8.", "answers": ["75", "152", "96", "27"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 20% of 120?", "answers": ["24", "34", "96", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 3:6. If the first amount becomes 12, what is the second amount?", "answers": ["24", "12", "10", "27"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 5x + 16 = 61.", "answers": ["9", "10", "8", "18"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 50% of 180?", "answers": ["90", "100", "50", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 6:3. If the first amount becomes 24, what is the second amount?", "answers": ["12", "24", "7", "18"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 8x + 31 = 151.", "answers": ["15", "16", "14", "30"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 10% of 240?", "answers": ["24", "34", "216", "10"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 1:9. If the first amount becomes 4, what is the second amount?", "answers": ["36", "4", "13", "37"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 3x + 11 = 74.", "answers": ["21", "22", "20", "42"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 40% of 300?", "answers": ["120", "130", "180", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 4:6. If the first amount becomes 16, what is the second amount?", "answers": ["24", "16", "10", "28"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 6x + 26 = 188.", "answers": ["27", "28", "26", "54"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 75% of 360?", "answers": ["270", "280", "90", "75"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 7:3. If the first amount becomes 28, what is the second amount?", "answers": ["12", "28", "7", "19"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 9x + 6 = 78.", "answers": ["8", "9", "7", "16"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 25% of 420?", "answers": ["105", "115", "315", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 2:9. If the first amount becomes 8, what is the second amount?", "answers": ["36", "8", "13", "38"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 4x + 21 = 77.", "answers": ["14", "15", "13", "28"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 60% of 480?", "answers": ["288", "298", "192", "60"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 5:6. If the first amount becomes 20, what is the second amount?", "answers": ["24", "20", "10", "29"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 7x + 1 = 141.", "answers": ["20", "21", "19", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 20% of 540?", "answers": ["108", "118", "432", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 8:3. If the first amount becomes 32, what is the second amount?", "answers": ["12", "32", "7", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 2x + 16 = 68.", "answers": ["26", "27", "25", "52"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 50% of 100?", "answers": ["50", "60", "Not correct", "Another answer"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 3:9. If the first amount becomes 12, what is the second amount?", "answers": ["36", "12", "13", "39"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 5x + 31 = 66.", "answers": ["7", "8", "6", "14"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 10% of 160?", "answers": ["16", "26", "144", "10"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 6:6. If the first amount becomes 24, what is the second amount?", "answers": ["24", "10", "30", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 8x + 11 = 115.", "answers": ["13", "14", "12", "26"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 40% of 220?", "answers": ["88", "98", "132", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 1:3. If the first amount becomes 4, what is the second amount?", "answers": ["12", "4", "7", "13"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 3x + 26 = 83.", "answers": ["19", "20", "18", "38"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 75% of 280?", "answers": ["210", "220", "70", "75"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 4:9. If the first amount becomes 16, what is the second amount?", "answers": ["36", "16", "13", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 6x + 6 = 156.", "answers": ["25", "26", "24", "50"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 25% of 340?", "answers": ["85", "95", "255", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 7:6. If the first amount becomes 28, what is the second amount?", "answers": ["24", "28", "10", "31"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 9x + 21 = 75.", "answers": ["6", "7", "5", "12"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 60% of 400?", "answers": ["240", "250", "160", "60"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 2:3. If the first amount becomes 8, what is the second amount?", "answers": ["12", "8", "7", "14"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 4x + 1 = 49.", "answers": ["12", "13", "11", "24"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 20% of 460?", "answers": ["92", "102", "368", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 5:9. If the first amount becomes 20, what is the second amount?", "answers": ["36", "20", "13", "41"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 7x + 16 = 142.", "answers": ["18", "19", "17", "36"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 50% of 520?", "answers": ["260", "270", "50", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 8:6. If the first amount becomes 32, what is the second amount?", "answers": ["24", "32", "10", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 2x + 31 = 79.", "answers": ["24", "25", "23", "48"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 10% of 580?", "answers": ["58", "68", "522", "10"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 3:3. If the first amount becomes 12, what is the second amount?", "answers": ["12", "7", "15", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 5x + 11 = 36.", "answers": ["5", "6", "4", "10"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 40% of 140?", "answers": ["56", "66", "84", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 6:9. If the first amount becomes 24, what is the second amount?", "answers": ["36", "24", "13", "42"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 8x + 26 = 114.", "answers": ["11", "12", "10", "22"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 75% of 200?", "answers": ["150", "160", "50", "75"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 1:6. If the first amount becomes 4, what is the second amount?", "answers": ["24", "4", "10", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 3x + 6 = 57.", "answers": ["17", "18", "16", "34"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 25% of 260?", "answers": ["65", "75", "195", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 4:3. If the first amount becomes 16, what is the second amount?", "answers": ["12", "16", "7", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 6x + 21 = 159.", "answers": ["23", "24", "22", "46"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 60% of 320?", "answers": ["192", "202", "128", "60"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 7:9. If the first amount becomes 28, what is the second amount?", "answers": ["36", "28", "13", "43"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 9x + 1 = 37.", "answers": ["4", "5", "3", "8"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 20% of 380?", "answers": ["76", "86", "304", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 2:6. If the first amount becomes 8, what is the second amount?", "answers": ["24", "8", "10", "26"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 4x + 16 = 56.", "answers": ["10", "11", "9", "20"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 5:3. If the first amount becomes 20, what is the second amount?", "answers": ["12", "20", "7", "17"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 7x + 31 = 143.", "answers": ["16", "17", "15", "32"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 10% of 500?", "answers": ["50", "60", "450", "10"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "A ratio is 8:9. If the first amount becomes 32, what is the second amount?", "answers": ["36", "32", "13", "44"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 2x + 11 = 55.", "answers": ["22", "23", "21", "44"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "What is 40% of 560?", "answers": ["224", "234", "336", "40"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "Solve for x: 5x + 26 = 41.", "answers": ["3", "4", "2", "6"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Which animal says moo?", "answers": ["Cow", "Dog", "Duck", "Cat"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "What do we use to smell flowers?", "answers": ["Nose", "Hands", "Feet", "Ears"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "What falls from clouds as drops?", "answers": ["Rain", "Sand", "Leaves", "Rocks"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Which is a living thing?", "answers": ["Tree", "Chair", "Ball", "Shoe"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "What color is grass most often?", "answers": ["Green", "Purple", "Black", "Orange"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "What do plants need to grow?", "answers": ["Water and sunlight", "Plastic and metal", "Only rocks", "Only darkness"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which season is often cold and snowy?", "answers": ["Winter", "Summer", "Spring", "Autumn"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which animal lives in water and has fins?", "answers": ["Fish", "Horse", "Chicken", "Rabbit"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "What lights Earth during the day?", "answers": ["The Sun", "The Moon", "A candle", "A flashlight"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which object is non-living?", "answers": ["Rock", "Dog", "Flower", "Bird"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "What part of a plant takes in water from soil?", "answers": ["Roots", "Petals", "Fruit", "Seeds"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Which material is attracted to a magnet?", "answers": ["Iron", "Wood", "Paper", "Plastic"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "What sense uses your ears?", "answers": ["Hearing", "Taste", "Smell", "Touch"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "What is a young frog called?", "answers": ["Tadpole", "Cub", "Chick", "Calf"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Which state of matter keeps its own shape?", "answers": ["Solid", "Liquid", "Gas", "Steam"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "What is water vapor turning into liquid called?", "answers": ["Condensation", "Melting", "Freezing", "Cutting"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "What do animals need to survive?", "answers": ["Food, water, and shelter", "Only toys", "Only rocks", "Only sunlight"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "What part of the water cycle falls from clouds?", "answers": ["Precipitation", "Evaporation", "Collection", "Magnetism"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "What do herbivores eat?", "answers": ["Plants", "Only meat", "Rocks", "Metal"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Which layer covers most of Earth?", "answers": ["Water", "Plastic", "Glass", "Metal"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Which force pulls objects toward Earth?", "answers": ["Gravity", "Friction only", "Light", "Sound"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Which planet is known as the Red Planet?", "answers": ["Mars", "Venus", "Mercury", "Neptune"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "What do bees collect from flowers?", "answers": ["Nectar", "Salt", "Sand", "Snow"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "What is at the center of our solar system?", "answers": ["The Sun", "Earth", "The Moon", "Mars"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "What helps a fish breathe underwater?", "answers": ["Gills", "Feathers", "Fur", "Claws"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which organ pumps blood through the body?", "answers": ["Heart", "Lung", "Stomach", "Brain"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "What carries electrical energy in a closed circuit?", "answers": ["Electric current", "Sand", "Ice", "Smoke"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "What type of energy do we hear?", "answers": ["Sound energy", "Chemical taste", "Gravity only", "Still water"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "What happens when light bounces off a mirror?", "answers": ["Reflection", "Evaporation", "Digestion", "Freezing"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which body system helps you breathe?", "answers": ["Respiratory system", "Digestive system", "Skeletal system", "Muscular system"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "What is the basic unit of life?", "answers": ["Cell", "Planet", "Rock", "Cloud"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which body system moves blood around the body?", "answers": ["Circulatory system", "Digestive system", "Skeletal system", "Respiratory system"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "What force keeps planets moving around the Sun?", "answers": ["Gravity", "Friction", "Sound", "Taste"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "What is a change that makes a new substance called?", "answers": ["Chemical change", "Physical sorting", "Measuring", "Mixing colors only"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which structure controls many cell activities?", "answers": ["Nucleus", "Wall outlet", "River", "Feather"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "What process do plants use to make food?", "answers": ["Photosynthesis", "Condensation", "Erosion", "Magnetism"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "What are inherited traits passed through?", "answers": ["Genes", "Clouds", "Rocks", "Shadows"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "What theory explains the movement of Earth's plates?", "answers": ["Plate tectonics", "Photosynthesis", "Evaporation", "Reflection"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "What variable is changed on purpose in an experiment?", "answers": ["Independent variable", "Dependent variable", "Control group", "Conclusion"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "What type of rock forms from cooled lava or magma?", "answers": ["Igneous rock", "Plastic rock", "Paper rock", "Cloud rock"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Review check: Which animal says moo?", "answers": ["Cow", "Dog", "Duck", "Cat"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Review check: What do we use to smell flowers?", "answers": ["Nose", "Hands", "Feet", "Ears"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Review check: What falls from clouds as drops?", "answers": ["Rain", "Sand", "Leaves", "Rocks"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Review check: Which is a living thing?", "answers": ["Tree", "Chair", "Ball", "Shoe"], "correct": 0}, {"category": "Science", "grade": "preschool", "question": "Review check: What color is grass most often?", "answers": ["Green", "Purple", "Black", "Orange"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Review check: What do plants need to grow?", "answers": ["Water and sunlight", "Plastic and metal", "Only rocks", "Only darkness"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Review check: Which season is often cold and snowy?", "answers": ["Winter", "Summer", "Spring", "Autumn"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Review check: Which animal lives in water and has fins?", "answers": ["Fish", "Horse", "Chicken", "Rabbit"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Review check: What lights Earth during the day?", "answers": ["The Sun", "The Moon", "A candle", "A flashlight"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Review check: Which object is non-living?", "answers": ["Rock", "Dog", "Flower", "Bird"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Review check: What part of a plant takes in water from soil?", "answers": ["Roots", "Petals", "Fruit", "Seeds"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Review check: Which material is attracted to a magnet?", "answers": ["Iron", "Wood", "Paper", "Plastic"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Review check: What sense uses your ears?", "answers": ["Hearing", "Taste", "Smell", "Touch"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Review check: What is a young frog called?", "answers": ["Tadpole", "Cub", "Chick", "Calf"], "correct": 0}, {"category": "Science", "grade": "grade1", "question": "Review check: Which state of matter keeps its own shape?", "answers": ["Solid", "Liquid", "Gas", "Steam"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Review check: What is water vapor turning into liquid called?", "answers": ["Condensation", "Melting", "Freezing", "Cutting"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Review check: What do animals need to survive?", "answers": ["Food, water, and shelter", "Only toys", "Only rocks", "Only sunlight"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Review check: What part of the water cycle falls from clouds?", "answers": ["Precipitation", "Evaporation", "Collection", "Magnetism"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Review check: What do herbivores eat?", "answers": ["Plants", "Only meat", "Rocks", "Metal"], "correct": 0}, {"category": "Science", "grade": "grade2", "question": "Review check: Which layer covers most of Earth?", "answers": ["Water", "Plastic", "Glass", "Metal"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Review check: Which force pulls objects toward Earth?", "answers": ["Gravity", "Friction only", "Light", "Sound"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Review check: Which planet is known as the Red Planet?", "answers": ["Mars", "Venus", "Mercury", "Neptune"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Review check: What do bees collect from flowers?", "answers": ["Nectar", "Salt", "Sand", "Snow"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Review check: What is at the center of our solar system?", "answers": ["The Sun", "Earth", "The Moon", "Mars"], "correct": 0}, {"category": "Science", "grade": "grade3", "question": "Review check: What helps a fish breathe underwater?", "answers": ["Gills", "Feathers", "Fur", "Claws"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Review check: Which organ pumps blood through the body?", "answers": ["Heart", "Lung", "Stomach", "Brain"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Review check: What carries electrical energy in a closed circuit?", "answers": ["Electric current", "Sand", "Ice", "Smoke"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Review check: What type of energy do we hear?", "answers": ["Sound energy", "Chemical taste", "Gravity only", "Still water"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Review check: What happens when light bounces off a mirror?", "answers": ["Reflection", "Evaporation", "Digestion", "Freezing"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Review check: Which body system helps you breathe?", "answers": ["Respiratory system", "Digestive system", "Skeletal system", "Muscular system"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Review check: What is the basic unit of life?", "answers": ["Cell", "Planet", "Rock", "Cloud"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Review check: Which body system moves blood around the body?", "answers": ["Circulatory system", "Digestive system", "Skeletal system", "Respiratory system"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Review check: What force keeps planets moving around the Sun?", "answers": ["Gravity", "Friction", "Sound", "Taste"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Review check: What is a change that makes a new substance called?", "answers": ["Chemical change", "Physical sorting", "Measuring", "Mixing colors only"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Review check: Which structure controls many cell activities?", "answers": ["Nucleus", "Wall outlet", "River", "Feather"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Review check: What process do plants use to make food?", "answers": ["Photosynthesis", "Condensation", "Erosion", "Magnetism"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Review check: What are inherited traits passed through?", "answers": ["Genes", "Clouds", "Rocks", "Shadows"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Review check: What theory explains the movement of Earth's plates?", "answers": ["Plate tectonics", "Photosynthesis", "Evaporation", "Reflection"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Review check: What variable is changed on purpose in an experiment?", "answers": ["Independent variable", "Dependent variable", "Control group", "Conclusion"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Review check: What type of rock forms from cooled lava or magma?", "answers": ["Igneous rock", "Plastic rock", "Paper rock", "Cloud rock"], "correct": 0}, {"category": "English", "grade": "preschool", "question": "Which word rhymes with cat?", "answers": ["Hat", "Sun", "Dog", "Book"], "correct": 0}, {"category": "English", "grade": "preschool", "question": "Which letter starts the word dog?", "answers": ["D", "B", "M", "S"], "correct": 0}, {"category": "English", "grade": "preschool", "question": "Which word means the opposite of up?", "answers": ["Down", "Over", "Blue", "Fast"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Which word is spelled correctly?", "answers": ["School", "Skool", "Scool", "Shcool"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Which word rhymes with cake?", "answers": ["Lake", "Chair", "Book", "Tree"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Which word names a person?", "answers": ["Teacher", "Run", "Blue", "Quickly"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Which word is a noun?", "answers": ["Teacher", "Run", "Quickly", "Blue"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Which word is a verb?", "answers": ["Jump", "Table", "Happy", "Green"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Which word is an adjective?", "answers": ["Small", "Run", "Table", "Quickly"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose the antonym of hot.", "answers": ["Cold", "Warm", "Boiling", "Sunny"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose the synonym of happy.", "answers": ["Glad", "Sad", "Angry", "Sleepy"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Which sentence asks a question?", "answers": ["Where is the book?", "The book is here.", "I found it.", "The book is red."], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Which sentence is complete?", "answers": ["The bird flew away.", "Because it rained.", "Running quickly.", "Under the table."], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Which word is a plural noun?", "answers": ["Boxes", "Box", "Runs", "Happy"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Which word is an adverb?", "answers": ["Carefully", "Careful", "Care", "Car"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Which sentence uses a comma correctly?", "answers": ["After lunch, we went outside.", "After lunch we, went outside.", "After, lunch we went outside.", "After lunch we went, outside."], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Which word is a pronoun?", "answers": ["They", "Mountain", "Blue", "Quickly"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Which word is a conjunction?", "answers": ["Because", "Mountain", "Quickly", "Blue"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Which sentence has correct subject-verb agreement?", "answers": ["The dogs are barking.", "The dogs is barking.", "The dog are barking.", "The dogs be barking."], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Which word is a proper noun?", "answers": ["Canada", "country", "river", "teacher"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Which sentence uses a semicolon correctly?", "answers": ["I studied hard; I passed the test.", "I studied; hard I passed the test.", "I; studied hard I passed the test.", "I studied hard I; passed the test."], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Which word is a preposition?", "answers": ["Between", "Beautiful", "Running", "Happiness"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Which sentence uses an apostrophe for possession?", "answers": ["Maya's backpack is blue.", "Mayas backpack is blue.", "Maya backpack's is blue.", "Mayas' backpack is blue."], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Choose a synonym for 'happy'.", "answers": ["glad", "cold", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Choose a synonym for 'big'.", "answers": ["large", "down", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose a synonym for 'small'.", "answers": ["tiny", "right", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Choose a synonym for 'fast'.", "answers": ["quick", "late", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Choose a synonym for 'smart'.", "answers": ["clever", "outside", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Choose a synonym for 'quiet'.", "answers": ["silent", "after", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Choose a synonym for 'begin'.", "answers": ["start", "night", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Choose a synonym for 'finish'.", "answers": ["end", "full", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Choose a synonym for 'angry'.", "answers": ["mad", "hard", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose a synonym for 'easy'.", "answers": ["simple", "far", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Choose a synonym for 'hard'.", "answers": ["difficult", "closed", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Choose a synonym for 'brave'.", "answers": ["courageous", "old", "wrong", "slow"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Choose an antonym for 'hot'.", "answers": ["cold", "glad", "hot", "same"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Choose an antonym for 'up'.", "answers": ["down", "large", "up", "same"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose an antonym for 'left'.", "answers": ["right", "tiny", "left", "same"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Choose an antonym for 'early'.", "answers": ["late", "quick", "early", "same"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Choose an antonym for 'inside'.", "answers": ["outside", "clever", "inside", "same"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Choose an antonym for 'before'.", "answers": ["after", "silent", "before", "same"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Choose an antonym for 'day'.", "answers": ["night", "start", "day", "same"], "correct": 0}, {"category": "English", "grade": "kindergarten", "question": "Choose an antonym for 'empty'.", "answers": ["full", "end", "empty", "same"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Choose an antonym for 'soft'.", "answers": ["hard", "mad", "soft", "same"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Choose an antonym for 'near'.", "answers": ["far", "simple", "near", "same"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Choose an antonym for 'open'.", "answers": ["closed", "difficult", "open", "same"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Choose an antonym for 'young'.", "answers": ["old", "courageous", "young", "same"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Canada?", "answers": ["Ottawa", "Washington, D.C.", "Mexico City", "Brasília"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Ottawa is the capital of which country?", "answers": ["Canada", "United States", "Mexico", "Brazil"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Canada in?", "answers": ["North America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of United States?", "answers": ["Washington, D.C.", "Mexico City", "Brasília", "Buenos Aires"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Washington, D.C. is the capital of which country?", "answers": ["United States", "Mexico", "Brazil", "Argentina"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is United States in?", "answers": ["North America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Mexico?", "answers": ["Mexico City", "Brasília", "Buenos Aires", "Lima"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Mexico City is the capital of which country?", "answers": ["Mexico", "Brazil", "Argentina", "Peru"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Mexico in?", "answers": ["North America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Brazil?", "answers": ["Brasília", "Buenos Aires", "Lima", "Santiago"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Brasília is the capital of which country?", "answers": ["Brazil", "Argentina", "Peru", "Chile"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Brazil in?", "answers": ["South America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Argentina?", "answers": ["Buenos Aires", "Lima", "Santiago", "Bogotá"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Buenos Aires is the capital of which country?", "answers": ["Argentina", "Peru", "Chile", "Colombia"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Argentina in?", "answers": ["South America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Peru?", "answers": ["Lima", "Santiago", "Bogotá", "Paris"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Lima is the capital of which country?", "answers": ["Peru", "Chile", "Colombia", "France"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Peru in?", "answers": ["South America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Chile?", "answers": ["Santiago", "Bogotá", "Paris", "Rome"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Santiago is the capital of which country?", "answers": ["Chile", "Colombia", "France", "Italy"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Chile in?", "answers": ["South America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Colombia?", "answers": ["Bogotá", "Paris", "Rome", "Madrid"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Bogotá is the capital of which country?", "answers": ["Colombia", "France", "Italy", "Spain"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Colombia in?", "answers": ["South America", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of France?", "answers": ["Paris", "Rome", "Madrid", "Berlin"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Paris is the capital of which country?", "answers": ["France", "Italy", "Spain", "Germany"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is France in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Italy?", "answers": ["Rome", "Madrid", "Berlin", "Athens"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Rome is the capital of which country?", "answers": ["Italy", "Spain", "Germany", "Greece"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Italy in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Spain?", "answers": ["Madrid", "Berlin", "Athens", "Oslo"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Madrid is the capital of which country?", "answers": ["Spain", "Germany", "Greece", "Norway"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Spain in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Germany?", "answers": ["Berlin", "Athens", "Oslo", "Stockholm"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Berlin is the capital of which country?", "answers": ["Germany", "Greece", "Norway", "Sweden"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Germany in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Greece?", "answers": ["Athens", "Oslo", "Stockholm", "Dublin"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Athens is the capital of which country?", "answers": ["Greece", "Norway", "Sweden", "Ireland"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Greece in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Norway?", "answers": ["Oslo", "Stockholm", "Dublin", "Cairo"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Oslo is the capital of which country?", "answers": ["Norway", "Sweden", "Ireland", "Egypt"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Norway in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Sweden?", "answers": ["Stockholm", "Dublin", "Cairo", "Nairobi"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Stockholm is the capital of which country?", "answers": ["Sweden", "Ireland", "Egypt", "Kenya"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Sweden in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Ireland?", "answers": ["Dublin", "Cairo", "Nairobi", "Pretoria"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Dublin is the capital of which country?", "answers": ["Ireland", "Egypt", "Kenya", "South Africa"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Ireland in?", "answers": ["Europe", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Egypt?", "answers": ["Cairo", "Nairobi", "Pretoria", "Abuja"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Cairo is the capital of which country?", "answers": ["Egypt", "Kenya", "South Africa", "Nigeria"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Egypt in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Kenya?", "answers": ["Nairobi", "Pretoria", "Abuja", "Rabat"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Nairobi is the capital of which country?", "answers": ["Kenya", "South Africa", "Nigeria", "Morocco"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Kenya in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of South Africa?", "answers": ["Pretoria", "Abuja", "Rabat", "Accra"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Pretoria is the capital of which country?", "answers": ["South Africa", "Nigeria", "Morocco", "Ghana"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is South Africa in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Nigeria?", "answers": ["Abuja", "Rabat", "Accra", "Tokyo"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Abuja is the capital of which country?", "answers": ["Nigeria", "Morocco", "Ghana", "Japan"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Nigeria in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Morocco?", "answers": ["Rabat", "Accra", "Tokyo", "Beijing"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Rabat is the capital of which country?", "answers": ["Morocco", "Ghana", "Japan", "China"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Morocco in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Ghana?", "answers": ["Accra", "Tokyo", "Beijing", "New Delhi"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Accra is the capital of which country?", "answers": ["Ghana", "Japan", "China", "India"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Ghana in?", "answers": ["Africa", "Asia", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Japan?", "answers": ["Tokyo", "Beijing", "New Delhi", "Seoul"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Tokyo is the capital of which country?", "answers": ["Japan", "China", "India", "South Korea"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Japan in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of China?", "answers": ["Beijing", "New Delhi", "Seoul", "Bangkok"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Beijing is the capital of which country?", "answers": ["China", "India", "South Korea", "Thailand"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is China in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of India?", "answers": ["New Delhi", "Seoul", "Bangkok", "Hanoi"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "New Delhi is the capital of which country?", "answers": ["India", "South Korea", "Thailand", "Vietnam"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is India in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of South Korea?", "answers": ["Seoul", "Bangkok", "Hanoi", "Jakarta"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Seoul is the capital of which country?", "answers": ["South Korea", "Thailand", "Vietnam", "Indonesia"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is South Korea in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Thailand?", "answers": ["Bangkok", "Hanoi", "Jakarta", "Canberra"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Bangkok is the capital of which country?", "answers": ["Thailand", "Vietnam", "Indonesia", "Australia"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Thailand in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Vietnam?", "answers": ["Hanoi", "Jakarta", "Canberra", "Wellington"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Hanoi is the capital of which country?", "answers": ["Vietnam", "Indonesia", "Australia", "New Zealand"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Vietnam in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Indonesia?", "answers": ["Jakarta", "Canberra", "Wellington", "Not correct"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Jakarta is the capital of which country?", "answers": ["Indonesia", "Australia", "New Zealand", "Not correct"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Indonesia in?", "answers": ["Asia", "Africa", "Australia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of Australia?", "answers": ["Canberra", "Wellington", "Not correct", "Another answer"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Canberra is the capital of which country?", "answers": ["Australia", "New Zealand", "Not correct", "Another answer"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is Australia in?", "answers": ["Australia", "Africa", "Asia", "Europe"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade3", "question": "What is the capital of New Zealand?", "answers": ["Wellington", "Ottawa", "Washington, D.C.", "Mexico City"], "correct": 0}, {"category": "Countries and Capitals", "grade": "grade5", "question": "Wellington is the capital of which country?", "answers": ["New Zealand", "Canada", "United States", "Mexico"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which continent is New Zealand in?", "answers": ["Oceania", "Africa", "Asia", "Australia"], "correct": 0}, {"category": "Geography", "grade": "kindergarten", "question": "What do we call a large body of salt water?", "answers": ["Ocean", "Mountain", "Forest", "Desert"], "correct": 0}, {"category": "Geography", "grade": "grade1", "question": "What tool shows places and directions?", "answers": ["Map", "Spoon", "Pillow", "Clock"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which landform is very high and rocky?", "answers": ["Mountain", "Lake", "Valley", "Beach"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "Which ocean is the largest?", "answers": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which imaginary line divides Earth into Northern and Southern Hemispheres?", "answers": ["Equator", "Prime Meridian", "Tropic of Cancer", "Arctic Circle"], "correct": 0}, {"category": "Geography", "grade": "grade5", "question": "Which continent has the Sahara Desert?", "answers": ["Africa", "Europe", "Australia", "South America"], "correct": 0}, {"category": "Geography", "grade": "grade6", "question": "What is the study of Earth's places and features called?", "answers": ["Geography", "Biology", "Grammar", "Algebra"], "correct": 0}, {"category": "Geography", "grade": "grade6", "question": "What do lines of latitude measure?", "answers": ["Distance north or south of the Equator", "Height of mountains", "Ocean depth", "Time of day"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which direction is opposite of north?", "answers": ["South", "East", "West", "Northwest"], "correct": 0}, {"category": "Geography", "grade": "grade1", "question": "Which place has lots of sand and ocean waves?", "answers": ["Beach", "Mountain", "Cave", "Forest"], "correct": 0}, {"category": "Logic", "grade": "kindergarten", "question": "Which comes next: red, blue, red, blue, ___?", "answers": ["red", "blue", "green", "yellow"], "correct": 0}, {"category": "Logic", "grade": "grade1", "question": "Which number comes next: 2, 4, 6, 8, ___?", "answers": ["10", "9", "11", "12"], "correct": 0}, {"category": "Logic", "grade": "grade2", "question": "Which item does not belong: apple, banana, carrot, orange?", "answers": ["carrot", "apple", "banana", "orange"], "correct": 0}, {"category": "Logic", "grade": "grade3", "question": "If all robins are birds, what is a robin?", "answers": ["A bird", "A fish", "A rock", "A tree"], "correct": 0}, {"category": "Logic", "grade": "grade4", "question": "Which pattern rule fits 5, 10, 15, 20?", "answers": ["Add 5", "Subtract 5", "Multiply by 5", "Add 1"], "correct": 0}, {"category": "Logic", "grade": "grade5", "question": "If a code changes A to B and B to C, what does C become?", "answers": ["D", "A", "B", "C"], "correct": 0}, {"category": "Logic", "grade": "grade6", "question": "Which statement is always true for an even number?", "answers": ["It is divisible by 2", "It ends in 5", "It is always prime", "It is less than 10"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Read this sentence: 'Cat found a shiny stone in the garden.' Where did it happen?", "answers": ["the garden", "the library", "the forest", "the classroom"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Read this sentence: 'Dog jumped over a log in the classroom.' Where did it happen?", "answers": ["the classroom", "the forest", "the river", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Read this sentence: 'Bird found a shiny stone in the castle.' Where did it happen?", "answers": ["the castle", "the classroom", "the river", "the moon base"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Read this sentence: 'Rabbit jumped over a log in the mountain.' Where did it happen?", "answers": ["the mountain", "the river", "the moon base", "the castle"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Read this sentence: 'Fox found a shiny stone in the meadow.' Where did it happen?", "answers": ["the meadow", "the moon base", "the castle", "the park"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Read this sentence: 'Turtle jumped over a log in the garden.' Where did it happen?", "answers": ["the garden", "the castle", "the park", "the beach"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Read this sentence: 'Child found a shiny stone in the classroom.' Where did it happen?", "answers": ["the classroom", "the park", "the beach", "the mountain"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Read this sentence: 'Teacher jumped over a log in the castle.' Where did it happen?", "answers": ["the castle", "the beach", "the mountain", "the farm"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Read this sentence: 'Dragon found a shiny stone in the mountain.' Where did it happen?", "answers": ["the mountain", "the farm", "the school", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Read this sentence: 'Robot jumped over a log in the meadow.' Where did it happen?", "answers": ["the meadow", "the farm", "the school", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Read this sentence: 'Star scout found a shiny stone in the garden.' Where did it happen?", "answers": ["the garden", "the school", "the meadow", "the cave"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Read this sentence: 'Bee jumped over a log in the classroom.' Where did it happen?", "answers": ["the classroom", "the meadow", "the cave", "the pond"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Read this sentence: 'Frog found a shiny stone in the castle.' Where did it happen?", "answers": ["the castle", "the cave", "the pond", "the garden"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Read this sentence: 'Horse jumped over a log in the mountain.' Where did it happen?", "answers": ["the mountain", "the pond", "the garden", "the library"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Read this sentence: 'Owl found a shiny stone in the meadow.' Where did it happen?", "answers": ["the meadow", "the garden", "the library", "the forest"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Read this sentence: 'Cat jumped over a log in the garden.' Where did it happen?", "answers": ["the garden", "the library", "the forest", "the classroom"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Read this sentence: 'Dog found a shiny stone in the classroom.' Where did it happen?", "answers": ["the classroom", "the forest", "the river", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Read this sentence: 'Bird jumped over a log in the castle.' Where did it happen?", "answers": ["the castle", "the classroom", "the river", "the moon base"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Read this sentence: 'Rabbit found a shiny stone in the mountain.' Where did it happen?", "answers": ["the mountain", "the river", "the moon base", "the castle"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Read this sentence: 'Fox jumped over a log in the meadow.' Where did it happen?", "answers": ["the meadow", "the moon base", "the castle", "the park"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Read this sentence: 'Turtle found a shiny stone in the garden.' Where did it happen?", "answers": ["the garden", "the castle", "the park", "the beach"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Read this sentence: 'Child jumped over a log in the classroom.' Where did it happen?", "answers": ["the classroom", "the park", "the beach", "the mountain"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Read this sentence: 'Teacher found a shiny stone in the castle.' Where did it happen?", "answers": ["the castle", "the beach", "the mountain", "the farm"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Read this sentence: 'Dragon jumped over a log in the mountain.' Where did it happen?", "answers": ["the mountain", "the farm", "the school", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade1", "question": "Read this sentence: 'Robot found a shiny stone in the meadow.' Where did it happen?", "answers": ["the meadow", "the farm", "the school", "Not correct"], "correct": 0}, {"category": "English", "grade": "grade2", "question": "Read this sentence: 'Star scout jumped over a log in the garden.' Where did it happen?", "answers": ["the garden", "the school", "the meadow", "the cave"], "correct": 0}, {"category": "English", "grade": "grade3", "question": "Read this sentence: 'Bee found a shiny stone in the classroom.' Where did it happen?", "answers": ["the classroom", "the meadow", "the cave", "the pond"], "correct": 0}, {"category": "English", "grade": "grade4", "question": "Read this sentence: 'Frog jumped over a log in the castle.' Where did it happen?", "answers": ["the castle", "the cave", "the pond", "the garden"], "correct": 0}, {"category": "English", "grade": "grade5", "question": "Read this sentence: 'Horse found a shiny stone in the mountain.' Where did it happen?", "answers": ["the mountain", "the pond", "the garden", "the library"], "correct": 0}, {"category": "English", "grade": "grade6", "question": "Read this sentence: 'Owl jumped over a log in the meadow.' Where did it happen?", "answers": ["the meadow", "the garden", "the library", "the forest"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a fish?", "answers": ["water", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a camel?", "answers": ["desert", "forest", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a polar bear?", "answers": ["Arctic", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a frog?", "answers": ["pond", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a eagle?", "answers": ["nest", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a earthworm?", "answers": ["soil", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a whale?", "answers": ["ocean", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a penguin?", "answers": ["cold coastal areas", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a bat?", "answers": ["cave", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "kindergarten", "question": "Which habitat best fits a beaver?", "answers": ["river", "desert", "classroom", "kitchen"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material comes from trees?", "answers": ["wood", "glass", "metal", "rubber"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material can be transparent?", "answers": ["glass", "wood", "metal", "rubber"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material can conduct electricity?", "answers": ["metal", "wood", "glass", "rubber"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material can stretch?", "answers": ["rubber", "wood", "glass", "metal"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material comes from a plant?", "answers": ["cotton", "wood", "glass", "metal"], "correct": 0}, {"category": "Science", "grade": "grade4", "question": "Which material is human-made?", "answers": ["plastic", "wood", "glass", "metal"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the closest planet to the Sun?", "answers": ["Mercury", "Venus", "Earth", "Mars"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Mercury is best described as which choice?", "answers": ["closest planet to the Sun", "very hot planet with thick clouds", "planet with liquid water and life", "called the Red Planet"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the very hot planet with thick clouds?", "answers": ["Venus", "Mercury", "Earth", "Mars"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Venus is best described as which choice?", "answers": ["very hot planet with thick clouds", "closest planet to the Sun", "planet with liquid water and life", "called the Red Planet"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the planet with liquid water and life?", "answers": ["Earth", "Mercury", "Venus", "Mars"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Earth is best described as which choice?", "answers": ["planet with liquid water and life", "closest planet to the Sun", "very hot planet with thick clouds", "called the Red Planet"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the called the Red Planet?", "answers": ["Mars", "Mercury", "Venus", "Earth"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Mars is best described as which choice?", "answers": ["called the Red Planet", "closest planet to the Sun", "very hot planet with thick clouds", "planet with liquid water and life"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the largest planet?", "answers": ["Jupiter", "Mercury", "Venus", "Earth"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Jupiter is best described as which choice?", "answers": ["largest planet", "closest planet to the Sun", "very hot planet with thick clouds", "planet with liquid water and life"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the planet famous for rings?", "answers": ["Saturn", "Mercury", "Venus", "Earth"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Saturn is best described as which choice?", "answers": ["planet famous for rings", "closest planet to the Sun", "very hot planet with thick clouds", "planet with liquid water and life"], "correct": 0}, {"category": "Science", "grade": "grade5", "question": "Which planet is the far blue planet?", "answers": ["Neptune", "Mercury", "Venus", "Earth"], "correct": 0}, {"category": "Science", "grade": "grade6", "question": "Neptune is best described as which choice?", "answers": ["far blue planet", "closest planet to the Sun", "very hot planet with thick clouds", "planet with liquid water and life"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which ocean is the largest ocean?", "answers": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which ocean is the ocean east of North America?", "answers": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which ocean is the ocean south of Asia?", "answers": ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which ocean is the ocean around the North Pole?", "answers": ["Arctic Ocean", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade4", "question": "Which ocean is the ocean around Antarctica?", "answers": ["Southern Ocean", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is land surrounded by water called?", "answers": ["island", "peninsula", "valley", "river"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is land surrounded by water on three sides called?", "answers": ["peninsula", "island", "valley", "river"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is low land between hills or mountains called?", "answers": ["valley", "island", "peninsula", "river"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is flowing water that moves across land called?", "answers": ["river", "island", "peninsula", "valley"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is water surrounded by land called?", "answers": ["lake", "island", "peninsula", "valley"], "correct": 0}, {"category": "Geography", "grade": "grade3", "question": "What is very dry land with little rain called?", "answers": ["desert", "island", "peninsula", "valley"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of south?", "answers": ["north", "south", "down", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of east?", "answers": ["west", "east", "up", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of west?", "answers": ["east", "west", "down", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of northeast?", "answers": ["southwest", "northeast", "up", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of southwest?", "answers": ["northeast", "southwest", "down", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of northwest?", "answers": ["southeast", "northwest", "up", "center"], "correct": 0}, {"category": "Geography", "grade": "grade2", "question": "Which direction is opposite of southeast?", "answers": ["northwest", "southeast", "down", "center"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 1, a chest has 13 coins and 12 are spent. How many coins remain?", "answers": ["1", "2", "25", "0"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 2, there are 4 rows with 8 stars in each row. How many stars are there?", "answers": ["32", "12", "36", "24"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 3, 40 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["8", "5", "40", "9"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 4, Luna collects 33 crystals and Kai collects 6. How many crystals do they collect together?", "answers": ["39", "38", "40", "27"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 5, a chest has 40 coins and 17 are spent. How many coins remain?", "answers": ["23", "24", "57", "22"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 6, there are 8 rows with 2 stars in each row. How many stars are there?", "answers": ["16", "10", "24", "14"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 7, 90 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["10", "9", "90", "11"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 8, Luna collects 61 crystals and Kai collects 10. How many crystals do they collect together?", "answers": ["71", "70", "72", "51"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 9, a chest has 68 coins and 21 are spent. How many coins remain?", "answers": ["47", "48", "89", "46"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 10, there are 2 rows with 5 stars in each row. How many stars are there?", "answers": ["10", "7", "12", "5"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 11, 39 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["3", "13", "39", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 12, Luna collects 89 crystals and Kai collects 14. How many crystals do they collect together?", "answers": ["103", "102", "104", "75"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 13, a chest has 25 coins and 6 are spent. How many coins remain?", "answers": ["19", "20", "31", "18"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 14, there are 6 rows with 8 stars in each row. How many stars are there?", "answers": ["48", "14", "54", "40"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 15, 25 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["5", "25", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 16, Luna collects 27 crystals and Kai collects 18. How many crystals do they collect together?", "answers": ["45", "44", "46", "9"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 17, a chest has 34 coins and 29 are spent. How many coins remain?", "answers": ["5", "6", "63", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 18, there are 10 rows with 2 stars in each row. How many stars are there?", "answers": ["20", "12", "30", "18"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 19, 63 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["7", "9", "63", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 20, Luna collects 55 crystals and Kai collects 22. How many crystals do they collect together?", "answers": ["77", "76", "78", "33"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 21, a chest has 62 coins and 33 are spent. How many coins remain?", "answers": ["29", "30", "95", "28"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 22, there are 4 rows with 5 stars in each row. How many stars are there?", "answers": ["20", "9", "24", "15"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 23, 117 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["9", "13", "117", "10"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 24, Luna collects 83 crystals and Kai collects 26. How many crystals do they collect together?", "answers": ["109", "108", "110", "57"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 25, a chest has 90 coins and 37 are spent. How many coins remain?", "answers": ["53", "54", "127", "52"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 26, there are 8 rows with 8 stars in each row. How many stars are there?", "answers": ["64", "16", "72", "56"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 27, 10 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["2", "5", "10", "3"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 28, Luna collects 21 crystals and Kai collects 30. How many crystals do they collect together?", "answers": ["51", "50", "52", "9"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 29, a chest has 41 coins and 28 are spent. How many coins remain?", "answers": ["13", "14", "69", "12"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 30, there are 2 rows with 2 stars in each row. How many stars are there?", "answers": ["4", "6", "2", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 31, 36 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["4", "9", "36", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 32, Luna collects 49 crystals and Kai collects 34. How many crystals do they collect together?", "answers": ["83", "82", "84", "15"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 33, a chest has 56 coins and 5 are spent. How many coins remain?", "answers": ["51", "52", "61", "50"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 34, there are 6 rows with 5 stars in each row. How many stars are there?", "answers": ["30", "11", "36", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 35, 78 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["6", "13", "78", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 36, Luna collects 77 crystals and Kai collects 38. How many crystals do they collect together?", "answers": ["115", "114", "116", "39"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 37, a chest has 84 coins and 9 are spent. How many coins remain?", "answers": ["75", "76", "93", "74"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 38, there are 10 rows with 8 stars in each row. How many stars are there?", "answers": ["80", "18", "90", "72"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 39, 40 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["8", "5", "40", "9"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 40, Luna collects 15 crystals and Kai collects 2. How many crystals do they collect together?", "answers": ["17", "16", "18", "13"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 41, a chest has 22 coins and 13 are spent. How many coins remain?", "answers": ["9", "10", "35", "8"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 42, there are 4 rows with 2 stars in each row. How many stars are there?", "answers": ["8", "6", "12", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 43, 90 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["10", "9", "90", "11"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 44, Luna collects 43 crystals and Kai collects 6. How many crystals do they collect together?", "answers": ["49", "48", "50", "37"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 45, a chest has 50 coins and 17 are spent. How many coins remain?", "answers": ["33", "34", "67", "32"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 46, there are 8 rows with 5 stars in each row. How many stars are there?", "answers": ["40", "13", "48", "35"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 47, 39 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["3", "13", "39", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 48, Luna collects 71 crystals and Kai collects 10. How many crystals do they collect together?", "answers": ["81", "80", "82", "61"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 49, a chest has 78 coins and 21 are spent. How many coins remain?", "answers": ["57", "58", "99", "56"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 50, there are 2 rows with 8 stars in each row. How many stars are there?", "answers": ["16", "10", "18", "8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 51, 25 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["5", "25", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 52, Luna collects 9 crystals and Kai collects 14. How many crystals do they collect together?", "answers": ["23", "22", "24", "5"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 53, a chest has 25 coins and 16 are spent. How many coins remain?", "answers": ["9", "10", "41", "8"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 54, there are 6 rows with 2 stars in each row. How many stars are there?", "answers": ["12", "8", "18", "10"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 55, 63 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["7", "9", "63", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 56, Luna collects 37 crystals and Kai collects 18. How many crystals do they collect together?", "answers": ["55", "54", "56", "19"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 57, a chest has 44 coins and 29 are spent. How many coins remain?", "answers": ["15", "16", "73", "14"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 58, there are 10 rows with 5 stars in each row. How many stars are there?", "answers": ["50", "15", "60", "45"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 59, 117 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["9", "13", "117", "10"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 60, Luna collects 65 crystals and Kai collects 22. How many crystals do they collect together?", "answers": ["87", "86", "88", "43"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 61, a chest has 72 coins and 33 are spent. How many coins remain?", "answers": ["39", "40", "105", "38"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 62, there are 4 rows with 8 stars in each row. How many stars are there?", "answers": ["32", "12", "36", "24"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 63, 10 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["2", "5", "10", "3"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 64, Luna collects 93 crystals and Kai collects 26. How many crystals do they collect together?", "answers": ["119", "118", "120", "67"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 65, a chest has 37 coins and 10 are spent. How many coins remain?", "answers": ["27", "28", "47", "26"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 66, there are 8 rows with 2 stars in each row. How many stars are there?", "answers": ["16", "10", "24", "14"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 67, 36 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["4", "9", "36", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 68, Luna collects 31 crystals and Kai collects 30. How many crystals do they collect together?", "answers": ["61", "60", "62", "1"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 69, a chest has 41 coins and 38 are spent. How many coins remain?", "answers": ["3", "4", "79", "2"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 70, there are 2 rows with 5 stars in each row. How many stars are there?", "answers": ["10", "7", "12", "5"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 71, 78 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["6", "13", "78", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 72, Luna collects 59 crystals and Kai collects 34. How many crystals do they collect together?", "answers": ["93", "92", "94", "25"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 73, a chest has 66 coins and 5 are spent. How many coins remain?", "answers": ["61", "62", "71", "60"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 74, there are 6 rows with 8 stars in each row. How many stars are there?", "answers": ["48", "14", "54", "40"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 75, 40 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["8", "5", "40", "9"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 76, Luna collects 87 crystals and Kai collects 38. How many crystals do they collect together?", "answers": ["125", "124", "126", "49"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 77, a chest has 94 coins and 9 are spent. How many coins remain?", "answers": ["85", "86", "103", "84"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 78, there are 10 rows with 2 stars in each row. How many stars are there?", "answers": ["20", "12", "30", "18"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 79, 90 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["10", "9", "90", "11"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 80, Luna collects 25 crystals and Kai collects 2. How many crystals do they collect together?", "answers": ["27", "26", "28", "23"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 81, a chest has 32 coins and 13 are spent. How many coins remain?", "answers": ["19", "20", "45", "18"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 82, there are 4 rows with 5 stars in each row. How many stars are there?", "answers": ["20", "9", "24", "15"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 83, 39 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["3", "13", "39", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 84, Luna collects 53 crystals and Kai collects 6. How many crystals do they collect together?", "answers": ["59", "58", "60", "47"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 85, a chest has 60 coins and 17 are spent. How many coins remain?", "answers": ["43", "44", "77", "42"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 86, there are 8 rows with 8 stars in each row. How many stars are there?", "answers": ["64", "16", "72", "56"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 87, 25 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["5", "25", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 88, Luna collects 81 crystals and Kai collects 10. How many crystals do they collect together?", "answers": ["91", "90", "92", "71"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 89, a chest has 88 coins and 21 are spent. How many coins remain?", "answers": ["67", "68", "109", "66"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 90, there are 2 rows with 2 stars in each row. How many stars are there?", "answers": ["4", "6", "2", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 91, 63 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["7", "9", "63", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 92, Luna collects 19 crystals and Kai collects 14. How many crystals do they collect together?", "answers": ["33", "32", "34", "5"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 93, a chest has 26 coins and 25 are spent. How many coins remain?", "answers": ["1", "2", "51", "0"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 94, there are 6 rows with 5 stars in each row. How many stars are there?", "answers": ["30", "11", "36", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 95, 117 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["9", "13", "117", "10"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 96, Luna collects 47 crystals and Kai collects 18. How many crystals do they collect together?", "answers": ["65", "64", "66", "29"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 97, a chest has 54 coins and 29 are spent. How many coins remain?", "answers": ["25", "26", "83", "24"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 98, there are 10 rows with 8 stars in each row. How many stars are there?", "answers": ["80", "18", "90", "72"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 99, 10 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["2", "5", "10", "3"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 100, Luna collects 75 crystals and Kai collects 22. How many crystals do they collect together?", "answers": ["97", "96", "98", "53"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 101, a chest has 82 coins and 33 are spent. How many coins remain?", "answers": ["49", "50", "115", "48"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 102, there are 4 rows with 2 stars in each row. How many stars are there?", "answers": ["8", "6", "12", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 103, 36 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["4", "9", "36", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 104, Luna collects 13 crystals and Kai collects 26. How many crystals do they collect together?", "answers": ["39", "38", "40", "13"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 105, a chest has 37 coins and 20 are spent. How many coins remain?", "answers": ["17", "18", "57", "16"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 106, there are 8 rows with 5 stars in each row. How many stars are there?", "answers": ["40", "13", "48", "35"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 107, 78 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["6", "13", "78", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 108, Luna collects 41 crystals and Kai collects 30. How many crystals do they collect together?", "answers": ["71", "70", "72", "11"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 109, a chest has 48 coins and 41 are spent. How many coins remain?", "answers": ["7", "8", "89", "6"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 110, there are 2 rows with 8 stars in each row. How many stars are there?", "answers": ["16", "10", "18", "8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 111, 40 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["8", "5", "40", "9"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 112, Luna collects 69 crystals and Kai collects 34. How many crystals do they collect together?", "answers": ["103", "102", "104", "35"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 113, a chest has 76 coins and 5 are spent. How many coins remain?", "answers": ["71", "72", "81", "70"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 114, there are 6 rows with 2 stars in each row. How many stars are there?", "answers": ["12", "8", "18", "10"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 115, 90 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["10", "9", "90", "11"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 116, Luna collects 7 crystals and Kai collects 38. How many crystals do they collect together?", "answers": ["45", "44", "46", "31"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 117, a chest has 14 coins and 9 are spent. How many coins remain?", "answers": ["5", "6", "23", "4"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 118, there are 10 rows with 5 stars in each row. How many stars are there?", "answers": ["50", "15", "60", "45"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 119, 39 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["3", "13", "39", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 120, Luna collects 35 crystals and Kai collects 2. How many crystals do they collect together?", "answers": ["37", "36", "38", "33"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 121, a chest has 42 coins and 13 are spent. How many coins remain?", "answers": ["29", "30", "55", "28"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 122, there are 4 rows with 8 stars in each row. How many stars are there?", "answers": ["32", "12", "36", "24"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 123, 25 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["5", "25", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 124, Luna collects 63 crystals and Kai collects 6. How many crystals do they collect together?", "answers": ["69", "68", "70", "57"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 125, a chest has 70 coins and 17 are spent. How many coins remain?", "answers": ["53", "54", "87", "52"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 126, there are 8 rows with 2 stars in each row. How many stars are there?", "answers": ["16", "10", "24", "14"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 127, 63 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["7", "9", "63", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 128, Luna collects 91 crystals and Kai collects 10. How many crystals do they collect together?", "answers": ["101", "100", "102", "81"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 129, a chest has 21 coins and 8 are spent. How many coins remain?", "answers": ["13", "14", "29", "12"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 130, there are 2 rows with 5 stars in each row. How many stars are there?", "answers": ["10", "7", "12", "5"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 131, 117 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["9", "13", "117", "10"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 132, Luna collects 29 crystals and Kai collects 14. How many crystals do they collect together?", "answers": ["43", "42", "44", "15"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 133, a chest has 36 coins and 25 are spent. How many coins remain?", "answers": ["11", "12", "61", "10"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 134, there are 6 rows with 8 stars in each row. How many stars are there?", "answers": ["48", "14", "54", "40"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 135, 10 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["2", "5", "10", "3"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 136, Luna collects 57 crystals and Kai collects 18. How many crystals do they collect together?", "answers": ["75", "74", "76", "39"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 137, a chest has 64 coins and 29 are spent. How many coins remain?", "answers": ["35", "36", "93", "34"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 138, there are 10 rows with 2 stars in each row. How many stars are there?", "answers": ["20", "12", "30", "18"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 139, 36 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["4", "9", "36", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 140, Luna collects 85 crystals and Kai collects 22. How many crystals do they collect together?", "answers": ["107", "106", "108", "63"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 141, a chest has 92 coins and 33 are spent. How many coins remain?", "answers": ["59", "60", "125", "58"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 142, there are 4 rows with 5 stars in each row. How many stars are there?", "answers": ["20", "9", "24", "15"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 143, 78 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["6", "13", "78", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 144, Luna collects 23 crystals and Kai collects 26. How many crystals do they collect together?", "answers": ["49", "48", "50", "3"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 145, a chest has 37 coins and 30 are spent. How many coins remain?", "answers": ["7", "8", "67", "6"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 146, there are 8 rows with 8 stars in each row. How many stars are there?", "answers": ["64", "16", "72", "56"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 147, 40 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["8", "5", "40", "9"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 148, Luna collects 51 crystals and Kai collects 30. How many crystals do they collect together?", "answers": ["81", "80", "82", "21"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 149, a chest has 58 coins and 41 are spent. How many coins remain?", "answers": ["17", "18", "99", "16"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 150, there are 2 rows with 2 stars in each row. How many stars are there?", "answers": ["4", "6", "2", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 151, 90 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["10", "9", "90", "11"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 152, Luna collects 79 crystals and Kai collects 34. How many crystals do they collect together?", "answers": ["113", "112", "114", "45"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 153, a chest has 86 coins and 5 are spent. How many coins remain?", "answers": ["81", "82", "91", "80"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 154, there are 6 rows with 5 stars in each row. How many stars are there?", "answers": ["30", "11", "36", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 155, 39 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["3", "13", "39", "4"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 156, Luna collects 17 crystals and Kai collects 38. How many crystals do they collect together?", "answers": ["55", "54", "56", "21"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 157, a chest has 24 coins and 9 are spent. How many coins remain?", "answers": ["15", "16", "33", "14"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 158, there are 10 rows with 8 stars in each row. How many stars are there?", "answers": ["80", "18", "90", "72"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 159, 25 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["5", "25", "6", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 160, Luna collects 45 crystals and Kai collects 2. How many crystals do they collect together?", "answers": ["47", "46", "48", "43"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 161, a chest has 52 coins and 13 are spent. How many coins remain?", "answers": ["39", "40", "65", "38"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 162, there are 4 rows with 2 stars in each row. How many stars are there?", "answers": ["8", "6", "12", "Not correct"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 163, 63 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["7", "9", "63", "8"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 164, Luna collects 73 crystals and Kai collects 6. How many crystals do they collect together?", "answers": ["79", "78", "80", "67"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 165, a chest has 80 coins and 17 are spent. How many coins remain?", "answers": ["63", "64", "97", "62"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 166, there are 8 rows with 5 stars in each row. How many stars are there?", "answers": ["40", "13", "48", "35"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 167, 117 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["9", "13", "117", "10"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 168, Luna collects 11 crystals and Kai collects 10. How many crystals do they collect together?", "answers": ["21", "20", "22", "1"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 169, a chest has 21 coins and 18 are spent. How many coins remain?", "answers": ["3", "4", "39", "2"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 170, there are 2 rows with 8 stars in each row. How many stars are there?", "answers": ["16", "10", "18", "8"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 171, 10 gems are shared equally into 5 bags. How many gems go in each bag?", "answers": ["2", "5", "10", "3"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 172, Luna collects 39 crystals and Kai collects 14. How many crystals do they collect together?", "answers": ["53", "52", "54", "25"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 173, a chest has 46 coins and 25 are spent. How many coins remain?", "answers": ["21", "22", "71", "20"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 174, there are 6 rows with 2 stars in each row. How many stars are there?", "answers": ["12", "8", "18", "10"], "correct": 0}, {"category": "Math", "grade": "grade2", "question": "In challenge 175, 36 gems are shared equally into 9 bags. How many gems go in each bag?", "answers": ["4", "9", "36", "5"], "correct": 0}, {"category": "Math", "grade": "grade3", "question": "In challenge 176, Luna collects 67 crystals and Kai collects 18. How many crystals do they collect together?", "answers": ["85", "84", "86", "49"], "correct": 0}, {"category": "Math", "grade": "grade4", "question": "In challenge 177, a chest has 74 coins and 29 are spent. How many coins remain?", "answers": ["45", "46", "103", "44"], "correct": 0}, {"category": "Math", "grade": "grade5", "question": "In challenge 178, there are 10 rows with 5 stars in each row. How many stars are there?", "answers": ["50", "15", "60", "45"], "correct": 0}, {"category": "Math", "grade": "grade6", "question": "In challenge 179, 78 gems are shared equally into 13 bags. How many gems go in each bag?", "answers": ["6", "13", "78", "7"], "correct": 0}, {"category": "Math", "grade": "grade1", "question": "In challenge 180, Luna collects 5 crystals and Kai collects 22. How many crystals do they collect together?", "answers": ["27", "26", "28", "17"], "correct": 0}];

function starpathShuffleQuestion(baseQuestion, seed, boss = false, stage = 1, grade = "grade1") {
  const originalAnswers = Array.isArray(baseQuestion.answers) ? baseQuestion.answers.map(String) : [];
  const correctOriginal = Number(baseQuestion.correct);
  const correctText = originalAnswers[correctOriginal];

  const uniqueAnswers = [];
  originalAnswers.forEach(answer => {
    if (!uniqueAnswers.some(item => item.toLowerCase() === String(answer).toLowerCase())) uniqueAnswers.push(String(answer));
  });

  let filler = 1;
  while (uniqueAnswers.length < 4) {
    const candidate = `Extra choice ${filler}`;
    if (!uniqueAnswers.includes(candidate) && candidate !== correctText) uniqueAnswers.push(candidate);
    filler += 1;
  }

  const answers = uniqueAnswers.slice(0, 4);
  let correctIndex = answers.findIndex(answer => answer.toLowerCase() === String(correctText).toLowerCase());
  if (correctIndex < 0) {
    answers[0] = String(correctText);
    correctIndex = 0;
  }

  // Deterministic rotation so the correct answer is not always in the same position.
  const rotateBy = Math.abs(seed) % answers.length;
  const rotated = answers.slice(rotateBy).concat(answers.slice(0, rotateBy));
  const rotatedCorrect = rotated.findIndex(answer => answer.toLowerCase() === String(correctText).toLowerCase());

  return {
    prompt: `${boss ? "Boss challenge: " : ""}${baseQuestion.category}: ${baseQuestion.question}`,
    answers: rotated,
    correct: rotatedCorrect,
    signature: `${baseQuestion.grade}|${baseQuestion.category}|${baseQuestion.question}|${correctText}`,
    difficulty: `${gradeLabels[grade] || baseQuestion.grade} · Stage ${stage}`
  };
}

function buildGradeQuestion(grade, seed, boss = false, stage = 1) {
  const preferred = megaStarpathQuestions.filter(item => item.grade === grade);
  const nearby = megaStarpathQuestions.filter(item => {
    if (grade === "preschool") return item.grade === "kindergarten";
    if (grade === "kindergarten") return item.grade === "preschool" || item.grade === "grade1";
    if (grade === "grade1") return item.grade === "kindergarten" || item.grade === "grade2";
    if (grade === "grade6") return item.grade === "grade5";
    return item.grade === grade;
  });
  const nearbyOnly = nearby.filter(item => !preferred.includes(item));
  const pool = preferred.length
    ? preferred.concat(nearbyOnly)
    : nearby.length
      ? nearby
      : megaStarpathQuestions;
  const index = Math.abs(seed + stage * 37 + (boss ? 101 : 0)) % pool.length;
  return starpathShuffleQuestion(pool[index], seed, boss, stage, grade);
}

function showRollChallenge() {
  const pending = directionGame?.pendingRoll;
  const challenge = document.getElementById("rollChallenge");
  if (!pending || !challenge) return;
  clearTimeout(rollChallengeHideTimer);
  challenge.hidden = false;
  document.getElementById("rollReward").textContent = `${pending.value} moves at stake`;
  document.getElementById("rollQuestion").textContent = pending.question.prompt;
  document.getElementById("rollAnswers").innerHTML = pending.question.answers
    .map((answer, index) => `<button type="button" data-roll-answer="${index}">${answer}</button>`)
    .join("");
  document.getElementById("rollFeedback").textContent = `${pending.question.difficulty} question`;
  challenge.querySelectorAll("[data-roll-answer]").forEach(button => {
    button.addEventListener("click", () => answerRollQuestion(Number(button.dataset.rollAnswer), button));
  });
  challenge.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function answerRollQuestion(answer, button) {
  const pending = directionGame?.pendingRoll;
  if (!pending) return;
  const feedback = document.getElementById("rollFeedback");
  const buttons = document.querySelectorAll("[data-roll-answer]");
  buttons.forEach(item => item.disabled = true);

  if (answer === pending.question.correct) {
    button.classList.add("correct");
    directionGame.movesRemaining = pending.value;
    feedback.textContent = `Correct! You earned ${pending.value} move${pending.value === 1 ? "" : "s"}.`;
    document.getElementById("directionMessage").textContent = "Choose a direction and follow the trail.";
  } else {
    button.classList.add("wrong");
    buttons[pending.question.correct]?.classList.add("correct");
    const movedBack = moveBackOneSpace();
    feedback.textContent = movedBack
      ? "Not quite. You moved back one space."
      : "Not quite. You are already at the trail start.";
    document.getElementById("directionMessage").textContent = "Roll again and try a new question.";
  }

  directionGame.pendingRoll = null;
  renderDirectionBoard();
  saveDirectionTrail();
  rollChallengeHideTimer = setTimeout(() => {
    const challenge = document.getElementById("rollChallenge");
    if (challenge) challenge.hidden = true;
  }, 1100);
}

function moveBackOneSpace() {
  if (!directionGame || directionGame.positionHistory.length <= 1) return false;
  directionGame.positionHistory.pop();
  directionGame.position = { ...directionGame.positionHistory[directionGame.positionHistory.length - 1] };
  directionGame.movesRemaining = 0;
  return true;
}

function unlockQuestChallenge() {
  directionGame.reachedGoal = true;
  saveDirectionTrail();
  const challenge = document.getElementById("questChallenge");
  challenge.classList.remove("locked");
  challenge.classList.add("boss-active");
  challenge.querySelector(".challenge-lock")?.remove();
  document.getElementById("directionMessage").textContent = `${monsterFor(directionGame.level)} blocks the way. Answer correctly to defeat it!`;
  bindBossAnswerButtons(directionGame.level);
  renderBossLives();
  challenge.scrollIntoView({ behavior: "smooth", block: "center" });
}

function bindBossAnswerButtons(level) {
  levelPanel.querySelectorAll(".quest-answers [data-answer]").forEach(button => {
    button.addEventListener("click", () => answerQuest(level, Number(button.dataset.answer), button));
  });
}

function showFreshBossQuestion(level) {
  if (!directionGame) return;
  const difficulty = Math.min(9, level.stage + Math.floor((questState.currentWorld - 1) / 2));
  const nextQuestion = buildUniqueQuestion(
    questState.grade,
    randomQuestSeed() + directionGame.rollCount * 421 + questState.bossLives * 997,
    true,
    difficulty,
    level.id
  );
  nextQuestion.difficulty = `${gradeLabels[questState.grade]} - World ${questState.currentWorld}`;
  directionGame.bossQuestion = nextQuestion;
  const challenge = document.getElementById("questChallenge");
  challenge.querySelector("h3").textContent = nextQuestion.prompt;
  challenge.querySelector(".quest-answers").innerHTML = nextQuestion.answers
    .map((answer, index) => `<button type="button" data-answer="${index}">${answer}</button>`)
    .join("");
  document.getElementById("questFeedback").textContent = "New boss question ready.";
  bindBossAnswerButtons(level);
  saveDirectionTrail();
}

function renderBossLives() {
  const hearts = document.querySelectorAll("#bossLives span");
  hearts.forEach((heart, index) => {
    heart.classList.toggle("lost", index >= questState.bossLives);
  });
  document.getElementById("bossLives")?.setAttribute("aria-label", `${questState.bossLives} of 3 boss battle lives remaining`);
}

function resetDirectionTrail() {
  if (!directionGame) return;
  const levelId = directionGame.level.id;
  questState.trail = null;
  questState.current = null;
  questState.bossLives = 3;
  saveQuestState();
  directionGame = null;
  openQuestLevel(levelId);
}

function answerQuest(level, answer, button) {
  const feedback = document.getElementById("questFeedback");
  const correctAnswer = directionGame?.bossQuestion?.correct ?? level.correct;
  levelPanel.querySelectorAll("[data-answer]").forEach(item => item.classList.remove("wrong"));
  if (answer !== correctAnswer) {
    questState.bossLives = Math.max(0, questState.bossLives - 1);
    saveQuestState();
    renderBossLives();
    button.classList.add("wrong");
    levelPanel.querySelectorAll(".quest-answers [data-answer]").forEach(item => {
      item.disabled = true;
      if (Number(item.dataset.answer) === correctAnswer) item.classList.add("correct");
    });
    if (questState.bossLives > 0) {
      feedback.textContent = `Not quite. You lost one heart. ${questState.bossLives} ${questState.bossLives === 1 ? "heart" : "hearts"} left. A different question is next.`;
      setTimeout(() => showFreshBossQuestion(level), 1050);
      return;
    }
    feedback.textContent = "No hearts left. Returning to the checkpoint with three new hearts.";
    levelPanel.querySelectorAll("[data-answer]").forEach(item => item.disabled = true);
    questState.bossLives = 3;
    questState.trail = null;
    saveQuestState();
    setTimeout(() => openQuestLevel(level.id), 1400);
    return;
  }
  levelPanel.querySelectorAll("[data-answer]").forEach(item => {
    item.disabled = true;
    if (Number(item.dataset.answer) === correctAnswer) item.classList.add("correct");
  });
  if (!questState.completed.includes(level.id)) {
    questState.completed.push(level.id);
    questState.stars += level.reward;
  }
  questState.trail = null;
  questState.bossLives = 3;
  if (!questState.checkpoints.includes(level.id)) questState.checkpoints.push(level.id);
  if (questState.completed.length === questLevels.length && !questState.completedWorlds.includes(questState.currentWorld)) {
    questState.completedWorlds.push(questState.currentWorld);
  }
  const nextStage = level.stage + 1;
  const nextLevels = questLevels.filter(item => item.stage === nextStage);
  if (!nextLevels.length) {
    feedback.textContent = "Final challenge complete. The Heart Star is restored!";
    finishQuest(level);
    return;
  }
  feedback.textContent = `${monsterFor(level)} defeated. Checkpoint saved!`;
  levelPanel.insertAdjacentHTML("beforeend", `
    <div class="checkpoint-banner">
      <span>&#9873;</span>
      <div><p class="eyebrow">Checkpoint activated</p><strong>${questState.name} defeated ${monsterFor(level)}</strong><small>Your progress is saved. Choose the next pathway.</small></div>
    </div>`);
  levelPanel.insertAdjacentHTML("beforeend", `
    <div class="quest-path-choice">
      <p class="eyebrow">Pathway unlocked</p>
      <h3>Where should ${questState.name} travel next?</h3>
      <div>
        ${nextLevels.map(next => `<button type="button" data-next-level="${next.id}" class="path-${next.path}">
          <span>${pathways[next.path].symbol}</span><strong>${next.title}</strong><small>${pathways[next.path].name} path</small>
        </button>`).join("")}
      </div>
    </div>`);
  levelPanel.querySelectorAll("[data-next-level]").forEach(nextButton => {
    nextButton.addEventListener("click", () => {
      const nextId = nextButton.dataset.nextLevel;
      if (!questState.unlocked.includes(nextId)) questState.unlocked.push(nextId);
      questState.current = nextId;
      saveQuestState();
      updateQuestProfile();
      renderQuestMap();
      openQuestLevel(nextId);
    });
  });
  saveQuestState();
  updateQuestProfile();
  renderQuestMap();
}

function finishQuest(level) {
  const worldComplete = questState.completed.length === questLevels.length;
  questState.current = null;
  saveQuestState();
  updateQuestProfile();
  renderQuestMap();
  levelPanel.insertAdjacentHTML("beforeend", `
    <div class="quest-victory">
      <span aria-hidden="true">&#9733;</span>
      <p class="eyebrow">${worldComplete ? "World complete" : "Pathway complete"}</p>
      <h3>${worldComplete ? `${questState.name} conquered World ${questState.currentWorld}!` : `${questState.name} completed the ${pathways[level.path].name} ending!`}</h3>
      <p>${worldComplete
        ? questState.currentWorld === campaignWorlds.length
          ? "You completed all 15 worlds and restored the Heart Star Citadel!"
          : `World ${questState.currentWorld + 1} is now available. Your next adventure will be a little more challenging.`
        : `You collected ${questState.stars} star crystals. Complete the other pathways to unlock the next world.`}</p>
      <button class="btn primary" id="continueQuest" type="button">Explore another pathway</button>
    </div>`);
  document.getElementById("continueQuest").addEventListener("click", () => {
    questState.current = null;
    saveQuestState();
    renderQuestMap();
    levelPanel.innerHTML = `<div class="quest-empty"><span aria-hidden="true">&#9733;</span><h2>Choose another glowing level.</h2><p>Previously unlocked pathways remain available on your map.</p></div>`;
    document.querySelector(".quest-map-panel").scrollIntoView({ behavior: "smooth" });
  });
}

nameInput.addEventListener("input", () => {
  questState.name = nameInput.value.trim() || "Star Scout";
  saveQuestState();
  updateQuestProfile();
  document.querySelectorAll("[data-hero-name]").forEach(element => {
    element.textContent = questState.name;
  });
  if (directionGame) renderDirectionBoard();
});

gradeInput.addEventListener("change", () => {
  questState.grade = gradeInput.value;
  saveQuestState();
  updateQuestProfile();
  if (questState.current && questState.unlocked.includes(questState.current)) {
    openQuestLevel(questState.current);
  }
});

document.querySelectorAll("[data-character]").forEach(button => {
  button.addEventListener("click", () => {
    questState.character = button.dataset.character;
    saveQuestState();
    updateQuestProfile();
    if (directionGame) renderDirectionBoard();
  });
});

document.getElementById("resetQuest").addEventListener("click", () => {
  questState = {
    ...defaultQuestState,
    completed: [],
    checkpoints: [],
    unlocked: [...defaultQuestState.unlocked],
    completedWorlds: [],
    worldProgress: {},
    bossLives: 3,
    questionHistory: {}
  };
  saveQuestState();
  updateQuestProfile();
  renderQuestMap();
  levelPanel.className = "quest-level-panel";
  levelPanel.innerHTML = `<div class="quest-empty"><span aria-hidden="true">&#9733;</span><h2>Your adventure is waiting.</h2><p>Select an unlocked level from the map.</p></div>`;
});

window.addEventListener("beforeunload", saveDirectionTrail);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveDirectionTrail();
});

updateQuestProfile();
renderQuestMap();
if (questState.current && questState.unlocked.includes(questState.current)) openQuestLevel(questState.current);
