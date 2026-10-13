const taleEntries = [
  ["The Coral City Compass", "Ocean adventure", "A young explorer helps an underwater city find its way home.", "courage", "an underwater coral city", "a silver compass", "a playful dolphin"],
  ["The Dragon's First Loaf", "Friendship", "A gentle dragon learns that baking is better with patient friends.", "patience", "a mountain bakery", "a golden loaf", "a tiny sparrow"],
  ["The Moon Garden", "Science and wonder", "A young astronaut grows the moon's first garden.", "trying again", "a greenhouse on the moon", "a packet of glowing seeds", "a helpful rover"],
  ["The Bridge of Many Paws", "Teamwork", "Woodland neighbors combine their talents to cross a stream.", "teamwork", "a bright woodland", "a bundle of vines", "a careful beaver"],
  ["The Singing Shell", "Listening", "A mysterious seashell guides a child toward someone who needs a friend.", "listening", "a sunny beach", "a humming shell", "a shy crab"],
  ["Postcards from the Clouds", "Kindness", "A cloud-village mail carrier delivers one very important letter.", "kindness", "a village above the clouds", "a rainbow envelope", "a breeze named Whistle"],
  ["Beep Learns to Dance", "Confidence", "A tiny robot discovers there is no wrong way to dance.", "confidence", "a lantern-lit town square", "a music button", "a dancing pigeon"],
  ["The Autumn Star Express", "Adventure", "A magical train must return a fallen star before sunrise.", "responsibility", "autumn mountains", "a fallen star", "a cheerful conductor"],
  ["Pip the Lost Penguin", "Helping others", "A child helps a little penguin find the right snowy path.", "helpfulness", "a sparkling ice village", "a blue scarf", "a wise seal"],
  ["The Vegetable Feast", "Healthy choices", "An enchanted kitchen prepares a colorful feast for the neighborhood.", "sharing", "a magical kitchen", "a dancing carrot", "a polite wooden spoon"],
  ["The Giant Who Whispered", "Understanding", "A shy giant finds a friend who listens before judging.", "understanding", "a flower-filled valley", "a tiny teacup", "a brave butterfly"],
  ["The Red Ball Promise", "Friendship", "Two dogs learn how sharing can make a game twice as fun.", "sharing", "a sunny park", "a bright red ball", "a friendly robin"],
  ["Whales by Lantern Light", "Courage", "A young lighthouse keeper guides glowing whales through the mist.", "courage", "a rocky lighthouse", "a crystal lantern", "a baby whale"],
  ["The Village in the Clock", "Curiosity", "A ticking mystery leads to a miniature village between the gears.", "curiosity", "an old grandfather clock", "a brass key", "a clockwork mouse"],
  ["The Kindness Machine", "Invention", "A young inventor builds a machine that runs on thoughtful actions.", "kindness", "a colorful workshop", "a heart-shaped gear", "a curious kitten"],
  ["The Oasis Map", "Perseverance", "A camel caravan follows unusual clues to a hidden oasis.", "perseverance", "a golden desert", "a map of stars", "a young camel"],
  ["The Day Color Came Back", "Creativity", "A child paints hope and color into a gray town.", "creativity", "a quiet gray town", "a magic paintbrush", "a cheerful dog"],
  ["Hazel's Forest Bakery", "Community", "A squirrel baker needs the whole forest to save opening day.", "community", "a woodland bakery", "a jar of cinnamon", "a hungry hedgehog"],
  ["The Kite Above the Clouds", "Bravery", "A magical kite carries its young flyer to a cloud castle.", "bravery", "a castle in the clouds", "a violet kite", "a smiling cloud"],
  ["Footprints After Rain", "Discovery", "Siblings follow enormous footprints through their backyard.", "cooperation", "a rainy backyard", "a giant footprint", "a gentle dinosaur"],
  ["The Rooftop Star Map", "Wonder", "A child and an owl chart a star that no one noticed before.", "wonder", "a rooftop observatory", "a handmade telescope", "a spectacled owl"],
  ["The Octopus Orchestra", "Cooperation", "Eight instruments and one nervous conductor prepare for a concert.", "cooperation", "an underwater concert hall", "a coral baton", "a musical octopus"],
  ["The Garden on Turtle Island", "Care", "A moving island teaches a young gardener to work with nature.", "care", "a garden on a giant turtle", "a watering shell", "a sleepy turtle"],
  ["Soup for the Forest", "Compassion", "A warm bowl of soup brings comfort to a tired forest spirit.", "compassion", "a mossy forest", "a steaming soup pot", "a gentle deer"],
  ["The Wheel and Whisker Shop", "Problem solving", "Rabbit and Tortoise open the forest's first bicycle repair shop.", "problem solving", "a woodland repair shop", "a silver bicycle bell", "a patient tortoise"],
  ["The Door Beneath the Lights", "Courage", "A glowing door beneath the northern lights opens for an honest heart.", "honesty", "a snowy northern village", "an ice-blue door", "an arctic fox"],
  ["The Honey Airship", "Teamwork", "Busy bees build an airship to deliver flowers across the valley.", "teamwork", "a wildflower valley", "a honey-powered propeller", "an inventive bee"],
  ["The Pancake Tower", "Practice", "A young chef enters a contest where mistakes become the secret ingredient.", "practice", "a bustling food fair", "a towering pancake", "a helpful raccoon"],
  ["The Moonstone Return", "Responsibility", "A fox carries a glowing stone back to its mountain home.", "responsibility", "a moonlit mountain", "a glowing moonstone", "a red fox"],
  ["The Playground Project", "Community", "Neighborhood children rebuild a forgotten playground together.", "community", "an abandoned playground", "a box of bright tools", "a friendly builder"],
  ["The Teacup Voyage", "Imagination", "A teacup boat sails a chocolate river toward a sprinkle-covered island.", "imagination", "a chocolate river", "a teacup boat", "a marshmallow bird"],
  ["Snowy's Sunny Holiday", "Trying new things", "A snowman visits the beach and discovers clever ways to stay cool.", "adaptability", "a tropical beach", "a striped umbrella", "a kind pelican"],
  ["The Missing Cupcake Case", "Honesty", "A young detective follows crumbs toward a surprising truth.", "honesty", "a village bakery", "a magnifying glass", "a nervous mouse"],
  ["Walnut Rocket One", "Family", "A mouse family turns a walnut shell into a tiny spaceship.", "family", "a moonlit meadow", "a walnut rocket", "a brave mouse"],
  ["The Mermaid's Hands", "Communication", "A child learns a new way to speak with a mermaid friend.", "communication", "a quiet blue lagoon", "a pearl bracelet", "a friendly mermaid"],
  ["The Tallest Sunflower", "Patience", "A hedgehog learns that growing something wonderful takes time.", "patience", "a sunny garden", "a sunflower seed", "a gentle hedgehog"],
  ["Butterfly Spells", "Self-acceptance", "A young wizard's unusual magic turns every spell into butterflies.", "self-acceptance", "a colorful magic school", "a sparkling wand", "a purple butterfly"],
  ["The Midnight Pet Market", "Responsibility", "Children help magical pets find the homes that suit them best.", "responsibility", "a lantern-lit night market", "a silver pet tag", "a tiny griffin"],
  ["Bruno's Ballet Shoes", "Confidence", "A bear discovers that graceful dancers can come in every shape.", "confidence", "a lakeside dance studio", "blue ballet shoes", "a graceful swan"],
  ["Songs from the Stars", "Family memories", "A repaired radio brings a child and grandparent closer together.", "connection", "a cozy attic", "an old radio", "a smiling grandparent"],
  ["The Orchard of Light", "Generosity", "A secret orchard grows brighter each time its fruit is shared.", "generosity", "a glowing orchard", "a golden apple", "a nightingale"],
  ["The Clear Stream Club", "Environment", "A child and a clever crow help their neighborhood clean a stream.", "stewardship", "a woodland stream", "a pair of green gloves", "a clever crow"],
  ["Captain Whiskers' Ocean", "Imagination", "A bathtub becomes a great ocean for one adventurous cat captain.", "imagination", "a bathtub ocean", "a paper captain's hat", "a striped cat"],
  ["Lanterns for the Moon", "Celebration", "A child helps moon rabbits prepare their brightest festival.", "helpfulness", "a village on the moon", "a round lantern", "a moon rabbit"],
  ["The Collector of Lost Sounds", "Listening", "An elephant returns missing sounds to a suddenly silent town.", "listening", "a quiet jungle town", "a glass sound jar", "a young elephant"],
  ["Mara Makes Friends with Rain", "Perspective", "A gardener discovers why rainy days deserve celebration too.", "gratitude", "a thirsty garden", "a yellow raincoat", "a smiling rain cloud"],
  ["Books on Two Wheels", "Love of reading", "A raccoon librarian pedals stories to readers across the forest.", "generosity", "a forest village", "a bicycle book cart", "a raccoon librarian"],
  ["The Cardboard Time Machine", "History", "Siblings visit family memories in a machine built from boxes.", "family", "a bedroom workshop", "a cardboard control panel", "two curious siblings"],
  ["The Gentle Stone Folk", "Respect", "A canyon's stone creatures teach a visitor to move softly and listen.", "respect", "a sunset canyon", "a smooth stone token", "a gentle stone giant"],
  ["The Rooftop Garden", "Community", "Neighbors transform an empty rooftop into a garden for everyone.", "community", "a city rooftop", "a tray of seedlings", "a helpful neighbor"]
];

const libraryHeroNames = [
  "Elara", "Mateo", "Priya", "Finn", "Amara", "Hugo", "Zuri", "Theo", "Esme", "Kai",
  "Juniper", "Rafi", "Cleo", "Idris", "Tessa", "Bodhi", "Anika", "Rowan", "Sora", "Felix",
  "Lila", "Omar", "Wren", "Dario", "Maeve", "Kian", "Ayla", "Nico", "Freya", "Jasper",
  "Imani", "Remy", "Sana", "Ellis", "Marisol", "Cian", "Ada", "Ravi", "Elodie", "Benji",
  "Noura", "Callum", "Ines", "Yusuf", "Poppy", "Keira", "Zane", "Amelie", "Dev", "Orla"
];

const gradeLevels = [
  { id: "preschool", label: "Preschool", rank: 0 },
  { id: "kindergarten", label: "Kindergarten", rank: 1 },
  { id: "grade1", label: "Grade 1", rank: 2 },
  { id: "grade2", label: "Grade 2", rank: 3 },
  { id: "grade3", label: "Grade 3", rank: 4 },
  { id: "grade4", label: "Grade 4", rank: 5 },
  { id: "grade5", label: "Grade 5", rank: 6 },
  { id: "grade6", label: "Grade 6", rank: 7 }
];

const originalTales = taleEntries.map((entry, index) => ({
  title: entry[0],
  theme: entry[1],
  summary: entry[2],
  lesson: entry[3],
  setting: entry[4],
  object: entry[5],
  helper: entry[6],
  hero: libraryHeroNames[index]
}));

const allTaleEntries = originalTales.concat(window.expandedTaleEntries || []);

const happyTalesLibrary = allTaleEntries.map((entry, index) => {
  const grade = gradeLevels[index % gradeLevels.length];
  return {
    id: index + 1,
    ...entry,
    grade: grade.id,
    gradeLabel: grade.label,
    gradeRank: grade.rank,
    minutes: 5 + (index % 6),
    cover: `assets/tale-covers/tale-${String(index + 1).padStart(3, "0")}.webp`
  };
});

function getLibraryTale(id) {
  return happyTalesLibrary.find(tale => tale.id === Number(id));
}

function buildLibraryStory(tale) {
  const hero = tale.hero;
  const pick = (choices, offset = 0) => choices[(tale.id + offset) % choices.length];
  const clues = [
    "a trail of silver dots", "three soft chimes", "a pattern of turning leaves",
    "a reflection shaped like an arrow", "footprints that appeared only in sunlight"
  ];
  const obstacles = [
    "a bridge that answered only thoughtful questions",
    "a path split by a rushing stream",
    "a locked gate with no visible key",
    "a crowd whose different ideas had become tangled",
    "a map whose pieces had blown in every direction"
  ];
  const insight = pick([
    "the smallest clue connected all the others",
    "listening revealed a rhythm hidden beneath the noise",
    "the apparent mistake was actually a useful new direction",
    "every helper held one necessary part of the answer",
    "the safest route appeared only after the group slowed down"
  ], 3);

  if (tale.gradeRank === 0) {
    return [
      `${hero} saw ${tale.object}. It was bright and new.`,
      `${tale.helper} came near. "Can you help?" the helper asked.`,
      `They went into ${tale.setting}. Step, step, step.`,
      `A problem stopped them. ${hero} stayed calm.`,
      `They used ${tale.lesson}. They tried together.`,
      `It worked! Everyone smiled. ${hero} felt proud.`
    ];
  }

  if (tale.gradeRank === 1) {
    return [
      `${hero} found ${tale.object} near ${tale.setting}. It gave a tiny glow.`,
      `${tale.helper} needed help. The two friends made a simple plan.`,
      `They followed ${pick(clues)}. Soon, the way was blocked.`,
      `${hero} remembered to use ${tale.lesson}. They stopped and looked again.`,
      `A new path appeared. The friends finished their important job together.`,
      `At home, ${hero} shared the happy story and drew a picture of the day.`
    ];
  }

  const base = [
    `${hero} discovered ${tale.object} while exploring ${tale.setting}. It seemed ordinary until ${pick(clues)} appeared beside it.`,
    `${tale.helper} arrived with surprising news: ${tale.summary} They agreed to investigate before the problem grew.`,
    `Their route led to ${pick(obstacles, 1)}. ${hero} tested an idea, learned from the result, and invited the others to suggest a better approach.`,
    `After comparing the clues, they realized that ${insight}. The discovery changed their plan and revealed a route nobody had noticed.`,
    `${hero} used ${tale.object} carefully while every companion completed a different part of the task. Their cooperation transformed a difficult challenge into several manageable steps.`,
    `When another traveler needed help, ${hero} paused the mission. That choice demonstrated ${tale.lesson} and earned the trust of someone who later supplied the missing clue.`,
    `At the center of ${tale.setting}, the group faced one final decision. The quickest answer would help only a few, so ${hero} proposed a solution that considered everyone.`,
    `The plan succeeded, and the setting changed in a way that would help future visitors. ${hero} understood that ${tale.lesson} could shape a community, not merely solve one adventure.`,
    `Later, ${hero} recorded the evidence, the failed attempts, and the final discovery. The account became a guide for anyone facing a similar problem.`,
    `Long after ${tale.object} was returned, people still remembered how patient reasoning and shared responsibility had turned uncertainty into hope.`
  ];

  if (tale.gradeRank === 2) return base.slice(0, 6);
  if (tale.gradeRank === 3) return base.slice(0, 7);
  if (tale.gradeRank === 4) return base.slice(0, 8);
  if (tale.gradeRank === 5) return base.slice(0, 9);
  if (tale.gradeRank === 6) {
    base.splice(6, 0, `Although the evidence pointed toward an easy conclusion, ${hero} questioned the assumption and examined who might be affected by it.`);
  }
  if (tale.gradeRank === 7) {
    base.splice(3, 0, `The conflicting accounts forced ${hero} to distinguish observation from opinion, a distinction that made the mystery more complex but also more honest.`);
    base.splice(8, 0, `Rather than treating disagreement as an obstacle, the group used it to test the strengths and weaknesses of each proposal.`);
  }
  return base;
}
