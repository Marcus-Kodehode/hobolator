'use client';

export default function TooltipButton({ icon: Icon, label, onClick, position = 'top' }) {
  const isBottom = position === 'bottom';

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="p-3 text-orange-300 transition border border-orange-400 rounded-full bg-black/60 hover:text-orange-400 hover:bg-zinc-800"
      >
        <Icon size={18} />
      </button>

      <span
        className={`absolute z-50 px-2 py-1 text-xs text-orange-100 transition-opacity duration-300 transform -translate-x-1/2 bg-black border border-orange-400 rounded shadow opacity-0 left-1/2 whitespace-nowrap
        ${isBottom ? 'top-full mt-1' : 'bottom-full mb-1'} group-hover:opacity-100`}
      >
        {label}
      </span>
    </div>
  );
}
