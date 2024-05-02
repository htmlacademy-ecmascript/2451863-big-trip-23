import {getRandomArrayItem} from '../utils.js';
import {mockDestinations} from './mock-destination.js';
import {mockOffers} from './mock-offers.js';

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
