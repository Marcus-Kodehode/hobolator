'use client';

import { FaTimes } from 'react-icons/fa';
import ScrapConverter from './ScrapConverter';
import NPCHeader from '../../components/NPCHeader';

export default function ScrapShopModal({ onClose }) {
  const npcIntroText = `Yo! Name’s Joe. Folks ‘round here call me Scrappy Joe. Bring me your junk scrap and I’ll turn it into some cold hard cash — simple as that. No questions asked.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 text-white border border-orange-400 shadow-xl bg-zinc-900 rounded-xl scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-zinc-800 overflow-y-auto max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute text-orange-400 top-3 right-3 hover:text-red-500"
        >
          <FaTimes />
        </button>

        <NPCHeader
          imageSrc="/images/npc/scrappyjoe.png"
          name="Scrappy Joe"
          introText={npcIntroText}
        />

        <ScrapConverter />
      </div>
    </div>
  );
}
