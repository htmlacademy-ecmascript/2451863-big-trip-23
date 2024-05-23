import {getFilters} from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const formatDate = (date, format) => dayjs(date).format(format);

const getDuration = (dateFrom, dateTo) => {
  const start = dayjs(dateFrom).startOf('minute');
  const end = dayjs(dateTo).startOf('minute');
  const diffInMs = end.diff(start);
  // eslint-disable-next-line no-shadow
  const duration = dayjs.duration(diffInMs);

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  return `${minutes}M`;
};

const isEventPast = (dateTo) => new Date() > new Date(dateTo);
const isEventFuture = (dateFrom) => new Date() < new Date(dateFrom);
const isEventPresent = (dateFrom, dateTo) => !isEventPast(dateTo) && !isEventFuture(dateFrom);

const FilterEventsFunctions = {
  [getFilters().EVERYTHING]: (events) => events,
  [getFilters().PAST]: (events) => events.filter((event) => isEventPast(event.dateTo)),
  [getFilters().PRESENT]: (events) => events.filter((event) => isEventPresent(event.dateFrom, event.dateTo)),
  [getFilters().FUTURE]: (events) => events.filter((event) => isEventFuture(event.dateFrom)),
};
const getActiveClass = (isActive, activeClass) => isActive ? activeClass : '';

const getRandomArrayItem = (items) => items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isArrayEmpty = (array) => !(array && array.length > 0);

export {getRandomArrayItem, formatDate, getDuration, getActiveClass, isEscapeKey, isArrayEmpty, FilterEventsFunctions};
