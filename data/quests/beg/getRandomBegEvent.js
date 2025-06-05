import good from './good.js';
import neutral from './neutral.js';
import bad from './bad.js';

export function getRandomBegEvent() {
  const category = Math.random() < 0.33 ? 'bad' : Math.random() < 0.5 ? 'neutral' : 'good';

  const list = category === 'good' ? good : category === 'neutral' ? neutral : bad;
  const index = Math.floor(Math.random() * list.length);

  return list[index];
}
