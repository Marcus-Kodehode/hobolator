'use client';

import Image from 'next/image';

export default function ShopItemCard({ item, onBuy }) {
  return (
    <div className="flex flex-col items-center justify-between h-48 p-2 border rounded bg-zinc-800 border-zinc-700">
      <Image src={item.image} alt={item.name} width={64} height={64} />
      <div className="mt-1 text-xs text-center">{item.name}</div>
      <div className="text-xs text-green-400">${item.value.toFixed(2)}</div>
      <button
        onClick={() => onBuy(item)}
        className="w-full px-2 py-1 mt-1 text-xs font-semibold text-black bg-yellow-400 rounded hover:bg-yellow-300"
      >
        Buy
      </button>
    </div>
  );
}
