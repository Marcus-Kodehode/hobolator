'use client';

import Image from 'next/image';
import { useState } from 'react';
import HUD from '../../../components/ui/HUD.jsx';

export default function HomePage() {
  const [timeSegment, setTimeSegment] = useState(1); // 1–4
  const backgroundImage = `/images/backgrounds/city1${timeSegment <= 2 ? '' : 'n'}.png`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="City background"
        fill
        priority
        className="object-cover"
      />

      {/* HUD */}
      <HUD
        health={80}
        stamina={55}
        hygiene={30}
        cash={4.75}
        scrap={6}
        dayCount={1}
        timeSegment={timeSegment}
      />

      {/* Main content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-orange-400 drop-shadow">
          Welcome to the Shantytown
        </h1>
        <p className="max-w-md text-sm text-center text-orange-100">
          You’re standing in the middle of a worn-down trailer park — the perfect place to start your legendary hobo journey.
        </p>
      </div>
    </div>
  );
}
