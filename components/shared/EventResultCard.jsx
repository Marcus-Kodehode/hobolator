'use client';
import Image from 'next/image';
import { getItemById } from '../../data/items'; // 👈 Husk riktig path til dine items!

export default function EventResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="space-y-4 text-sm text-zinc-200">
      {/* 🌄 Event bilde */}
      {result.image && (
        <Image
          src={result.image}
          alt="Event visual"
          width={500}
          height={200}
          className="object-cover w-full rounded-lg"
        />
      )}

      {/* 📝 Event beskrivelse */}
      <p>
        <strong className="text-orange-300">Event:</strong> {result.description}
      </p>

      {/* 🎯 Effekter */}
      {result.effects && (
        <div className="space-y-1 text-xs">
          {Object.entries(result.effects).map(([key, val]) => (
            <div key={key}>
              {key === 'items' ? (
                <>
                  📦 Found item(s):{' '}
                  {val.map((id) => {
                    const item = getItemById(id);
                    return item ? item.name : id;
                  }).join(', ')}
                </>
              ) : (
                <>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {val > 0 ? '+' : ''}{val}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
