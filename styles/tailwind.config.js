/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        hobo: {
          bg: '#111827', // Mørkblå bakgrunn (nattblå)
          primary: '#FBBF24', // Gul-oransje (button, highlights)
          accent: '#10B981', // Teal-grønn
          danger: '#DC2626', // Rust-rød
          muted: '#4B5563', // Grå-brun
          paper: '#1F2937', // Litt lysere bakgrunn
        },
      },
    },
  },
  plugins: [],
};
