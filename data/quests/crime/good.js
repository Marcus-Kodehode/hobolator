const crimeGoodEvents = [
  {
    description: 'You snatched a wallet and escaped unnoticed.',
    effects: { stamina: -2 },
    money: 7.5,
  },
  {
    description: 'You found a bag of scrap behind a pawn shop.',
    effects: { hygiene: -1 },
    scrap: 4,
  },
  {
    description: 'You tricked someone into giving you a few bucks.',
    effects: {},
    money: 3.0,
  },
  {
    description: 'You lifted some batteries from a convenience store.',
    effects: { hygiene: -2 },
    items: ['batteries'],
  },
  {
    description: 'You raided a broken vending machine for loot.',
    effects: {},
    items: ['cans'],
    scrap: 2,
  },
];

export default crimeGoodEvents;
