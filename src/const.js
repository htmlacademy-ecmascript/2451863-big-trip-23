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

const EVENT_COUNT = 0;

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

const getSorterTypes = () => SORTER_TYPES;
const getFilters = () => Filters;
const getEmptyFilterMessages = () => EmptyFilterMessages;
const getEventCount = () => EVENT_COUNT;
const getPlaceholderEvent = () => PLACEHOLDER_EVENT;

export {getSorterTypes, getEventCount, getPlaceholderEvent, getFilters, getEmptyFilterMessages};
