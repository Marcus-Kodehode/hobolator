const wanderBadEvents = [
  {
    description: 'You stepped in human poop. Disgusting.',
    effects: { hygiene: -10 },
  },
  {
    description: 'A bird pooped on your shoulder.',
    effects: { hygiene: -6, stamina: -2 },
  },
  {
    description: 'You wandered into a sketchy alley and got pushed around.',
    effects: { health: -8, stamina: -5 },
  },
  {
    description: 'You got lost and wasted energy.',
    effects: { stamina: -10 },
  },
  {
    description: 'You slipped on something rotten and bruised your ribs.',
    effects: { health: -6, hygiene: -4 },
  },
];

export default wanderBadEvents;
