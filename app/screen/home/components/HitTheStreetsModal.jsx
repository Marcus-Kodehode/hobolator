'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import applyEventOutcome from '../../../../lib/applyEventOutcome';
import { getRandomBegEvent } from '../../../../data/quests/beg/getRandomBegEvent';
import { getRandomWanderEvent } from '../../../../data/quests/wander/getRandomWanderEvent';
import { getRandomCrimeEvent } from '../../../../data/quests/crime/getRandomCrimeEvent';

export default function HitTheStreetsModal({ onClose }) {
  const [result, setResult] = useState(null);
  const [hasChosen, setHasChosen] = useState(false);

  const handleAction = async (actionType) => {
    setHasChosen(true);

    let event;
    if (actionType === 'beg') {
      event = getRandomBegEvent();
    } else if (actionType === 'wander') {
      event = getRandomWanderEvent();
    } else if (actionType === 'crime') {
      event = getRandomCrimeEvent();
    }

    if (!event) return;

    applyEventOutcome(event);
    const time = parseInt(localStorage.getItem('playerTimeSegment') || '1');
    localStorage.setItem('playerTimeSegment', Math.min(time + 1, 4).toString());
    setResult(event);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl p-6 text-white border border-orange-400 shadow-xl bg-zinc-900 rounded-xl">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-bold text-orange-300">Hit the Streets</h2>
          <button onClick={onClose} className="text-orange-400 hover:text-red-500">
            <FaTimes />
          </button>
        </div>

        {!hasChosen ? (
          <div className="grid grid-cols-3 gap-3 text-sm">
            <button
              onClick={() => handleAction('beg')}
              className="px-4 py-2 font-semibold bg-orange-500 rounded hover:bg-orange-400"
            >
              🙏 Beg
            </button>
            <button
              onClick={() => handleAction('wander')}
              className="px-4 py-2 font-semibold bg-blue-600 rounded hover:bg-blue-500"
            >
              🚶 Wander
            </button>
            <button
              onClick={() => handleAction('crime')}
              className="px-4 py-2 font-semibold bg-red-600 rounded hover:bg-red-500"
            >
              💀 Crime
            </button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm leading-relaxed text-orange-100">
              <strong>Event:</strong> {result.description}
            </p>

            <div className="mb-4 space-y-1 text-xs text-zinc-300">
              {result.effects && Object.entries(result.effects).map(([key, val]) => (
                <div key={key}>
                  {key === 'items' && `📦 Found item(s): ${val.join(', ')}`}
                  {key === 'money' && `💵 Money: ${val > 0 ? '+' : ''}$${val.toFixed(2)}`}
                  {key === 'scrap' && `🛠 Scrap: ${val > 0 ? '+' : ''}${val}`}
                  {key !== 'items' && key !== 'money' && key !== 'scrap' &&
                    `${key.charAt(0).toUpperCase() + key.slice(1)}: ${val > 0 ? '+' : ''}${val}`}
                </div>
              ))}
            </div>


            <button
              onClick={onClose}
              className="px-4 py-2 mt-2 font-semibold bg-orange-600 rounded hover:bg-orange-500"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
