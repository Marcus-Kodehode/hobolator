const wanderNeutralEvents = [
  {
    description: 'You wandered without finding anything useful.',
    effects: { stamina: -4 },
  },
  {
    description: 'You walked a long distance and feel tired.',
    effects: { stamina: -6 },
  },
  {
    description: 'You stared at pigeons fighting over crumbs.',
    effects: { hygiene: -2 },
  },
  {
    description: 'You passed a familiar corner. Nothing new.',
    effects: {},
  },
  {
    description: 'You picked up a newspaper, but it’s two years old.',
    effects: { hygiene: -1 },
  },
];

export default wanderNeutralEvents;
