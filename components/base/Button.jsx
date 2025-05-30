export default function Button({ text, onClick }) {
  return (
    <button
      className="w-full px-6 py-2 bg-orange-400 text-black font-bold rounded shadow-md hover:bg-orange-300 active:scale-95 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
