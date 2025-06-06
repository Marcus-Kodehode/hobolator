// GOOD EVENTS
const wanderGoodEvents = [
  {
    id: 'wander-good-01',
    description: 'You found a vending machine with a working soda!',
    image: '/images/events/wander-vending.png',
    effects: { stamina: 5, hygiene: -1, items: ['consumable_03'] },
  },
  {
    id: 'wander-good-02',
    description: 'Someone dropped a hotdog on the ground. You claimed it.',
    image: '/images/events/wander-hotdog.png',
    effects: { health: 5, hygiene: -5 },
  },
  {
    id: 'wander-good-03',
    description: 'You found some coins under a broken mailbox.',
    image: '/images/events/wander-coins.png',
    effects: { money: 2.0 },
  },
  {
    id: 'wander-good-04',
    description: 'An old lady gave you a bar of soap and wished you luck.',
    image: '/images/events/wander-soap.png',
    effects: { hygiene: 2, items: ['consumable_10'] },
  },
  {
    id: 'wander-good-05',
    description: 'You found a box of broken electronics. Could be scrap.',
    image: '/images/events/wander-electronics.png',
    effects: { scrap: 5, items: ['junk_10'] },
  },
];

export default wanderGoodEvents;