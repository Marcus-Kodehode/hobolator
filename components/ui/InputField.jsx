export default function InputField({ label, value, onChange }) {
  return (
    <div className="mb-4 w-full max-w-sm">
      <label className="block text-sm font-medium mb-1 text-orange-300">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded bg-zinc-900 border border-orange-400 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
      />
    </div>
  );
}
