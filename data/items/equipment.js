export const jackets = [
  {
    id: 'jacket_01',
    name: 'Abibas Windbreaker',
    description: 'Three stripes of shame. Wind-resistant... sort of.',
    slot: 'jacket',
    tier: 1,
    image: '/images/items/jacket_01.png',
  },
  {
    id: 'jacket_02',
    name: 'North Wish Puffer',
    description: 'Almost warm. Almost waterproof. Mostly wishful thinking.',
    slot: 'jacket',
    tier: 1,
    image: '/images/items/jacket_02.png',
  },
  {
    id: 'jacket_03',
    name: 'Blanket Cape',
    description: 'A stylish cape made from a bus stop blanket. Smells vintage.',
    slot: 'jacket',
    tier: 1,
    image: '/images/items/jacket_03.png',
  },
  {
    id: 'jacket_04',
    name: 'Goosey Canada Vest',
    description: 'Filled with maybe-goose. Looks warm. Feels... crunchy?',
    slot: 'jacket',
    tier: 1,
    image: '/images/items/jacket_04.png',
  },
];

export const pants = [
  {
    id: 'pants_01',
    name: 'Levi’t’s 501-ish',
    description: 'There were 501 reasons to throw these out. You kept them anyway.',
    slot: 'pants',
    tier: 1,
    image: '/images/items/pants_01.png',
  },
  {
    id: 'pants_02',
    name: 'Wrenglers',
    description: 'Wrangles more smells than cows. Built for rough sittin\'.',
    slot: 'pants',
    tier: 1,
    image: '/images/items/pants_02.png',
  },
  {
    id: 'pants_03',
    name: 'Cargo Shorts of Holding',
    description: 'So many pockets. So much lint.',
    slot: 'pants',
    tier: 1,
    image: '/images/items/pants_03.png',
  },
  {
    id: 'pants_04',
    name: 'Business Slacks (Soiled)',
    description: 'Smells of missed opportunity and spilt coffee.',
    slot: 'pants',
    tier: 1,
    image: '/images/items/pants_04.png',
  },
];

export const shoes = [
  {
    id: 'shoes_01',
    name: 'Nuke Airs',
    description: 'The only air in them is from the holes.',
    slot: 'shoes',
    tier: 1,
    image: '/images/items/shoes_01.png',
  },
  {
    id: 'shoes_02',
    name: 'Croxx Sandals',
    description: 'Technically not shoes. Spiritually not sandals.',
    slot: 'shoes',
    tier: 1,
    image: '/images/items/shoes_02.png',
  },
  {
    id: 'shoes_03',
    name: 'Steeltoe Slippers',
    description: 'Soft inside. Steel death outside.',
    slot: 'shoes',
    tier: 1,
    image: '/images/items/shoes_03.png',
  },
  {
    id: 'shoes_04',
    name: 'Conbrokes All-Sketch',
    description: 'Sketchy look. Sketchier sole grip.',
    slot: 'shoes',
    tier: 1,
    image: '/images/items/shoes_04.png',
  },
];

export const hats = [
  {
    id: 'hat_01',
    name: 'Tinfoil Fedora',
    description: 'Stylish AND conspiracy-ready.',
    slot: 'hat',
    tier: 1,
    image: '/images/items/hat_01.png',
  },
  {
    id: 'hat_02',
    name: 'Raccoon Beanie',
    description: 'May still be occupied.',
    slot: 'hat',
    tier: 1,
    image: '/images/items/hat_02.png',
  },
  {
    id: 'hat_03',
    name: 'Soggy Top Hat',
    description: 'Dignity... but damp.',
    slot: 'hat',
    tier: 1,
    image: '/images/items/hat_03.png',
  },
  {
    id: 'hat_04',
    name: 'Burger King Crown',
    description: 'You are royalty... of the alley.',
    slot: 'hat',
    tier: 1,
    image: '/images/items/hat_04.png',
  },
];

export const gloves = [
  {
    id: 'gloves_01',
    name: 'Mitton\'s Originals',
    description: 'One size fits most. One glove included.',
    slot: 'gloves',
    tier: 1,
    image: '/images/items/gloves_01.png',
  },
  {
    id: 'gloves_02',
    name: 'Sock Puppets',
    description: 'Technically gloves. Mentally unstable.',
    slot: 'gloves',
    tier: 1,
    image: '/images/items/gloves_02.png',
  },
  {
    id: 'gloves_03',
    name: 'Greasy Mechanic Mitts',
    description: 'Hold tools. And resentment.',
    slot: 'gloves',
    tier: 1,
    image: '/images/items/gloves_03.png',
  },
  {
    id: 'gloves_04',
    name: 'Wooly Rags',
    description: 'Smells like old soup. Works like new gloves.',
    slot: 'gloves',
    tier: 1,
    image: '/images/items/gloves_04.png',
  },
];

export const weapons = [
  {
    id: 'weapon_01',
    name: 'Buttershiv',
    description: 'Spreads fear and margarine.',
    slot: 'weapon',
    tier: 1,
    image: '/images/items/equipment/weapon_01.png',
  },
  {
    id: 'weapon_02',
    name: 'Half a Crutch',
    description: 'Good for whacking. Bad for balance.',
    slot: 'weapon',
    tier: 1,
    image: '/images/items/weapon_02.png',
  },
  {
    id: 'weapon_03',
    name: 'Broken Guitar',
    description: 'No strings attached. Or frets.',
    slot: 'weapon',
    tier: 1,
    image: '/images/items/weapon_03.png',
  },
  {
    id: 'weapon_04',
    name: 'Soup Can on a Rope',
    description: 'Unorthodox. Unexpected. Unhinged.',
    slot: 'weapon',
    tier: 1,
    image: '/images/items/weapon_04.png',
  },
];

const equipment = [
  ...jackets,
  ...pants,
  ...shoes,
  ...hats,
  ...gloves,
  ...weapons,
];

export default equipment;
