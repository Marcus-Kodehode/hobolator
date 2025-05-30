// app/layout.jsx
import './styles/globals.css';

export const metadata = {
  title: 'HoboLator',
  description: 'A gritty urban survival game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

