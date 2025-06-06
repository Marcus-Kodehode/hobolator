// BAD EVENTS
const wanderBadEvents = [
  {
    id: 'wander-bad-01',
    description: 'You stepped in human poop. Disgusting.',
    image: '/images/events/wander-poop.png',
    effects: { hygiene: -15 },
  },
  {
    id: 'wander-bad-02',
    description: 'A bird pooped on your shoulder.',
    image: '/images/events/wander-bird.png',
    effects: { hygiene: -10, stamina: -5 },
  },
  {
    id: 'wander-bad-03',
    description: 'You wandered into a sketchy alley and got pushed around.',
    image: '/images/events/wander-alley.png',
    effects: { health: -10, stamina: -5 },
  },
  {
    id: 'wander-bad-04',
    description: 'You got lost and wasted energy.',
    image: '/images/events/wander-lost.png',
    effects: { stamina: -15 },
  },
  {
    id: 'wander-bad-05',
    description: 'You slipped on something rotten and bruised your ribs.',
    image: '/images/events/wander-slip.png',
    effects: { health: -10, hygiene: -5 },
  },
];

export default wanderBadEvents;