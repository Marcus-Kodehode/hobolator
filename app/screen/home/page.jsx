'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import HUD from '../../../components/ui/HUD';
import IntroModal from './components/IntroModal';
import HoboCampMenu from '../../../components/menus/HoboCampMenu';
import HitTheStreetsModal from './components/HitTheStreetsModal';
import ScrapShopModal from './scrapshop/components/ScrapShopModal';
import TreasureShopModal from './treasure/components/TreasureShopModal';

export default function HomePage() {
  const [day, setDay] = useState(1);
  const [showStreetModal, setShowStreetModal] = useState(false);
  const [showScrapModal, setShowScrapModal] = useState(false);
  const [showTreasureModal, setShowTreasureModal] = useState(false);

  // 🧠 Hent dag fra localStorage når komponenten mountes
  useEffect(() => {
    const savedDay = parseInt(localStorage.getItem('playerDay') || '1');
    setDay(savedDay);
  }, []);

  // 🕹 Funksjon for å øke dagen
  const handleNextDay = () => {
    const newDay = day + 1;
    setDay(newDay);
    localStorage.setItem('playerDay', newDay.toString());
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/backgrounds/city1.png"
        alt="City background"
        fill
        priority
        className="object-cover"
      />

      <HUD
        health={80}
        stamina={55}
        hygiene={30}
        cash={4.75}
        scrap={6}
        dayCount={day}
        timeSegment={1}
      />

      <IntroModal />

      <HoboCampMenu
        onStreetsClick={() => setShowStreetModal(true)}
        onScrapShopClick={() => setShowScrapModal(true)}
        onTreasureShopClick={() => setShowTreasureModal(true)}
      />

      {showStreetModal && (
        <HitTheStreetsModal
          onClose={() => {
            setShowStreetModal(false);
            handleNextDay();
          }}
        />
      )}

      {showScrapModal && (
        <ScrapShopModal
          onClose={() => {
            setShowScrapModal(false);
            handleNextDay();
          }}
        />
      )}

      {showTreasureModal && (
        <TreasureShopModal
          onClose={() => {
            setShowTreasureModal(false);
            handleNextDay();
          }}
        />
      )}
    </div>
  );
}
