'use client';

import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function CharacterPanel({ onClose }) {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');
  const [mood, setMood] = useState('');
  const [intoxication, setIntoxication] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('playerName') || 'Unknown');
    setSkill(localStorage.getItem('playerSkill') || 'None');
    setLevel(localStorage.getItem('playerLevel') || '1');
    setMood(localStorage.getItem('playerMood') || '5');
    setIntoxication(localStorage.getItem('playerIntoxication') || '0');
  }, []);

  const getMoodLabel = (value) => {
    const moods = [
      'Crying in a cardboard box',
      'Very Sad',
      'Meh',
      'Tired and Grumpy',
      'Accepting Life',
      'Alright-ish',
      'Feeling Lucky',
      'Singing in the alley',
      'High on Hope',
      'Top of the Trashcan World'
    ];
    return moods[parseInt(value) - 1] || 'Uncertain';
  };

  return (
    <div className="absolute z-50 w-64 p-4 text-sm text-white border border-orange-500 rounded-md shadow-lg top-20 right-4 bg-black/80">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-orange-300">Character Info</h2>
        <button onClick={onClose} className="text-sm text-orange-400 hover:text-red-400">✕</button>
      </div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Skill:</strong> {skill}</p>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Mood:</strong> {getMoodLabel(mood)}</p>
      <p><strong>Intoxication:</strong> {intoxication}%</p>
    </div>
  );
}
