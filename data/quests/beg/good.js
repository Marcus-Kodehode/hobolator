const goodBegEvents = [
  {
    id: 'beg-good-01',
    description: "A kind woman gives you a hot coffee and a smile.",
    effects: {
      health: 2,
      stamina: 5,
      money: 0.5,
      items: ['consumable_12']
    },
    image: '/images/events/beg-good-01.png'
  },
  {
    id: 'beg-good-02',
    description: "Someone drops a one dollar bill in your cup by accident.",
    effects: { money: 1.0, stamina: 2 },
    image: '/images/events/beg-good-02.png'
  },
  {
    id: 'beg-good-03',
    description: "A passing food truck hands you a leftover sandwich.",
    effects: { health: 3, hygiene: -1, items: ['consumable_01'] },
    image: '/images/events/beg-good-03.png'
  },
  {
    id: 'beg-good-04',
    description: "A street artist gives you a charm for good luck.",
    effects: { stamina: 2, hygiene: 2, items: ['junk_20'] },
    image: '/images/events/beg-good-04.png'
  },
  {
    id: 'beg-good-05',
    description: "A kind hobo shares his stash of useful junk with you.",
    effects: { scrap: 2, items: ['junk_13', 'junk_16'] },
    image: '/images/events/beg-good-05.png'
  },
];

export default goodBegEvents;
