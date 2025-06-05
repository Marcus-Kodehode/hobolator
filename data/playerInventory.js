import { getItemById } from './items';
import { updateWeightStat } from './playerStats'; // 👈 Importér funksjonen

const STORAGE_KEY = 'playerInventory';

export function getPlayerInventory() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  const parsed = JSON.parse(raw);
  return parsed
    .map(({ id, quantity }) => {
      const item = getItemById(id);
      return item ? { ...item, quantity } : null;
    })
    .filter(Boolean);
}

export function addItemToInventory(id, amount = 1) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const index = existing.findIndex(item => item.id === id);

  if (index !== -1) {
    existing[index].quantity += amount;
  } else {
    existing.push({ id, quantity: amount });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  updateWeightStat(); // ✅ OPPDATER VEKT
}

export function removeItemFromInventory(id, amount = 1) {
  let existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existing = existing.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - amount };
    }
    return item;
  }).filter(item => item.quantity > 0);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  updateWeightStat(); // ✅ OPPDATER VEKT
}

export function setInventory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  updateWeightStat(); // ✅ OPPDATER VEKT
}
