'use client';

import { applyEffectsGlobal } from '../data/playerStats';
import { addItemToInventory, removeItemFromInventory } from '../data/playerInventory';

export default function applyEventOutcome(event) {
  // Stats
  if (event.effects) {
    applyEffectsGlobal(event.effects);

    // Legg til items om det finnes
    if (event.effects.items) {
      event.effects.items.forEach(id => {
        addItemToInventory(id, 1);
      });
    }

    // Fjern items om det finnes
    if (event.effects.removeItems) {
      event.effects.removeItems.forEach(id => {
        removeItemFromInventory(id, 1);
      });
    }
  }

  // Gamle (deprecated?) props:
  // Hvis du fortsatt bruker addItem/removeItem i noen få events kan du beholde disse:
  if (event.addItem) {
    addItemToInventory(event.addItem.id, event.addItem.amount || 1);
  }

  if (event.removeItem) {
    removeItemFromInventory(event.removeItem.id, event.removeItem.amount || 1);
  }

  // Penger
  if (event.money) {
    const current = parseFloat(localStorage.getItem('playerMoney') || '0');
    localStorage.setItem('playerMoney', (current + event.money).toFixed(2));
    window.dispatchEvent(new Event('playerStatsChanged'));
  }

  // Junk
  if (event.scrap) {
    const current = parseInt(localStorage.getItem('playerJunk') || '0');
    localStorage.setItem('playerJunk', current + event.scrap);
    window.dispatchEvent(new Event('playerStatsChanged'));
  }
}
