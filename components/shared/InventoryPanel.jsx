'use client';

import { useState, useEffect } from 'react';
import { getItemById } from '../../data/items';
import { usePlayerStats } from '../../data/playerStats';
import { FaTimes } from 'react-icons/fa';
import ItemCard from './ItemCard';
import ItemModal from './ItemModal';

export default function InventoryPanel({ onClose }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const { applyEffects } = usePlayerStats();

  useEffect(() => {
    const stored = localStorage.getItem('playerInventory');
    if (stored) {
      const inventory = JSON.parse(stored);
      const resolved = inventory.map(({ id, quantity }) => {
        const item = getItemById(id);
        return item ? { ...item, quantity } : null;
      }).filter(Boolean);
      setItems(resolved);
    }
  }, []);

  const handleUse = (item) => {
    if (!item.effects) return;

    // Bruk effekter
    applyEffects(item.effects);

    // Oppdater inventory
    const updated = items
      .map((obj) =>
        obj.id === item.id ? { ...obj, quantity: obj.quantity - 1 } : obj
      )
      .filter((obj) => obj.quantity > 0);

    localStorage.setItem('playerInventory', JSON.stringify(updated));
    setItems(updated);

    // Vis bekreftelsesmelding
    const effectText = Object.entries(item.effects)
      .map(([key, val]) => `${key}: ${val > 0 ? '+' : ''}${val}`)
      .join(', ');

    setToastMessage(`Used ${item.name} (${effectText})`);

    setTimeout(() => setToastMessage(''), 3000);
  };

  const categorized = {
    equipment: [],
    consumable: [],
    junk: [],
  };

  for (const item of items) {
    if (item.slot === 'consumable') categorized.consumable.push(item);
    else if (item.slot === 'junk') categorized.junk.push(item);
    else categorized.equipment.push(item);
  }

  return (
    <div className="absolute z-50 p-4 text-white border border-orange-500 rounded-md shadow-lg right-4 top-20 bg-black/70 backdrop-blur-sm w-96">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-orange-300">Your Inventory</h2>
        <button onClick={onClose} className="text-sm font-bold text-orange-400 hover:text-red-400">
          <FaTimes />
        </button>
      </div>

      {toastMessage && (
        <div className="absolute z-50 px-3 py-1 text-xs text-orange-200 transform -translate-x-1/2 border border-orange-500 rounded shadow top-1 left-1/2 bg-black/80">
          {toastMessage}
        </div>
      )}

      {['equipment', 'consumable', 'junk'].map((cat) => (
        categorized[cat].length > 0 && (
          <div key={cat} className="mb-4">
            <h3 className="text-xs font-semibold text-orange-200 capitalize">{cat}</h3>
            <div className="grid grid-cols-4 gap-2 mt-1">
              {categorized[cat].map(item => (
            <div key={item.id} className="flex flex-col items-center gap-1">
              <ItemCard item={item} onClick={setSelectedItem} />
              {cat === 'consumable' && (
                <button
                  onClick={() => handleUse(item)}
                  className="w-full text-[11px] font-semibold px-1 py-[2px] bg-orange-600 text-white rounded hover:bg-orange-500"
                >
                  Use
                </button>
              )}
            </div>

              ))}
            </div>
          </div>
        )
      ))}

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
