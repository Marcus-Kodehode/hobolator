'use client';

import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { usePlayerStats } from '../../data/playerStats';

export default function ItemModal({ item, onClose }) {
  const modalRef = useRef(null);
  const { applyEffects } = usePlayerStats(); // ✅ Flyttet hit

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
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

  if (!item) return null;

  const {
    id,
    name,
    description,
    image,
    slot,
    tier,
    value,
    weight,
    effects
  } = item;

  const handleUse = () => {
    // Bruk effektene
    if (effects) {
      applyEffects(effects);
    }

    // Fjern ett item fra inventory
    const inventory = JSON.parse(localStorage.getItem('playerInventory')) || [];
    const updated = inventory
      .map(obj => obj.id === id ? { ...obj, quantity: obj.quantity - 1 } : obj)
      .filter(obj => obj.quantity > 0);

    localStorage.setItem('playerInventory', JSON.stringify(updated));

    onClose();
    window.location.reload(); // midlertidig: bruk context senere for live oppdatering
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-8 pt-24 bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-80 p-4 border border-orange-500 rounded bg-zinc-900 text-white shadow-lg max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute text-orange-400 top-2 right-2 hover:text-red-400"
        >
          <FaTimes />
        </button>
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-48 mb-3 bg-black border rounded border-zinc-700"
        />
        <h2 className="text-lg font-bold text-orange-300">{name}</h2>
        <p className="mb-2 text-sm italic text-orange-100">{description}</p>
        <div className="space-y-1 text-sm">
          {slot && <div>🧷 Type: {slot}</div>}
          {tier !== undefined && <div>⭐ Tier: {tier}</div>}
          {value !== undefined && <div>💰 Value: {value}</div>}
          {weight !== undefined && <div>⚖️ Weight: {weight}</div>}
          {effects && (
            <div>
              🍽️ Effects:
              <ul className="ml-4 list-disc">
                {Object.entries(effects).map(([key, val]) => (
                  <li key={key}>{key}: {val > 0 ? '+' : ''}{val}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {slot === 'consumable' && (
          <button
            onClick={handleUse}
            className="w-full px-3 py-1 mt-4 text-xs font-semibold text-orange-200 bg-orange-600 rounded hover:bg-orange-500"
          >
            Use
          </button>
        )}
      </div>
    </div>
  );
}
