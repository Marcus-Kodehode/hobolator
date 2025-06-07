'use client';

import Image from 'next/image';

export default function PlayerItemCard({ item, onSell }) {
  const sellPrice = Math.max(item.value * 0.5, 0.01);

  return (
    <div className="flex flex-col items-center justify-between h-48 p-2 border rounded bg-zinc-800 border-zinc-700">
      <Image src={item.image} alt={item.name} width={64} height={64} />
      <div className="mt-1 text-xs text-center">{item.name}</div>
      <div className="text-xs text-green-400">Sell for ${sellPrice.toFixed(2)}</div>
      <div className="text-xs text-zinc-400">Qty: {item.quantity}</div>
      <button
        onClick={() => onSell(item)}
        className="w-full px-2 py-1 mt-1 text-xs font-semibold text-white bg-red-500 rounded hover:bg-red-400"
      >
        Sell
      </button>
    </div>
  );
}
