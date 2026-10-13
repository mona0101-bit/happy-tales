const pathBookConcepts = [
  ["The Compass Beneath the Lake", "Amina", "a crystal lake with a city beneath its surface", "a silver compass", "a curious otter", "courage"],
  ["The Clocktower Cloud", "Beck", "a town whose clocktower reaches into the clouds", "a key shaped like lightning", "a tiny cloud dragon", "responsibility"],
  ["The Secret of Sunflower Station", "Celia", "a railway station hidden among giant sunflowers", "a golden ticket", "a conductor mouse", "kindness"],
  ["The Library at the Edge of Night", "Dax", "a library that opens only after the last sunset", "a book with blank glowing pages", "a spectacled owl", "curiosity"],
  ["The River That Remembered", "Emi", "a river carrying memories instead of reflections", "a blue glass bottle", "a patient heron", "honesty"],
  ["The Lantern Fox Trail", "Farid", "a snowy forest lit by fox-shaped lanterns", "a warm red scarf", "a lantern fox", "helpfulness"],
  ["The Pocket-Sized Planet", "Gia", "a tiny planet growing inside a greenhouse", "a star-seed", "a gardening robot", "care"],
  ["The Carnival of Quiet Sounds", "Hector", "a midnight carnival where whispers become music", "a silent silver bell", "a shy cricket", "listening"],
  ["The Island That Changed Shape", "Imani", "an island that rearranges itself with every tide", "a shell map", "a blue-footed bird", "adaptability"],
  ["The Dragon's Missing Shadow", "Jonah", "a mountain village beneath a sleeping volcano", "a jar of moonlight", "a gentle young dragon", "friendship"],
  ["The Museum of Tomorrow", "Kira", "a museum displaying inventions from possible futures", "a copper visitor badge", "a clockwork cat", "creativity"],
  ["The Garden Behind the Moon", "Lucia", "a secret garden growing on the moon's far side", "a packet of humming seeds", "a moon rabbit", "patience"],
  ["The Rainbow Bridge Repair", "Malik", "a valley connected by a bridge made of color", "a paintbrush compass", "a talking raindrop", "teamwork"],
  ["The Whispering Volcano", "Nessa", "a tropical island where a volcano tells riddles", "a stone listening horn", "a bright green gecko", "understanding"],
  ["The Underwater Post Office", "Oren", "a coral post office at the bottom of the sea", "an unopened pearl letter", "an octopus mail carrier", "communication"],
  ["The Castle of Borrowed Dreams", "Pia", "a castle built from dreams people forgot", "a feather pillow key", "a sleepy griffin", "respect"],
  ["The Map of Moving Mountains", "Quinn", "a range of mountains that walk at sunrise", "a compass stone", "a sure-footed goat", "perseverance"],
  ["The Robot in the Rainforest", "Rosa", "a rainforest filled with mechanical flowers", "a solar crystal", "a hummingbird drone", "cooperation"],
  ["The Starfish Crown", "Sami", "a seaside kingdom preparing for its tide festival", "a crown-shaped starfish", "a laughing seal", "generosity"],
  ["The Teacup Airship", "Talia", "a sky full of floating breakfast islands", "a teacup with tiny sails", "a cinnamon-colored sparrow", "confidence"],
  ["The Valley of Giant Footprints", "Uri", "a misty valley crossed by enormous glowing footprints", "a measuring ribbon", "a young mammoth", "discovery"],
  ["The Midnight Kite Contest", "Vera", "a rooftop town where kites catch falling stars", "a violet star-kite", "a rooftop raccoon", "fairness"],
  ["The Winter Flower Mystery", "Wes", "a frozen garden where one flower refuses to sleep", "a magnifying snowflake", "a white hare", "wonder"],
  ["The Xylophone Bridge", "Xena", "a jungle canyon crossed by a bridge of musical keys", "a rhythm stone", "a dancing parrot", "practice"],
  ["The Yellow Door in the Reef", "Yusuf", "a reef maze with one mysterious yellow door", "a bubble lantern", "a striped seahorse", "bravery"],
  ["The Zeppelin of Lost Things", "Zara", "a floating airship collecting objects people misplace", "a brass finder lens", "a pilot penguin", "responsibility"],
  ["The Orchard Above the Stars", "Ansel", "an orchard floating between constellations", "a basket of comet apples", "a silver moth", "sharing"],
  ["The Bells of Pebble Harbor", "Brielle", "a harbor where smooth stones ring before storms", "a tide bell", "a harbor porpoise", "preparation"],
  ["The City Inside the Snowglobe", "Cyrus", "a miniature winter city inside an old snowglobe", "a pocket sun", "a scarf-wearing hare", "problem solving"],
  ["The Doorway of a Hundred Stories", "Delia", "a hall where every door opens into a different tale", "a many-colored bookmark", "a paper-winged cat", "choice"]
];

const pathBooks = pathBookConcepts.map((entry, index) => ({
  id: index + 1,
  title: entry[0],
  hero: entry[1],
  setting: entry[2],
  object: entry[3],
  companion: entry[4],
  lesson: entry[5],
  minutes: 12 + (index % 5),
  cover: `assets/tale-covers/tale-${String(101 + index).padStart(3, "0")}.webp`
}));

function getPathBook(id) {
  return pathBooks.find(book => book.id === Number(id));
}

function buildPathNodes(book) {
  const nodes = {
    start: {
      title: "Three Ways Forward",
      paragraphs: [
        `${book.hero} arrived at ${book.setting} just as ${book.object} began to glow. Nobody nearby seemed to notice except ${book.companion}.`,
        `The companion explained that something important had changed, and the setting would not return to normal until someone discovered why. In the distance, three routes appeared at the same moment.`,
        `${book.hero} took a slow breath and remembered that a thoughtful choice could matter more than a fast one. Each route promised different clues, different helpers, and a very different adventure.`
      ],
      choices: [
        { label: `Follow ${book.companion}`, detail: "Trust the companion's unusual shortcut.", next: "companionPath" },
        { label: `Study ${book.object}`, detail: "Look closely for a hidden message.", next: "objectPath" },
        { label: "Explore the wider setting", detail: "Meet the people nearby and learn what changed.", next: "explorerPath" }
      ]
    },
    companionPath: {
      title: "The Companion's Shortcut",
      paragraphs: [
        `${book.hero} followed ${book.companion} along a route hidden from ordinary travelers. It curled through ${book.setting}, passing signs that seemed to move whenever nobody watched.`,
        `The shortcut ended at a carved marker with three symbols. ${book.companion} recognized each symbol but could not tell which one held the most useful clue.`,
        `A cheerful sound came from the left, a quiet call echoed ahead, and a trail of unusual prints curved toward the right.`
      ],
      choices: [
        { label: "Join the cheerful voices", detail: "Ask a group of travelers what they have seen.", next: "companionCommunity" },
        { label: "Answer the quiet call", detail: "Find out who needs help beyond the marker.", next: "companionRescue" },
        { label: "Follow the unusual prints", detail: "Track the mysterious visitor through the hidden route.", next: "companionTracks" }
      ]
    },
    objectPath: {
      title: `The Secret of ${book.object}`,
      paragraphs: [
        `${book.hero} examined ${book.object} carefully. Tiny marks formed a message: "The quickest answer is not always the wisest."`,
        `As the final word appeared, three parts of ${book.object} lit up in different colors. One pointed toward a narrow doorway, another toward a sparkling trail, and the last revealed a symbol reflected in the sky.`,
        `${book.hero} copied the message before it faded. The clue did not provide an answer, but it made each possible direction feel important.`
      ],
      choices: [
        { label: "Open the narrow doorway", detail: "Take the mysterious route hidden nearby.", next: "objectDoor" },
        { label: "Follow the sparkling trail", detail: "Collect every clue left along the longer path.", next: "objectTrail" },
        { label: "Study the reflected symbol", detail: "Work out why the clue points upward.", next: "objectSymbol" }
      ]
    },
    explorerPath: {
      title: "The Stories of the Setting",
      paragraphs: [
        `${book.hero} chose not to rush away. Instead, the young explorer walked through ${book.setting} and asked gentle questions about what everyone had noticed.`,
        `Three stories stood out. A local maker had seen a strange machine, a young traveler had lost an important map, and an elder remembered an old song connected to ${book.object}.`,
        `Each person offered to show the way, but there was only enough daylight to investigate one lead carefully.`
      ],
      choices: [
        { label: "Visit the local maker", detail: "Inspect the machine that appeared before the trouble.", next: "explorerWorkshop" },
        { label: "Help find the lost map", detail: "Retrace the young traveler's steps.", next: "explorerMap" },
        { label: "Learn the old song", detail: "Listen for a clue hidden in its words and rhythm.", next: "explorerSong" }
      ]
    },
    companionCommunity: {
      title: "A Puzzle Made of Many Clues",
      paragraphs: [
        `The travelers welcomed ${book.hero}, but they disagreed about what had happened. Each person had witnessed only one small part of the mystery.`,
        `${book.hero} arranged their clues beside ${book.object}. Together, the details formed a pattern pointing toward the heart of ${book.setting}.`,
        `Before continuing, the group had to decide how to use the new information without leaving anyone unheard.`
      ],
      choices: [
        { label: "Lead a careful expedition", detail: "Move ahead bravely while checking every clue.", next: "companionCourageEnding" },
        { label: "Invite everyone to help", detail: "Give each traveler an important role.", next: "companionKindnessEnding" },
        { label: "Test the clue pattern first", detail: "Build a small model before taking the real path.", next: "companionWisdomEnding" }
      ]
    },
    companionRescue: {
      title: "The Voice Beyond the Marker",
      paragraphs: [
        `The call belonged to a frightened visitor trapped beyond a shifting barrier. The visitor had also seen the mystery begin but could not explain everything from the other side.`,
        `${book.hero} and ${book.companion} found three possible ways to reach them. Each required a different kind of strength.`,
        `The barrier trembled again, reminding everyone to choose calmly rather than carelessly.`
      ],
      choices: [
        { label: "Cross the moving barrier", detail: "Time each step and guide the visitor back.", next: "companionCourageEnding" },
        { label: "Reassure the visitor", detail: "Work together slowly so nobody feels alone.", next: "companionKindnessEnding" },
        { label: "Redirect the barrier", detail: "Use the surroundings to make a safer opening.", next: "companionWisdomEnding" }
      ]
    },
    companionTracks: {
      title: "The Trail Nobody Expected",
      paragraphs: [
        `The prints changed size and shape as they crossed ${book.setting}. They did not belong to a monster, as some had feared, but to a clever visitor carrying something heavy.`,
        `At the end of the trail, ${book.hero} discovered that the visitor had caused the problem by mistake and was now trying to repair it alone.`,
        `${book.companion} waited while ${book.hero} considered whether to act boldly, offer support, or first study the visitor's unfinished repair.`
      ],
      choices: [
        { label: "Step forward confidently", detail: "Offer to face the hardest part together.", next: "companionCourageEnding" },
        { label: "Listen before judging", detail: "Let the visitor explain the whole mistake.", next: "companionKindnessEnding" },
        { label: "Inspect the repair", detail: "Find the missing step in the visitor's plan.", next: "companionWisdomEnding" }
      ]
    },
    objectDoor: {
      title: "Beyond the Narrow Door",
      paragraphs: [
        `The doorway opened into a chamber shaped by the history of ${book.setting}. Images on the walls showed earlier explorers facing the same mystery in different ways.`,
        `${book.object} cast light on three mechanisms: a heavy lever, a listening stone, and a turning puzzle made of rings.`,
        `The chamber offered no instructions. ${book.hero} would have to decide what kind of answer the mystery needed.`
      ],
      choices: [
        { label: "Pull the heavy lever", detail: "Trust your courage and commit to the mechanism.", next: "objectCourageEnding" },
        { label: "Use the listening stone", detail: "Pause and hear the voices stored inside it.", next: "objectEmpathyEnding" },
        { label: "Solve the turning rings", detail: "Align the symbols through patient reasoning.", next: "objectDiscoveryEnding" }
      ]
    },
    objectTrail: {
      title: "Clues Along the Long Way",
      paragraphs: [
        `The sparkling trail wound through places most travelers overlooked. At every bend, ${book.hero} found a clue connected to someone who lived in ${book.setting}.`,
        `Together, the clues showed that solving the mystery would affect more than one person. A quick solution might help today but create a new problem tomorrow.`,
        `At the final marker, three possible plans appeared in the glow of ${book.object}.`
      ],
      choices: [
        { label: "Take the difficult climb", detail: "Reach the source before it changes again.", next: "objectCourageEnding" },
        { label: "Gather the affected neighbors", detail: "Choose a solution everyone understands.", next: "objectEmpathyEnding" },
        { label: "Complete the clue sequence", detail: "Reveal the lasting solution hidden in the pattern.", next: "objectDiscoveryEnding" }
      ]
    },
    objectSymbol: {
      title: "The Message in the Sky",
      paragraphs: [
        `${book.hero} watched the reflected symbol move across the sky until it lined up with three landmarks. Each landmark revealed a different part of an ancient message.`,
        `The message warned that ${book.object} would respond not only to an action, but also to the reason behind that action.`,
        `With the mystery's center now visible, ${book.hero} had to decide what intention would guide the final choice.`
      ],
      choices: [
        { label: "Protect the setting", detail: "Act quickly to shield everyone from danger.", next: "objectCourageEnding" },
        { label: "Restore what was lost", detail: "Put the needs of the community first.", next: "objectEmpathyEnding" },
        { label: "Understand the mystery", detail: "Ask one final question before acting.", next: "objectDiscoveryEnding" }
      ]
    },
    explorerWorkshop: {
      title: "The Workshop of Unfinished Ideas",
      paragraphs: [
        `The local maker's workshop was filled with bright tools and half-built inventions. One machine hummed in the same rhythm as ${book.object}.`,
        `The maker admitted that the machine had awakened something unexpected in ${book.setting}. It could be shut down, repaired, or transformed into something helpful.`,
        `${book.hero} studied the controls while the maker waited for a fair decision.`
      ],
      choices: [
        { label: "Shut it down safely", detail: "Stop the immediate problem before it grows.", next: "explorerActionEnding" },
        { label: "Repair it together", detail: "Teach and learn while correcting the mistake.", next: "explorerTeamworkEnding" },
        { label: "Transform its purpose", detail: "Turn the invention into part of the solution.", next: "explorerCreativeEnding" }
      ]
    },
    explorerMap: {
      title: "The Map With a Missing Corner",
      paragraphs: [
        `${book.hero} retraced the traveler's route and found the map caught where two paths crossed. Its missing corner had been replaced by a sketch of ${book.object}.`,
        `The map showed a danger, a meeting place, and an unmarked route that did not appear anywhere in ${book.setting}.`,
        `There was time to follow only one feature before the changing light erased the ink.`
      ],
      choices: [
        { label: "Go toward the danger mark", detail: "Prevent the next problem before it begins.", next: "explorerActionEnding" },
        { label: "Visit the meeting place", detail: "Bring everyone together around the map.", next: "explorerTeamworkEnding" },
        { label: "Trace the unmarked route", detail: "Discover why it was hidden from the map.", next: "explorerCreativeEnding" }
      ]
    },
    explorerSong: {
      title: "The Melody That Remembered",
      paragraphs: [
        `The elder sang the old song softly. Its verses described ${book.setting}, but the final verse changed whenever ${book.object} glowed.`,
        `${book.hero} noticed that the rhythm matched three sounds nearby. Playing them in a chosen order would complete the unfinished verse.`,
        `One order sounded strong, one invited others to join, and one created a melody nobody had heard before.`
      ],
      choices: [
        { label: "Play the strongest rhythm", detail: "Use its steady beat to guide immediate action.", next: "explorerActionEnding" },
        { label: "Invite everyone to sing", detail: "Complete the verse with many different voices.", next: "explorerTeamworkEnding" },
        { label: "Create a new final verse", detail: "Blend the old lesson with a fresh solution.", next: "explorerCreativeEnding" }
      ]
    }
  };

  const endingGroups = [
    ["companionCourageEnding", "The Brave Guide Ending", "Brave Guide", `With ${book.companion} close behind, ${book.hero} moved first but never recklessly. Each careful step made the path safer for everyone who followed.`, `The final obstacle opened when ${book.object} recognized courage guided by care. ${book.setting} returned to normal, and nobody was asked to face the frightening part alone.`, `${book.hero} learned that ${book.lesson} can mean stepping forward while still listening to the people beside you.`],
    ["companionKindnessEnding", "The Listening Circle Ending", "Listening Circle", `${book.hero} made room for every voice, including the quietest one. A detail everyone else had missed became the key to the mystery.`, `${book.companion} helped gather the group into a circle, where each person contributed one part of the solution. Together they restored ${book.setting} without leaving anyone behind.`, `${book.object} glowed warmly as ${book.hero} discovered how ${book.lesson} grows through patience and kindness.`],
    ["companionWisdomEnding", "The Clever Shortcut Ending", "Clever Shortcut", `${book.hero} tested the clues before making the final move. What first looked like a long delay revealed a safe shortcut hidden inside the problem itself.`, `${book.companion} cheered as the plan worked exactly as hoped. ${book.setting} was restored through observation, cooperation, and one delightfully clever idea.`, `${book.hero} carried home a new understanding of ${book.lesson}: wise choices can be both careful and imaginative.`],
    ["objectCourageEnding", "The Guardian Light Ending", "Guardian Light", `${book.hero} used ${book.object} to protect the most vulnerable part of ${book.setting}. The glow grew brighter with every steady, courageous choice.`, `When the mystery pushed back, ${book.hero} did not run or rush. A calm final action released the trapped energy and restored everything that had changed.`, `${book.object} became a symbol of ${book.lesson}, reminding future travelers that courage works best when it protects others.`],
    ["objectEmpathyEnding", "The Restored Promise Ending", "Restored Promise", `${book.hero} realized the mystery began with a forgotten promise. Solving it required understanding why that promise mattered to the people of ${book.setting}.`, `Instead of choosing the fastest answer, ${book.hero} helped everyone repair what had been lost. ${book.object} responded to their honesty and softened into a peaceful glow.`, `The restored promise became a celebration of ${book.lesson}, remembered long after the adventure ended.`],
    ["objectDiscoveryEnding", "The Hidden Truth Ending", "Hidden Truth", `${book.hero} asked one last question, and ${book.object} revealed a truth concealed beneath every earlier clue. The mystery had never been asking for force; it had been waiting to be understood.`, `With the full pattern visible, the solution became surprisingly simple. ${book.setting} settled into balance, brighter and more welcoming than before.`, `${book.hero} returned with a story about curiosity, careful thinking, and the deeper meaning of ${book.lesson}.`],
    ["explorerActionEnding", "The Quick Rescue Ending", "Quick Rescue", `${book.hero} organized a clear plan and acted before the problem could spread. Everyone knew where to stand, what to carry, and when to move.`, `The rescue succeeded because speed was balanced with preparation. ${book.setting} became safe again, and even the smallest helper played an important part.`, `${book.object} flashed like a tiny sunrise as ${book.hero} saw ${book.lesson} turn good intentions into useful action.`],
    ["explorerTeamworkEnding", "The Whole Town Ending", "Whole Town", `${book.hero} brought the people of ${book.setting} together and explained every clue. Different skills that once seemed unrelated fitted perfectly into one shared plan.`, `The work took longer, but laughter and encouragement made the difficult parts lighter. When the final piece was placed, the whole setting celebrated together.`, `${book.hero} understood that ${book.lesson} becomes powerful when everyone is trusted to contribute.`],
    ["explorerCreativeEnding", "The Brand-New Way Ending", "Brand-New Way", `${book.hero} combined the strangest clues into a solution nobody had tried before. At first it sounded impossible, but each small test made the idea stronger.`, `${book.companion}, the local helpers, and even the mystery itself seemed to join the experiment. The new plan restored ${book.setting} while creating something wonderful for its future.`, `${book.object} shimmered with many colors, celebrating creativity, hope, and ${book.lesson}.`]
  ];

  endingGroups.forEach(([id, title, ending, ...paragraphs]) => {
    nodes[id] = { title, paragraphs, ending };
  });
  return nodes;
}
