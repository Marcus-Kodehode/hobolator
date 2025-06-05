const crimeBadEvents = [
  {
    description: 'You tried to pickpocket someone and got punched.',
    effects: { health: -10, stamina: -5 },
  },
  {
    description: 'You were caught shoplifting and had to run like hell.',
    effects: { stamina: -12, hygiene: -4 },
  },
  {
    description: 'You broke into a dumpster only to cut yourself on glass.',
    effects: { health: -7, hygiene: -6 },
  },
  {
    description: 'Someone ratted you out. You lost what little you had.',
    effects: {},
    scrap: -2,
  },
  {
    description: 'You got mugged while trying to mug someone else.',
    effects: { health: -6 },
    money: -3.0,
  },
];

export default crimeBadEvents;
