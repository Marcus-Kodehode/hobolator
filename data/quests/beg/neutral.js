const neutralBegEvents = [
  {
    id: 'beg-neutral-01',
    description: "You sit for hours and get a few coins.",
    effects: {
      cash: 0.5,
      stamina: -2,
    }
  },
  {
    id: 'beg-neutral-02',
    description: "A kid makes fun of you but his mom gives you a dollar.",
    effects: {
      cash: 1.0,
      health: -1,
    }
  },
  {
    id: 'beg-neutral-03',
    description: "Nothing happens. People ignore you today.",
    effects: {
      stamina: -1,
    }
  },
  {
    id: 'beg-neutral-04',
    description: "You find a half-used bottle of water in a bin.",
    effects: {
      hygiene: +2,
      items: ['consumable_02'], // Half-full Water Bottle
    }
  },
  {
    id: 'beg-neutral-05',
    description: "A cop asks you to move along. No gain, no loss.",
    effects: {}
  },
];

export default neutralBegEvents;
