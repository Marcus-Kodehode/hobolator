import { getItemById } from './items';

const STORAGE_KEY = 'playerInventory';

// Hent spillerens inventory (med full item-info)
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

// Legg til item
export function addItemToInventory(id, amount = 1) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const index = existing.findIndex(item => item.id === id);

  if (index !== -1) {
    existing[index].quantity += amount;
  } else {
    existing.push({ id, quantity: amount });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

// Fjern item (kan være nyttig senere)
export function removeItemFromInventory(id, amount = 1) {
  let existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existing = existing.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - amount };
    }
    return item;
  }).filter(item => item.quantity > 0);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

// Sett helt nytt inventory (f.eks. ved start)
export function setInventory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
