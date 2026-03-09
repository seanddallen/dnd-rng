class EncounterTrackerGenerator {
  static parseInitiativeBonus(valueToParse) {
    const parsed = Number(String(valueToParse || '0').replace('+', ''));
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  static rollInitiative(bonus) {
    const roll = Math.floor(Math.random() * 20) + 1;
    return {
      roll,
      totalRoll: roll + bonus,
    };
  }

  static normalizeAbilities(abilities) {
    return (abilities || []).map((ability) => {
      if (typeof ability === 'string') {
        return {
          name: ability,
          details: 'No additional details provided.',
        };
      }
      return {
        name: ability.name || 'Unnamed Ability',
        details: ability.details || 'No additional details provided.',
      };
    });
  }

  static getMonsterStats(monster) {
    const cr = Number(monster.cr ?? monster.crBudget ?? 0) || 0;
    const statBlock = monster.stats || {};
    const initFromStats = Number(statBlock.initiative);
    const parsedInitFromStats = Number.isNaN(initFromStats) ? null : initFromStats;
    const initFromMonster = Number(monster.initiative);
    const parsedInitFromMonster = Number.isNaN(initFromMonster) ? null : initFromMonster;
    return {
      hp: Number.isInteger(statBlock.hp) ? statBlock.hp : (Number.isInteger(monster.hp) ? monster.hp : Math.max(1, Math.round(20 + cr * 15))),
      mp: Number.isInteger(statBlock.mp) ? statBlock.mp : (Number.isInteger(monster.mp) ? monster.mp : Math.max(0, Math.round(5 + cr * 5))),
      ac: Number.isInteger(statBlock.ac) ? statBlock.ac : (Number.isInteger(monster.ac) ? monster.ac : Math.max(10, 10 + Math.floor(cr / 2))),
      rc: Number.isInteger(statBlock.rc) ? statBlock.rc : (Number.isInteger(monster.rc) ? monster.rc : Math.max(8, Math.floor(8 + cr / 1.5))),
      ab: Number.isInteger(statBlock.ab) ? statBlock.ab : (Number.isInteger(monster.ab) ? monster.ab : Math.max(2, Math.floor(2 + cr / 1.2))),
      fb: Number.isInteger(statBlock.fb) ? statBlock.fb : (Number.isInteger(monster.fb) ? monster.fb : Math.max(1, Math.floor(1 + cr / 1.4))),
      db: Number.isInteger(statBlock.db) ? statBlock.db : (Number.isInteger(monster.db) ? monster.db : Math.max(2, Math.floor(2 + cr / 1.3))),
      initiativeBonus: monster.initiativeBonus
        ? this.parseInitiativeBonus(monster.initiativeBonus)
        : (parsedInitFromMonster ?? parsedInitFromStats ?? Math.floor(cr / 2)),
    };
  }

  static buildTrackerFromEncounter({ generatedEncounter, party }) {
    const expandedMonsters = generatedEncounter.encounterMonsters.flatMap((monster) => {
      const stats = this.getMonsterStats(monster);
      return Array.from({ length: monster.count }, (_, idx) => {
        const initiativeBonus = stats.initiativeBonus;
        const initiativeRoll = this.rollInitiative(initiativeBonus);
        return {
          id: `monster-${monster.name}-${idx + 1}-${Math.random().toString(36).slice(2, 8)}`,
          side: 'monster',
          name: `${monster.name} ${idx + 1}`,
          type: 'Monster',
          hp: stats.hp,
          mp: stats.mp,
          maxHp: stats.hp,
          maxMp: stats.mp,
          ac: stats.ac,
          rc: stats.rc,
          ab: stats.ab,
          fb: stats.fb,
          db: stats.db,
          initiativeBonus,
          initiativeRoll: initiativeRoll.roll,
          totalRoll: initiativeRoll.totalRoll,
          initiative: initiativeRoll.totalRoll,
          description: monster.description,
          habitats: monster.habitats || (monster.habitat ? [monster.habitat] : []),
          locations: monster.locations || (monster.location ? [monster.location] : []),
          abilities: this.normalizeAbilities(monster.abilities || [
            { name: 'Basic Attack', details: 'Makes a standard attack against a nearby target.' },
            { name: 'Battle Instinct', details: 'Uses positioning and pressure to gain tactical advantage.' },
          ]),
          statuses: [],
        };
      });
    });

    const partyEntries = party.map((member, idx) => {
      const initiativeBonus = this.parseInitiativeBonus(member.initiativeBonus);
      const initiativeRoll = this.rollInitiative(initiativeBonus);
      const displayName = member.characterName || member.name;
      return {
        id: `party-${member.name}-${idx + 1}`,
        side: 'party',
        name: displayName,
        type: member.character,
        hp: member.hp,
        mp: member.mp,
        maxHp: member.hp,
        maxMp: member.mp,
        ac: member.ac,
        rc: member.rc,
        ab: member.ab,
        fb: member.fb,
        db: member.db,
        initiativeBonus,
        initiativeRoll: initiativeRoll.roll,
        totalRoll: initiativeRoll.totalRoll,
        initiative: initiativeRoll.totalRoll,
        abilities: this.normalizeAbilities(member.abilities || []),
        statuses: [],
      };
    });

    const trackedEncounter = [...expandedMonsters, ...partyEntries].sort((a, b) => {
      const bTotal = b.totalRoll ?? b.initiative;
      const aTotal = a.totalRoll ?? a.initiative;
      if (bTotal !== aTotal) {
        return bTotal - aTotal;
      }
      return Math.random() - 0.5;
    });

    const firstId = trackedEncounter[0]?.id || null;
    const turnCountsByEntry = {};
    trackedEncounter.forEach((entry) => {
      turnCountsByEntry[entry.id] = 0;
    });
    if (firstId) {
      turnCountsByEntry[firstId] = 1;
    }

    return {
      trackedEncounter,
      trackerDeltas: {},
      roundNumber: 1,
      activeTurnEntryId: firstId,
      turnCountsByEntry,
    };
  }

  static adjustTrackedStat(encounterEntries, id, stat, direction, amount) {
    return encounterEntries.map((entry) => {
      if (entry.id !== id) {
        return entry;
      }
      return {
        ...entry,
        [stat]: Math.max(0, entry[stat] + direction * amount),
      };
    });
  }

  static reorderTrackedEncounter({
    trackedEncounter,
    draggedTrackerId,
    targetId,
    dropAfter,
    turnCountsByEntry,
    activeTurnEntryId,
  }) {
    const sourceIndex = trackedEncounter.findIndex((entry) => entry.id === draggedTrackerId);
    const targetIndex = trackedEncounter.findIndex((entry) => entry.id === targetId);
    if (sourceIndex < 0 || targetIndex < 0) {
      return null;
    }

    const next = [...trackedEncounter];
    const [moved] = next.splice(sourceIndex, 1);

    let insertIndex = dropAfter ? targetIndex + 1 : targetIndex;
    if (sourceIndex < insertIndex) {
      insertIndex -= 1;
    }
    next.splice(insertIndex, 0, moved);

    const oldTurnByIndex = trackedEncounter.map((entry) => turnCountsByEntry[entry.id] || 0);
    const nextTurnCounts = {};
    next.forEach((entry, idx) => {
      nextTurnCounts[entry.id] = oldTurnByIndex[idx] || 0;
    });

    const oldActiveIndex = trackedEncounter.findIndex((entry) => entry.id === activeTurnEntryId);
    const nextActiveId = oldActiveIndex >= 0 ? (next[oldActiveIndex]?.id || null) : activeTurnEntryId;

    return {
      trackedEncounter: next,
      turnCountsByEntry: nextTurnCounts,
      activeTurnEntryId: nextActiveId,
    };
  }

  static removeStatusFromEntry(encounterEntries, entryId, statusId) {
    return encounterEntries.map((entry) => {
      if (entry.id !== entryId) {
        return entry;
      }
      return {
        ...entry,
        statuses: (entry.statuses || []).filter((status) => status.id !== statusId),
      };
    });
  }

  static createStatusEntry({
    foundStatus,
    trimmedName,
    parsedRounds,
    roundAnchorEntryId,
  }) {
    if (foundStatus) {
      return {
        ...foundStatus,
        id: `status-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        roundAnchorEntryId,
        roundsTotal: parsedRounds,
        roundsRemaining: parsedRounds,
      };
    }

    return {
      id: `status-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName,
      effect: 'Custom status',
      status: 'custom',
      roundAnchorEntryId,
      roundsTotal: parsedRounds,
      roundsRemaining: parsedRounds,
    };
  }

  static addStatusToEntry(encounterEntries, entryId, statusEntry) {
    return encounterEntries.map((entry) => {
      if (entry.id !== entryId) {
        return entry;
      }
      return {
        ...entry,
        statuses: [...(entry.statuses || []), statusEntry],
      };
    });
  }

  static advanceStatusesForAnchorTurn(encounterEntries, anchorEntryId) {
    let changed = false;

    const nextEntries = encounterEntries.map((entry) => {
      let entryChanged = false;
      const currentStatuses = entry.statuses || [];
      if (currentStatuses.length === 0) {
        return entry;
      }

      const decrementedStatuses = currentStatuses.map((status) => {
        if (!Number.isFinite(status.roundsRemaining)) {
          return status;
        }
        if (status.roundAnchorEntryId !== anchorEntryId) {
          return status;
        }

        const nextRoundsRemaining = status.roundsRemaining - 1;
        if (nextRoundsRemaining !== status.roundsRemaining) {
          changed = true;
          entryChanged = true;
        }

        return {
          ...status,
          roundsRemaining: nextRoundsRemaining,
        };
      });

      const nextStatuses = decrementedStatuses.filter((status) => (
        !Number.isFinite(status.roundsRemaining) || status.roundsRemaining > 0
      ));

      if (nextStatuses.length !== currentStatuses.length) {
        changed = true;
        entryChanged = true;
      }

      if (entryChanged) {
        return { ...entry, statuses: nextStatuses };
      }
      return entry;
    });

    return changed ? nextEntries : encounterEntries;
  }

  static advanceTurn({
    trackedEncounter,
    activeTurnEntryId,
    turnCountsByEntry,
    roundNumber,
  }) {
    if (trackedEncounter.length === 0) {
      return null;
    }

    if (!activeTurnEntryId) {
      const firstId = trackedEncounter[0].id;
      const nextTurnCounts = {
        ...turnCountsByEntry,
        [firstId]: (turnCountsByEntry[firstId] || 0) + 1,
      };
      return {
        roundNumber,
        activeTurnEntryId: firstId,
        turnCountsByEntry: nextTurnCounts,
        anchorEntryId: firstId,
      };
    }

    const currentIndex = trackedEncounter.findIndex((entry) => entry.id === activeTurnEntryId);
    if (currentIndex < 0) {
      return {
        roundNumber,
        activeTurnEntryId: trackedEncounter[0].id,
        turnCountsByEntry,
        anchorEntryId: trackedEncounter[0].id,
      };
    }

    const nextIndex = (currentIndex + 1) % trackedEncounter.length;
    const nextRound = nextIndex === 0 ? roundNumber + 1 : roundNumber;
    const nextId = trackedEncounter[nextIndex].id;
    const nextTurnCounts = {
      ...turnCountsByEntry,
      [nextId]: (turnCountsByEntry[nextId] || 0) + 1,
    };

    return {
      roundNumber: nextRound,
      activeTurnEntryId: nextId,
      turnCountsByEntry: nextTurnCounts,
      anchorEntryId: nextId,
    };
  }
}

export default EncounterTrackerGenerator;
