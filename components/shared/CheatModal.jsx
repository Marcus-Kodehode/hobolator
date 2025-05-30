'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';
import allItems from '../../data/items';
import LoadingScreen from '../ui/LoadingScreen';

export default function CheatModal({ onClose }) {
  const modalRef = useRef(null);
  const router = useRouter();

  const [amount, setAmount] = useState(1);
  const [itemId, setItemId] = useState('');
  const [loading, setLoading] = useState(false); // 👈 for loading screen

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const updateStat = (key, change) => {
    const current = parseInt(localStorage.getItem(key) || '0');
    localStorage.setItem(key, current + change);
    window.location.reload();
  };

  const changeDay = (amount) => {
    const current = parseInt(localStorage.getItem('playerDay') || '1');
    const updated = Math.max(1, current + amount);
    localStorage.setItem('playerDay', updated);
    window.location.reload();
  };

const restartGame = () => {
  setLoading(true);

  setTimeout(() => {
    localStorage.clear();

    localStorage.setItem('playerHealth', '100');
    localStorage.setItem('playerStamina', '100');
    localStorage.setItem('playerHygiene', '100');
    localStorage.setItem('playerMoney', '0');
    localStorage.setItem('playerJunk', '0');
    localStorage.setItem('playerDay', '1');
    localStorage.setItem('playerTimeSegment', '1');

    const starterItems = [
      { id: 'weapon_01', quantity: 1 },
      { id: 'consumable_07', quantity: 1 },
      { id: 'consumable_01', quantity: 1 }
    ];
    localStorage.setItem('playerInventory', JSON.stringify(starterItems));

    router.push('/screen/start');
  }, 2000);
};

  const spawnItem = () => {
    if (!itemId) return;
    const inventory = JSON.parse(localStorage.getItem('playerInventory')) || [];
    const index = inventory.findIndex(item => item.id === itemId);

    if (index !== -1) {
      inventory[index].quantity += amount;
    } else {
      inventory.push({ id: itemId, quantity: amount });
    }

    localStorage.setItem('playerInventory', JSON.stringify(inventory));
    window.location.reload();
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-16 bg-black/70 backdrop-blur-sm">
        <div ref={modalRef} className="w-full max-w-md p-5 text-white border border-orange-400 rounded shadow-lg bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-orange-300">Cheat Menu</h2>
            <button onClick={onClose} className="text-orange-400 hover:text-red-400">
              <FaTimes />
            </button>
          </div>

          <div className="space-y-4 text-sm">
            <button onClick={restartGame} className="w-full px-3 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-500">
              🧨 Restart Game
            </button>

            <div>
              <p className="font-semibold text-orange-200">💰 Add Money</p>
              <div className="flex gap-2 mt-1">
                {[1, 10, 100].map(n => (
                  <button key={n} onClick={() => updateStat('playerMoney', n)} className="px-2 py-1 text-xs bg-green-600 rounded hover:bg-green-500">
                    +{n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-orange-200">🛠 Add Junk</p>
              <div className="flex gap-2 mt-1">
                {[1, 10, 100].map(n => (
                  <button key={n} onClick={() => updateStat('playerJunk', n)} className="px-2 py-1 text-xs bg-yellow-600 rounded hover:bg-yellow-500">
                    +{n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-orange-200">📆 Day Control</p>
              <div className="flex gap-2 mt-1">
                <button onClick={() => changeDay(-1)} className="px-3 py-1 rounded bg-zinc-700 hover:bg-zinc-600">-1</button>
                <button onClick={() => changeDay(+1)} className="px-3 py-1 rounded bg-zinc-700 hover:bg-zinc-600">+1</button>
              </div>
            </div>

            <div className="p-3 mt-2 rounded bg-zinc-800/90">
              <p className="mb-1 font-semibold text-orange-200">📦 Spawn Item</p>
              <select value={itemId} onChange={(e) => setItemId(e.target.value)} className="w-full px-2 py-1 mb-2 text-sm text-black rounded">
                <option value="">Select item...</option>
                {allItems.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>

              <input
                type="number"
                value={amount}
                min={1}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full px-2 py-1 mb-2 text-sm text-black rounded"
                placeholder="Amount"
              />
              <button onClick={spawnItem} className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">
                Spawn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
