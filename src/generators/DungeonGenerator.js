import { ITEM_CATALOG } from '../data/itemCatalog';

class DungeonGenerator {
  static TYPE_OPTIONS = [
    { value: '', label: 'Any Type' },
    { value: 'crypt', label: 'Crypt' },
    { value: 'fortress', label: 'Fortress' },
    { value: 'ruined temple', label: 'Ruined Temple' },
    { value: 'undercity', label: 'Undercity' },
    { value: 'cavern', label: 'Cavern' },
    { value: 'arcane vault', label: 'Arcane Vault' },
  ];

  static RARITY_WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 12,
    legendary: 3,
  };

  static TYPE_WEIGHTS = {
    normal: 95,
    magic: 5,
  };

  static RARITY_COST_RANGES = {
    common: [8, 55],
    uncommon: [60, 250],
    rare: [260, 1500],
    legendary: [1600, 9000],
  };

  static TYPE_COST_MULTIPLIER = {
    normal: 1,
    magic: 1.4,
  };

  static QUANTITY_BY_RARITY = {
    common: [1, 5],
    uncommon: [1, 1],
    rare: [1, 1],
    legendary: [1, 1],
  };

  static TRAP_TYPES = [
    'pitfall',
    'poison dart',
    'collapsing ceiling',
    'arcane glyph',
    'swinging blade',
    'alarm rune',
  ];

  static weightedPick(entries) {
    const validEntries = entries.filter((entry) => entry.weight > 0);
    if (validEntries.length === 0) {
      return null;
    }
    const totalWeight = validEntries.reduce((sum, entry) => sum + entry.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const entry of validEntries) {
      roll -= entry.weight;
      if (roll <= 0) {
        return entry.value;
      }
    }
    return validEntries[validEntries.length - 1].value;
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  static getDungeonItemPool() {
    return Object.values(ITEM_CATALOG).flatMap((tier) => (
      ['normal', 'magic'].flatMap((type) => (
        (tier[type] || [])
          .filter((entry) => {
            const locations = entry.locations || (entry.location ? [entry.location] : []);
            return locations.includes('dungeon');
          })
          .map((entry) => ({ ...entry, type }))
      ))
    ));
  }

  static buildItems(desiredCount) {
    const source = [...new Map(this.getDungeonItemPool().map((entry) => [entry.item, entry])).values()];
    if (source.length === 0 || desiredCount <= 0) {
      return [];
    }

    const maxCount = Math.min(desiredCount, source.length);
    const selected = [];
    const usedNames = new Set();

    let safety = 0;
    while (selected.length < maxCount && safety < 120) {
      safety += 1;
      const available = source.filter((entry) => !usedNames.has(entry.item));
      if (available.length === 0) {
        break;
      }

      const availableRarities = ['common', 'uncommon', 'rare', 'legendary']
        .filter((rarity) => available.some((entry) => entry.rarity === rarity));
      const availableTypes = ['normal', 'magic']
        .filter((type) => available.some((entry) => entry.type === type));

      const pickedRarity = this.weightedPick(
        availableRarities.map((rarity) => ({ value: rarity, weight: this.RARITY_WEIGHTS[rarity] || 1 })),
      );
      const pickedType = this.weightedPick(
        availableTypes.map((type) => ({ value: type, weight: this.TYPE_WEIGHTS[type] || 1 })),
      );

      let pool = available.filter((entry) => entry.rarity === pickedRarity && entry.type === pickedType);
      if (pool.length === 0) {
        pool = available.filter((entry) => entry.rarity === pickedRarity);
      }
      if (pool.length === 0) {
        pool = available.filter((entry) => entry.type === pickedType);
      }
      if (pool.length === 0) {
        pool = available;
      }

      const entry = this.getRandomFromList(pool);
      usedNames.add(entry.item);
      const [minCost, maxCost] = this.RARITY_COST_RANGES[entry.rarity] || [20, 80];
      const [minQty, maxQty] = this.QUANTITY_BY_RARITY[entry.rarity] || [1, 1];
      const multiplier = this.TYPE_COST_MULTIPLIER[entry.type] || 1;
      const rolledCost = Math.round(this.randomInt(minCost, maxCost) * multiplier);

      selected.push({
        item: entry.item,
        details: entry.details,
        type: entry.type,
        rarity: entry.rarity,
        quantity: this.randomInt(minQty, maxQty),
        cost: `${rolledCost} GP`,
      });
    }

    return selected;
  }

  static buildEncounterEntries(levels, roomsByLevel, desiredCount) {
    const eligibleLevels = Array.from({ length: levels }, (_, idx) => idx + 1)
      .filter((level) => (roomsByLevel[level] || []).length > 0);
    const count = Math.min(desiredCount, eligibleLevels.length);
    const selectedLevels = [...eligibleLevels].sort(() => Math.random() - 0.5).slice(0, count);

    return selectedLevels.map((level) => {
      const room = this.getRandomFromList(roomsByLevel[level]);
      return { level, roomId: room.id };
    });
  }

  static buildItemEntries(levels, roomsByLevel, items) {
    const eligibleLevels = Array.from({ length: levels }, (_, idx) => idx + 1)
      .filter((level) => (roomsByLevel[level] || []).length > 0);
    const count = Math.min(items.length, eligibleLevels.length);
    const selectedLevels = [...eligibleLevels].sort(() => Math.random() - 0.5).slice(0, count);

    return items.slice(0, count).map((item, idx) => {
      const level = selectedLevels[idx];
      const room = this.getRandomFromList(roomsByLevel[level]);
      return {
        ...item,
        level,
        roomId: room.id,
      };
    });
  }

  static buildRoomPlan({ roomsByLevel, encounterEntries, itemEntries, trapEntries, levels }) {
    const safeLevels = Math.max(1, levels);

    const encounterRoomIds = new Set((encounterEntries || []).map((entry) => entry.roomId));
    const itemRoomIds = new Set((itemEntries || []).map((entry) => entry.roomId));

    const trapRoomIds = new Set();
    (trapEntries || []).forEach((trap) => trapRoomIds.add(trap.roomId));

    const stairsUpRoomIds = new Set();
    const stairsDownRoomIds = new Set();
    for (let level = 1; level < safeLevels; level += 1) {
      const currentLevelRooms = roomsByLevel[level] || [];
      const nextLevelRooms = roomsByLevel[level + 1] || [];
      if (currentLevelRooms.length === 0 || nextLevelRooms.length === 0) {
        continue;
      }

      const downRoom = this.getRandomFromList(currentLevelRooms);
      const upRoom = this.getRandomFromList(nextLevelRooms);
      stairsDownRoomIds.add(downRoom.id);
      stairsUpRoomIds.add(upRoom.id);
    }

    const coordsByRoomId = {};
    const connectionsByLevel = {};
    const dirOffsets = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ];

    for (let level = 1; level <= safeLevels; level += 1) {
      const levelRooms = roomsByLevel[level] || [];
      if (levelRooms.length === 0) {
        connectionsByLevel[level] = [];
        continue;
      }

      const occupied = new Set(['0,0']);
      const placed = [{ room: levelRooms[0], x: 0, y: 0 }];
      coordsByRoomId[levelRooms[0].id] = { x: 0, y: 0, level };
      const edges = [];

      for (let idx = 1; idx < levelRooms.length; idx += 1) {
        const room = levelRooms[idx];
        let placedRoom = null;

        for (let attempt = 0; attempt < 120 && !placedRoom; attempt += 1) {
          const parent = this.getRandomFromList(placed);
          const shuffledDirs = [...dirOffsets].sort(() => Math.random() - 0.5);
          for (const dir of shuffledDirs) {
            const x = parent.x + dir.dx;
            const y = parent.y + dir.dy;
            const key = `${x},${y}`;
            if (!occupied.has(key)) {
              occupied.add(key);
              placedRoom = { room, x, y };
              placed.push(placedRoom);
              coordsByRoomId[room.id] = { x, y, level };
              edges.push({ from: parent.room.id, to: room.id });
              break;
            }
          }
        }

        if (!placedRoom) {
          for (let radius = 1; radius <= 8 && !placedRoom; radius += 1) {
            for (let x = -radius; x <= radius && !placedRoom; x += 1) {
              for (let y = -radius; y <= radius && !placedRoom; y += 1) {
                const key = `${x},${y}`;
                if (occupied.has(key)) {
                  continue;
                }
                const neighbors = placed.filter((p) => (
                  Math.abs(p.x - x) + Math.abs(p.y - y) === 1
                ));
                if (neighbors.length > 0) {
                  const parent = this.getRandomFromList(neighbors);
                  occupied.add(key);
                  placedRoom = { room, x, y };
                  placed.push(placedRoom);
                  coordsByRoomId[room.id] = { x, y, level };
                  edges.push({ from: parent.room.id, to: room.id });
                }
              }
            }
          }
        }
      }

      connectionsByLevel[level] = edges;
    }

    return {
      roomsByLevel,
      coordsByRoomId,
      connectionsByLevel,
      encounterRoomIds,
      itemRoomIds,
      trapRoomIds,
      stairsUpRoomIds,
      stairsDownRoomIds,
    };
  }

  static buildDungeonVisual({ levels, roomPlan }) {
    const safeLevels = Math.max(1, levels);
    const ROOM_W = 9;
    const ROOM_H = 4;
    const CELL_W = ROOM_W + 4;
    const CELL_H = ROOM_H + 2;

    const drawText = (canvas, x, y, text) => {
      if (!canvas[y]) {
        return;
      }
      for (let i = 0; i < text.length; i += 1) {
        const px = x + i;
        if (px >= 0 && px < canvas[y].length) {
          canvas[y][px] = text[i];
        }
      }
    };

    const lines = [];
    for (let level = 1; level <= safeLevels; level += 1) {
      const levelRooms = roomPlan.roomsByLevel[level] || [];
      lines.push(`L${level} (${levelRooms.length} rooms)`);
      if (levelRooms.length === 0) {
        lines.push('(no rooms)');
      } else {
        const coords = levelRooms
          .map((room) => ({ room, coord: roomPlan.coordsByRoomId[room.id] }))
          .filter((entry) => Boolean(entry.coord));

        const minX = Math.min(...coords.map((entry) => entry.coord.x));
        const maxX = Math.max(...coords.map((entry) => entry.coord.x));
        const minY = Math.min(...coords.map((entry) => entry.coord.y));
        const maxY = Math.max(...coords.map((entry) => entry.coord.y));

        const width = (maxX - minX + 1) * CELL_W + 2;
        const height = (maxY - minY + 1) * CELL_H + 2;
        const canvas = Array.from({ length: height }, () => Array.from({ length: width }, () => ' '));

        coords.forEach(({ room, coord }) => {
          const px = (coord.x - minX) * CELL_W;
          const py = (coord.y - minY) * CELL_H;

          const idLabel = `R${String(room.id).padStart(2, '0')}`;
          const markers = [
            roomPlan.encounterRoomIds.has(room.id) ? 'E' : '',
            roomPlan.itemRoomIds.has(room.id) ? 'I' : '',
            roomPlan.trapRoomIds.has(room.id) ? 'T' : '',
            roomPlan.stairsUpRoomIds.has(room.id) ? 'U' : '',
            roomPlan.stairsDownRoomIds.has(room.id) ? 'D' : '',
          ].join('') || '-';

          drawText(canvas, px, py, '┌───────┐');
          drawText(canvas, px, py + 1, `│${idLabel.padEnd(7, ' ')}│`);
          drawText(canvas, px, py + 2, `│${markers.padEnd(7, ' ')}│`);
          drawText(canvas, px, py + 3, '└───────┘');
        });

        (roomPlan.connectionsByLevel[level] || []).forEach((edge) => {
          const from = roomPlan.coordsByRoomId[edge.from];
          const to = roomPlan.coordsByRoomId[edge.to];
          if (!from || !to) {
            return;
          }

          const fromPx = (from.x - minX) * CELL_W;
          const fromPy = (from.y - minY) * CELL_H;
          const toPx = (to.x - minX) * CELL_W;
          const toPy = (to.y - minY) * CELL_H;

          if (from.y === to.y) {
            const y = fromPy + 2;
            const left = Math.min(fromPx, toPx) + ROOM_W;
            const right = Math.max(fromPx, toPx) - 1;
            for (let x = left; x <= right; x += 1) {
              drawText(canvas, x, y, '─');
            }
          } else if (from.x === to.x) {
            const x = fromPx + Math.floor(ROOM_W / 2);
            const top = Math.min(fromPy, toPy) + ROOM_H;
            const bottom = Math.max(fromPy, toPy) - 1;
            for (let y = top; y <= bottom; y += 1) {
              drawText(canvas, x, y, '│');
            }
          }
        });

        canvas.forEach((row) => lines.push(row.join('').replace(/\s+$/, '')));
      }

      if (level < safeLevels) {
        lines.push('   ||');
        lines.push('   \\/');
      }
    }

    lines.push('');
    lines.push('Legend: E = encounter, I = item, T = trap, U = stairs up, D = stairs down');
    return lines.join('\n');
  }

  static buildTrapEntries(levels, roomsByLevel) {
    const maxTraps = Math.min(levels, Object.values(roomsByLevel).reduce((sum, list) => sum + list.length, 0));
    const trapCount = this.randomInt(0, maxTraps);
    if (trapCount === 0) {
      return [];
    }

    const trapEligibleLevels = Array.from({ length: levels }, (_, idx) => idx + 1)
      .filter((level) => (roomsByLevel[level] || []).length > 0);
    const levelsForTraps = trapEligibleLevels
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(trapCount, trapEligibleLevels.length));

    return levelsForTraps.map((level) => {
      const candidates = roomsByLevel[level] || [];
      const pickedRoom = candidates[Math.floor(Math.random() * candidates.length)];
      return {
        level,
        roomId: pickedRoom.id,
        type: this.getRandomFromList(this.TRAP_TYPES),
      };
    });
  }

  static generateDungeon({ type, levels, rooms, encounters }) {
    const resolvedType = type || this.getRandomFromList(this.TYPE_OPTIONS.filter((opt) => opt.value).map((opt) => opt.value));
    const resolvedLevelsRaw = Number.isFinite(levels) && levels > 0 ? levels : this.randomInt(1, 3);
    const resolvedLevels = Math.min(3, Math.max(1, Math.floor(resolvedLevelsRaw)));

    const resolvedRoomsRaw = Number.isFinite(rooms) && rooms > 0 ? rooms : this.randomInt(4, 12);
    const resolvedRooms = Math.min(12, Math.max(1, Math.floor(resolvedRoomsRaw)));

    const maxEncounters = Math.min(resolvedLevels, Math.max(0, Math.floor(resolvedRooms / 4)));
    const resolvedEncountersRaw = Number.isFinite(encounters) ? encounters : this.randomInt(0, maxEncounters);
    const resolvedEncounters = Math.min(maxEncounters, Math.max(0, Math.floor(resolvedEncountersRaw)));
    const levelRoomCounts = Array.from({ length: resolvedLevels }, (_, idx) => {
      const base = Math.floor(resolvedRooms / resolvedLevels);
      const remainder = resolvedRooms % resolvedLevels;
      return base + (idx < remainder ? 1 : 0);
    });
    const roomsByLevel = {};
    let roomCounter = 1;
    levelRoomCounts.forEach((count, idx) => {
      const level = idx + 1;
      roomsByLevel[level] = Array.from({ length: count }, () => {
        const room = { id: roomCounter, level };
        roomCounter += 1;
        return room;
      });
    });

    const encounterEntries = this.buildEncounterEntries(resolvedLevels, roomsByLevel, resolvedEncounters);
    const itemCount = this.randomInt(0, resolvedLevels);
    const baseItems = this.buildItems(itemCount);
    const itemEntries = this.buildItemEntries(resolvedLevels, roomsByLevel, baseItems);
    const trapEntries = this.buildTrapEntries(resolvedLevels, roomsByLevel);
    const roomPlan = this.buildRoomPlan({
      roomsByLevel,
      levels: resolvedLevels,
      encounterEntries,
      itemEntries,
      trapEntries,
    });

    return {
      type: resolvedType,
      levels: resolvedLevels,
      rooms: resolvedRooms,
      encounters: encounterEntries.length,
      traps: trapEntries,
      items: itemEntries,
      visual: this.buildDungeonVisual({
        levels: resolvedLevels,
        roomPlan,
      }),
    };
  }
}

export default DungeonGenerator;
