const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const hashString = (value) => {
  let hash = 2166136261;
  for (let idx = 0; idx < value.length; idx += 1) {
    hash ^= value.charCodeAt(idx);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const createSeededRng = (seedString) => {
  let seed = hashString(seedString) || 1;
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffle = (list, seedKey) => {
  const out = list.slice();
  const rand = createSeededRng(seedKey);
  for (let idx = out.length - 1; idx > 0; idx -= 1) {
    const swapIdx = Math.floor(rand() * (idx + 1));
    [out[idx], out[swapIdx]] = [out[swapIdx], out[idx]];
  }
  return out;
};

const buildDistributedList = ({ middleParts, suffixes, count, seedKey }) => {
  const out = [];
  const seen = new Set();

  const addCandidate = (middle, suffix) => {
    const raw = `${middle}${suffix}`.toLowerCase();
    const value = capitalize(raw);
    if (!seen.has(value)) {
      seen.add(value);
      out.push(value);
    }
  };

  middleParts.forEach((middle, idx) => {
    const suffix = suffixes[idx % suffixes.length];
    addCandidate(middle, suffix);
  });

  const allCombos = [];
  middleParts.forEach((middle) => {
    suffixes.forEach((suffix) => {
      allCombos.push(`${middle}|${suffix}`);
    });
  });

  const randomized = shuffle(allCombos, seedKey);
  for (const combo of randomized) {
    if (out.length >= count) {
      break;
    }
    const [middle, suffix] = combo.split('|');
    addCandidate(middle, suffix);
  }

  if (out.length < count) {
    throw new Error(`Unable to build ${count} unique names for ${seedKey}`);
  }

  return out.slice(0, count);
};

const buildGenderedFirstNames = ({
  maleMiddleParts,
  maleSuffixes,
  femaleMiddleParts,
  femaleSuffixes,
  seedKey,
}) => ({
  male: buildDistributedList({
    middleParts: maleMiddleParts,
    suffixes: maleSuffixes,
    count: 100,
    seedKey: `${seedKey}-male`,
  }),
  female: buildDistributedList({
    middleParts: femaleMiddleParts,
    suffixes: femaleSuffixes,
    count: 100,
    seedKey: `${seedKey}-female`,
  }),
});

export const NPC_NAME_CATALOG = {
  human: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['ald', 'mir', 'ren', 'cor', 'tar', 'ver', 'jor', 'kal', 'mar', 'dran', 'edr', 'luc', 'gav', 'hen', 'rob', 'frid', 'bren', 'theo', 'owen', 'osw'],
      maleSuffixes: ['en', 'in', 'or', 'us', 'el', 'an', 'on', 'ar', 'ric', 'dan', 'ald', 'ard', 'bert', 'ford', 'ston', 'win', 'der', 'ham', 'ton', 'frey'],
      femaleMiddleParts: ['sel', 'lys', 'mira', 'sara', 'vera', 'lina', 'jora', 'kara', 'nora', 'tala', 'amel', 'clar', 'elis', 'jul', 'mari', 'rosa', 'viv', 'hel', 'irin', 'cat'],
      femaleSuffixes: ['a', 'ia', 'ela', 'ine', 'ara', 'ina', 'elle', 'ora', 'yn', 'is', 'ette', 'lyn', 'ise', 'eva', 'ira', 'una', 'ettea', 'rose', 'beth', 'line'],
      seedKey: 'human-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['hollow', 'thorn', 'merri', 'vale', 'cask', 'row', 'stone', 'ford', 'wind', 'hart', 'brook', 'oak', 'field', 'gate', 'hill', 'marsh', 'brent', 'winter', 'river', 'black'],
      suffixes: ['ay', 'e', 'ick', 'en', 'er', 'an', 'son', 'well', 'ward', 'mont', 'wood', 'brook', 'ton', 'ley', 'man', 'croft', 'ridge', 'mere', 'brooke', 'bridge'],
      count: 200,
      seedKey: 'human-last',
    }),
  },
  elf: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['aer', 'thal', 'syl', 'leth', 'eld', 'vae', 'nael', 'cael', 'ryth', 'zeph', 'ael', 'ion', 'ther', 'lor', 'quin', 'ryel', 'saer', 'tyr', 'vael', 'xan'],
      maleSuffixes: ['el', 'or', 'eth', 'ion', 'is', 'ien', 'ar', 'ril', 'nor', 'thas', 'ael', 'dor', 'fin', 'las', 'mir', 'rael', 'thir', 'vyr', 'zor', 'lian'],
      femaleMiddleParts: ['ily', 'fae', 'nai', 'sera', 'lira', 'aela', 'myr', 'thora', 'vani', 'eira', 'aeri', 'cel', 'ely', 'fira', 'lyth', 'nysa', 'sylva', 'thal', 'vae', 'ylla'],
      femaleSuffixes: ['iel', 'a', 'ara', 'wyn', 'elle', 'ia', 'eth', 'is', 'yn', 'ora', 'aen', 'driel', 'etha', 'fiel', 'lora', 'myr', 'riel', 'shae', 'thiel', 'vanna'],
      seedKey: 'elf-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['moon', 'dawn', 'silver', 'night', 'star', 'glade', 'leaf', 'song', 'spire', 'wind', 'sun', 'mist', 'crystal', 'briar', 'river', 'winter', 'ember', 'echo', 'gossamer', 'thorn'],
      suffixes: ['whisper', 'bloom', 'glen', 'heart', 'mere', 'runner', 'shade', 'weave', 'ward', 'vale', 'song', 'dancer', 'gazer', 'breeze', 'branch', 'root', 'brook', 'keeper', 'blossom', 'ray'],
      count: 200,
      seedKey: 'elf-last',
    }),
  },
  dwarf: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['br', 'dr', 'gr', 'kaz', 'mor', 'ruk', 'thor', 'ul', 'vor', 'dur', 'bar', 'brok', 'dorn', 'farn', 'grim', 'harn', 'kor', 'thrum', 'vald', 'zarn'],
      maleSuffixes: ['ad', 'ag', 'ak', 'am', 'an', 'ar', 'rik', 'gar', 'din', 'run', 'bar', 'drum', 'grim', 'hald', 'karn', 'lod', 'morn', 'ruk', 'thar', 'vorn'],
      femaleMiddleParts: ['bri', 'dora', 'grena', 'kaza', 'mora', 'runa', 'thora', 'ula', 'vora', 'dura', 'bera', 'dagna', 'frin', 'helga', 'karna', 'morna', 'ulga', 'vesa', 'zora', 'hilda'],
      femaleSuffixes: ['a', 'ia', 'is', 'ra', 'na', 'la', 'rine', 'dra', 'da', 'wyn', 'bera', 'gret', 'hild', 'ka', 'loda', 'mira', 'ska', 'thra', 'vina', 'syl'],
      seedKey: 'dwarf-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['iron', 'stone', 'forge', 'granite', 'bronze', 'anvil', 'gold', 'deep', 'thunder', 'ember', 'coal', 'ore', 'steel', 'rune', 'flint', 'crag', 'vault', 'magma', 'basalt', 'quarry'],
      suffixes: ['axe', 'beard', 'brew', 'delver', 'fist', 'hammer', 'helm', 'pick', 'shield', 'vein', 'brand', 'cask', 'delve', 'forge', 'grip', 'mantle', 'ore', 'stone', 'vault', 'wall'],
      count: 200,
      seedKey: 'dwarf-last',
    }),
  },
  halfling: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['pip', 'milo', 'tes', 'fen', 'tin', 'wil', 'hob', 'rom', 'sam', 'ben', 'alf', 'bod', 'cob', 'dob', 'finn', 'gil', 'jem', 'pere', 'tom', 'ned'],
      maleSuffixes: ['by', 'do', 'kin', 'lo', 'mi', 'po', 'ri', 'son', 'ton', 'ley', 'bo', 'fer', 'fred', 'gin', 'man', 'nard', 'ry', 'wick', 'las', 'bur'],
      femaleMiddleParts: ['ros', 'nim', 'lark', 'bri', 'ella', 'mara', 'dori', 'peta', 'tavi', 'wren', 'bela', 'cora', 'daisy', 'fina', 'lila', 'miri', 'poppy', 'rosi', 'sadi', 'tilla'],
      femaleSuffixes: ['la', 'na', 'y', 'elle', 'ina', 'ri', 'wyn', 'a', 'ette', 'lyn', 'bella', 'bri', 'dot', 'honey', 'lily', 'merry', 'petal', 'pina', 'sue', 'toes'],
      seedKey: 'halfling-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['apple', 'barley', 'berry', 'bramble', 'butter', 'cobble', 'green', 'honey', 'meadow', 'thistle', 'amble', 'cider', 'daisy', 'feather', 'hill', 'kettle', 'merry', 'reed', 'sunny', 'willow'],
      suffixes: ['bank', 'bloom', 'gather', 'good', 'patch', 'shine', 'step', 'top', 'wick', 'hill', 'bottom', 'branch', 'burrow', 'drop', 'foot', 'hopper', 'kettle', 'nest', 'toes', 'underbough'],
      count: 200,
      seedKey: 'halfling-last',
    }),
  },
  tiefling: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['az', 'bael', 'dra', 'hex', 'mor', 'rav', 'zev', 'khar', 'vex', 'nyr', 'baal', 'caz', 'drex', 'infer', 'mal', 'rax', 'sable', 'tor', 'vor', 'zael'],
      maleSuffixes: ['as', 'eth', 'ex', 'is', 'on', 'or', 'us', 'yx', 'ar', 'an', 'azar', 'deth', 'fiend', 'gorn', 'keth', 'morn', 'rax', 'tor', 'vash', 'zeth'],
      femaleMiddleParts: ['nyx', 'ka', 'ez', 'sera', 'vexa', 'mira', 'zara', 'lil', 'xyra', 'rava', 'ashara', 'cali', 'dema', 'ezra', 'infi', 'luxa', 'nyra', 'sari', 'zyri', 'vela'],
      femaleSuffixes: ['a', 'ia', 'is', 'ora', 'ara', 'elle', 'yn', 'eth', 'ex', 'yx', 'bella', 'cira', 'dra', 'essa', 'lith', 'mira', 'neth', 'vra', 'zara', 'vyn'],
      seedKey: 'tiefling-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['ash', 'black', 'cinder', 'dread', 'ember', 'gloom', 'night', 'scar', 'shadow', 'void', 'blood', 'coal', 'doom', 'hell', 'ink', 'obsidian', 'pyre', 'smoke', 'brim', 'infernal'],
      suffixes: ['bane', 'brand', 'crest', 'fang', 'heart', 'mark', 'rend', 'shroud', 'thorn', 'veil', 'ash', 'burn', 'curse', 'gaze', 'horn', 'lash', 'rift', 'shade', 'spire', 'wrath'],
      count: 200,
      seedKey: 'tiefling-last',
    }),
  },
  orc: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['gr', 'mok', 'ruk', 'thok', 'zug', 'nar', 'krag', 'dro', 'urg', 'gash', 'brak', 'drak', 'gar', 'kruk', 'morg', 'snag', 'thrag', 'ugr', 'vrog', 'zog'],
      maleSuffixes: ['ak', 'ar', 'g', 'gor', 'ok', 'rak', 'th', 'ug', 'mok', 'dur', 'bag', 'dak', 'krul', 'mog', 'nuk', 'rag', 'thok', 'uk', 'zug', 'drak'],
      femaleMiddleParts: ['gra', 'moka', 'ruka', 'thra', 'zuga', 'nara', 'krasha', 'dora', 'urga', 'gasha', 'braka', 'draka', 'gara', 'krula', 'morga', 'snara', 'thraga', 'ugra', 'vroga', 'mogra'],
      femaleSuffixes: ['a', 'ga', 'ra', 'ka', 'sha', 'za', 'tha', 'la', 'na', 'ria', 'aka', 'gra', 'mara', 'shka', 'ta', 'uga', 'zra', 'grah', 'mura', 'zha'],
      seedKey: 'orc-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['bone', 'blood', 'skull', 'iron', 'war', 'fist', 'ash', 'gore', 'grim', 'stone', 'blade', 'crush', 'doom', 'fang', 'gash', 'hunt', 'rage', 'rot', 'scar', 'wrath'],
      suffixes: ['biter', 'breaker', 'cleaver', 'crusher', 'fang', 'hide', 'maw', 'rend', 'scar', 'tooth', 'arm', 'claw', 'drinker', 'fury', 'grin', 'jaw', 'killer', 'skull', 'snarl', 'walker'],
      count: 200,
      seedKey: 'orc-last',
    }),
  },
  goblin: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['skit', 'nik', 'zib', 'grib', 'muk', 'tik', 'sniv', 'kriz', 'blix', 'rag', 'blik', 'crik', 'drib', 'grix', 'kik', 'snik', 'trik', 'vrik', 'wib', 'zik'],
      maleSuffixes: ['bit', 'chet', 'dik', 'gik', 'it', 'nix', 'rik', 'tok', 'zik', 'gob', 'blat', 'crik', 'dink', 'fizz', 'krik', 'snag', 'snik', 'tik', 'zap', 'zort'],
      femaleMiddleParts: ['skia', 'nika', 'ziba', 'griva', 'muka', 'tika', 'sniva', 'kriza', 'blixa', 'raga', 'blika', 'crixa', 'driba', 'grixa', 'kika', 'snika', 'trixa', 'vria', 'wiba', 'zika'],
      femaleSuffixes: ['bo', 'la', 'na', 'ri', 'za', 'cha', 'mi', 'ti', 'li', 'ya', 'bi', 'fli', 'gri', 'ka', 'ni', 'sha', 'zi', 'nib', 'vri', 'vix'],
      seedKey: 'goblin-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['bog', 'copper', 'dust', 'gear', 'muck', 'rat', 'scrap', 'sly', 'smoke', 'wick', 'ash', 'bolt', 'clatter', 'drip', 'gnaw', 'junk', 'needle', 'rust', 'slip', 'wire'],
      suffixes: ['boggle', 'clink', 'crawl', 'fizzle', 'gouge', 'nibble', 'rattle', 'snag', 'sprocket', 'wink', 'bang', 'bite', 'click', 'dribble', 'grin', 'snip', 'spark', 'stitch', 'twitch', 'zip'],
      count: 200,
      seedKey: 'goblin-last',
    }),
  },
  goliath: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['bal', 'dor', 'gran', 'korr', 'mor', 'rhun', 'stor', 'tor', 'ul', 'var', 'bar', 'crag', 'drum', 'fjor', 'karn', 'rime', 'skar', 'torv', 'varg', 'thorn'],
      maleSuffixes: ['an', 'ek', 'en', 'ik', 'or', 'rak', 'th', 'uk', 'un', 'gar', 'bar', 'den', 'grom', 'kor', 'ruk', 'skar', 'tor', 'vak', 'vor', 'zen'],
      femaleMiddleParts: ['bala', 'dora', 'grana', 'korra', 'mora', 'rhuna', 'stora', 'tora', 'ula', 'vara', 'bara', 'craga', 'drena', 'fjora', 'karna', 'rima', 'skara', 'torva', 'kira', 'mira'],
      femaleSuffixes: ['a', 'na', 'ra', 'la', 'ia', 'ine', 'ara', 'eth', 'is', 'yn', 'da', 'ena', 'ika', 'ira', 'ora', 'tha', 'ya', 'dra', 'ska', 'vora'],
      seedKey: 'goliath-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['cliff', 'frost', 'high', 'ice', 'peak', 'ridge', 'sky', 'stone', 'storm', 'summit', 'boulder', 'crown', 'glacier', 'hail', 'icewind', 'ledge', 'monolith', 'ravine', 'snow', 'tundra'],
      suffixes: ['born', 'breaker', 'crest', 'fall', 'gazer', 'heart', 'runner', 'seeker', 'stride', 'watcher', 'caller', 'climber', 'crusher', 'howl', 'keeper', 'maul', 'shout', 'stalker', 'ward', 'trail'],
      count: 200,
      seedKey: 'goliath-last',
    }),
  },
  gnome: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['bim', 'dori', 'fen', 'gim', 'jori', 'nim', 'pip', 'tavi', 'wren', 'zor', 'cob', 'fizz', 'jib', 'kib', 'nib', 'pim', 'quib', 'snip', 'trill', 'quill'],
      maleSuffixes: ['ble', 'by', 'din', 'kin', 'lin', 'lo', 'rick', 'wick', 'ton', 'bin', 'bert', 'bit', 'dle', 'fizz', 'glen', 'nick', 'pin', 'spark', 'tock', 'zap'],
      femaleMiddleParts: ['lumi', 'dora', 'fena', 'gima', 'jora', 'nima', 'pipa', 'tavia', 'wrena', 'zora', 'belli', 'ciri', 'fizzi', 'glim', 'miri', 'nelli', 'pixi', 'sari', 'tilli', 'fae'],
      femaleSuffixes: ['ette', 'na', 'la', 'ra', 'ina', 'elle', 'y', 'wyn', 'ia', 'li', 'bella', 'fizz', 'gem', 'lina', 'mia', 'nette', 'petal', 'tina', 'wisp', 'belle'],
      seedKey: 'gnome-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['brass', 'cog', 'fizzle', 'gear', 'glimmer', 'pocket', 'spark', 'thistle', 'tinker', 'whistle', 'brim', 'candle', 'copper', 'dimble', 'gizmo', 'kettle', 'nickel', 'socket', 'trinket', 'clock'],
      suffixes: ['bloom', 'burrow', 'clamp', 'coil', 'gauge', 'nook', 'patch', 'socket', 'sprig', 'twist', 'bell', 'fizz', 'gadget', 'gleam', 'knob', 'spring', 'widget', 'whirr', 'gear', 'clockwork'],
      count: 200,
      seedKey: 'gnome-last',
    }),
  },
  dragonborn: {
    firstNames: buildGenderedFirstNames({
      maleMiddleParts: ['arj', 'bal', 'dra', 'khaz', 'myr', 'nax', 'rhog', 'sar', 'tor', 'vyr', 'azr', 'drak', 'fyr', 'kry', 'nor', 'qir', 'sark', 'tyr', 'vrax', 'zhar'],
      maleSuffixes: ['ar', 'ax', 'ek', 'eth', 'ir', 'ok', 'or', 'rax', 'us', 'vor', 'aar', 'dris', 'gorn', 'kash', 'myr', 'thar', 'vyr', 'zar', 'zor', 'thor'],
      femaleMiddleParts: ['arja', 'bala', 'dria', 'khaza', 'myra', 'naxa', 'rhoga', 'sara', 'tora', 'vyra', 'azra', 'fyra', 'kyria', 'nora', 'qira', 'tyra', 'vraxa', 'zhara', 'zyra', 'qyra'],
      femaleSuffixes: ['a', 'ia', 'ara', 'eth', 'is', 'ora', 'yx', 'ine', 'ela', 'ra', 'ira', 'sha', 'va', 'yra', 'dara', 'kira', 'lyra', 'myra', 'nyra', 'pyra'],
      seedKey: 'dragonborn-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['amber', 'ashen', 'bronze', 'cinder', 'ember', 'obsidian', 'scale', 'storm', 'sun', 'wyrm', 'ash', 'cliff', 'drake', 'flint', 'lava', 'pyre', 'sunder', 'tempest', 'inferno', 'dracon'],
      suffixes: ['claw', 'crest', 'fang', 'flame', 'hide', 'roar', 'shard', 'spire', 'talon', 'wing', 'ash', 'drake', 'fire', 'gale', 'heart', 'maw', 'rider', 'storm', 'wrath', 'scaleborn'],
      count: 200,
      seedKey: 'dragonborn-last',
    }),
  },
};
