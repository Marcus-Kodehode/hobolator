const badBegEvents = [
  {
    id: 'beg-bad-01',
    description: "A kid throws a hot dog at you. You take stain damage.",
    effects: { hygiene: -4, health: -1 }
  },
  {
    id: 'beg-bad-02',
    description: "Security chases you away. You twist your ankle.",
    effects: { health: -5, stamina: -3 }
  },
  {
    id: 'beg-bad-03',
    description: "Someone tricks you and steals your sock stash.",
    effects: { items: ['junk_03'], scrap: -1 }
  },
  {
    id: 'beg-bad-04',
    description: "It rains. You're soaked and catch a cold.",
    effects: { hygiene: -6, health: -3 }
  },
  {
    id: 'beg-bad-05',
    description: "You get into an argument and lose some scrap in the scuffle.",
    effects: { health: -2, scrap: -2 }
  },
];

export default badBegEvents;
