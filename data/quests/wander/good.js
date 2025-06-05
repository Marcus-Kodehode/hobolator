const wanderGoodEvents = [
  {
    description: 'You found a vending machine with a working soda!',
    effects: { stamina: +5, hygiene: -1 },
  },
  {
    description: 'Someone dropped a hotdog on the ground. You claimed it.',
    effects: { health: +4, hygiene: -2 },
  },
  {
    description: 'You found some coins under a broken mailbox.',
    effects: { money: +2.0 },
  },
  {
    description: 'An old lady gave you a bar of soap and wished you luck.',
    effects: { hygiene: +6 },
  },
  {
    description: 'You found a box of broken electronics. Could be scrap.',
    effects: { scrap: +3 },
  },
];

export default wanderGoodEvents;
