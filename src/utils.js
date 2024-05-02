import {MOCK_PHOTOGEN_MIN, MOCK_PHOTOGEN_MAX, MOCK_LOREM, MOCK_DESCGEN_MIN, MOCK_DESCGEN_MAX} from './const.js';

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayItem = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPhoto = () => `https://loremflickr.com/248/152?random=${getRandomInteger(MOCK_PHOTOGEN_MIN, MOCK_PHOTOGEN_MAX)}`;

const getRandomDescription = () => {
  const descriptionLength = getRandomInteger(MOCK_DESCGEN_MIN, MOCK_DESCGEN_MAX);
  let mockDescription = '';
  for (let i = 0; i < descriptionLength; i++) {
    mockDescription += `${getRandomArrayItem(MOCK_LOREM)} `;
  }
  return mockDescription.trim();
};
export {getRandomArrayItem, getRandomPhoto, getRandomDescription};
