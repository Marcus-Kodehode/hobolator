'use client';

import { useEffect, useState } from 'react';

export default function StatusBars() {
  const [health, setHealth] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [hygiene, setHygiene] = useState(100);

  useEffect(() => {
    const h = parseInt(localStorage.getItem('playerHealth')) || 100;
    const s = parseInt(localStorage.getItem('playerStamina')) || 100;
    const hy = parseInt(localStorage.getItem('playerHygiene')) || 100;

    setHealth(h);
    setStamina(s);
    setHygiene(hy);
  }, []);

  const bars = [
    { label: 'Health', value: health, color: 'bg-red-500' },
    { label: 'Stamina', value: stamina, color: 'bg-yellow-400' },
    { label: 'Hygiene', value: hygiene, color: 'bg-blue-400' },
  ];

  return (
    <div className="absolute z-50 top-4 left-4">
      <div className="w-56 p-4 space-y-3 border border-orange-400 rounded-md shadow-md bg-black/60 backdrop-blur-sm">
        <h2 className="mb-1 text-sm font-bold text-orange-300">Status</h2>
        {bars.map(({ label, value, color }) => (
          <div key={label}>
            <div className="mb-1 text-xs text-white">{label}</div>
            <div className="w-full h-3 overflow-hidden rounded shadow-inner bg-zinc-800">
              <div
                className={`${color} h-full transition-all duration-300`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
