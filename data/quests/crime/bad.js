// BAD EVENTS
const crimeBadEvents = [
  {
    id: 'crime-bad-01',
    description: 'You tried to pickpocket someone and got punched.',
    image: '/images/events/crime-pickpocket.png',
    effects: { health: -15, stamina: -10 },
  },
  {
    id: 'crime-bad-02',
    description: 'You were caught shoplifting and had to run like hell.',
    image: '/images/events/crime-shoplifting.png',
    effects: { stamina: -15, hygiene: -5 },
  },
  {
    id: 'crime-bad-03',
    description: 'You broke into a dumpster only to cut yourself on glass.',
    image: '/images/events/crime-dumpster.png',
    effects: { health: -10, hygiene: -10 },
  },
  {
    id: 'crime-bad-04',
    description: 'Someone ratted you out. You lost what little you had.',
    image: '/images/events/crime-ratted-out.png',
    effects: { scrap: -2 },
  },
  {
    id: 'crime-bad-05',
    description: 'You got mugged while trying to mug someone else.',
    image: '/images/events/crime-mugged.png',
    effects: { health: -6, money: -3.0 },
  },
];

export default crimeBadEvents;