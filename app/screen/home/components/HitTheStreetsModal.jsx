'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import applyEventOutcome from '../../../../lib/applyEventOutcome';
import { getRandomBegEvent } from '../../../../data/quests/beg/getRandomBegEvent';
import { getRandomWanderEvent } from '../../../../data/quests/wander/getRandomWanderEvent';
import { getRandomCrimeEvent } from '../../../../data/quests/crime/getRandomCrimeEvent';
import EventResultCard from '../../../../components/shared/EventResultCard';

const actions = [
  {
    type: 'beg',
    label: '🙏 Beg',
    color: 'bg-orange-500 hover:bg-orange-400',
    image: '/images/actions/beg.png',
    description: 'Beg strangers for food or coins.',
  },
  {
    type: 'wander',
    label: '🚶 Wander',
    color: 'bg-blue-600 hover:bg-blue-500',
    image: '/images/actions/wander.png',
    description: 'Wander the streets looking for scraps or opportunities.',
  },
  {
    type: 'crime',
    label: '💀 Crime',
    color: 'bg-red-600 hover:bg-red-500',
    image: '/images/actions/crime.png',
    description: 'Take risky actions to gain money fast.',
  },
];

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
          <h2 className="text-lg font-bold text-center text-orange-300">Hit the Streets</h2>
          <button onClick={onClose} className="text-orange-400 hover:text-red-500">
            <FaTimes />
          </button>
        </div>

        {!hasChosen ? (
          <div className="grid grid-cols-3 gap-6 text-sm">
            {actions.map((action) => (
              <div
                key={action.type}
                className="flex flex-col items-center justify-between w-full p-4 border rounded-lg bg-zinc-800 border-zinc-700 h-72"
              >
                <img
                  src={action.image}
                  alt={action.type}
                  className="object-cover mb-2 rounded w-28 h-28"
                />
                <p className="flex items-center justify-center flex-1 px-2 text-sm text-center text-zinc-300">
                  {action.description}
                </p>
                <button
                  onClick={() => handleAction(action.type)}
                  className={`mt-2 px-4 py-2 text-sm font-semibold rounded ${action.color}`}
                >
                  {action.label}
                </button>
              </div>
            ))}
          </div>

        ) : (
          <>
            <EventResultCard result={result} />
            <button
              onClick={onClose}
              className="px-4 py-2 mt-4 font-semibold bg-orange-600 rounded hover:bg-orange-500"
            >
              Close
            </button>
          </>
        )}

      </div>
    </div>
  );
}
