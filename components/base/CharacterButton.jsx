'use client';
import { FaUser } from 'react-icons/fa';

export default function CharacterButton({ onClick }) {
  return (
    <button
      title="Character Info"
      className="flex items-center justify-center p-2 text-xl text-orange-300 rounded hover:text-orange-400 bg-zinc-800"
      onClick={onClick}
    >
      <FaUser />
    </button>
  );
}
