import categoriesJson from './categories';

const eventsJson = [
  {
    id: 1,
    slug: 'new-jersey-devils-at-new-york-islanders',
    name: 'New Jersey Devils at New York Islanders',
    date: '2018-11-03 19:00:00',
    category: 1,
  },
  {
    id: 2,
    slug: 'montreal-canadiens-at-new-york-islanders',
    name: 'Montreal Canadiens at New York Islanders',
    date: '2018-11-05 19:00:00',
    category: 1,
  },
  {
    id: 3,
    slug: 'vancouver-canucks-at-new-york-islanders',
    name: 'Vancouver Canucks at New York Islanders',
    date: '2018-11-13 19:00:00',
    category: 1,
  },
  {
    id: 4,
    slug: 'ufc-230-cormier-vs-lewis',
    name: 'UFC 230: Cormier vs Lewis',
    date: '2018-11-03 18:15:00',
    category: 2,
  },
  {
    id: 5,
    slug: 'green-bay-packers-at-new-york-jets',
    name: 'Green Bay Packers at New York Jets',
    date: '2018-12-23 13:00:00',
    category: 3,
  },
  {
    id: 6,
    slug: 'houston-texans-at-new-york-jets',
    name: 'Houston Texans at New York Jets',
    date: '2018-12-15 16:30:00',
    category: 3,
  },
  {
    id: 7,
    slug: 'new-england-patriots-at-new-york-jets',
    name: 'New England Patriots at New York Jets',
    date: '2018-11-25 13:00:00',
    category: 3,
  },
  {
    id: 8,
    slug: 'shamrock-series-notre-dame-fighting-irish-vs-syracuse-orange-football',
    name: 'Shamrock Series Notre Dame Fighting Irish vs Syracuse Orange Football',
    date: '2018-11-17 14:30:00',
    category: 4,
  },
  {
    id: 9,
    slug: 'miami-heat-at-brooklyn-nets',
    name: 'Miami Heat at Brooklyn Nets',
    date: '2018-11-14 19:30:00',
    category: 5,
  },
  {
    id: 10,
    slug: 'oklahoma-city-thunder-at-brooklyn-nets',
    name: 'Oklahoma City Thunder at Brooklyn Nets',
    date: '2018-12-05 19:30:00',
    category: 5,
  },
  {
    id: 11,
    slug: 'los-angeles-clippers-at-brooklyn-nets',
    name: 'Los Angeles Clippers at Brooklyn Nets',
    date: '2018-11-18 18:00:00',
    category: 5,
  },
  {
    id: 12,
    slug: 'kiss-vip-packages',
    name: 'Kiss VIP Packages',
    date: '2019-03-27 22:00:00',
    category: 6,
  },
  {
    id: 13,
    slug: 'kiss',
    name: 'kiss',
    date: '2019-03-27 19:30:00',
    category: 6,
  },
  {
    id: 14,
    slug: 'chris-stapleton',
    name: 'Chris Stapleton',
    date: '2018-11-02 19:00:00',
    category: 7,
  },
];

export default categorySlug => {
  const category = categoriesJson.find(category => category.slug === categorySlug);

  return eventsJson.filter(event => event.category === category.id);
};
