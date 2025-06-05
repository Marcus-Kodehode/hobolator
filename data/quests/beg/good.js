const goodBegEvents = [
  {
    id: 'beg-good-01',
    description: "A kind woman gives you a hot coffee and a smile.",
    effects: {
      health: +5,
      stamina: +3,
      hygiene: +1,
      cash: 1.0,
      items: ['consumable_06'], // f.eks. Coffee
    }
  },
  {
    id: 'beg-good-02',
    description: "Someone drops a five dollar bill in your cup by accident.",
    effects: {
      cash: 5.0,
      stamina: +2,
    }
  },
  {
    id: 'beg-good-03',
    description: "A passing food truck hands you a leftover sandwich.",
    effects: {
      health: +3,
      hygiene: -1,
      items: ['consumable_07'], // e.g. Sandwich
    }
  },
  {
    id: 'beg-good-04',
    description: "A street artist gives you a charm for good luck.",
    effects: {
      stamina: +2,
      hygiene: +2,
      items: ['junk_04'], // e.g. Lucky Trinket
    }
  },
  {
    id: 'beg-good-05',
    description: "A kind hobo shares his stash of useful junk with you.",
    effects: {
      scrap: 2,
      items: ['junk_01', 'junk_02'],
    }
  },
];

export default goodBegEvents;
