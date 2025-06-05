'use client';

import Image from 'next/image';

export default function HoboCampMenu({ onStreetsClick }) {
  const areas = [
    {
      id: 'sell-scrap',
      label: 'Scrappy Joes',
      image: '/images/areas/scrapyard.png',
      icon: '🔥',
      onClick: () => console.log('Sell Scrap'),
    },
    {
      id: 'trade-items',
      label: 'Trash for Treasure',
      image: '/images/areas/junktrader.png',
      icon: '💰',
      onClick: () => console.log('Trade Items'),
    },
    {
      id: 'streets',
      label: 'Hit the Streets',
      image: '/images/areas/streets.png',
      icon: '🚶',
      onClick: onStreetsClick, // ✅ Fungerer nå
    },
    {
      id: 'camp',
      label: 'Set up Camp',
      image: '/images/areas/campfire.png',
      icon: '⛺',
      onClick: () => console.log('Set up Camp'),
    },
  ];

  return (
    <div className="absolute z-40 flex flex-col w-56 gap-3 top-64 left-4">
      <h2 className="mb-2 text-sm font-bold text-white uppercase">Explore Area</h2>

      {areas.map((area) => (
        <button
          key={area.id}
          onClick={area.onClick}
          className="relative w-full h-20 overflow-hidden text-left transition bg-black border border-orange-500 rounded-md shadow group"
        >
          <Image
            src={area.image}
            alt={area.label}
            fill
            sizes="(max-width: 768px) 100vw, 224px"
            className="object-cover object-center transition duration-300 scale-100 opacity-80 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-0 z-20 flex items-center px-4 space-x-2">
            <span className="text-lg drop-shadow">{area.icon}</span>
            <span className="text-sm font-semibold text-white drop-shadow">{area.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
