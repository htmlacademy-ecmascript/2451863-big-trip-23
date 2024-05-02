import {getRandomPhoto, getRandomDescription} from '../utils.js';

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

export {mockDestinations};
