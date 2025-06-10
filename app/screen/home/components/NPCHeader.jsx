'use client';

import Image from 'next/image';
import TypingText from './TypingText';

export default function NPCHeader({ imageSrc, name, introText }) {
  return (
    <div className="flex flex-col items-center mb-6">
      <Image
        src={imageSrc}
        alt={name}
        width={100}
        height={100}
        className="mb-2 border-2 border-orange-300 rounded-full"
      />
      <h2 className="text-lg font-bold text-orange-300">{name}</h2>
      <TypingText
        text={introText}
        speed={35}
        className="max-w-xl mt-2 text-sm text-center text-zinc-300"
      />
    </div>
  );
}
