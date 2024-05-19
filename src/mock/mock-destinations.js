const mockDestinations = [
  {
    id: 'dest1',
    description: 'Chamonix aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'Chamonix pic 1.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'Chamonix pic 2.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'Chamonix pic 3.',
      }
    ],
  },
  {
    id: 'dest2',
    description: 'Amsterdam id orci ut lectus varius viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Amsterdam',
    pictures: [],
  },
  {
    id: 'dest3',
    description: 'Jeneva nunc ex, convallis sed finibus eget, sollicitudin eget ante. Aliquam id orci ut lectus varius viverra. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Jeneva',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'Jeneva pic 1.',
      }
    ],
  }
];

const getMockDestinations = () => mockDestinations;

export {getMockDestinations};
