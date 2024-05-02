import {getRandomArrayItem, getRandomPhoto, getRandomDescription} from '../utils.js';
//import {POINT_TYPES} from '../const.js';

const mockDestinations = [
  {
    id: 'dest1',
    description: getRandomDescription(),
    name: 'Chamonix',
    pictures: [
      {
        src: getRandomPhoto(),
        description: getRandomDescription(),
      },
      {
        src: getRandomPhoto(),
        description: getRandomDescription(),
      },
      {
        src: getRandomPhoto(),
        description: getRandomDescription(),
      }
    ],
  },
  {
    id: 'dest2',
    description: getRandomDescription(),
    name: 'Amsterdam',
    pictures: [],
  },
  {
    id: 'dest3',
    description: getRandomDescription(),
    name: 'Jeneva',
    pictures: [
      {
        src: getRandomPhoto(),
        description: getRandomDescription(),
      }
    ],
  }
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 't1',
        title: 'Upgrade to a comfort class',
        price: 120,
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'f1',
        title: 'Business class food',
        price: 40,
      },
      {
        id: 'f2',
        title: 'Extra luggage',
        price: 80,
      },
      {
        id: 'f3',
        title: 'On-board TV-station',
        price: 20,
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'c1',
        title: 'Mini-bar code',
        price: 30,
      },
      {
        id: 'c2',
        title: 'Double bedroom',
        price: 160,
      },
    ]
  }
];

const mockEvents = [
  {
    id: 'flight-chamonix',
    basePrice: 600,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: false,
    offers: [
      'f1', 'f3'
    ],
    type: 'flight'
  },
  {
    id: 'flight-amsterdam',
    basePrice: 400,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest2',
    isFavorite: true,
    offers: [
      'f2'
    ],
    type: 'flight'
  },
  {
    id: 'check-in-jeneva',
    basePrice: 1200,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest3',
    isFavorite: true,
    offers: [
      'f1'
    ],
    type: 'check-in'
  },
  {
    id: 'taxi-jeneva',
    basePrice: 90,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest3',
    isFavorite: false,
    offers: [],
    type: 'taxi'
  },
  {
    id: 'bus-chamonix',
    basePrice: 30,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
];

const getEventDestination = (event) => mockDestinations.find((destination) => destination.id === event.destination);

const getEventOffers = (event) => mockOffers.find((offers) => offers.type === event.type);

const getRandomEvent = () => {
  const event = getRandomArrayItem(mockEvents);
  return {
    event: event,
    description: getEventDestination(event),
    offers: getEventOffers(event),
  };
};

export {getRandomEvent};
