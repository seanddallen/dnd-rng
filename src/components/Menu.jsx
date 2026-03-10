import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem as MuiMenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { STATUS_CATALOGUE } from '../data/statusCatalogue';
import { SEARCH_CATALOGUE } from '../data/searchCatalogue';
import { CALCULATIONS_CATALOGUE } from '../data/calculationsCatalogue';
import { REMINDERS_CATALOGUE } from '../data/remindersCatalogue';
import EncounterGenerator from '../generators/EncounterGenerator';
import EncounterTrackerGenerator from '../generators/EncounterTrackerGenerator';
import EventGenerator from '../generators/EventGenerator';
import ExplorationGenerator from '../generators/ExplorationGenerator';
import ItemGenerator from '../generators/ItemGenerator';
import NpcGenerator from '../generators/NpcGenerator';
import QuestGenerator from '../generators/QuestGenerator';
import ShopGenerator from '../generators/ShopGenerator';
import LocationGenerator from '../generators/LocationGenerator';
import DungeonGenerator from '../generators/DungeonGenerator';
import SpellGenerator from '../generators/SpellGenerator';
import { monsterCatalogue } from '../data/monsterCatalogue';
import { bossCatalogue } from '../data/bossCatalogue';
import { npcCatalogue } from '../data/npcCatalogue';
import { parties } from '../data/parties';
import { ITEM_CATALOG } from '../data/itemCatalog';
import { rumorCatalogue } from '../data/rumorCatalogue';

const SHOP_RARITY_ORDER = { common: 0, uncommon: 1, rare: 2, legendary: 3 };
const GENERATOR_TITLE_SX = {
  fontFamily: "'Cinzel Decorative', 'Copperplate', 'Papyrus', 'Garamond', fantasy, serif",
  fontWeight: 700,
  letterSpacing: '0.03em',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ flex: 1, minWidth: 0 }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function getStatusPillColors(statusType) {
  if (statusType === 'positive') {
    return 'status-pill positive';
  }
  if (statusType === 'negative') {
    return 'status-pill negative';
  }
  return 'status-pill custom';
}

const TrackerEntryCard = React.memo(function TrackerEntryCard({
  entry,
  index,
  isActive,
  isDragged,
  turnCount,
  hpDelta,
  mpDelta,
  onDragStart,
  onDragEnd,
  onDrop,
  onOpen,
  onSetDelta,
  onAdjust,
  onRemoveStatus,
}) {
  const handleStatusRemoveClick = React.useCallback((event) => {
    const statusId = event.currentTarget.getAttribute('data-status-id');
    if (!statusId) {
      return;
    }
    event.stopPropagation();
    onRemoveStatus(entry.id, statusId);
  }, [entry.id, onRemoveStatus]);

  return (
    <Paper
      variant="outlined"
      className={isActive ? 'current-turn-card' : ''}
      draggable
      onDragStart={() => onDragStart(entry.id)}
      onDragEnd={onDragEnd}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => onDrop(event, entry.id)}
      sx={{
        p: 1.25,
        borderWidth: 2,
        borderColor: isDragged ? 'var(--theme-accent)' : 'rgba(0,0,0,0.28)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.18)',
        transition: 'transform 140ms ease, box-shadow 140ms ease',
        cursor: 'grab',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.24)',
        },
        '&:active': {
          cursor: 'grabbing',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
        <Stack spacing={0.2} sx={{ minWidth: 0, flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                px: 0.85,
                py: 0.15,
                borderRadius: '6px',
                border: '1px solid rgba(0,0,0,0.28)',
                bgcolor: 'rgba(255,255,255,0.55)',
                color: '#111',
                fontSize: '0.72rem',
                fontWeight: 700,
              }}
            >
              #{index + 1}: {entry.totalRoll ?? entry.initiative}
            </Box>
            <Typography
              variant="h6"
              onClick={() => onOpen(entry)}
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                width: 'fit-content',
                cursor: 'pointer',
                textDecoration: entry.hp === 0 ? 'line-through' : 'none',
                textDecorationColor: entry.hp === 0 ? 'error.main' : 'transparent',
                textDecorationThickness: entry.hp === 0 ? '3px' : '0px',
                color: entry.hp === 0 ? 'error.main' : 'text.primary',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              {entry.name}
            </Typography>
          </Box>
          <Typography variant="body2">
            AC: {entry.ac} | RC: {entry.rc} | AB: {entry.ab} | FB: {entry.fb} | DB: {entry.db}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2.25} alignItems="center" sx={{ flexShrink: 0 }}>
          <Stack spacing={0.45} sx={{ width: 116 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minWidth: 0 }}>
              <Typography variant="body2" sx={{ minWidth: 52, fontWeight: 700 }}>
                Max: {entry.maxHp ?? entry.hp}
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 52, fontWeight: 700, fontSize: '1rem', textAlign: 'right' }}>
                HP: {entry.hp}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.45} alignItems="center">
              <TextField
                size="small"
                type="number"
                value={hpDelta || ''}
                onChange={(event) => onSetDelta(entry.id, 'hp', event.target.value)}
                sx={{
                  width: 72,
                  '& .MuiInputBase-input': {
                    py: 0.6,
                  },
                  '& input[type=number]': {
                    MozAppearance: 'textfield',
                  },
                  '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                }}
              />
              <Button size="small" variant="outlined" sx={{ minWidth: 26, px: 0.75 }} onClick={() => onAdjust(entry.id, 'hp', -1, hpDelta)}>-</Button>
              <Button size="small" variant="outlined" sx={{ minWidth: 26, px: 0.75 }} onClick={() => onAdjust(entry.id, 'hp', 1, hpDelta)}>+</Button>
            </Stack>
          </Stack>

          <Stack spacing={0.45} sx={{ width: 116 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minWidth: 0 }}>
              <Typography variant="body2" sx={{ minWidth: 52, fontWeight: 700 }}>
                Max: {entry.maxMp ?? entry.mp}
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 52, fontWeight: 700, fontSize: '1rem', textAlign: 'right' }}>
                MP: {entry.mp}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.45} alignItems="center">
              <TextField
                size="small"
                type="number"
                value={mpDelta || ''}
                onChange={(event) => onSetDelta(entry.id, 'mp', event.target.value)}
                sx={{
                  width: 72,
                  '& .MuiInputBase-input': {
                    py: 0.6,
                  },
                  '& input[type=number]': {
                    MozAppearance: 'textfield',
                  },
                  '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                }}
              />
              <Button size="small" variant="outlined" sx={{ minWidth: 26, px: 0.75 }} onClick={() => onAdjust(entry.id, 'mp', -1, mpDelta)}>-</Button>
              <Button size="small" variant="outlined" sx={{ minWidth: 26, px: 0.75 }} onClick={() => onAdjust(entry.id, 'mp', 1, mpDelta)}>+</Button>
            </Stack>
          </Stack>

          <Box sx={{ width: '48px', flexShrink: 0 }} />

          <Box
            sx={{
              minWidth: 44,
              height: 40,
              borderRadius: '8px',
              border: '2px solid rgba(0,0,0,0.38)',
              bgcolor: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.72)',
              color: '#111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.12rem',
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {turnCount || 0}
          </Box>
        </Stack>
      </Box>

      {entry.statuses && entry.statuses.length > 0 && (
        <div className="status-pill-wrap">
          {entry.statuses.map((status) => {
            const className = getStatusPillColors(status.status);
            return (
              <span
                key={status.id}
                title={status.effect}
                className={className}
              >
                <span>{status.name}</span>
                {Number.isFinite(status.roundsRemaining) && (
                  <span className="status-pill-rounds">{status.roundsRemaining}</span>
                )}
                <button
                  type="button"
                  data-status-id={status.id}
                  onClick={handleStatusRemoveClick}
                  className="status-pill-remove"
                >
                  x
                </button>
              </span>
            );
          })}
        </div>
      )}
    </Paper>
  );
});

export default function Menu() {
  const defaultPartyName = parties[0]?.name || '';
  const [value, setValue] = React.useState(10);
  const [explorationManaZone, setExplorationManaZone] = React.useState('safe');
  const [explorationPartyMasteryLevel, setExplorationPartyMasteryLevel] = React.useState('novice');
  const [generatedExploration, setGeneratedExploration] = React.useState(null);
  const [generatedExplorationManaEffect, setGeneratedExplorationManaEffect] = React.useState(null);

  const [itemTier, setItemTier] = React.useState('novice');
  const [itemPartyName, setItemPartyName] = React.useState(defaultPartyName);
  const [itemTypeFilter, setItemTypeFilter] = React.useState('');
  const [itemRarityFilter, setItemRarityFilter] = React.useState('');
  const [generatedItem, setGeneratedItem] = React.useState(null);

  const [partyLevel, setPartyLevel] = React.useState(1);
  const [partyNumber, setPartyNumber] = React.useState(4);
  const [encounterRegion, setEncounterRegion] = React.useState('');
  const [encounterHabitat, setEncounterHabitat] = React.useState('');
  const [encounterLocation, setEncounterLocation] = React.useState('');
  const [encounterDifficulty, setEncounterDifficulty] = React.useState('');
  const [generatedEncounter, setGeneratedEncounter] = React.useState(null);
  const [trackedEncounter, setTrackedEncounter] = React.useState([]);
  const [trackerDeltas, setTrackerDeltas] = React.useState({});
  const [selectedTrackerEntry, setSelectedTrackerEntry] = React.useState(null);
  const [statusQuery, setStatusQuery] = React.useState('');
  const [statusRounds, setStatusRounds] = React.useState('1');
  const [draggedTrackerId, setDraggedTrackerId] = React.useState(null);
  const [roundNumber, setRoundNumber] = React.useState(1);
  const [turnElapsedSeconds, setTurnElapsedSeconds] = React.useState(0);
  const [turnTimerPaused, setTurnTimerPaused] = React.useState(false);
  const [activeTurnEntryId, setActiveTurnEntryId] = React.useState(null);
  const [turnCountsByEntry, setTurnCountsByEntry] = React.useState({});
  const [showEncounterTracker, setShowEncounterTracker] = React.useState(false);
  const [showAddCreatureForm, setShowAddCreatureForm] = React.useState(false);
  const [showAddPartyForm, setShowAddPartyForm] = React.useState(false);
  const [selectedPartyNameToAdd, setSelectedPartyNameToAdd] = React.useState('');
  const [addCreatureSearchQuery, setAddCreatureSearchQuery] = React.useState('');
  const [customCreatureName, setCustomCreatureName] = React.useState('');
  const [customCreatureAc, setCustomCreatureAc] = React.useState('');
  const [customCreatureRc, setCustomCreatureRc] = React.useState('');
  const [customCreatureAb, setCustomCreatureAb] = React.useState('');
  const [customCreatureFb, setCustomCreatureFb] = React.useState('');
  const [customCreatureDb, setCustomCreatureDb] = React.useState('');
  const [customCreatureHp, setCustomCreatureHp] = React.useState('');
  const [customCreatureMp, setCustomCreatureMp] = React.useState('');
  const [eventCity, setEventCity] = React.useState('');
  const [eventHabitat, setEventHabitat] = React.useState('');
  const [eventManaZone, setEventManaZone] = React.useState('safe');
  const [eventDifficulty, setEventDifficulty] = React.useState('');
  const [generatedEvent, setGeneratedEvent] = React.useState(null);

  const [npcHabitat, setNpcHabitat] = React.useState('');
  const [npcAttitude, setNpcAttitude] = React.useState('');
  const [npcGender, setNpcGender] = React.useState('');
  const [npcRace, setNpcRace] = React.useState('');
  const [npcClass, setNpcClass] = React.useState('');
  const [generatedNpc, setGeneratedNpc] = React.useState(null);
  const [generatedRumor, setGeneratedRumor] = React.useState(null);
  const [questPartyName, setQuestPartyName] = React.useState(defaultPartyName);
  const [questType, setQuestType] = React.useState('');
  const [questHabitat, setQuestHabitat] = React.useState('');
  const [questDifficulty, setQuestDifficulty] = React.useState('');
  const [questRewardType, setQuestRewardType] = React.useState('');
  const [generatedQuest, setGeneratedQuest] = React.useState(null);
  const [selectedShop, setSelectedShop] = React.useState('');
  const [shopType, setShopType] = React.useState('');
  const [shopLocation, setShopLocation] = React.useState('');
  const [shopPartyName, setShopPartyName] = React.useState(defaultPartyName);
  const [shopPartyMasteryLevel, setShopPartyMasteryLevel] = React.useState('');
  const [generatedShop, setGeneratedShop] = React.useState(null);
  const [isShopAddItemDialogOpen, setIsShopAddItemDialogOpen] = React.useState(false);
  const [shopAddItemQuery, setShopAddItemQuery] = React.useState('');
  const [spellColor, setSpellColor] = React.useState('blue');
  const [spellClass, setSpellClass] = React.useState('');
  const [spellMasteryLevel, setSpellMasteryLevel] = React.useState('novice');
  const [generatedSpell, setGeneratedSpell] = React.useState(null);
  const [listedSpells, setListedSpells] = React.useState(null);
  const [generatedWildMagic, setGeneratedWildMagic] = React.useState(null);
  const [locationType, setLocationType] = React.useState('');
  const [locationHabitat, setLocationHabitat] = React.useState('');
  const [locationPartyName, setLocationPartyName] = React.useState(defaultPartyName);
  const [locationMasteryLevel, setLocationMasteryLevel] = React.useState('');
  const [generatedLocation, setGeneratedLocation] = React.useState(null);
  const [locationPanelMode, setLocationPanelMode] = React.useState(null);
  const [dungeonType, setDungeonType] = React.useState('');
  const [dungeonLevels, setDungeonLevels] = React.useState('');
  const [dungeonRooms, setDungeonRooms] = React.useState('');
  const [dungeonEncounters, setDungeonEncounters] = React.useState('');
  const [generatedDungeon, setGeneratedDungeon] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCalculation, setSelectedCalculation] = React.useState(null);
  const [selectedReminder, setSelectedReminder] = React.useState(null);
  const trackedEncounterRef = React.useRef(trackedEncounter);
  const turnCountsByEntryRef = React.useRef(turnCountsByEntry);
  const activeTurnEntryIdRef = React.useRef(activeTurnEntryId);
  const draggedTrackerIdRef = React.useRef(draggedTrackerId);

  React.useEffect(() => {
    trackedEncounterRef.current = trackedEncounter;
    turnCountsByEntryRef.current = turnCountsByEntry;
    activeTurnEntryIdRef.current = activeTurnEntryId;
    draggedTrackerIdRef.current = draggedTrackerId;
  }, [trackedEncounter, turnCountsByEntry, activeTurnEntryId, draggedTrackerId]);

  React.useEffect(() => {
    if (!showEncounterTracker || trackedEncounter.length === 0) {
      return undefined;
    }

    if (turnTimerPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setTurnElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [showEncounterTracker, trackedEncounter.length, turnTimerPaused]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const resolveSelectedPartyLevel = (partyName) => {
    const selectedParty = parties.find((entry) => entry.name === partyName);
    return Number(selectedParty?.level) || 1;
  };

  const generateItem = () => {
    const selectedPartyLevel = resolveSelectedPartyLevel(itemPartyName);
    const result = ItemGenerator.generateItem({
      levelTier: itemTier,
      typeFilter: itemTypeFilter || null,
      rarityFilter: itemRarityFilter || null,
      partyLevel: selectedPartyLevel,
    });
    setGeneratedItem({
      ...result,
      selectedPartyName: itemPartyName || 'None',
      selectedPartyLevel,
    });
  };

  const generateExploration = () => {
    const result = ExplorationGenerator.generateExploration({
      manaZone: explorationManaZone,
      partyMasteryLevel: explorationPartyMasteryLevel,
    });
    setGeneratedExploration(result);
    setGeneratedExplorationManaEffect(null);
  };

  const generateExplorationManaEffect = () => {
    const manaEffectResult = ExplorationGenerator.generateManaEffect({
      manaZone: explorationManaZone,
    });
    const randomSpell = manaEffectResult.manaEffect === 'random spell'
      ? SpellGenerator.generateRandomSpellFromCatalogue()
      : null;
    const wildMagic = manaEffectResult.manaEffect === 'wild magic'
      ? SpellGenerator.generateWildMagic()
      : null;

    setGeneratedExplorationManaEffect({
      ...manaEffectResult,
      randomSpell,
      wildMagic,
    });
  };

  const generateEncounter = () => {
    const result = EncounterGenerator.generateEncounter({
      partyLevel,
      partyNumber,
      region: encounterRegion || null,
      habitat: encounterHabitat,
      location: encounterLocation,
      selectedDifficulty: encounterDifficulty || null,
    });
    setGeneratedEncounter(result);
    setShowEncounterTracker(false);
  };

  const generateEvent = () => {
    const result = EventGenerator.generateEvent({
      habitat: eventHabitat || null,
      city: eventCity || null,
      manaZone: eventManaZone,
      difficulty: eventDifficulty || null,
    });
    setGeneratedEvent(result);
  };

  const trackEncounter = () => {
    if (trackedEncounter.length > 0) {
      const rerolled = trackedEncounter
        .map((entry) => {
          const initiativeBonus = Number.isFinite(entry.initiativeBonus) ? entry.initiativeBonus : 0;
          const initiativeRoll = Math.floor(Math.random() * 20) + 1;
          const totalRoll = initiativeRoll + initiativeBonus;
          return {
            ...entry,
            initiativeRoll,
            totalRoll,
            initiative: totalRoll,
          };
        })
        .sort((a, b) => {
          if (b.totalRoll !== a.totalRoll) {
            return b.totalRoll - a.totalRoll;
          }
          return Math.random() - 0.5;
        });

      const nextTurnCounts = {};
      rerolled.forEach((entry, idx) => {
        nextTurnCounts[entry.id] = idx === 0 ? 1 : 0;
      });

      setTrackedEncounter(rerolled);
      setTurnCountsByEntry(nextTurnCounts);
      setActiveTurnEntryId(rerolled[0]?.id || null);
      setRoundNumber(1);
      setTurnElapsedSeconds(0);
      setTurnTimerPaused(false);
      setShowEncounterTracker(true);
      return;
    }

    if (!generatedEncounter || generatedEncounter.error) {
      setShowEncounterTracker(true);
      return;
    }

    const nextTracker = EncounterTrackerGenerator.buildTrackerFromEncounter({
      generatedEncounter,
      party: [],
    });
    setTrackedEncounter(nextTracker.trackedEncounter);
    setTrackerDeltas(nextTracker.trackerDeltas);
    setRoundNumber(nextTracker.roundNumber);
    setActiveTurnEntryId(nextTracker.activeTurnEntryId);
    setTurnCountsByEntry(nextTracker.turnCountsByEntry);
    setTurnElapsedSeconds(0);
    setTurnTimerPaused(false);
    setShowEncounterTracker(true);
  };

  const appendCreatureToTracker = React.useCallback((entry) => {
    const initiativeBonus = Number.isFinite(entry.initiativeBonus) ? entry.initiativeBonus : 0;
    const initiativeRoll = Math.floor(Math.random() * 20) + 1;
    const totalRoll = initiativeRoll + initiativeBonus;
    const newEntry = {
      id: `custom-creature-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      side: 'monster',
      initiativeBonus,
      initiativeRoll,
      totalRoll,
      initiative: totalRoll,
      maxHp: Number.isFinite(entry.maxHp) ? entry.maxHp : entry.hp,
      maxMp: Number.isFinite(entry.maxMp) ? entry.maxMp : entry.mp,
      abilities: [],
      statuses: [],
      ...entry,
    };

    setTrackedEncounter((prev) => [...prev, newEntry]);
    setTurnCountsByEntry((prev) => {
      const next = { ...prev, [newEntry.id]: 0 };
      if (!activeTurnEntryIdRef.current) {
        next[newEntry.id] = 1;
      }
      return next;
    });
    if (!activeTurnEntryIdRef.current) {
      setActiveTurnEntryId(newEntry.id);
    }
    setShowEncounterTracker(true);
  }, []);

  const addCustomCreatureToTracker = () => {
    const name = customCreatureName.trim();
    const ac = Number.parseInt(customCreatureAc, 10);
    const rc = Number.parseInt(customCreatureRc, 10);
    const ab = Number.parseInt(customCreatureAb, 10);
    const fb = Number.parseInt(customCreatureFb, 10);
    const db = Number.parseInt(customCreatureDb, 10);
    const hp = Number.parseInt(customCreatureHp, 10);
    const mp = Number.parseInt(customCreatureMp, 10);

    if (!name) {
      return;
    }

    const values = [ac, rc, ab, fb, db, hp, mp];
    if (values.some((value) => Number.isNaN(value) || value < 0)) {
      return;
    }

    appendCreatureToTracker({
      name,
      type: 'Custom Creature',
      hp,
      mp,
      ac,
      rc,
      ab,
      fb,
      db,
      initiativeBonus: 0,
      abilities: [],
      statuses: [],
    });

    setAddCreatureSearchQuery('');
    setCustomCreatureName('');
    setCustomCreatureAc('');
    setCustomCreatureRc('');
    setCustomCreatureAb('');
    setCustomCreatureFb('');
    setCustomCreatureDb('');
    setCustomCreatureHp('');
    setCustomCreatureMp('');
    setShowAddCreatureForm(false);
  };

  const addCatalogueCreatureToTracker = (monster) => {
    const stats = EncounterTrackerGenerator.getMonsterStats(monster);

    appendCreatureToTracker({
      name: monster.name,
      type: 'Monster',
      hp: stats.hp,
      mp: stats.mp,
      ac: stats.ac,
      rc: stats.rc,
      ab: stats.ab,
      fb: stats.fb,
      db: stats.db,
      initiativeBonus: stats.initiativeBonus,
      description: monster.description,
      habitats: monster.habitats || (monster.habitat ? [monster.habitat] : []),
      locations: monster.locations || (monster.location ? [monster.location] : []),
      abilities: EncounterTrackerGenerator.normalizeAbilities(monster.abilities || []),
      statuses: [],
    });

    setAddCreatureSearchQuery('');
    setCustomCreatureName('');
    setCustomCreatureAc('');
    setCustomCreatureRc('');
    setCustomCreatureAb('');
    setCustomCreatureFb('');
    setCustomCreatureDb('');
    setCustomCreatureHp('');
    setCustomCreatureMp('');
    setShowAddCreatureForm(false);
  };

  const addPartyToTracker = (partyName) => {
    if (!partyName) {
      return;
    }
    const selectedParty = parties.find((entry) => entry.name === partyName);
    if (!selectedParty) {
      return;
    }

    const partyEntries = selectedParty.characters.map((member, idx) => {
      const initiativeBonus = EncounterTrackerGenerator.parseInitiativeBonus(member.initiativeBonus);
      const initiativeRoll = EncounterTrackerGenerator.rollInitiative(initiativeBonus);
      const displayName = member.characterName || member.name;
      return {
        id: `party-${partyName}-${member.name}-${idx}-${Math.random().toString(36).slice(2, 8)}`,
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
        abilities: EncounterTrackerGenerator.normalizeAbilities(member.abilities || []),
        statuses: [],
      };
    });

    setTrackedEncounter((prev) => [...prev, ...partyEntries]);
    setTurnCountsByEntry((prev) => {
      const next = { ...prev };
      partyEntries.forEach((entry) => {
        next[entry.id] = 0;
      });
      if (!activeTurnEntryIdRef.current && partyEntries[0]) {
        next[partyEntries[0].id] = 1;
      }
      return next;
    });
    if (!activeTurnEntryIdRef.current && partyEntries[0]) {
      setActiveTurnEntryId(partyEntries[0].id);
    }
    setShowEncounterTracker(true);

    setSelectedPartyNameToAdd('');
    setShowAddPartyForm(false);
    setShowAddCreatureForm(false);
    setAddCreatureSearchQuery('');
  };

  const clearEncounterTracker = () => {
    setTrackedEncounter([]);
    setTrackerDeltas({});
    setTurnCountsByEntry({});
    setActiveTurnEntryId(null);
    setRoundNumber(1);
    setTurnElapsedSeconds(0);
    setTurnTimerPaused(false);
    setShowAddCreatureForm(false);
    setShowAddPartyForm(false);
    setAddCreatureSearchQuery('');
    setSelectedPartyNameToAdd('');
  };

  const setTrackerDelta = React.useCallback((id, stat, valueToSet) => {
    setTrackerDeltas((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [stat]: valueToSet,
      },
    }));
  }, []);

  const adjustTrackedStat = React.useCallback((id, stat, direction, rawValue) => {
    const amount = Number(rawValue);
    if (Number.isNaN(amount) || amount < 0) {
      return;
    }

    setTrackedEncounter((prev) => EncounterTrackerGenerator.adjustTrackedStat(
      prev,
      id,
      stat,
      direction,
      amount,
    ));

    setTrackerDeltas((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [stat]: '',
      },
    }));
  }, []);

  const handleTrackerDragStart = React.useCallback((id) => {
    setDraggedTrackerId(id);
  }, []);

  const handleTrackerDragEnd = React.useCallback(() => {
    setDraggedTrackerId(null);
  }, []);

  const handleTrackerDrop = React.useCallback((event, targetId) => {
    event.preventDefault();
    const draggedTrackerIdCurrent = draggedTrackerIdRef.current;
    const trackedEncounterCurrent = trackedEncounterRef.current;
    const turnCountsByEntryCurrent = turnCountsByEntryRef.current;
    const activeTurnEntryIdCurrent = activeTurnEntryIdRef.current;

    if (!draggedTrackerIdCurrent || draggedTrackerIdCurrent === targetId) {
      setDraggedTrackerId(null);
      return;
    }

    const prev = trackedEncounterCurrent;
    const rect = event.currentTarget.getBoundingClientRect();
    const dropAfter = event.clientY > rect.top + rect.height / 2;
    const reordered = EncounterTrackerGenerator.reorderTrackedEncounter({
      trackedEncounter: prev,
      draggedTrackerId: draggedTrackerIdCurrent,
      targetId,
      dropAfter,
      turnCountsByEntry: turnCountsByEntryCurrent,
      activeTurnEntryId: activeTurnEntryIdCurrent,
    });
    if (!reordered) {
      setDraggedTrackerId(null);
      return;
    }

    setTrackedEncounter(reordered.trackedEncounter);
    setTurnCountsByEntry(reordered.turnCountsByEntry);
    setActiveTurnEntryId(reordered.activeTurnEntryId);

    setDraggedTrackerId(null);
  }, []);

  const openTrackerEntryModal = React.useCallback((entry) => {
    setSelectedTrackerEntry(entry);
    setStatusQuery('');
    setStatusRounds('1');
  }, []);

  const removeStatusFromEntry = React.useCallback((entryId, statusId) => {
    setTrackedEncounter((prev) => EncounterTrackerGenerator.removeStatusFromEntry(prev, entryId, statusId));
  }, []);

  const addStatusFromModal = () => {
    if (!selectedTrackerEntry) {
      return;
    }
    const trimmed = statusQuery.trim();
    const parsedRounds = Number.parseInt(statusRounds, 10);
    if (!trimmed) {
      return;
    }
    if (Number.isNaN(parsedRounds) || parsedRounds <= 0) {
      return;
    }

    const foundStatus = STATUS_CATALOGUE.find(
      (status) => status.name.toLowerCase() === trimmed.toLowerCase(),
    );
    const roundAnchorEntryId = activeTurnEntryId || selectedTrackerEntry.id;

    const statusEntry = EncounterTrackerGenerator.createStatusEntry({
      foundStatus,
      trimmedName: trimmed,
      parsedRounds,
      roundAnchorEntryId,
    });

    setTrackedEncounter((prev) => EncounterTrackerGenerator.addStatusToEntry(
      prev,
      selectedTrackerEntry.id,
      statusEntry,
    ));

    setStatusQuery('');
    setStatusRounds('1');
    setSelectedTrackerEntry(null);
  };

  const advanceTurn = () => {
    const nextTurn = EncounterTrackerGenerator.advanceTurn({
      trackedEncounter,
      activeTurnEntryId,
      turnCountsByEntry,
      roundNumber,
    });
    if (!nextTurn) {
      return;
    }

    setRoundNumber(nextTurn.roundNumber);
    setActiveTurnEntryId(nextTurn.activeTurnEntryId);
    setTurnCountsByEntry(nextTurn.turnCountsByEntry);
    setTurnElapsedSeconds(0);
    setTurnTimerPaused(false);
    setTrackedEncounter((prev) => EncounterTrackerGenerator.advanceStatusesForAnchorTurn(
      prev,
      nextTurn.anchorEntryId,
    ));
  };

  const timerMinutes = Math.floor(turnElapsedSeconds / 60);
  const timerSeconds = turnElapsedSeconds % 60;
  const turnTimerDisplay = `${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`;
  const turnTimerBackground = (() => {
    if (turnElapsedSeconds >= 180) {
      return '#4a4a4a';
    }
    if (turnElapsedSeconds >= 120) {
      return '#d66a6a';
    }
    if (turnElapsedSeconds >= 60) {
      return '#ffeb3b';
    }
    return '#ffffff';
  })();
  const turnTimerTextColor = turnElapsedSeconds >= 180 ? '#ffffff' : '#111111';

  const generateNpc = () => {
    const result = NpcGenerator.generateNpc({
      habitat: npcHabitat,
      attitude: npcAttitude,
      gender: npcGender || null,
      race: npcRace || null,
      characterClass: npcClass || null,
    });
    setGeneratedNpc(result);
  };
  const generateRumor = () => {
    if (!rumorCatalogue.length) {
      setGeneratedRumor(null);
      return;
    }
    const rumor = rumorCatalogue[Math.floor(Math.random() * rumorCatalogue.length)];
    setGeneratedRumor(rumor);
  };

  const generateQuest = () => {
    const selectedPartyLevel = resolveSelectedPartyLevel(questPartyName);
    const baseQuest = QuestGenerator.generateQuest({
      location: questHabitat || null,
      questType: questType || null,
    });

    const selectedDifficulty = questDifficulty || '';
    const resolvedDifficulty = selectedDifficulty || baseQuest.difficulty;

    const toRewardDifficultyKey = (difficulty) => {
      const normalized = String(difficulty || '').toLowerCase();
      if (normalized === 'easy' || normalized === 'minor') {
        return 'minor';
      }
      if (normalized === 'standard' || normalized === 'moderate') {
        return 'standard';
      }
      if (normalized === 'deadly' || normalized === 'dangerous' || normalized === 'hard') {
        return 'dangerous';
      }
      if (normalized === 'epic') {
        return 'epic';
      }
      return 'standard';
    };

    const getMlTierByPartyLevel = (partyLevel) => {
      if (partyLevel <= 4) return 'ml1';
      if (partyLevel <= 9) return 'ml2';
      if (partyLevel <= 14) return 'ml3';
      return 'ml4';
    };

    const goldRewardsByTier = {
      ml1: { minor: 25, standard: 50, dangerous: 250, epic: 1000 },
      ml2: { minor: 50, standard: 250, dangerous: 1000, epic: 5000 },
      ml3: { minor: 100, standard: 500, dangerous: 2500, epic: 10000 },
      ml4: { minor: 250, standard: 1000, dangerous: 5000, epic: 15000 },
    };

    const toCanonicalQuestDifficulty = (difficulty) => {
      const normalized = String(difficulty || '').toLowerCase();
      if (normalized === 'easy' || normalized === 'minor') {
        return 'easy';
      }
      if (normalized === 'standard' || normalized === 'moderate') {
        return 'standard';
      }
      if (normalized === 'deadly' || normalized === 'dangerous' || normalized === 'hard') {
        return 'deadly';
      }
      if (normalized === 'epic') {
        return 'epic';
      }
      return 'standard';
    };

    const getItemTierByPartyLevel = (partyLevel) => {
      if (partyLevel <= 4) return 'novice';
      if (partyLevel <= 9) return 'expert';
      if (partyLevel <= 14) return 'master';
      return 'commander';
    };

    let resolvedReward = baseQuest.reward;
    let rewardItem = null;
    let rewardGold = '';
    const rewardChoice = questRewardType || (Math.random() < 0.5 ? 'item' : 'gold');
    const canonicalDifficulty = toCanonicalQuestDifficulty(resolvedDifficulty);

    if (rewardChoice === 'item') {
      const itemTier = getItemTierByPartyLevel(selectedPartyLevel);
      const itemRulesByDifficulty = {
        easy: { type: 'normal', rarity: 'uncommon' },
        standard: { type: 'normal', rarity: 'rare' },
        deadly: { type: 'magic', rarity: 'rare' },
        epic: { type: 'magic', rarity: 'legendary' },
      };
      const itemRule = itemRulesByDifficulty[canonicalDifficulty] || itemRulesByDifficulty.standard;
      const tierPool = (ITEM_CATALOG[itemTier]?.[itemRule.type] || []).filter((entry) => (
        entry.rarity === itemRule.rarity
          && ItemGenerator.isPartyLevelEligible(entry, selectedPartyLevel)
      ));

      if (tierPool.length > 0) {
        const picked = tierPool[Math.floor(Math.random() * tierPool.length)];
        rewardItem = {
          ...picked,
          type: itemRule.type,
          rarity: itemRule.rarity,
        };
      } else {
        rewardItem = null;
      }

      resolvedReward = rewardItem?.item
        ? `Item: ${rewardItem.item}`
        : `Item: No ${itemRule.rarity} ${itemRule.type} item found for ${itemTier}`;
    } else if (rewardChoice === 'gold') {
      const mlTier = getMlTierByPartyLevel(selectedPartyLevel);
      const rewardDifficultyKey = toRewardDifficultyKey(resolvedDifficulty);
      const goldValue = goldRewardsByTier[mlTier][rewardDifficultyKey];
      rewardGold = `${goldValue} GP`;
      resolvedReward = `Gold: ${rewardGold}`;
    }

    setGeneratedQuest({
      ...baseQuest,
      difficulty: resolvedDifficulty,
      reward: resolvedReward,
      rewardType: rewardChoice,
      rewardItem,
      rewardGold,
      selectedPartyName: questPartyName || 'None',
      selectedPartyLevel,
      habitat: questHabitat || 'Any Habitat',
    });
  };

  const generateShop = () => {
    const selectedPartyLevel = resolveSelectedPartyLevel(shopPartyName);
    const result = ShopGenerator.generateShop({
      selectedShop: selectedShop || null,
      shopType: shopType || null,
      location: shopLocation || null,
      partyMasteryLevel: shopPartyMasteryLevel,
      partyLevel: selectedPartyLevel,
    });
    setGeneratedShop({
      ...result,
      selectedPartyName: shopPartyName || 'None',
      selectedPartyLevel,
      hardcodedInventory: result.source === 'known-shop' ? (result.inventory || []).map((entry) => ({ ...entry })) : [],
    });
  };

  const generateSpell = () => {
    const result = SpellGenerator.generateSpell({
      color: spellColor,
      masteryLevel: spellMasteryLevel,
      spellClass,
    });
    setGeneratedSpell(result);
    setListedSpells(null);
    setGeneratedWildMagic(null);
  };

  const listSpells = () => {
    const result = SpellGenerator.listSpells({
      color: spellColor,
      masteryLevel: spellMasteryLevel,
      spellClass,
    });
    setListedSpells(result);
    setGeneratedSpell(null);
    setGeneratedWildMagic(null);
  };

  const generateWildMagic = () => {
    const result = SpellGenerator.generateWildMagic();
    setGeneratedWildMagic(result);
    setGeneratedSpell(null);
    setListedSpells(null);
  };

  const generateLocation = () => {
    const selectedPartyLevel = resolveSelectedPartyLevel(locationPartyName);
    const result = LocationGenerator.generateLocation({
      type: locationType || null,
      habitat: locationHabitat || null,
      masteryLevel: locationMasteryLevel || null,
      partyLevel: selectedPartyLevel,
    });
    setGeneratedLocation({
      ...result,
      selectedPartyName: locationPartyName || 'None',
      selectedPartyLevel,
    });
    setLocationPanelMode('location');
  };

  const generateDungeon = () => {
    const result = DungeonGenerator.generateDungeon({
      type: dungeonType || null,
      levels: dungeonLevels === '' ? null : Number(dungeonLevels),
      rooms: dungeonRooms === '' ? null : Number(dungeonRooms),
      encounters: dungeonEncounters === '' ? null : Number(dungeonEncounters),
    });
    setGeneratedDungeon(result);
    setLocationPanelMode('dungeon');
  };

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const searchMatches = Object.entries(SEARCH_CATALOGUE).filter(([key]) => (
    normalizedSearchQuery.length > 0 && key.toLowerCase().includes(normalizedSearchQuery)
  ));
  const sortedShopInventory = React.useMemo(() => {
    if (!generatedShop?.inventory) {
      return [];
    }

    return [...generatedShop.inventory].sort((a, b) => {
      const rarityDelta = (SHOP_RARITY_ORDER[a.rarity] ?? 99) - (SHOP_RARITY_ORDER[b.rarity] ?? 99);
      if (rarityDelta !== 0) {
        return rarityDelta;
      }
      return String(a.item).localeCompare(String(b.item));
    });
  }, [generatedShop]);
  const allShopAddableItems = React.useMemo(() => (
    Object.values(ITEM_CATALOG).flatMap((tier) => (
      ['normal', 'magic'].flatMap((type) => (
        (tier[type] || []).map((entry) => ({
          item: entry.item,
          details: entry.details || 'No details provided.',
          effects: entry.effects || '',
          damage: entry.damage || '',
          type,
          rarity: entry.rarity || 'common',
          size: entry.size || 'unknown',
          cost: entry.cost || '0',
        }))
      ))
    ))
  ), []);
  const filteredShopAddItemResults = React.useMemo(() => {
    const query = shopAddItemQuery.trim().toLowerCase();
    if (!query) {
      return [];
    }

    return allShopAddableItems
      .filter((entry) => String(entry.item || '').toLowerCase().includes(query))
      .sort((a, b) => String(a.item).localeCompare(String(b.item)))
      .slice(0, 50);
  }, [allShopAddableItems, shopAddItemQuery]);
  const addItemToGeneratedShop = React.useCallback((entry) => {
    if (!entry || !generatedShop) {
      return;
    }

    setGeneratedShop((prev) => {
      if (!prev) {
        return prev;
      }
      const alreadyExists = (prev.inventory || []).some((inv) => inv.item === entry.item);
      if (alreadyExists) {
        return prev;
      }
      return {
        ...prev,
        inventory: [
          ...(prev.inventory || []),
          {
            ...entry,
            quantity: 1,
          },
        ],
      };
    });
    setShopAddItemQuery('');
    setIsShopAddItemDialogOpen(false);
  }, [generatedShop]);
  const regenerateShopInventory = React.useCallback(() => {
    if (!generatedShop) {
      return;
    }

    const selectedPartyLevel = resolveSelectedPartyLevel(shopPartyName);
    const shopDefinedTypeRaw = generatedShop.storeType;
    const shopDefinedType = Array.isArray(shopDefinedTypeRaw)
      ? (shopDefinedTypeRaw[0] || '')
      : (shopDefinedTypeRaw || '');
    const resolvedShopType = shopDefinedType
      || (generatedShop.shopType && generatedShop.shopType !== 'any' ? generatedShop.shopType : '')
      || (shopType || '');
    const resolvedLocation = generatedShop.location && generatedShop.location !== 'varied'
      ? generatedShop.location
      : (shopLocation || '');

    const generatedInventory = ShopGenerator.buildRandomInventory(
      resolvedLocation,
      resolvedShopType,
      shopPartyMasteryLevel,
      selectedPartyLevel,
    );

    let nextInventory = generatedInventory;
    const hardcodedInventory = Array.isArray(generatedShop.hardcodedInventory)
      ? generatedShop.hardcodedInventory
      : [];
    if (generatedShop.source === 'known-shop' && hardcodedInventory.length > 0) {
      const targetSize = Math.max(generatedInventory.length, hardcodedInventory.length);
      const merged = hardcodedInventory.map((entry) => ({ ...entry }));
      const usedNames = new Set(merged.map((entry) => entry.item));

      const appendUniqueFrom = (list) => {
        for (const entry of list) {
          if (merged.length >= targetSize) {
            break;
          }
          if (usedNames.has(entry.item)) {
            continue;
          }
          usedNames.add(entry.item);
          merged.push({ ...entry, quantity: 1 });
        }
      };

      appendUniqueFrom(generatedInventory);
      let attempts = 0;
      while (merged.length < targetSize && attempts < 4) {
        attempts += 1;
        const extra = ShopGenerator.buildRandomInventory(
          resolvedLocation,
          resolvedShopType,
          shopPartyMasteryLevel,
          selectedPartyLevel,
        );
        appendUniqueFrom(extra);
      }

      nextInventory = merged;
    }

    setGeneratedShop((prev) => {
      if (!prev) {
        return prev;
      }
      return {
        ...prev,
        inventory: nextInventory,
        partyMasteryLevel: shopPartyMasteryLevel || 'none (base rarity weights)',
        selectedPartyName: shopPartyName || 'None',
        selectedPartyLevel,
      };
    });
  }, [generatedShop, shopLocation, shopPartyMasteryLevel, shopPartyName, shopType]);
  const filteredCreatureSearchResults = React.useMemo(() => {
    const query = addCreatureSearchQuery.trim().toLowerCase();
    if (!query) {
      return [];
    }

    const combinedCatalogue = [...monsterCatalogue, ...bossCatalogue, ...npcCatalogue];
    return combinedCatalogue
      .filter((monster) => String(monster.name || '').toLowerCase().includes(query))
      .sort((a, b) => String(a.name).localeCompare(String(b.name)))
      .slice(0, 25);
  }, [addCreatureSearchQuery]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: '75vh' }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleTabChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: 180 }}
      >
        <Tab value={10} label="Exploration" {...a11yProps(10)} />
        <Tab value={0} label="Encounters" {...a11yProps(0)} />
        <Tab value={1} label="Events" {...a11yProps(1)} />
        <Tab value={3} label="NPCs" {...a11yProps(3)} />
        <Tab value={11} label="Quests" {...a11yProps(11)} />
        <Tab value={2} label="Items" {...a11yProps(2)} />
        <Tab value={4} label="Shops" {...a11yProps(4)} />
        <Tab value={5} label="Spells" {...a11yProps(5)} />
        <Tab value={6} label="Locations" {...a11yProps(6)} />
        <Divider sx={{ my: 1.1, mx: 2, borderColor: 'rgba(0,0,0,0.4)', borderBottomWidth: 2 }} />
        <Tab value={7} label="Search" {...a11yProps(7)} />
        <Tab value={8} label="Maths" {...a11yProps(8)} />
        <Tab value={9} label="Misc" {...a11yProps(9)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Encounter Generator</Typography>
            <Typography variant="body2">
              Set party level and player count, then optionally set habitat/location and difficulty.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="party-level-select-label">Party Level</InputLabel>
                  <Select
                    labelId="party-level-select-label"
                    value={partyLevel}
                    label="Party Level"
                    onChange={(event) => setPartyLevel(Number(event.target.value))}
                  >
                    {Array.from({ length: 30 }, (_, idx) => idx + 1).map((level) => (
                      <MuiMenuItem key={level} value={level}>{level}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  type="number"
                  label="Party Number"
                  value={partyNumber}
                  onChange={(event) => setPartyNumber(Math.max(1, Number(event.target.value) || 1))}
                  inputProps={{ min: 1, step: 1 }}
                />

                <FormControl fullWidth>
                  <InputLabel id="enc-region-select-label">Region (Optional)</InputLabel>
                  <Select
                    labelId="enc-region-select-label"
                    value={encounterRegion}
                    label="Region (Optional)"
                    onChange={(event) => setEncounterRegion(event.target.value)}
                  >
                    {EncounterGenerator.REGION_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-region'} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="habitat-select-label">Habitat (Optional)</InputLabel>
                  <Select
                    labelId="habitat-select-label"
                    value={encounterHabitat}
                    label="Habitat (Optional)"
                    onChange={(event) => setEncounterHabitat(event.target.value)}
                  >
                    {EncounterGenerator.HABITAT_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-habitat'} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="enc-location-select-label">Location (Optional)</InputLabel>
                  <Select
                    labelId="enc-location-select-label"
                    value={encounterLocation}
                    label="Location (Optional)"
                    onChange={(event) => setEncounterLocation(event.target.value)}
                  >
                    {EncounterGenerator.LOCATION_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-location'} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="difficulty-select-label">Difficulty (Optional)</InputLabel>
                  <Select
                    labelId="difficulty-select-label"
                    value={encounterDifficulty}
                    label="Difficulty (Optional)"
                    onChange={(event) => setEncounterDifficulty(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    {EncounterGenerator.DIFFICULTIES.map((difficulty) => (
                      <MuiMenuItem key={difficulty} value={difficulty}>
                        {difficulty[0].toUpperCase() + difficulty.slice(1)}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateEncounter}>Generate Encounter</Button>
            <Button
              variant="outlined"
              onClick={trackEncounter}
            >
              Track Encounter
            </Button>

          </Stack>

          {!showEncounterTracker && generatedEncounter && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 400,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1.5} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Encounter Details</Typography>
                {generatedEncounter.error ? (
                  <Typography color="error.main">{generatedEncounter.error}</Typography>
                ) : (
                  <Stack spacing={1}>
                    <Typography variant="subtitle1">
                      Encounter ({generatedEncounter.difficulty})
                    </Typography>
                    <Typography variant="body2">
                      Party Level: {generatedEncounter.budget.partyLevel} | Players: {generatedEncounter.budget.partyNumber}
                    </Typography>
                    <Typography variant="body2">
                      Per Player XP: Min {generatedEncounter.budget.minXPPerPlayer} | Max {generatedEncounter.budget.maxXPPerPlayer}
                    </Typography>
                    <Typography variant="body2">
                      Min XP: {generatedEncounter.budget.minXP} | Max XP: {generatedEncounter.budget.maxXP}
                    </Typography>
                    <Typography variant="body2">
                      Used XP: {generatedEncounter.totalXP} | Remaining XP: {generatedEncounter.remainingXP}
                    </Typography>
                    <Typography variant="body2">
                      XP Gained: {generatedEncounter.xpGained}
                    </Typography>

                    {generatedEncounter.encounterMonsters.map((monster) => (
                      <Paper key={monster.name} sx={{ p: 1.5 }} variant="outlined">
                        <Typography variant="subtitle2">{monster.count}x {monster.name}</Typography>
                        <Typography variant="body2">{monster.description}</Typography>
                        <Typography variant="body2">
                          XP Each: {monster.xp ?? monster.xpBudget} | Subtotal XP: {monster.subtotalXP} | CR: {monster.cr ?? monster.crBudget}
                        </Typography>
                        <Typography variant="body2">
                          Habitats: {(monster.habitats || (monster.habitat ? [monster.habitat] : [])).join(', ')}
                        </Typography>
                        <Typography variant="body2">
                          Locations: {(monster.locations || (monster.location ? [monster.location] : [])).join(', ')}
                        </Typography>
                      </Paper>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Paper>
          )}

          {showEncounterTracker && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 400,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1.5} sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">Encounter Tracker</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="subtitle1">Round: {roundNumber}</Typography>
                    <Stack direction="row" spacing={0.8} alignItems="center">
                      <Box
                        role="button"
                        aria-label={turnTimerPaused ? 'Resume timer' : 'Pause timer'}
                        tabIndex={0}
                        onClick={() => setTurnTimerPaused((prev) => !prev)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setTurnTimerPaused((prev) => !prev);
                          }
                        }}
                        sx={{
                          minWidth: 56,
                          height: 32,
                          px: 0.75,
                          py: 0.45,
                          border: '2px solid rgba(0,0,0,0.45)',
                          borderRadius: '4px',
                          textAlign: 'center',
                          bgcolor: turnTimerBackground,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: '1rem',
                            lineHeight: 1.1,
                            fontWeight: 700,
                            color: turnTimerTextColor,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {turnTimerDisplay}
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={advanceTurn}
                        disabled={trackedEncounter.length === 0}
                        sx={{ minWidth: 'calc(56px + 3mm)', height: 'calc(32px + 2.5mm)', px: 0.75 }}
                      >
                        +
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      onClick={() => setShowAddCreatureForm((prev) => !prev)}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Add Creature
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setShowAddPartyForm((prev) => !prev)}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Add Party
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={clearEncounterTracker}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Clear
                    </Button>
                  </Stack>
                  {showAddPartyForm && (
                    <Paper sx={{ p: 1.25, maxWidth: 380 }} variant="outlined">
                      <FormControl fullWidth size="small">
                        <InputLabel id="add-party-select-label">Select Party</InputLabel>
                        <Select
                          labelId="add-party-select-label"
                          value={selectedPartyNameToAdd}
                          label="Select Party"
                          onChange={(event) => {
                            const partyName = event.target.value;
                            setSelectedPartyNameToAdd(partyName);
                            addPartyToTracker(partyName);
                          }}
                        >
                          {parties.map((entry) => (
                            <MuiMenuItem key={entry.name} value={entry.name}>
                              {entry.name}
                            </MuiMenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Paper>
                  )}
                  {showAddCreatureForm && (
                    <Paper sx={{ p: 1.5 }} variant="outlined">
                      <Stack spacing={1.25}>
                        <TextField
                          size="small"
                          label="Search Creatures"
                          placeholder="Type creature name..."
                          value={addCreatureSearchQuery}
                          onChange={(event) => setAddCreatureSearchQuery(event.target.value)}
                          fullWidth
                        />
                        {addCreatureSearchQuery.trim().length > 0 && (
                          <Paper sx={{ maxHeight: 180, overflow: 'auto' }} variant="outlined">
                            <Stack spacing={0}>
                              {filteredCreatureSearchResults.length === 0 ? (
                                <Typography variant="body2" sx={{ px: 1.25, py: 1 }}>
                                  No creature matches found.
                                </Typography>
                              ) : (
                                filteredCreatureSearchResults.map((monster) => (
                                  <Button
                                    key={`creature-search-${monster.name}`}
                                    variant="text"
                                    onClick={() => addCatalogueCreatureToTracker(monster)}
                                    sx={{
                                      justifyContent: 'flex-start',
                                      px: 1.25,
                                      py: 0.8,
                                      borderRadius: 0,
                                      textTransform: 'none',
                                    }}
                                  >
                                    {monster.name}
                                  </Button>
                                ))
                              )}
                            </Stack>
                          </Paper>
                        )}
                        <TextField
                          size="small"
                          label="Name"
                          value={customCreatureName}
                          onChange={(event) => setCustomCreatureName(event.target.value)}
                          fullWidth
                        />
                        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))' }}>
                          <TextField
                            size="small"
                            type="number"
                            label="AC"
                            value={customCreatureAc}
                            onChange={(event) => setCustomCreatureAc(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="RC"
                            value={customCreatureRc}
                            onChange={(event) => setCustomCreatureRc(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="AB"
                            value={customCreatureAb}
                            onChange={(event) => setCustomCreatureAb(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="FB"
                            value={customCreatureFb}
                            onChange={(event) => setCustomCreatureFb(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="DB"
                            value={customCreatureDb}
                            onChange={(event) => setCustomCreatureDb(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="HP"
                            value={customCreatureHp}
                            onChange={(event) => setCustomCreatureHp(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                          <TextField
                            size="small"
                            type="number"
                            label="MP"
                            value={customCreatureMp}
                            onChange={(event) => setCustomCreatureMp(event.target.value)}
                            inputProps={{ min: 0 }}
                          />
                        </Box>
                        <Button variant="contained" onClick={addCustomCreatureToTracker} sx={{ alignSelf: 'flex-start' }}>
                          Add
                        </Button>
                      </Stack>
                    </Paper>
                  )}
                </Stack>
                {trackedEncounter.map((entry, index) => (
                  <TrackerEntryCard
                    key={entry.id}
                    entry={entry}
                    index={index}
                    isActive={activeTurnEntryId === entry.id}
                    isDragged={draggedTrackerId === entry.id}
                    turnCount={turnCountsByEntry[entry.id] || 0}
                    hpDelta={trackerDeltas[entry.id]?.hp || ''}
                    mpDelta={trackerDeltas[entry.id]?.mp || ''}
                    onDragStart={handleTrackerDragStart}
                    onDragEnd={handleTrackerDragEnd}
                    onDrop={handleTrackerDrop}
                    onOpen={openTrackerEntryModal}
                    onSetDelta={setTrackerDelta}
                    onAdjust={adjustTrackedStat}
                    onRemoveStatus={removeStatusFromEntry}
                  />
                ))}
              </Stack>
            </Paper>
          )}

          <Dialog
            open={Boolean(selectedTrackerEntry)}
            onClose={() => setSelectedTrackerEntry(null)}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Typography variant="h6">{selectedTrackerEntry?.name || 'Details'}</Typography>
                <Stack direction="row" spacing={1} sx={{ minWidth: 300 }}>
                  <TextField
                    size="small"
                    placeholder="Add condition..."
                    value={statusQuery}
                    onChange={(event) => setStatusQuery(event.target.value)}
                    fullWidth
                  />
                  <TextField
                    size="small"
                    type="number"
                    label="Rounds"
                    value={statusRounds}
                    onChange={(event) => setStatusRounds(event.target.value)}
                    sx={{ width: 95 }}
                    inputProps={{ min: 1 }}
                  />
                  <Button variant="contained" onClick={addStatusFromModal}>Add</Button>
                </Stack>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              {selectedTrackerEntry && (
                <Stack spacing={1}>
                  {statusQuery.trim().length > 0 && (
                    <Paper sx={{ p: 1, borderWidth: 2, borderColor: 'rgba(0,0,0,0.42)' }} variant="outlined">
                      <Typography variant="subtitle2">Condition Matches</Typography>
                      {STATUS_CATALOGUE
                        .filter((status) => status.name.toLowerCase().includes(statusQuery.trim().toLowerCase()))
                        .slice(0, 6)
                        .map((status) => (
                          <Typography
                            key={`status-match-${status.name}`}
                            variant="body2"
                            onClick={() => setStatusQuery(status.name)}
                            sx={{
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' },
                            }}
                          >
                            <strong>{status.name}</strong>: {status.effect}
                          </Typography>
                        ))}
                      {STATUS_CATALOGUE.filter((status) => status.name.toLowerCase().includes(statusQuery.trim().toLowerCase())).length === 0 && (
                        <Typography variant="body2">No catalogue match. Add will create a custom blue status.</Typography>
                      )}
                    </Paper>
                  )}
                  <Typography variant="body2">Type: {selectedTrackerEntry.type}</Typography>
                  <Typography variant="body2">
                    Initiative: {selectedTrackerEntry.initiativeBonus >= 0 ? '+' : ''}{selectedTrackerEntry.initiativeBonus}
                    {' '}| Roll: {selectedTrackerEntry.initiativeRoll ?? 'n/a'}
                    {' '}| Total: {selectedTrackerEntry.totalRoll ?? selectedTrackerEntry.initiative}
                  </Typography>
                  <Typography variant="body2">
                    HP: {selectedTrackerEntry.hp} | MP: {selectedTrackerEntry.mp} | AC: {selectedTrackerEntry.ac}
                  </Typography>
                  {selectedTrackerEntry.description && (
                    <Typography variant="body2">Description: {selectedTrackerEntry.description}</Typography>
                  )}
                  {selectedTrackerEntry.habitats && selectedTrackerEntry.habitats.length > 0 && (
                    <Typography variant="body2">Habitats: {selectedTrackerEntry.habitats.join(', ')}</Typography>
                  )}
                  {selectedTrackerEntry.locations && selectedTrackerEntry.locations.length > 0 && (
                    <Typography variant="body2">Locations: {selectedTrackerEntry.locations.join(', ')}</Typography>
                  )}
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>Abilities</Typography>
                  {selectedTrackerEntry.abilities && selectedTrackerEntry.abilities.length > 0 ? (
                    selectedTrackerEntry.abilities.map((ability, idx) => (
                      <Typography key={`${selectedTrackerEntry.id}-ability-${idx}`} variant="body2">
                        {ability.name}: {ability.details}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2">None listed.</Typography>
                  )}
                </Stack>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedTrackerEntry(null)}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={10}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Exploration Generator</Typography>
            <Typography variant="body2">
              Select a mana zone and party mastery level to generate a Fight, Face, or Find exploration outcome.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="exploration-manazone-label">Mana Zone</InputLabel>
                  <Select
                    labelId="exploration-manazone-label"
                    value={explorationManaZone}
                    label="Mana Zone"
                    onChange={(event) => setExplorationManaZone(event.target.value)}
                  >
                    {ExplorationGenerator.MANA_ZONE_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="exploration-party-mastery-label">Party Mastery Level</InputLabel>
                  <Select
                    labelId="exploration-party-mastery-label"
                    value={explorationPartyMasteryLevel}
                    label="Party Mastery Level"
                    onChange={(event) => setExplorationPartyMasteryLevel(event.target.value)}
                  >
                    {ExplorationGenerator.PARTY_MASTERY_LEVEL_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateExploration}>Generate Exploration</Button>
            <Button variant="outlined" onClick={generateExplorationManaEffect}>Mana Effect</Button>
          </Stack>

          {generatedExplorationManaEffect && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.8} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Mana Effect</Typography>
                {generatedExplorationManaEffect.error ? (
                  <Typography variant="body2" color="error.main">{generatedExplorationManaEffect.error}</Typography>
                ) : (
                  <>
                    <Typography variant="body2">Mana Zone: {generatedExplorationManaEffect.manaZone}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Effect: {generatedExplorationManaEffect.manaEffect}
                    </Typography>
                    {generatedExplorationManaEffect.manaEffect === 'wild magic' && generatedExplorationManaEffect.wildMagic && (
                      generatedExplorationManaEffect.wildMagic.error ? (
                        <Typography variant="body2" color="error.main">{generatedExplorationManaEffect.wildMagic.error}</Typography>
                      ) : (
                        <Typography variant="body2">{String(generatedExplorationManaEffect.wildMagic.effect || generatedExplorationManaEffect.wildMagic)}</Typography>
                      )
                    )}
                    {generatedExplorationManaEffect.manaEffect === 'random spell' && generatedExplorationManaEffect.randomSpell && (
                      generatedExplorationManaEffect.randomSpell.error ? (
                        <Typography variant="body2" color="error.main">{generatedExplorationManaEffect.randomSpell.error}</Typography>
                      ) : (
                        <Paper variant="outlined" sx={{ p: 1.25, mt: 0.5 }}>
                          <Typography variant="body2">{generatedExplorationManaEffect.randomSpell.name}</Typography>
                          <Typography variant="body2">Class: {generatedExplorationManaEffect.randomSpell.class}</Typography>
                          <Typography variant="body2">Mastery: {generatedExplorationManaEffect.randomSpell.masteryLevel}</Typography>
                          <Typography variant="body2">Type: {generatedExplorationManaEffect.randomSpell.type}</Typography>
                          <Typography variant="body2">Duration: {generatedExplorationManaEffect.randomSpell.duration}</Typography>
                          <Typography variant="body2">Distance: {generatedExplorationManaEffect.randomSpell.distance}</Typography>
                          {generatedExplorationManaEffect.randomSpell.damage && (
                            <Typography variant="body2">Damage: {generatedExplorationManaEffect.randomSpell.damage}</Typography>
                          )}
                          {generatedExplorationManaEffect.randomSpell.effects && (
                            <Typography variant="body2">Effects: {generatedExplorationManaEffect.randomSpell.effects}</Typography>
                          )}
                          {generatedExplorationManaEffect.randomSpell.conditions && (
                            <Typography variant="body2">Conditions: {generatedExplorationManaEffect.randomSpell.conditions}</Typography>
                          )}
                        </Paper>
                      )
                    )}
                  </>
                )}
              </Stack>
            </Paper>
          )}

          {!generatedExplorationManaEffect && generatedExploration && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.8} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Exploration Details</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Encounter Type: {generatedExploration.encounterType}
                </Typography>
                {generatedExploration.encounterType === 'Find' && (
                  <>
                    <Typography variant="body2">Find Type: {generatedExploration.findType}</Typography>
                    {generatedExploration.findType === 'item' && generatedExploration.findItemRarity && (
                      <Typography variant="body2">Rarity: {generatedExploration.findItemRarity}</Typography>
                    )}
                  </>
                )}
                <Typography variant="body2">Mana Zone: {generatedExploration.manaZone}</Typography>
                <Typography variant="body2">Party Mastery Level: {generatedExploration.partyMasteryLevel}</Typography>
                <Typography variant="body2">Safety: {generatedExploration.safety}</Typography>
                <Typography variant="body2">Stability: {generatedExploration.stability}</Typography>
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Event Generator</Typography>
            <Typography variant="body2">
              Generate a world event based on habitat, mana zone, and optional difficulty.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="event-city-select-label">City (Optional)</InputLabel>
                  <Select
                    labelId="event-city-select-label"
                    value={eventCity}
                    label="City (Optional)"
                    onChange={(event) => setEventCity(event.target.value)}
                  >
                    {EventGenerator.CITY_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-city-area'} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="event-habitat-select-label">Habitat (Optional)</InputLabel>
                  <Select
                    labelId="event-habitat-select-label"
                    value={eventHabitat}
                    label="Habitat (Optional)"
                    onChange={(event) => setEventHabitat(event.target.value)}
                  >
                    {EventGenerator.HABITAT_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-event-habitat'} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="event-manazone-select-label">Mana Zone</InputLabel>
                  <Select
                    labelId="event-manazone-select-label"
                    value={eventManaZone}
                    label="Mana Zone"
                    onChange={(event) => setEventManaZone(event.target.value)}
                    disabled={Boolean(eventCity)}
                  >
                    {EventGenerator.MANA_ZONE_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="event-difficulty-select-label">Difficulty (Optional)</InputLabel>
                  <Select
                    labelId="event-difficulty-select-label"
                    value={eventDifficulty}
                    label="Difficulty (Optional)"
                    onChange={(event) => setEventDifficulty(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    {EventGenerator.DIFFICULTY_OPTIONS.map((difficulty) => (
                      <MuiMenuItem key={difficulty} value={difficulty}>
                        {difficulty[0].toUpperCase() + difficulty.slice(1)}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateEvent}>Generate Event</Button>
          </Stack>

          {generatedEvent && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Event Details</Typography>
                {generatedEvent.error ? (
                  <Typography color="error.main">{generatedEvent.error}</Typography>
                ) : (
                  <>
                    <Typography variant="subtitle1">Event: {generatedEvent.event}</Typography>
                    {generatedEvent.city ? (
                      <Typography variant="body2">
                        City: {(EventGenerator.CITY_OPTIONS.find((entry) => entry.value === generatedEvent.city)?.label) || generatedEvent.city}
                      </Typography>
                    ) : (
                      <>
                        <Typography variant="body2">Habitat: {generatedEvent.habitat}</Typography>
                        <Typography variant="body2">Mana Zone: {generatedEvent.manaZone}</Typography>
                      </>
                    )}
                    <Typography variant="body2">Party Goal: {generatedEvent.goal}</Typography>
                    <Typography variant="body2">Difficulty: {generatedEvent.difficulty}</Typography>
                    {generatedEvent.note && (
                      <Typography variant="body2" color="warning.main">{generatedEvent.note}</Typography>
                    )}
                  </>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Item Generator</Typography>
            <Typography variant="body2">
              Choose tier with optional type/rarity filters. Type and rarity weights are hardcoded.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="item-tier-select-label">Tier</InputLabel>
                  <Select
                    labelId="item-tier-select-label"
                    value={itemTier}
                    label="Tier"
                    onChange={(event) => setItemTier(event.target.value)}
                  >
                    {ItemGenerator.LEVEL_TIER_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="item-party-select-label">Party</InputLabel>
                  <Select
                    labelId="item-party-select-label"
                    value={itemPartyName}
                    label="Party"
                    onChange={(event) => setItemPartyName(event.target.value)}
                  >
                    {parties.map((entry) => (
                      <MuiMenuItem key={`item-party-${entry.name}`} value={entry.name}>
                        {entry.name} (Level {entry.level})
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="item-type-filter-label">Type (Optional)</InputLabel>
                  <Select
                    labelId="item-type-filter-label"
                    value={itemTypeFilter}
                    label="Type (Optional)"
                    onChange={(event) => setItemTypeFilter(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    <MuiMenuItem value="normal">Normal</MuiMenuItem>
                    <MuiMenuItem value="magic">Magic</MuiMenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="item-rarity-filter-label">Rarity (Optional)</InputLabel>
                  <Select
                    labelId="item-rarity-filter-label"
                    value={itemRarityFilter}
                    label="Rarity (Optional)"
                    onChange={(event) => setItemRarityFilter(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    {ItemGenerator.RARITY_ORDER.map((rarity) => (
                      <MuiMenuItem key={rarity} value={rarity}>
                        {rarity[0].toUpperCase() + rarity.slice(1)}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateItem}>
              Generate Item
            </Button>
          </Stack>

          {generatedItem && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Item Details</Typography>
                <Typography variant="subtitle1">{generatedItem.item}</Typography>
                <Typography variant="body2">Details: {generatedItem.details}</Typography>
                {generatedItem.damage && <Typography variant="body2">Damage: {generatedItem.damage}</Typography>}
                <Typography variant="body2">Level Group: {ItemGenerator.getLevelGroupLabel(itemTier)}</Typography>
                <Typography variant="body2">Tier: {itemTier}</Typography>
                <Typography variant="body2">
                  Party: {generatedItem.selectedPartyName} (Level {generatedItem.selectedPartyLevel})
                </Typography>
                <Typography variant="body2">Type: {generatedItem.type}</Typography>
                <Typography variant="body2">Rarity: {generatedItem.rarity}</Typography>
                <Typography variant="body2">Size: {generatedItem.size || 'unknown'}</Typography>
                {generatedItem.note && (
                  <Typography variant="body2" color="error.main">
                    {generatedItem.note}
                  </Typography>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>NPC Generator</Typography>
            <Typography variant="body2">
              Set habitat and optionally attitude, then generate a complete NPC profile.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="npc-habitat-select-label">Habitat (Optional)</InputLabel>
                  <Select
                    labelId="npc-habitat-select-label"
                    value={npcHabitat}
                    label="Habitat (Optional)"
                    onChange={(event) => setNpcHabitat(event.target.value)}
                  >
                    {NpcGenerator.HABITAT_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>{option.label}</MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="npc-attitude-select-label">Attitude (Optional)</InputLabel>
                  <Select
                    labelId="npc-attitude-select-label"
                    value={npcAttitude}
                    label="Attitude (Optional)"
                    onChange={(event) => setNpcAttitude(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Random)</MuiMenuItem>
                    {NpcGenerator.npcOptions.hostility.map((entry) => (
                      <MuiMenuItem key={entry.attitude} value={entry.attitude}>
                        {entry.attitude}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="npc-gender-select-label">Gender (Optional)</InputLabel>
                  <Select
                    labelId="npc-gender-select-label"
                    value={npcGender}
                    label="Gender (Optional)"
                    onChange={(event) => setNpcGender(event.target.value)}
                  >
                    {NpcGenerator.GENDER_OPTIONS.map((entry) => (
                      <MuiMenuItem key={entry.value || 'npc-gender-auto'} value={entry.value}>
                        {entry.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="npc-race-select-label">Race (Optional)</InputLabel>
                  <Select
                    labelId="npc-race-select-label"
                    value={npcRace}
                    label="Race (Optional)"
                    onChange={(event) => setNpcRace(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    {NpcGenerator.RACE_OPTIONS.map((entry) => (
                      <MuiMenuItem key={entry.value} value={entry.value}>
                        {entry.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="npc-class-select-label">Class (Optional)</InputLabel>
                  <Select
                    labelId="npc-class-select-label"
                    value={npcClass}
                    label="Class (Optional)"
                    onChange={(event) => setNpcClass(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto (Weighted)</MuiMenuItem>
                    {NpcGenerator.CLASS_OPTIONS.map((entry) => (
                      <MuiMenuItem key={entry.value} value={entry.value}>
                        {entry.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateNpc}>Generate NPC</Button>
            <Button variant="outlined" onClick={generateRumor}>Generate Rumor</Button>
          </Stack>

          {generatedNpc && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.75} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">NPC Details</Typography>
                <Typography variant="subtitle1">{generatedNpc.name}</Typography>
                <Typography variant="body2">Gender: {generatedNpc.gender}</Typography>
                <Typography variant="body2">Race: {generatedNpc.race}</Typography>
                <Typography variant="body2">Class: {generatedNpc.characterClass}</Typography>
                <Typography variant="body2">Age: {generatedNpc.age}</Typography>
                <Typography variant="body2">Profession: {generatedNpc.profession}</Typography>
                <Typography variant="body2">Habitat: {generatedNpc.habitat}</Typography>
                <Typography variant="body2">Motivation: {generatedNpc.motivation}</Typography>
                <Typography variant="body2">
                  Hostility: {generatedNpc.attitude} (Social checks: {generatedNpc.socialChecks}, DC {generatedNpc.dc})
                </Typography>
                <Typography variant="body2">Physical quirk: {generatedNpc.physicalQuirk}</Typography>
                <Typography variant="body2">Personality quirk: {generatedNpc.personalityQuirk}</Typography>
              </Stack>
            </Paper>
          )}

          {generatedRumor && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 160,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.75} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Rumor</Typography>
                <Typography variant="body2">{generatedRumor}</Typography>
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={11}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Quest Generator</Typography>
            <Typography variant="body2">
              Select party and optional filters to generate a quest with reward output.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="quest-party-select-label">Party</InputLabel>
                  <Select
                    labelId="quest-party-select-label"
                    value={questPartyName}
                    label="Party"
                    onChange={(event) => setQuestPartyName(event.target.value)}
                  >
                    {parties.map((entry) => (
                      <MuiMenuItem key={`quest-party-${entry.name}`} value={entry.name}>
                        {entry.name} (Level {entry.level})
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="quest-type-select-label">Quest Type (Optional)</InputLabel>
                  <Select
                    labelId="quest-type-select-label"
                    value={questType}
                    label="Quest Type (Optional)"
                    onChange={(event) => setQuestType(event.target.value)}
                  >
                    {QuestGenerator.QUEST_TYPE_OPTIONS.map((entry) => (
                      <MuiMenuItem key={entry.value || 'auto-quest-type'} value={entry.value}>
                        {entry.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="quest-habitat-select-label">Habitat (Optional)</InputLabel>
                  <Select
                    labelId="quest-habitat-select-label"
                    value={questHabitat}
                    label="Habitat (Optional)"
                    onChange={(event) => setQuestHabitat(event.target.value)}
                  >
                    {NpcGenerator.HABITAT_OPTIONS.map((entry) => (
                      <MuiMenuItem key={entry.value || 'any-quest-habitat'} value={entry.value}>
                        {entry.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="quest-difficulty-select-label">Difficulty (Optional)</InputLabel>
                  <Select
                    labelId="quest-difficulty-select-label"
                    value={questDifficulty}
                    label="Difficulty (Optional)"
                    onChange={(event) => setQuestDifficulty(event.target.value)}
                  >
                    <MuiMenuItem value="">Auto</MuiMenuItem>
                    <MuiMenuItem value="easy">Easy</MuiMenuItem>
                    <MuiMenuItem value="standard">Standard</MuiMenuItem>
                    <MuiMenuItem value="deadly">Deadly</MuiMenuItem>
                    <MuiMenuItem value="epic">Epic</MuiMenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="quest-reward-select-label">Reward (Optional)</InputLabel>
                  <Select
                    labelId="quest-reward-select-label"
                    value={questRewardType}
                    label="Reward (Optional)"
                    onChange={(event) => setQuestRewardType(event.target.value)}
                  >
                    <MuiMenuItem value="">Default</MuiMenuItem>
                    <MuiMenuItem value="item">Item</MuiMenuItem>
                    <MuiMenuItem value="gold">Gold</MuiMenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateQuest}>Generate Quest</Button>
          </Stack>

          {generatedQuest && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.75} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Quest Details</Typography>
                <Typography variant="body2">
                  Party: {generatedQuest.selectedPartyName} (Level {generatedQuest.selectedPartyLevel})
                </Typography>
                <Typography variant="body2">Habitat: {generatedQuest.habitat}</Typography>
                <Typography variant="body2">Type: {generatedQuest.type}</Typography>
                <Typography variant="body2">Details: {generatedQuest.details}</Typography>
                <Typography variant="body2">Difficulty: {generatedQuest.difficulty}</Typography>
                <Typography variant="body2">Reward: {generatedQuest.reward}</Typography>
                {generatedQuest.rewardItem && (
                  <Paper sx={{ p: 1.25, mt: 0.5 }} variant="outlined">
                    <Typography variant="subtitle2">{generatedQuest.rewardItem.item}</Typography>
                    <Typography variant="body2">Details: {generatedQuest.rewardItem.details || 'No details provided.'}</Typography>
                    {generatedQuest.rewardItem.effects && (
                      <Typography variant="body2">Effects: {generatedQuest.rewardItem.effects}</Typography>
                    )}
                    {generatedQuest.rewardItem.damage && (
                      <Typography variant="body2">Damage: {generatedQuest.rewardItem.damage}</Typography>
                    )}
                    <Typography variant="body2">Cost: {generatedQuest.rewardItem.cost}</Typography>
                    <Typography variant="body2">Rarity: {generatedQuest.rewardItem.rarity}</Typography>
                    <Typography variant="body2">Type: {generatedQuest.rewardItem.type}</Typography>
                    <Typography variant="body2">Size: {generatedQuest.rewardItem.size || 'unknown'}</Typography>
                  </Paper>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Shops Generator</Typography>
            <Typography variant="body2">
              Select a shop, type, location, and party mastery level to generate a shop inventory.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="shop-select-label">Shop (Optional)</InputLabel>
                  <Select
                    labelId="shop-select-label"
                    value={selectedShop}
                    label="Shop (Optional)"
                    onChange={(event) => setSelectedShop(event.target.value)}
                  >
                    {ShopGenerator.SHOP_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'random-known-shop'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="shop-type-select-label">Shop Type (Optional)</InputLabel>
                  <Select
                    labelId="shop-type-select-label"
                    value={shopType}
                    label="Shop Type (Optional)"
                    onChange={(event) => setShopType(event.target.value)}
                  >
                    {ShopGenerator.SHOP_TYPE_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-shop-type'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="shop-location-select-label">Location (Optional)</InputLabel>
                  <Select
                    labelId="shop-location-select-label"
                    value={shopLocation}
                    label="Location (Optional)"
                    onChange={(event) => setShopLocation(event.target.value)}
                  >
                    {ShopGenerator.LOCATION_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-shop-location'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="shop-party-mastery-select-label">Party Mastery Level (Optional)</InputLabel>
                  <Select
                    labelId="shop-party-mastery-select-label"
                    value={shopPartyMasteryLevel}
                    label="Party Mastery Level (Optional)"
                    onChange={(event) => setShopPartyMasteryLevel(event.target.value)}
                  >
                    {ShopGenerator.PARTY_MASTERY_LEVEL_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="shop-party-select-label">Party</InputLabel>
                  <Select
                    labelId="shop-party-select-label"
                    value={shopPartyName}
                    label="Party"
                    onChange={(event) => setShopPartyName(event.target.value)}
                  >
                    {parties.map((entry) => (
                      <MuiMenuItem key={`shop-party-${entry.name}`} value={entry.name}>
                        {entry.name} (Level {entry.level})
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateShop}>Generate Shop</Button>
          </Stack>

          {generatedShop && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.5} sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                  <Typography variant="h6">Shop Details</Typography>
                  <Stack direction="column" spacing={0.75} alignItems="flex-end">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => setIsShopAddItemDialogOpen(true)}
                    >
                      Add Item
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={regenerateShopInventory}
                    >
                      Generate
                    </Button>
                  </Stack>
                </Box>
                <Typography variant="subtitle1">{generatedShop.shop}</Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>
                  Source: {generatedShop.source === 'known-shop' ? 'Known shop' : 'Random location shop'}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>
                  Party Mastery Level: {generatedShop.partyMasteryLevel}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>
                  Party: {generatedShop.selectedPartyName} (Level {generatedShop.selectedPartyLevel})
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>Location: {generatedShop.location}</Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>Shop Details: {generatedShop.shopDetails}</Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15 }}>Owner: {generatedShop.owner}</Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.15, mb: '0.25in' }}>
                  Owner Details: {generatedShop.ownerDetails}
                </Typography>
                {generatedShop.locations && generatedShop.locations.length > 0 && (
                  <Typography variant="body2" sx={{ lineHeight: 1.15 }}>
                    Known Locations: {generatedShop.locations.join(', ')}
                  </Typography>
                )}

                <Box
                  sx={{
                    mt: 1,
                    pt: '0.18in',
                  }}
                >
                  {sortedShopInventory.map((entry, index) => (
                    <Paper
                      key={`${generatedShop.shop}-${entry.item}-${index}`}
                      sx={{ p: 1.25, mt: index === 0 ? 0 : 0.75, position: 'relative', pr: 11 }}
                      variant="outlined"
                    >
                    <Stack
                      spacing={0}
                      sx={{
                        textAlign: 'right',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        lineHeight: 1,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Qty: {entry.quantity}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Cost: {entry.cost}</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1, m: 0, p: 0 }}>
                      {entry.item}
                    </Typography>
                    <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                      Details: {entry.details}
                    </Typography>
                    {entry.damage && (
                      <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                        Damage: {entry.damage}
                      </Typography>
                    )}
                    {entry.effects && (
                      <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                        Effects: {entry.effects}
                      </Typography>
                    )}
                    {entry.rarity && <Typography variant="body2">Rarity: {entry.rarity}</Typography>}
                    <Typography variant="body2">Type: {entry.type}</Typography>
                    <Typography variant="body2">Size: {entry.size || 'unknown'}</Typography>
                  </Paper>
                  ))}
                </Box>
              </Stack>
            </Paper>
          )}
        </Box>
        <Dialog
          open={isShopAddItemDialogOpen}
          onClose={() => {
            setIsShopAddItemDialogOpen(false);
            setShopAddItemQuery('');
          }}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={1.25}>
              <TextField
                label="Search Item Name"
                value={shopAddItemQuery}
                onChange={(event) => setShopAddItemQuery(event.target.value)}
                fullWidth
                autoFocus
              />
              {shopAddItemQuery.trim().length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  Type to search items by name.
                </Typography>
              ) : filteredShopAddItemResults.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  No matching items found.
                </Typography>
              ) : (
                <Stack spacing={1}>
                  {filteredShopAddItemResults.map((entry, idx) => (
                    <Paper key={`${entry.item}-${idx}`} variant="outlined" sx={{ p: 1.25 }}>
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">{entry.item}</Typography>
                        <Typography variant="body2">Details: {entry.details}</Typography>
                        <Typography variant="body2">Effects: {entry.effects || ''}</Typography>
                        <Box>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => addItemToGeneratedShop(entry)}
                          >
                            Select
                          </Button>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              )}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setIsShopAddItemDialogOpen(false);
                setShopAddItemQuery('');
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Spell Generator</Typography>
            <Typography variant="body2">
              Select color/class and mastery level, then generate a random spell match.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="spell-color-select-label">Color</InputLabel>
                  <Select
                    labelId="spell-color-select-label"
                    value={spellColor}
                    label="Color"
                    onChange={(event) => setSpellColor(event.target.value)}
                  >
                    {SpellGenerator.COLOR_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="spell-class-select-label">Class (Optional)</InputLabel>
                  <Select
                    labelId="spell-class-select-label"
                    value={spellClass}
                    label="Class (Optional)"
                    onChange={(event) => setSpellClass(event.target.value)}
                  >
                    {SpellGenerator.CLASS_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-spell-class'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="spell-mastery-select-label">Mastery Level</InputLabel>
                  <Select
                    labelId="spell-mastery-select-label"
                    value={spellMasteryLevel}
                    label="Mastery Level"
                    onChange={(event) => setSpellMasteryLevel(event.target.value)}
                  >
                    {SpellGenerator.MASTERY_LEVEL_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateSpell}>Generate Spell</Button>
            <Button variant="outlined" onClick={listSpells}>List Spells</Button>
            <Button variant="outlined" onClick={generateWildMagic}>Wild Magic</Button>
          </Stack>

          {(generatedSpell || listedSpells || generatedWildMagic) && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.8} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">
                  {listedSpells ? 'Spell List' : generatedWildMagic ? 'Wild Magic' : 'Spell Details'}
                </Typography>
                {(generatedSpell?.error || listedSpells?.error || generatedWildMagic?.error) ? (
                  <Typography color="error.main">{generatedSpell?.error || listedSpells?.error || generatedWildMagic?.error}</Typography>
                ) : listedSpells ? (
                  <>
                    <Typography variant="body2">
                      Mastery Level: {listedSpells.masteryLevel}
                    </Typography>
                    {listedSpells.selectedClass ? (
                      <Typography variant="body2">Class Filter: {listedSpells.selectedClass}</Typography>
                    ) : (
                      <Typography variant="body2">Color Filter: {listedSpells.color}</Typography>
                    )}
                    <Typography variant="body2">Total Matches: {listedSpells.spells.length}</Typography>
                    <Box sx={{ mt: 1, display: 'grid', gap: 0.75 }}>
                      {listedSpells.spells.map((spell, idx) => (
                        <Paper key={`listed-spell-${spell.name}-${idx}`} variant="outlined" sx={{ p: 1 }}>
                          <Typography variant="subtitle2">{spell.name}</Typography>
                          <Typography variant="body2">Class: {spell.class}</Typography>
                          <Typography variant="body2">Colors: {(spell.colors || []).join(', ')}</Typography>
                          <Typography variant="body2">Type: {spell.type}</Typography>
                          <Typography variant="body2">Duration: {spell.duration}</Typography>
                          <Typography variant="body2">Distance: {spell.distance}</Typography>
                          {spell.damage && <Typography variant="body2">Damage: {spell.damage}</Typography>}
                          {spell.effects && <Typography variant="body2">Effects: {spell.effects}</Typography>}
                          {spell.conditions && <Typography variant="body2">Conditions: {spell.conditions}</Typography>}
                          {spell.pure && <Typography variant="body2">Pure: {spell.pure}</Typography>}
                        </Paper>
                      ))}
                    </Box>
                  </>
                ) : generatedWildMagic ? (
                  <Typography variant="body2">{String(generatedWildMagic.effect || generatedWildMagic)}</Typography>
                ) : (
                  <>
                    <Typography variant="subtitle1">{generatedSpell.name}</Typography>
                    <Typography variant="body2">Mastery Level: {generatedSpell.masteryLevel}</Typography>
                    <Typography variant="body2">Class: {generatedSpell.class}</Typography>
                    <Typography variant="body2">Colors: {generatedSpell.colors.join(', ')}</Typography>
                    <Typography variant="body2">Type: {generatedSpell.type}</Typography>
                    <Typography variant="body2">Duration: {generatedSpell.duration}</Typography>
                    <Typography variant="body2">Distance: {generatedSpell.distance}</Typography>
                    {generatedSpell.damage && <Typography variant="body2">Damage: {generatedSpell.damage}</Typography>}
                    {generatedSpell.effects && <Typography variant="body2">Effects: {generatedSpell.effects}</Typography>}
                    {generatedSpell.conditions && <Typography variant="body2">Conditions: {generatedSpell.conditions}</Typography>}
                    {generatedSpell.pure && <Typography variant="body2">Pure: {generatedSpell.pure}</Typography>}
                  </>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={6}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Stack
            spacing={2}
            sx={{
              flex: '0 0 34%',
              minWidth: 300,
              maxWidth: 520,
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Location Generator</Typography>
            <Typography variant="body2">
              Optionally select a location type and habitat, then generate a location profile.
            </Typography>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="location-type-select-label">Type (Optional)</InputLabel>
                  <Select
                    labelId="location-type-select-label"
                    value={locationType}
                    label="Type (Optional)"
                    onChange={(event) => setLocationType(event.target.value)}
                  >
                    {LocationGenerator.TYPE_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-location-type'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="location-habitat-select-label">Habitat (Optional)</InputLabel>
                  <Select
                    labelId="location-habitat-select-label"
                    value={locationHabitat}
                    label="Habitat (Optional)"
                    onChange={(event) => setLocationHabitat(event.target.value)}
                  >
                    {LocationGenerator.HABITAT_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-location-habitat'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="location-mastery-select-label">Mastery Level (Optional)</InputLabel>
                  <Select
                    labelId="location-mastery-select-label"
                    value={locationMasteryLevel}
                    label="Mastery Level (Optional)"
                    onChange={(event) => setLocationMasteryLevel(event.target.value)}
                  >
                    {LocationGenerator.MASTERY_LEVEL_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-location-mastery'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="location-party-select-label">Party</InputLabel>
                  <Select
                    labelId="location-party-select-label"
                    value={locationPartyName}
                    label="Party"
                    onChange={(event) => setLocationPartyName(event.target.value)}
                  >
                    {parties.map((entry) => (
                      <MuiMenuItem key={`location-party-${entry.name}`} value={entry.name}>
                        {entry.name} (Level {entry.level})
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            <Button variant="contained" onClick={generateLocation}>Generate Location</Button>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Dungeon Generator</Typography>
                <FormControl fullWidth>
                  <InputLabel id="dungeon-type-select-label">Type (Optional)</InputLabel>
                  <Select
                    labelId="dungeon-type-select-label"
                    value={dungeonType}
                    label="Type (Optional)"
                    onChange={(event) => setDungeonType(event.target.value)}
                  >
                    {DungeonGenerator.TYPE_OPTIONS.map((option) => (
                      <MuiMenuItem key={option.value || 'any-dungeon-type'} value={option.value}>
                        {option.label}
                      </MuiMenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  type="number"
                  label="Number of Levels (Optional)"
                  value={dungeonLevels}
                  onChange={(event) => setDungeonLevels(event.target.value)}
                  inputProps={{ min: 1, max: 3 }}
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Rooms (Optional)"
                  value={dungeonRooms}
                  onChange={(event) => setDungeonRooms(event.target.value)}
                  inputProps={{ min: 1, max: 12 }}
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Encounters (Optional)"
                  value={dungeonEncounters}
                  onChange={(event) => setDungeonEncounters(event.target.value)}
                  inputProps={{ min: 0 }}
                />
              </Stack>
            </Paper>

            <Button variant="outlined" onClick={generateDungeon}>Generate Dungeon</Button>
          </Stack>

          {locationPanelMode === 'location' && generatedLocation && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.8} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Location Details</Typography>
                <Typography variant="body2">Habitat: {generatedLocation.habitat}</Typography>
                <Typography variant="body2">Type: {generatedLocation.type}</Typography>
                <Typography variant="body2">Mastery Level: {generatedLocation.masteryLevel}</Typography>
                <Typography variant="body2">
                  Party: {generatedLocation.selectedPartyName} (Level {generatedLocation.selectedPartyLevel})
                </Typography>
                <Typography variant="body2">Inhabitants: {generatedLocation.inhabitants}</Typography>
                <Typography variant="body2">Races: {JSON.stringify(generatedLocation.races)}</Typography>
                <Typography variant="body2">Rooms: {generatedLocation.rooms}</Typography>
                <Box
                  sx={{
                    mt: 1,
                    pt: '0.18in',
                  }}
                >
                  {(generatedLocation.items || [])
                    .slice()
                    .sort((a, b) => {
                      const rarityDelta = (SHOP_RARITY_ORDER[a.rarity] ?? 99) - (SHOP_RARITY_ORDER[b.rarity] ?? 99);
                      if (rarityDelta !== 0) {
                        return rarityDelta;
                      }
                      return String(a.item).localeCompare(String(b.item));
                    })
                    .map((entry, index) => (
                      <Paper
                        key={`location-item-${entry.item}-${index}`}
                        sx={{ p: 1.25, mt: index === 0 ? 0 : 0.75, position: 'relative', pr: 11 }}
                        variant="outlined"
                      >
                        <Stack
                          spacing={0}
                          sx={{
                            textAlign: 'right',
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            lineHeight: 1,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>Qty: {entry.quantity}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>Cost: {entry.cost}</Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1, m: 0, p: 0 }}>
                          {entry.item}
                        </Typography>
                        <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                          Details: {entry.details}
                        </Typography>
                        {entry.damage && (
                          <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                            Damage: {entry.damage}
                          </Typography>
                        )}
                        {entry.effects && (
                          <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                            Effects: {entry.effects}
                          </Typography>
                        )}
                        {entry.rarity && <Typography variant="body2">Rarity: {entry.rarity}</Typography>}
                        <Typography variant="body2">Type: {entry.type}</Typography>
                      </Paper>
                    ))}
                </Box>
              </Stack>
            </Paper>
          )}

          {locationPanelMode === 'dungeon' && generatedDungeon && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 66%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={0.8} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Dungeon Details</Typography>
                <Typography variant="body2">Type: {generatedDungeon.type}</Typography>
                <Typography variant="body2">Levels: {generatedDungeon.levels}</Typography>
                <Typography variant="body2">Rooms: {generatedDungeon.rooms}</Typography>
                <Typography variant="body2">Encounters: {generatedDungeon.encounters}</Typography>
                <Typography variant="body2">Traps: {(generatedDungeon.traps || []).length}</Typography>
                {(generatedDungeon.traps || []).length > 0 && (
                  <Typography variant="body2">
                    Trap Types: {generatedDungeon.traps.map((trap) => `${trap.type} (L${trap.level} R${String(trap.roomId).padStart(2, '0')})`).join(', ')}
                  </Typography>
                )}

                <Box
                  sx={{
                    mt: 1,
                    pt: '0.18in',
                  }}
                >
                  {(generatedDungeon.items || [])
                    .slice()
                    .sort((a, b) => {
                      const rarityDelta = (SHOP_RARITY_ORDER[a.rarity] ?? 99) - (SHOP_RARITY_ORDER[b.rarity] ?? 99);
                      if (rarityDelta !== 0) {
                        return rarityDelta;
                      }
                      return String(a.item).localeCompare(String(b.item));
                    })
                    .map((entry, index) => (
                      <Paper
                        key={`dungeon-item-${entry.item}-${index}`}
                        sx={{ p: 1.25, mt: index === 0 ? 0 : 0.75, position: 'relative', pr: 11 }}
                        variant="outlined"
                      >
                        <Stack
                          spacing={0}
                          sx={{
                            textAlign: 'right',
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            lineHeight: 1,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>Qty: {entry.quantity}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>Cost: {entry.cost}</Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.1, m: 0, p: 0 }}>
                          {entry.item}
                        </Typography>
                        <Typography variant="body2" sx={{ m: 0, p: 0, lineHeight: 1.1 }}>
                          Details: {entry.details}
                        </Typography>
                        {entry.rarity && <Typography variant="body2">Rarity: {entry.rarity}</Typography>}
                        <Typography variant="body2">Type: {entry.type}</Typography>
                      </Paper>
                    ))}
                </Box>
                {generatedDungeon.visual && (
                  <Paper sx={{ p: 1.25, mt: 1 }} variant="outlined">
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Dungeon Visual</Typography>
                    <Typography
                      component="pre"
                      variant="body2"
                      sx={{
                        m: 0,
                        whiteSpace: 'pre-wrap',
                        fontFamily: "'Courier New', Courier, monospace",
                        lineHeight: 1.3,
                      }}
                    >
                      {generatedDungeon.visual}
                    </Typography>
                  </Paper>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={7}>
        <Stack spacing={2} sx={{ minWidth: 480, maxWidth: 900, textAlign: 'left' }}>
          <Typography variant="h6">Search</Typography>
          <Typography variant="body2">
            Search by key name from your predefined catalogue.
          </Typography>

          <Paper sx={{ p: 2 }} variant="outlined">
            <TextField
              fullWidth
              label="Search Catalogue Key"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Paper>

          {normalizedSearchQuery.length === 0 ? (
            <Typography variant="body2">Start typing to search...</Typography>
          ) : searchMatches.length === 0 ? (
            <Typography variant="body2">No matching entries found.</Typography>
          ) : (
            searchMatches.map(([key, details]) => (
              <Paper key={key} sx={{ p: 2 }} variant="outlined">
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {key}
                </Typography>
                {Object.entries(details).map(([detailKey, detailValue]) => (
                  <Typography key={`${key}-${detailKey}`} variant="body2">
                    {detailKey}: {String(detailValue)}
                  </Typography>
                ))}
              </Paper>
            ))
          )}
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={8}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Paper
            sx={{
              p: 2,
              flex: '0 0 42%',
              minWidth: 320,
              maxWidth: 620,
              textAlign: 'left',
            }}
            variant="outlined"
          >
            <Stack spacing={1}>
              <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Maths</Typography>
              <Typography variant="body2">
                Click a calculation to view its formula.
              </Typography>
              {Object.entries(CALCULATIONS_CATALOGUE).map(([type, entries]) => (
                <Box key={type} sx={{ mt: 0.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                    {type}
                  </Typography>
                  <Stack spacing={0.4} sx={{ mt: 0.4 }}>
                    {entries.map((entry) => (
                      <Button
                        key={entry.id}
                        variant={selectedCalculation?.id === entry.id ? 'contained' : 'outlined'}
                        onClick={() => setSelectedCalculation({ ...entry, type })}
                        sx={{
                          justifyContent: 'flex-start',
                          borderColor: 'rgba(0,0,0,0.18)',
                        }}
                      >
                        {entry.name}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Paper>

          {selectedCalculation && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 58%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">{selectedCalculation.name}</Typography>
                <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                  Type: {selectedCalculation.type}
                </Typography>
                <Paper sx={{ p: 1.5 }} variant="outlined">
                  <Typography variant="subtitle2">Formula</Typography>
                  <Typography variant="body2">{selectedCalculation.formula}</Typography>
                </Paper>
                {selectedCalculation.notes && (
                  <Typography variant="body2">Notes: {selectedCalculation.notes}</Typography>
                )}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={9}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', minWidth: 0, maxWidth: '100%' }}>
          <Paper
            sx={{
              p: 2,
              flex: '0 0 42%',
              minWidth: 320,
              maxWidth: 620,
              textAlign: 'left',
            }}
            variant="outlined"
          >
            <Stack spacing={1}>
              <Typography variant="h6" sx={GENERATOR_TITLE_SX}>Misc</Typography>
              <Typography variant="body2">
                Select a reminder topic to view full details.
              </Typography>
              {Object.entries(REMINDERS_CATALOGUE).map(([key, entry]) => (
                <Button
                  key={key}
                  variant={selectedReminder?.key === key ? 'contained' : 'outlined'}
                  onClick={() => setSelectedReminder({ key, ...entry })}
                  sx={{ justifyContent: 'flex-start', borderColor: 'rgba(0,0,0,0.18)' }}
                >
                  {entry.title}
                </Button>
              ))}
            </Stack>
          </Paper>

          {selectedReminder && (
            <Paper
              sx={{
                p: 2,
                flex: '1 1 58%',
                minWidth: 0,
                minHeight: 280,
                width: '100%',
              }}
              variant="outlined"
            >
              <Stack spacing={1} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">{selectedReminder.title}</Typography>
                {selectedReminder.key === 'gold_reward' ? (
                  <>
                    {(selectedReminder.details || []).map((line, idx) => (
                      <Typography key={`${selectedReminder.key}-intro-${idx}`} variant="body2" sx={{ fontWeight: 700 }}>
                        {line}
                      </Typography>
                    ))}
                    <Box sx={{ overflowX: 'auto' }}>
                      <Box
                        component="table"
                        sx={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          mt: 0.5,
                          '& th, & td': {
                            border: '1px solid rgba(0,0,0,0.2)',
                            px: 1,
                            py: 0.5,
                            textAlign: 'left',
                          },
                          '& th': {
                            fontWeight: 700,
                            backgroundColor: 'rgba(0,0,0,0.04)',
                          },
                        }}
                      >
                        <thead>
                          <tr>
                            <th>Level</th>
                            <th>Easy</th>
                            <th>Moderate</th>
                            <th>Hard</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedReminder.chart || []).map((row) => (
                            <tr key={`gold-reward-row-${row.level}`}>
                              <td>{row.level}</td>
                              <td>{row.easy}</td>
                              <td>{row.moderate}</td>
                              <td>{row.hard}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Box>
                    </Box>
                  </>
                ) : selectedReminder.details.map((line, idx) => (
                  <Typography key={`${selectedReminder.key}-${idx}`} variant="body2">
                    {(() => {
                      if (typeof line !== 'string') {
                        return `${line.name}: ${line.details}`;
                      }

                      if (
                        selectedReminder.key === 'combat_actions'
                        && (line === 'ACTIONS' || line === 'BONUS ACTIONS')
                      ) {
                        return <Box component="span" sx={{ textDecoration: 'underline' }}>{line}</Box>;
                      }

                      if (
                        selectedReminder.key === 'conditions'
                        || selectedReminder.key === 'mechanics'
                        || selectedReminder.key === 'combat_actions'
                      ) {
                        const colonIndex = line.indexOf(':');
                        if (colonIndex > 0) {
                          const itemName = line.slice(0, colonIndex);
                          const details = line.slice(colonIndex + 1);
                          return (
                            <>
                              <Box component="span" sx={{ fontWeight: 700 }}>{itemName}</Box>
                              :{details}
                            </>
                          );
                        }
                      }

                      if (
                        selectedReminder.key === 'death_resurrection'
                        && (line === 'Death' || line === 'Party Aid' || line === 'Progression' || line === 'Resurrection')
                      ) {
                        return <Box component="span" sx={{ fontWeight: 700 }}>{line}</Box>;
                      }

                      if (
                        selectedReminder.key === 'services_vehicles'
                        && (
                          line === 'Services (SRD)'
                          || line === 'Mounts and Other Animals'
                          || line === 'Tack, Harness, and Drawn Vehicles'
                          || line === 'Waterborne Vehicles'
                        )
                      ) {
                        return <Box component="span" sx={{ fontWeight: 700 }}>{line}</Box>;
                      }

                      if (
                        selectedReminder.key === 'rest_exhaustion'
                        && (
                          line === 'Short Rest'
                          || line === 'Long Rest'
                          || line === 'Interrupting the Rest'
                          || line === 'Exhaustion'
                        )
                      ) {
                        return <Box component="span" sx={{ fontWeight: 700 }}>{line}</Box>;
                      }

                      if (
                        selectedReminder.key === 'stealth_surprise'
                        && (line === 'Stealth' || line === 'Hide (Action)' || line === 'Surprise')
                      ) {
                        return <Box component="span" sx={{ fontWeight: 700 }}>{line}</Box>;
                      }

                      return line;
                    })()}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          )}
        </Box>
      </TabPanel>
    </Box>
  );
}
