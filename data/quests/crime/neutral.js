// NEUTRAL EVENTS
const crimeNeutralEvents = [
  {
    id: 'crime-neutral-01',
    description: 'You scoped out a store but didn’t go through with it.',
    image: '/images/events/crime-scope.png',
    effects: { stamina: -5 },
  },
  {
    id: 'crime-neutral-02',
    description: 'You followed someone, but they noticed and walked faster.',
    image: '/images/events/crime-follow.png',
    effects: {},
  },
  {
    id: 'crime-neutral-03',
    description: 'You made it into a back alley, but it was empty.',
    image: '/images/events/crime-alley.png',
    effects: { hygiene: -5 },
  },
  {
    id: 'crime-neutral-04',
    description: 'You considered stealing a bike but changed your mind.',
    image: '/images/events/crime-bike.png',
    effects: { stamina: -5 },
  },
  {
    id: 'crime-neutral-05',
    description: 'You found an unlocked car… and just stared.',
    image: '/images/events/crime-car.png',
    effects: {},
  },
];

export default crimeNeutralEvents;