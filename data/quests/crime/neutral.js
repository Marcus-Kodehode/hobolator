const crimeNeutralEvents = [
  {
    description: 'You scoped out a store but didn’t go through with it.',
    effects: { stamina: -3 },
  },
  {
    description: 'You followed someone, but they noticed and walked faster.',
    effects: {},
  },
  {
    description: 'You made it into a back alley, but it was empty.',
    effects: { hygiene: -2 },
  },
  {
    description: 'You considered stealing a bike but changed your mind.',
    effects: { stamina: -2 },
  },
  {
    description: 'You found an unlocked car… and just stared.',
    effects: {},
  },
];

export default crimeNeutralEvents;
