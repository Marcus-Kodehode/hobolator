const badBegEvents = [
  {
    id: 'beg-bad-01',
    description: "A kid throws a hot dog at you. You take stain damage.",
    effects: { hygiene: -5, health: -1 },
    image: '/images/events/beg-bad-01.png'
  },
  {
    id: 'beg-bad-02',
    description: "Security chases you away. You twist your ankle.",
    effects: { health: -10, stamina: -5 },
    image: '/images/events/beg-bad-02.png'
  },
  {
    id: 'beg-bad-03',
    description: "Someone tricks you and steals your sock stash.",
    effects: { items: ['junk_03'], scrap: -1 },
    image: '/images/events/beg-bad-03.png'
  },
  {
    id: 'beg-bad-04',
    description: "It rains. You're soaked and catch a cold.",
    effects: { hygiene: -10, health: -5 },
    image: '/images/events/beg-bad-04.png'
  },
  {
    id: 'beg-bad-05',
    description: "You get into an argument and lose some scrap in the scuffle.",
    effects: { health: -2, scrap: -2 },
    image: '/images/events/beg-bad-05.png'
  },
];

export default badBegEvents;
