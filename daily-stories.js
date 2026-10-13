const happyTalesDailyStories = [
  {
    title: "The Moonlit Map",
    kicker: "A gentle story about courage",
    summary: "Maya follows a trail of tiny lanterns through a magical garden and discovers that asking for help is one of the bravest things we can do.",
    image: "assets/moonlit-map.webp",
    imageAlt: "Maya following a glowing lantern path through a magical moonlit garden",
    time: "5 min read",
    chips: ["Age 6", "Kindness", "Bedtime"],
    free: [
      "Maya noticed the first tiny lantern just as the evening sky turned violet. It glowed beside the garden gate, no bigger than a button, with a silver arrow painted on its side.",
      "Beyond it waited another lantern, and then another, making a winding path between the flowers. Maya held her favorite blanket around her shoulders and followed the lights until she reached the oldest tree in the garden.",
      "A friendly firefly named Pip hovered near a little wooden sign. The sign showed a moon, a treehouse, and a path that suddenly stopped. \"The last part of the map is missing,\" Pip said. \"I cannot find my way home alone.\"",
      "Maya wanted to pretend she knew exactly what to do. Instead, she took a slow breath and admitted, \"I need help too.\" At once, three more lanterns flickered awake beneath the roses."
    ],
    ending: [
      "Together, Maya and Pip asked the sleepy flowers, the patient snail, and even the whispering wind for clues. Each answer added one bright line to the map.",
      "Soon the glowing path reached a treehouse sparkling beneath the crescent moon. Pip's family cheered, and Maya realized the map had only appeared after she was brave enough to ask for help.",
      "When Maya returned to bed, one tiny lantern rested on her windowsill. Its silver arrow now pointed toward her heart, where a new kind of courage glowed warmly.",
      "And from that night on, whenever Maya felt lost, she remembered that brave people do not always know the way. Sometimes, they simply know when to ask."
    ]
  },
  {
    title: "The Library in the Tree",
    kicker: "A curious tale about sharing",
    summary: "Leo finds a tiny glowing library hidden inside a garden tree and learns that stories become brighter when they are shared.",
    image: "assets/hidden-library.webp",
    imageAlt: "Leo discovering a glowing miniature library hidden inside an old garden tree",
    time: "6 min read",
    chips: ["Age 7", "Sharing", "Adventure"],
    free: [
      "Leo was looking for his red ball when a blue bird dropped a golden key at his feet. The key was smaller than his thumb and warm from the afternoon sun.",
      "The bird flew to the oldest tree in the garden and tapped its beak against a round wooden door hidden behind the ivy. Leo tried the key, and the door opened with a quiet musical click.",
      "Inside was the tiniest library Leo had ever seen. Books glowed on curved shelves, ladders rolled by themselves, and fireflies carried bookmarks from room to room.",
      "A worried librarian mouse explained that the library's brightest book had gone dark. \"It has every story,\" she said, \"but nobody has opened it with a friend in a very long time.\""
    ],
    ending: [
      "Leo invited the blue bird, the librarian mouse, and every garden creature to sit beside him. They took turns reading one page each.",
      "With every shared sentence, color returned to the book. Golden letters danced across the ceiling and became pictures of oceans, castles, rockets, and cozy kitchens.",
      "The library began to glow so brightly that its warm windows looked like stars inside the tree. Leo understood that a story kept only to yourself can be lovely, but a shared story can light an entire room.",
      "Before he left, the librarian gave Leo a library card no bigger than a leaf. It read: Always bring a friend."
    ]
  },
  {
    title: "The Rainbow Ribbon",
    kicker: "A bright tale about trying again",
    summary: "Nia sails across a magical pond to return a fallen ribbon of color to the sky, learning that mistakes can become useful clues.",
    image: "assets/rainbow-ribbon.webp",
    imageAlt: "Nia sailing a paper boat across a magical pond beneath a rainbow",
    time: "5 min read",
    chips: ["Age 5", "Trying again", "Morning"],
    free: [
      "After the rain, Nia found a ribbon of rainbow color tangled around the reeds beside the pond. It shimmered pink, blue, and gold, but one end was fading fast.",
      "A frog in a yellow hat explained that the ribbon had slipped from the sky. Without it, tomorrow's rainbow would have a gray stripe right through the middle.",
      "Nia folded the biggest sheet of paper she could find into a boat. Her first boat tipped sideways. Her second filled with water. The third spun in a circle and bumped gently into a lily pad.",
      "Nia almost gave up, but the glowing fish beneath the water showed her where each fold had bent the wrong way. Every mistake, she realized, was also a clue."
    ],
    ending: [
      "On her fourth try, Nia made a strong little boat with high sides and a bright coral sail. The frogs cheered as she carried the ribbon across the pond.",
      "At the far shore, a friendly cloud lowered a silver thread. Nia tied the rainbow ribbon to it with the careful knot she had practiced three times.",
      "The ribbon swept upward and stretched across the sky, brighter than before. Its colors reflected in the pond and painted every lily pad with a tiny rainbow.",
      "Nia sailed home knowing that trying again did not erase her mistakes. It turned them into the map that helped her succeed."
    ]
  }
];

function getHappyTalesDailyStory() {
  const now = new Date();
  const monthNumber = (now.getFullYear() * 12) + now.getMonth();
  return happyTalesDailyStories[monthNumber % happyTalesDailyStories.length];
}

async function loadHappyTalesDailyStory() {
  try {
    const response = await fetch("/api/daily-story", { cache: "no-store" });
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // A static preview has no API route, so use the built-in rotation.
  }
  return getHappyTalesDailyStory();
}

function hasHappyTalesSubscription() {
  return true;
}
