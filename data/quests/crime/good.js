// GOOD EVENTS
const crimeGoodEvents = [
  {
    id: 'crime-good-01',
    description: 'You snatched a wallet and escaped unnoticed.',
    image: '/images/events/crime-wallet.png',
    effects: { money: 2.5, stamina: -5 },
  },
  {
    id: 'crime-good-02',
    description: 'You found a bag of scrap behind a pawn shop.',
    image: '/images/events/crime-scrap.png',
    effects: { scrap: 5, hygiene: -2 },
  },
  {
    id: 'crime-good-03',
    description: 'You tricked someone into giving you a few bucks.',
    image: '/images/events/crime-trick.png',
    effects: { money: 3.0 },
  },
  {
    id: 'crime-good-04',
    description: 'You lifted some batteries from a convenience store.',
    image: '/images/events/crime-batteries.png',
    effects: { hygiene: -2, items: ['junk_10'] },
  },
  {
    id: 'crime-good-05',
    description: 'You raided a broken vending machine for loot.',
    image: '/images/events/crime-vending.png',
    effects: { scrap: 2, items: ['junk_01','consumable_03'] },
  },
];

export default crimeGoodEvents;