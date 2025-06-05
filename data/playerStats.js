import { getPlayerInventory } from './playerInventory';

// Hook – brukes i React-komponenter
export function usePlayerStats() {
  const getStat = (key) => parseInt(localStorage.getItem(key) || '100');
  const setStat = (key, value) => {
    const clamped = Math.max(0, Math.min(100, value));
    localStorage.setItem(key, clamped);
    window.dispatchEvent(new Event('playerStatsChanged'));
  };

  const getAll = () => ({
    health: getStat('playerHealth'),
    stamina: getStat('playerStamina'),
    hygiene: getStat('playerHygiene'),
  });

  const applyEffects = (effects = {}) => {
    const current = getAll();
    Object.entries(effects).forEach(([key, val]) => {
      const fullKey = `player${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      setStat(fullKey, current[key] + val);
    });
  };

  return { getAll, applyEffects };
}

// ✅ Global effekt-oppdatering (brukes av events)
export function applyEffectsGlobal(effects = {}) {
  const getStat = (key, fallback = 100) => parseFloat(localStorage.getItem(key) || fallback);
  const setStat = (key, value) => {
    const clamped = Math.max(0, Math.min(100, value));
    localStorage.setItem(key, clamped);
  };

  const current = {
    health: getStat('playerHealth'),
    stamina: getStat('playerStamina'),
    hygiene: getStat('playerHygiene'),
  };

  Object.entries(effects).forEach(([key, val]) => {
    const fullKey = `player${key.charAt(0).toUpperCase()}${key.slice(1)}`;

    switch (key) {
      case 'health':
      case 'stamina':
      case 'hygiene':
        setStat(fullKey, current[key] + val);
        break;

      case 'scrap': {
        const scrap = parseInt(localStorage.getItem('playerJunk') || '0');
        localStorage.setItem('playerJunk', scrap + val);
        break;
      }

      case 'money': {
        const money = parseFloat(localStorage.getItem('playerMoney') || '0');
        localStorage.setItem('playerMoney', (money + val).toFixed(2));
        break;
      }

      default:
        break;
    }
  });

  window.dispatchEvent(new Event('playerStatsChanged'));
}

// ✅ Brukes etter inventory-endringer for å oppdatere total vekt
export function updateWeightStat() {
  const items = getPlayerInventory();

  const totalWeight = items
    .filter(item => item.slot === 'junk')
    .reduce((acc, item) => acc + item.weight * item.quantity, 0);

  localStorage.setItem('playerCurrentWeight', totalWeight.toFixed(2));
  window.dispatchEvent(new Event('playerStatsChanged'));
}
