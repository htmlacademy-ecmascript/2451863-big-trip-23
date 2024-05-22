const SORTER_TYPES = ['day', 'event', 'time', 'price', 'offer'];
const FILTER_TYPES = ['everything', 'future', 'present', 'past'];

const EVENT_COUNT = 8;

const PLACEHOLDER_EVENT = {
  id: 'placeholder',
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: 0,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

export {SORTER_TYPES, FILTER_TYPES, EVENT_COUNT, PLACEHOLDER_EVENT};
