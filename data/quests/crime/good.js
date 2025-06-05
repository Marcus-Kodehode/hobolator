const crimeGoodEvents = [
  {
    description: 'You snatched a wallet and escaped unnoticed.',
    effects: { money: 7.5, stamina: -2 },
  },
  {
    description: 'You found a bag of scrap behind a pawn shop.',
    effects: { scrap: 4, hygiene: -1 },
  },
  {
    description: 'You tricked someone into giving you a few bucks.',
    effects: { money: 3.0 },
  },
  {
    description: 'You lifted some batteries from a convenience store.',
    effects: { items: ['batteries'], hygiene: -2 },
  },
  {
    description: 'You raided a broken vending machine for loot.',
    effects: { items: ['cans'], scrap: 2 },
  },
];

export default crimeGoodEvents;
