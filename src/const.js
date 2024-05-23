const SORTER_TYPES = ['day', 'event', 'time', 'price', 'offer'];

const Filters = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const EmptyFilterMessages = {
  [Filters.EVERYTHING]: 'Click New Event to create your first point',
  [Filters.PAST]: 'There are no past events now',
  [Filters.PRESENT]: 'There are no present events now',
  [Filters.FUTURE]: 'There are no future events now',
};

const EVENT_COUNT = 8;

const BLANK_EVENT = {
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: 0,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

export {SORTER_TYPES, EVENT_COUNT, BLANK_EVENT, Filters, EmptyFilterMessages};
