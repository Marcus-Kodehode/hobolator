'use client';

import { useState, useEffect } from 'react';

export default function ScrapConverter() {
  const [scrap, setScrap] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const playerScrap = parseInt(localStorage.getItem('playerJunk') || '0');
    setScrap(playerScrap);
  }, []);

  const handleConvert = () => {
    if (amount <= 0 || amount > scrap) {
      alert('Invalid amount of scrap!');
      return;
    }

    const moneyEarned = amount * 0.1;
    const newScrap = scrap - amount;
    const currentMoney = parseFloat(localStorage.getItem('playerMoney') || '0');

    // Update localStorage
    localStorage.setItem('playerJunk', newScrap);
    localStorage.setItem('playerMoney', (currentMoney + moneyEarned).toFixed(2));

    // Notify UI
    window.dispatchEvent(new Event('playerStatsChanged'));

    // Update state
    setScrap(newScrap);
    setAmount(0);

    alert(`Converted ${amount} scrap into $${moneyEarned.toFixed(2)}!`);
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      <p className="text-sm text-white">
        You currently have <span className="font-bold text-yellow-300">{scrap} scrap</span>.
      </p>

      <input
        type="number"
        min="1"
        max={scrap}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        className="w-32 px-2 py-1 text-black rounded"
        placeholder="Amount to convert"
      />

      <button
        onClick={handleConvert}
        className="px-4 py-2 font-semibold text-white bg-orange-600 rounded hover:bg-orange-500"
      >
        Convert Scrap ➜ Money ($0.1 per scrap)
      </button>
    </div>
  );
}
