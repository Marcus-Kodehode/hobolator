'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../../../components/ui/InputField.jsx';
import SkillSelector from '../../../components/base/SkillSelector.jsx';
import Button from '../../../components/base/Button.jsx';
import Intro from './Intro';
import LoadingScreen from '../../../components/ui/LoadingScreen.jsx';

export default function StartPage() {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    if (name && skill) {
      // Grunnleggende spillerdata
      localStorage.setItem('playerName', name);
      localStorage.setItem('playerSkill', skill);
      localStorage.setItem('playerLevel', '1');
      localStorage.setItem('playerMood', '5'); // 1–10
      localStorage.setItem('playerIntoxication', '0');

      // Startstatus
      localStorage.setItem('playerHealth', '100');
      localStorage.setItem('playerStamina', '100');
      localStorage.setItem('playerHygiene', '100');
      localStorage.setItem('playerMaxWeight', '10');
      localStorage.setItem('playerCurrentWeight', '0');


      // Økonomi
      localStorage.setItem('playerMoney', '0');
      localStorage.setItem('playerJunk', '0');

      // Startgjenstander
      const starterItems = [
        { id: 'weapon_01', quantity: 1 },
        { id: 'consumable_07', quantity: 1 },
        { id: 'consumable_01', quantity: 1 }
      ];
      localStorage.setItem('playerInventory', JSON.stringify(starterItems));

      // Naviger videre
      setLoading(true);
      setTimeout(() => {
        router.push('/screen/home');
      }, 2000);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <main className="fixed inset-0 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#402a23] text-white p-4">
        <img
          src="/images/icons/logo2-t.png"
          alt="HoboLator Logo"
          className="w-60 h-auto mb-8 drop-shadow-[0_0_25px_rgba(255,168,0,0.75)]"
        />
        <h1 className="text-4xl font-bold mb-4 text-orange-400 drop-shadow-[0_2px_6px_rgba(255,168,0,0.6)]">
          Welcome to HoboLator
        </h1>

        <Intro />

        <div className="w-full max-w-sm mt-6 space-y-4">
          <InputField label="Hobo Name" value={name} onChange={setName} />
          <SkillSelector selectedSkill={skill} onSelect={setSkill} />
          <Button onClick={handleStart} text="Start Hobo Life" />
        </div>
      </main>
    </>
  );
}
