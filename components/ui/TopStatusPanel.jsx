'use client';
import { useState } from 'react';

export default function TopStatusPanel({ dayCount = 1, cash = 0, scrap = 0 }) {
  return (
    <div className="absolute flex items-center gap-6 px-6 py-2 text-sm text-white -translate-x-1/2 border border-orange-400 rounded shadow-lg top-4 left-1/2 bg-black/50">
      <div>
        <span className="font-bold text-orange-300">Day {dayCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-green-300">${cash.toFixed(2)}</span>
        <span className="text-gray-300">|</span>
        <span className="font-bold text-yellow-200">🛠 {scrap}</span>
      </div>
    </div>
  );
}
