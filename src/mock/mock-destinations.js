const mockDestinations = [
  {
    id: 'dest1',
    description: 'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'Aliquam id orci ut lectus varius viverra.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
      }
    ],
  },
  {
    id: 'dest2',
    description: 'Aliquam id orci ut lectus varius viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Amsterdam',
    pictures: [],
  },
  {
    id: 'dest3',
    description: 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Aliquam id orci ut lectus varius viverra. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Jeneva',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
      }
    ],
  }
];

const getMockDestinations = () => mockDestinations;

export {getMockDestinations};
