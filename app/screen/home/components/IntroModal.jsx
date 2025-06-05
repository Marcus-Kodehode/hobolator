'use client';

import { useEffect, useState } from 'react';
import { addItemToInventory } from '../../../../data/playerInventory';
import Image from 'next/image';
import TypingText from './TypingText';

export default function IntroModal() {
  const [show, setShow] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const introText = `Welcome, rookie hobo. Name’s Sapnu puas – local trash philosopher and certified garbage whisperer.`;

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShow(true);
      new Audio('/sounds/intro-pop.mp3').play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!show) return;

    const delay = introText.length * 25 + 200;
    const timeout = setTimeout(() => {
      setShowRules(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [show]);

  const handleContinue = () => {
    addItemToInventory('junk_03');
    localStorage.setItem('hasSeenIntro', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl p-6 text-white border border-orange-400 shadow-2xl bg-zinc-900 rounded-xl">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <Image
            src={
              isBlinking
                ? '/images/characters/sapnu2-blink.png'
                : '/images/characters/sapnu2-head.png'
            }
            alt="Sapnu puas"
            width={80}
            height={80}
            className="transition border-2 border-orange-400 rounded-full shadow-md hover:shadow-orange-400/50 hover:scale-105"
          />

          {/* Text area */}
          <div className="flex-1">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-orange-300">Sapnu puas</h2>
            </div>

            <TypingText
              text={introText}
              className="mb-4 text-sm leading-relaxed text-orange-100"
            />

            {showRules && (
              <>
                <ul className="pl-5 mb-4 space-y-2 text-sm text-orange-100 list-disc">
                  <li><strong className="text-orange-200">🧠 Rule #1:</strong> If it smells, it sells.</li>
                  <li><strong className="text-orange-200">🦝 Rule #2:</strong> Never trust a raccoon wearing shoes.</li>
                  <li><strong className="text-orange-200">📦 Rule #3:</strong> Everything is loot if you’re desperate enough.</li>
                  <li><strong className="text-orange-200">🧦 Rule #4:</strong> Socks are multi-purpose: warmth, currency, weapon.</li>
                </ul>

                <p className="mb-6 italic text-orange-300">
                  Here's your starter item: a sock. It’s... soggy. Probably not cursed. Probably.
                </p>

                <button
                  onClick={handleContinue}
                  className="px-4 py-2 font-bold bg-orange-600 rounded shadow hover:bg-orange-500"
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
