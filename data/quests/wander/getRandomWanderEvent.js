import goodEvents from './good';
import badEvents from './bad';
import neutralEvents from './neutral';

export function getRandomWanderEvent() {
  const rand = Math.random();
  let pool;

  if (rand < 0.33) pool = badEvents;
  else if (rand < 0.66) pool = neutralEvents;
  else pool = goodEvents;

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
