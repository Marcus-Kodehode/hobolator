'use client';

export default function ItemCard({ item, onClick }) {
  if (!item) return null;

  const {
    name,
    image,
    quantity = 1
  } = item;

  return (
    <div
      onClick={() => onClick(item)}
      className="relative w-full overflow-hidden transition-transform border border-orange-400 rounded shadow cursor-pointer aspect-square bg-black/50 hover:scale-105"
    >
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full opacity-90"
      />

      <div className="absolute bottom-1 left-1 right-1 px-1 py-[2px] text-[10px] font-semibold text-white bg-black/80 rounded-sm shadow-sm truncate">
        {name}{quantity > 1 ? ` x${quantity}` : ''}
      </div>
    </div>
  );
}
