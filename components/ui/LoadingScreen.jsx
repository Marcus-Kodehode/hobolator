'use client';

import { useEffect, useState } from 'react';

const tips = [
  "Tip: Sometimes the trash holds more than just disappointment.",
  "Tip: Not all cats want hugs. Trust me.",
  "Tip: Don’t spend all your cash on scratch cards. Or do.",
  "Tip: Cardboard makes for excellent interior design.",
  "Tip: Crime pays... but also charges interest.",
  "Tip: Sleep with one eye open — raccoons don’t negotiate.",
  "Tip: Being charismatic won't get you a bed, but maybe a sandwich.",
  "Tip: If someone says 'trust me' in the alley, don't.",
  "Tip: Stealing from the donation bin is still stealing. Technically.",
];

export default function LoadingScreen() {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black text-orange-300 flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl font-bold mb-4 animate-pulse">Loading...</h2>
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-sm max-w-xs">{tip}</p>
    </div>
  );
}
