'use client';

import TooltipButton from '../base/TooltipButton';
import { FaUser, FaShoppingCart, FaMagic, FaQuestion } from 'react-icons/fa';

export default function UtilityPanel({ onHelp, onCheat, onInventory, onCharacter }) {
  return (
    <div className="absolute z-50 p-2 border border-orange-500 rounded-md shadow-md top-4 right-4 bg-black/60 backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2">
        <TooltipButton icon={FaUser} label="Character" onClick={onCharacter} />
        <TooltipButton icon={FaShoppingCart} label="Inventory" onClick={onInventory} />
        <TooltipButton icon={FaMagic} label="Cheat" onClick={onCheat} />
        <TooltipButton icon={FaQuestion} label="Help" onClick={onHelp} />
      </div>
    </div>
  );
}
