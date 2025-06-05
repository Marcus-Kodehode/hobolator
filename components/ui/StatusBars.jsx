'use client';

import { useEffect, useState } from 'react';

export default function StatusBars() {
  const [stats, setStats] = useState({
    health: 100,
    stamina: 100,
    hygiene: 100,
    currentWeight: 0,
    maxWeight: 10,
  });

  const loadStats = () => {
    setStats({
      health: parseInt(localStorage.getItem('playerHealth')) || 100,
      stamina: parseInt(localStorage.getItem('playerStamina')) || 100,
      hygiene: parseInt(localStorage.getItem('playerHygiene')) || 100,
      currentWeight: parseFloat(localStorage.getItem('playerCurrentWeight')) || 0,
      maxWeight: parseFloat(localStorage.getItem('playerMaxWeight')) || 10,
    });
  };

  useEffect(() => {
    loadStats();
    window.addEventListener('playerStatsChanged', loadStats);
    return () => window.removeEventListener('playerStatsChanged', loadStats);
  }, []);

  const bars = [
    { label: 'Health', value: stats.health, color: 'bg-red-500' },
    { label: 'Stamina', value: stats.stamina, color: 'bg-yellow-400' },
    { label: 'Hygiene', value: stats.hygiene, color: 'bg-blue-400' },
  ];

  return (
    <div className="absolute z-50 top-4 left-4">
      <div className="w-56 p-4 space-y-3 border border-orange-400 rounded-md shadow-md bg-black/60 backdrop-blur-sm">
        <h2 className="mb-1 text-sm font-bold text-orange-300">Status</h2>

        {bars.map(({ label, value, color }) => (
          <div key={label}>
            <div className="flex justify-between mb-1 text-xs text-white">
              <span>{label}</span>
              <span>{value}/100</span>
            </div>
            <div className="w-full h-3 overflow-hidden rounded shadow-inner bg-zinc-800">
              <div className={`${color} h-full transition-all duration-300`} style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}

        {/* Weight Bar */}
        <div>
          <div className="flex justify-between mb-1 text-xs text-white">
            <span>Weight</span>
            <span>{stats.currentWeight.toFixed(1)} / {stats.maxWeight}</span>
          </div>
          <div className="w-full h-3 overflow-hidden rounded shadow-inner bg-zinc-800">
            <div
              className="h-full transition-all duration-300 bg-purple-500"
              style={{ width: `${(stats.currentWeight / stats.maxWeight) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
