import equipment from './equipment';
import consumables from './consumables';
import junk from './junk';


const allItems = [
  ...equipment,
  ...consumables,
  ...junk,
];

export const getItemById = (id) => {
  return allItems.find(item => item.id === id);
};

export default allItems;
