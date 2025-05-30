// app/data/playerStats.js

export function usePlayerStats() {
  const getStat = (key) => parseInt(localStorage.getItem(key) || '100');
  const setStat = (key, value) => localStorage.setItem(key, Math.max(0, Math.min(100, value)));

  const getAll = () => ({
    health: getStat('playerHealth'),
    stamina: getStat('playerStamina'),
    hygiene: getStat('playerHygiene'),
  });

  const applyEffects = (effects = {}) => {
    const current = getAll();

    Object.entries(effects).forEach(([key, val]) => {
      if (current[key] !== undefined) {
        setStat(`player${key.charAt(0).toUpperCase() + key.slice(1)}`, current[key] + val);
      }
    });
  };

  return { getAll, applyEffects };
}
