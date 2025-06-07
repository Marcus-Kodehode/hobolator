import equipment from './equipment';
import consumables from './consumables';
import junk from './junk';

// Lag en variabel først:
const allItems = {
  equipment,
  consumables,
  junk,
};

// Funksjon for å hente item by id:
export const getItemById = (id) => {
  const all = [...equipment, ...consumables, ...junk];
  return all.find(item => item.id === id);
};

// Eksporter samlet:
export default allItems;
