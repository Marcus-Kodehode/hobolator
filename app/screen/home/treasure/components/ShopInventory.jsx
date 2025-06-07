'use client';

import ShopItemCard from './ShopItemCard';

export default function ShopInventory({ categorizedShop, onBuy }) {
  return (
    <div className="flex-1">
      <h3 className="mb-2 text-sm font-bold text-orange-300">Shop Inventory</h3>
      {Object.entries(categorizedShop).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="mb-1 text-xs font-bold text-yellow-300 uppercase">{category}</h4>
          <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
              <ShopItemCard key={item.id} item={item} onBuy={onBuy} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
