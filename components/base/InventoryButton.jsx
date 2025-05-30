'use client';
import { FaShoppingCart } from 'react-icons/fa';

export default function InventoryButton({ onClick }) {
  return (
    <button
      title="Inventory"
      className="flex items-center justify-center p-2 text-xl text-orange-300 rounded hover:text-orange-400 bg-zinc-800"
      onClick={onClick}
    >
      <FaShoppingCart />
    </button>
  );
}
