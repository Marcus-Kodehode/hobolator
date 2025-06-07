'use client';

import PlayerItemCard from './PlayerItemCard';

export default function PlayerInventory({ playerInventory, onSell }) {
  const categorizedPlayer = {
    equipment: [],
    consumables: [],
    junk: [],
  };

  for (const item of playerInventory) {
    if (item.slot === 'consumable') categorizedPlayer.consumables.push(item);
    else if (item.slot === 'junk') categorizedPlayer.junk.push(item);
    else categorizedPlayer.equipment.push(item);
  }

  return (
    <div className="flex-1">
      <h3 className="mb-2 text-sm font-bold text-orange-300">Your Inventory</h3>
      {Object.entries(categorizedPlayer).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="mb-1 text-xs font-bold text-yellow-300 uppercase">{category}</h4>
          <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
              <PlayerItemCard key={item.id} item={item} onSell={onSell} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
