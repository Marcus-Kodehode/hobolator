// NEUTRAL EVENTS
const wanderNeutralEvents = [
  {
    id: 'wander-neutral-01',
    description: 'You wandered without finding anything useful.',
    image: '/images/events/wander-nothing.png',
    effects: { stamina: -5 },
  },
  {
    id: 'wander-neutral-02',
    description: 'You walked a long distance and feel tired.',
    image: '/images/events/wander-tired.png',
    effects: { stamina: -10 },
  },
  {
    id: 'wander-neutral-03',
    description: 'You stared at pigeons fighting over crumbs.',
    image: '/images/events/wander-pigeons.png',
    effects: { hygiene: -5 },
  },
  {
    id: 'wander-neutral-04',
    description: 'You passed a familiar corner. Nothing new.',
    image: '/images/events/wander-corner.png',
    effects: {},
  },
  {
    id: 'wander-neutral-05',
    description: 'You picked up a newspaper, but it’s two years old.',
    image: '/images/events/wander-newspaper.png',
    effects: { hygiene: -1 },
  },
];

export default wanderNeutralEvents;