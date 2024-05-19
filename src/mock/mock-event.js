import {getRandomArrayItem} from '../utils.js';

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

const getRandomEvent = () => getRandomArrayItem(mockEvents);

export {getRandomEvent};
