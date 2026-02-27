const ALPHABET_INITIALS = 'abcdefghijklmnopqrstuvwxyz'.split('');

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

  const addCandidate = (initial, middle, suffix) => {
    const raw = `${initial}${middle}${suffix}`.toLowerCase();
    const value = capitalize(raw);
    if (!seen.has(value)) {
      seen.add(value);
      out.push(value);
    }
  };

  // Guarantee at least one entry per letter A-Z.
  ALPHABET_INITIALS.forEach((initial, idx) => {
    const middle = middleParts[idx % middleParts.length];
    const suffix = suffixes[Math.floor(idx / middleParts.length) % suffixes.length];
    addCandidate(initial, middle, suffix);
  });

  const allCombos = [];
  ALPHABET_INITIALS.forEach((initial) => {
    middleParts.forEach((middle) => {
      suffixes.forEach((suffix) => {
        allCombos.push(`${initial}|${middle}|${suffix}`);
      });
    });
  });

  const randomized = shuffle(allCombos, seedKey);
  for (const combo of randomized) {
    if (out.length >= count) {
      break;
    }
    const [initial, middle, suffix] = combo.split('|');
    addCandidate(initial, middle, suffix);
  }

  if (out.length < count) {
    throw new Error(`Unable to build ${count} unique names for ${seedKey}`);
  }

  return out.slice(0, count);
};

export const NPC_NAME_CATALOG = {
  human: {
    firstNames: buildDistributedList({
      middleParts: ['ld', 'mir', 'ren', 'sel', 'cor', 'lys', 'tar', 'ver', 'jor', 'kal'],
      suffixes: ['a', 'en', 'in', 'or', 'us', 'ia', 'el', 'an', 'on', 'ar'],
      count: 100,
      seedKey: 'human-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['hollow', 'thorn', 'merri', 'vale', 'cask', 'row', 'stone', 'ford', 'wind', 'hart'],
      suffixes: ['ay', 'e', 'ick', 'en', 'er', 'an', 'son', 'well', 'ward', 'mont'],
      count: 100,
      seedKey: 'human-last',
    }),
  },
  elf: {
    firstNames: buildDistributedList({
      middleParts: ['aer', 'thal', 'syl', 'leth', 'ily', 'fae', 'nai', 'eld', 'vae', 'zeph'],
      suffixes: ['el', 'iel', 'a', 'or', 'eth', 'ion', 'is', 'wyn', 'ara', 'ien'],
      count: 100,
      seedKey: 'elf-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['moon', 'dawn', 'silver', 'night', 'star', 'glade', 'leaf', 'song', 'spire', 'wind'],
      suffixes: ['whisper', 'bloom', 'glen', 'heart', 'mere', 'runner', 'shade', 'weave', 'ward', 'vale'],
      count: 100,
      seedKey: 'elf-last',
    }),
  },
  dwarf: {
    firstNames: buildDistributedList({
      middleParts: ['br', 'dr', 'gr', 'kaz', 'mor', 'ruk', 'thor', 'ul', 'vor', 'dur'],
      suffixes: ['ad', 'ag', 'ak', 'am', 'an', 'ar', 'rik', 'gar', 'din', 'run'],
      count: 100,
      seedKey: 'dwarf-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['iron', 'stone', 'forge', 'granite', 'bronze', 'anvil', 'gold', 'deep', 'thunder', 'ember'],
      suffixes: ['axe', 'beard', 'brew', 'delver', 'fist', 'hammer', 'helm', 'pick', 'shield', 'vein'],
      count: 100,
      seedKey: 'dwarf-last',
    }),
  },
  halfling: {
    firstNames: buildDistributedList({
      middleParts: ['pip', 'ros', 'nim', 'milo', 'tes', 'fen', 'lark', 'bri', 'tin', 'wil'],
      suffixes: ['by', 'do', 'kin', 'la', 'lo', 'mi', 'na', 'po', 'ri', 'y'],
      count: 100,
      seedKey: 'halfling-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['apple', 'barley', 'berry', 'bramble', 'butter', 'cobble', 'green', 'honey', 'meadow', 'thistle'],
      suffixes: ['bank', 'bloom', 'gather', 'good', 'patch', 'shine', 'step', 'top', 'wick', 'hill'],
      count: 100,
      seedKey: 'halfling-last',
    }),
  },
  tiefling: {
    firstNames: buildDistributedList({
      middleParts: ['az', 'bael', 'dra', 'ez', 'hex', 'ka', 'mor', 'nyx', 'rav', 'zev'],
      suffixes: ['a', 'as', 'eth', 'ex', 'ia', 'is', 'on', 'or', 'us', 'yx'],
      count: 100,
      seedKey: 'tiefling-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['ash', 'black', 'cinder', 'dread', 'ember', 'gloom', 'night', 'scar', 'shadow', 'void'],
      suffixes: ['bane', 'brand', 'crest', 'fang', 'heart', 'mark', 'rend', 'shroud', 'thorn', 'veil'],
      count: 100,
      seedKey: 'tiefling-last',
    }),
  },
  orc: {
    firstNames: buildDistributedList({
      middleParts: ['gr', 'mok', 'ruk', 'thok', 'zug', 'nar', 'krag', 'dro', 'urg', 'gash'],
      suffixes: ['a', 'ak', 'ar', 'g', 'ga', 'gor', 'ok', 'rak', 'th', 'ug'],
      count: 100,
      seedKey: 'orc-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['bone', 'blood', 'skull', 'iron', 'war', 'fist', 'ash', 'gore', 'grim', 'stone'],
      suffixes: ['biter', 'breaker', 'cleaver', 'crusher', 'fang', 'hide', 'maw', 'rend', 'scar', 'tooth'],
      count: 100,
      seedKey: 'orc-last',
    }),
  },
  goblin: {
    firstNames: buildDistributedList({
      middleParts: ['skit', 'nik', 'zib', 'grib', 'muk', 'tik', 'sniv', 'kriz', 'blix', 'rag'],
      suffixes: ['bit', 'bo', 'chet', 'dik', 'gik', 'it', 'nix', 'rik', 'tok', 'zik'],
      count: 100,
      seedKey: 'goblin-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['bog', 'copper', 'dust', 'gear', 'muck', 'rat', 'scrap', 'sly', 'smoke', 'wick'],
      suffixes: ['boggle', 'clink', 'crawl', 'fizzle', 'gouge', 'nibble', 'rattle', 'snag', 'sprocket', 'wink'],
      count: 100,
      seedKey: 'goblin-last',
    }),
  },
  goliath: {
    firstNames: buildDistributedList({
      middleParts: ['bal', 'dor', 'gran', 'korr', 'mor', 'rhun', 'stor', 'tor', 'ul', 'var'],
      suffixes: ['a', 'an', 'ek', 'en', 'ik', 'or', 'rak', 'th', 'uk', 'un'],
      count: 100,
      seedKey: 'goliath-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['cliff', 'frost', 'high', 'ice', 'peak', 'ridge', 'sky', 'stone', 'storm', 'summit'],
      suffixes: ['born', 'breaker', 'crest', 'fall', 'gazer', 'heart', 'runner', 'seeker', 'stride', 'watcher'],
      count: 100,
      seedKey: 'goliath-last',
    }),
  },
  gnome: {
    firstNames: buildDistributedList({
      middleParts: ['bim', 'dori', 'fen', 'gim', 'jori', 'lumi', 'nim', 'pip', 'tavi', 'wren'],
      suffixes: ['ble', 'by', 'din', 'ette', 'kin', 'lin', 'lo', 'na', 'rick', 'wick'],
      count: 100,
      seedKey: 'gnome-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['brass', 'cog', 'fizzle', 'gear', 'glimmer', 'pocket', 'spark', 'thistle', 'tinker', 'whistle'],
      suffixes: ['bloom', 'burrow', 'clamp', 'coil', 'gauge', 'nook', 'patch', 'socket', 'sprig', 'twist'],
      count: 100,
      seedKey: 'gnome-last',
    }),
  },
  dragonborn: {
    firstNames: buildDistributedList({
      middleParts: ['arj', 'bal', 'dra', 'khaz', 'myr', 'nax', 'rhog', 'sar', 'tor', 'vyr'],
      suffixes: ['a', 'ar', 'ax', 'ek', 'eth', 'ir', 'ok', 'or', 'rax', 'us'],
      count: 100,
      seedKey: 'dragonborn-first',
    }),
    lastNames: buildDistributedList({
      middleParts: ['amber', 'ashen', 'bronze', 'cinder', 'ember', 'obsidian', 'scale', 'storm', 'sun', 'wyrm'],
      suffixes: ['claw', 'crest', 'fang', 'flame', 'hide', 'roar', 'shard', 'spire', 'talon', 'wing'],
      count: 100,
      seedKey: 'dragonborn-last',
    }),
  },
};
