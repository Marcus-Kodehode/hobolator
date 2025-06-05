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

// 💡 Ny funksjon – kan brukes i utils/lib/event-filer
export function applyEffectsGlobal(effects = {}) {
  const getStat = (key) => parseInt(localStorage.getItem(key) || '100');
  const setStat = (key, value) => {
    const clamped = Math.max(0, Math.min(100, value));
    localStorage.setItem(key, clamped);
    window.dispatchEvent(new Event('playerStatsChanged'));
  };

  const current = {
    health: getStat('playerHealth'),
    stamina: getStat('playerStamina'),
    hygiene: getStat('playerHygiene'),
  };

  Object.entries(effects).forEach(([key, val]) => {
    const fullKey = `player${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    setStat(fullKey, current[key] + val);
  });
}

// ✅ Holder seg lik
export function updateWeightStat() {
  const items = getPlayerInventory();

  const totalWeight = items
    .filter(item => item.slot === 'junk')
    .reduce((acc, item) => acc + item.weight * item.quantity, 0);

  localStorage.setItem('playerCurrentWeight', totalWeight.toFixed(2));
  window.dispatchEvent(new Event('playerStatsChanged'));
  window.dispatchEvent(new Event('playerStatsChanged'));
}
