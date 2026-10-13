const expandedTaleWorlds = [
  { suffix: "Aurora Harbor", setting: "a harbor where the northern lights touch the water", helper: "a lantern-finned seal", mood: "glowing arctic blues and warm harbor lights" },
  { suffix: "Cloudberry Vale", setting: "a valley of floating berry farms and windmill paths", helper: "a cloudberry fox", mood: "berry pinks, leafy greens, and bright sky blue" },
  { suffix: "Clockwork Orchard", setting: "an orchard where brass trees grow chiming fruit", helper: "a copper-winged wren", mood: "golden brass, apple red, and spring green" },
  { suffix: "Whispering Reef", setting: "a reef whose coral sings with the ocean currents", helper: "a striped lanternfish", mood: "turquoise water, coral pink, and violet sea light" },
  { suffix: "Starlace Canyon", setting: "a canyon crossed by bridges woven from starlight", helper: "a sure-footed moon goat", mood: "deep violet, sandstone gold, and silver stars" },
  { suffix: "Sunpetal City", setting: "a rooftop city powered by enormous turning flowers", helper: "a pollen-dusted hummingbird", mood: "sunflower yellow, cobalt blue, and lively coral" },
  { suffix: "Mossbell Hollow", setting: "a forest hollow where mossy bells announce every visitor", helper: "a button-hatted salamander", mood: "moss green, mushroom red, and firefly gold" },
  { suffix: "Tideglass Island", setting: "an island of clear cliffs that reveal ancient ocean memories", helper: "a pearl-shelled turtle", mood: "sea glass green, sapphire, and sunset orange" },
  { suffix: "Firefly Prairie", setting: "a wide prairie where fireflies arrange themselves into maps", helper: "a long-eared field mouse", mood: "midnight blue, grass green, and thousands of golden lights" },
  { suffix: "Paperwing Kingdom", setting: "a kingdom built from folded paper towers and painted bridges", helper: "an origami crane", mood: "crisp white, rainbow ink, and royal blue" }
];

const expandedTaleAdventures = [
  { stem: "The Glasswing Compass of", object: "a compass with transparent butterfly wings", goal: "guide a lost parade home", theme: "Adventure", lesson: "courage" },
  { stem: "The Unfinished Song of", object: "a music box missing its final note", goal: "complete a song before the evening celebration", theme: "Music", lesson: "listening" },
  { stem: "The Pocket Weather of", object: "a tiny jar holding a changeable cloud", goal: "bring gentle rain to a thirsty garden", theme: "Nature", lesson: "responsibility" },
  { stem: "The Upside-Down Door of", object: "a doorway that opens only when viewed differently", goal: "reach a friend on the other side", theme: "Problem solving", lesson: "perspective" },
  { stem: "The Traveling Teapot of", object: "a teapot that rolls toward anyone feeling lonely", goal: "deliver a warm welcome to a newcomer", theme: "Friendship", lesson: "kindness" },
  { stem: "The Seven-Spark Kite of", object: "a kite carrying seven colored sparks", goal: "return the missing colors to the morning sky", theme: "Creativity", lesson: "trying again" },
  { stem: "The Quiet Parade of", object: "a drum that can be heard only by careful listeners", goal: "help shy performers join the town parade", theme: "Confidence", lesson: "inclusion" },
  { stem: "The Borrowed Shadow of", object: "a playful shadow carrying an important clue", goal: "return a misplaced keepsake before moonrise", theme: "Mystery", lesson: "honesty" },
  { stem: "The Hundred Button Bridge of", object: "a bridge controlled by one hundred colorful buttons", goal: "discover the fair way for everyone to cross", theme: "Teamwork", lesson: "cooperation" },
  { stem: "The Last Little Lighthouse of", object: "a palm-sized lighthouse with a brave golden beam", goal: "lead night travelers through an unexpected storm", theme: "Courage", lesson: "helpfulness" }
];

const expandedHeroNames = [
  "Adair", "Binta", "Cassian", "Della", "Eamon", "Fia", "Gideon", "Hana", "Isandro", "Jovie",
  "Kenzo", "Leona", "Makai", "Nell", "Oswin", "Paloma", "Quincy", "Rhea", "Stellan", "Tali",
  "Uma", "Viggo", "Willow", "Xavi", "Yara", "Alden", "Bria", "Caspian", "Demi", "Enzo",
  "Farah", "Griffin", "Hattie", "Ivo", "Joelle", "Koa", "Linnea", "Miro", "Noemi", "Otis",
  "Petra", "Reuben", "Selah", "Tobin", "Una", "Valen", "Willa", "Ximena", "Yael", "Zoya",
  "Arlo", "Beatrix", "Cedric", "Dahlia", "Emil", "Flora", "Galen", "Helena", "Inez", "Jalen",
  "Kira", "Lucian", "Mabel", "Niko", "Odette", "Pax", "Romy", "Simeon", "Thalia", "Uriah",
  "Veda", "Wesley", "Xena", "Yuki", "Zev", "Asha", "Bram", "Cora", "Dante", "Elowen",
  "Frida", "Gael", "Honor", "Indra", "Jonas", "Kamil", "Lumi", "Maren", "Nash", "Opal",
  "Perrin", "Rina", "Sol", "Tamsin", "Umi", "Vito", "Winter", "Xander", "Yuna", "Zinnia"
];

window.expandedTaleEntries = expandedTaleWorlds.flatMap((world, worldIndex) =>
  expandedTaleAdventures.map((adventure, adventureIndex) => {
    const index = worldIndex * expandedTaleAdventures.length + adventureIndex;
    const hero = expandedHeroNames[index];
    return {
      title: `${adventure.stem} ${world.suffix}`,
      theme: adventure.theme,
      summary: `${hero} and ${world.helper} must ${adventure.goal} using ${adventure.object}.`,
      lesson: adventure.lesson,
      setting: world.setting,
      object: adventure.object,
      helper: world.helper,
      hero,
      coverMood: world.mood,
      coverScene: `${hero} with ${world.helper}, holding ${adventure.object}, while they prepare to ${adventure.goal} in ${world.setting}`
    };
  })
);

window.expandedTaleEntries.push(
  {
    title: "The Rain Piano of Pebble Bay",
    theme: "Music",
    summary: "Aven and a silver otter tune a piano played by raindrops before the bay concert begins.",
    lesson: "patience",
    setting: "a seaside village built around smooth singing stones",
    object: "a rain-powered piano",
    helper: "a silver otter named Ripple",
    hero: "Aven",
    coverMood: "ocean blue, rain silver, coral umbrellas",
    coverScene: "Aven and a silver otter tuning a colorful outdoor piano while raindrops play its keys"
  },
  {
    title: "The Dandelion Delivery",
    theme: "Kindness",
    summary: "Belen carries tiny seed letters across a windy meadow to neighbors who need encouragement.",
    lesson: "kindness",
    setting: "a meadow village beneath enormous dandelions",
    object: "a satchel of seed-sized letters",
    helper: "a green-winged grasshopper",
    hero: "Belen",
    coverMood: "sunny yellow, meadow green, soft sky blue",
    coverScene: "Belen riding a giant drifting dandelion with a grasshopper and a satchel of tiny letters"
  },
  {
    title: "The Museum After Moonrise",
    theme: "History",
    summary: "Cosmo helps friendly exhibits return their borrowed objects before the museum opens.",
    lesson: "responsibility",
    setting: "a grand museum that awakens under moonlight",
    object: "a glowing curator's notebook",
    helper: "a miniature woolly mammoth",
    hero: "Cosmo",
    coverMood: "moonlit indigo, museum gold, jewel tones",
    coverScene: "Cosmo and a tiny woolly mammoth exploring a moonlit museum with a glowing notebook"
  },
  {
    title: "The Cinnamon Windmill",
    theme: "Community",
    summary: "Dovie rallies a hilltop village to repair the windmill that warms every winter kitchen.",
    lesson: "community",
    setting: "a hilltop village surrounded by cinnamon-colored fields",
    object: "a box of painted wooden gears",
    helper: "a flour-dusted barn owl",
    hero: "Dovie",
    coverMood: "cinnamon red, wheat gold, clear turquoise",
    coverScene: "Dovie and a barn owl repairing a cheerful windmill with colorful wooden gears"
  },
  {
    title: "The Comet's Lost Tail",
    theme: "Science and wonder",
    summary: "Eleri follows a trail of sparkling dust to help a young comet shine confidently again.",
    lesson: "confidence",
    setting: "an observatory floating above the clouds",
    object: "a telescope shaped like a silver trumpet",
    helper: "a round star beetle",
    hero: "Eleri",
    coverMood: "cosmic violet, cobalt, sparkling silver",
    coverScene: "Eleri and a star beetle using a silver telescope as a young comet circles a cloud observatory"
  },
  {
    title: "The Umbrella Tree",
    theme: "Nature",
    summary: "Faron learns why a tree grows umbrellas instead of leaves and saves its rainy-day habitat.",
    lesson: "care",
    setting: "a rain forest filled with umbrella-shaped trees",
    object: "a blue watering whistle",
    helper: "a spectacled tree frog",
    hero: "Faron",
    coverMood: "rainforest green, umbrella rainbow, misty blue",
    coverScene: "Faron and a spectacled frog beneath a giant tree blooming with colorful umbrellas"
  },
  {
    title: "The Marble Moon Race",
    theme: "Teamwork",
    summary: "Gita and her rivals combine their homemade moon rovers when the racecourse changes overnight.",
    lesson: "teamwork",
    setting: "a miniature moon built from glowing white marble",
    object: "a patchwork moon rover",
    helper: "a mechanical cricket",
    hero: "Gita",
    coverMood: "pearl white, electric blue, racing coral",
    coverScene: "Gita driving a colorful patchwork rover across a marble moon beside a mechanical cricket"
  },
  {
    title: "The Library of Growing Words",
    theme: "Love of reading",
    summary: "Hollis discovers that kind words grow into vines that connect readers throughout the library.",
    lesson: "communication",
    setting: "a glass-roofed library overflowing with flowering words",
    object: "a watering can filled with blue ink",
    helper: "a book-loving gecko",
    hero: "Hollis",
    coverMood: "leaf green, ink blue, warm library amber",
    coverScene: "Hollis and a gecko watering glowing word-vines between towering library shelves"
  },
  {
    title: "The Snowglobe Summer",
    theme: "Trying new things",
    summary: "Isla brings sunshine to a chilly snowglobe town without melting everything its residents love.",
    lesson: "adaptability",
    setting: "a tiny winter town inside a crystal snowglobe",
    object: "a pocket-sized sun lantern",
    helper: "a scarf-wearing polar hare",
    hero: "Isla",
    coverMood: "icy cyan, sunny gold, warm berry red",
    coverScene: "Isla and a polar hare holding a tiny sun lantern inside a sparkling snowglobe village"
  },
  {
    title: "The Great Pajama Parliament",
    theme: "Problem solving",
    summary: "Jori helps a midnight gathering of toys agree on the fairest bedtime rule.",
    lesson: "fairness",
    setting: "a cozy bedroom transformed into a moonlit meeting hall",
    object: "a star-patterned talking pillow",
    helper: "a serious stuffed elephant",
    hero: "Jori",
    coverMood: "cozy violet, moon blue, cheerful pajama colors",
    coverScene: "Jori chairing a friendly midnight meeting of toys around a star-patterned talking pillow"
  }
);
