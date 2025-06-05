import bad from './bad';
import neutral from './neutral';
import good from './good';

export function getRandomCrimeEvent() {
  const all = [...bad, ...neutral, ...good];
  const randomIndex = Math.floor(Math.random() * all.length);
  return all[randomIndex];
}
