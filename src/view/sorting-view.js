import AbstractView from '../framework/view/abstract-view.js';
import {SORTER_TYPES} from '../const.js';

const getButtonAttribute = (sorterType) => {
  if (sorterType === 'day') {
    return 'checked';
  }

  if (sorterType === 'event' || sorterType === 'offer') {
    return 'disabled';
  }

  return '';
};

const createSortingItemTemplate = (sorterType) => `
  <div class="trip-sort__item  trip-sort__item--${sorterType}">
    <input id="sort-${sorterType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorterType}" ${getButtonAttribute(sorterType)}>
    <label class="trip-sort__btn" for="sort-${sorterType}">${sorterType}</label>
  </div>
`;

const createSortingTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORTER_TYPES.map((sorterType) => createSortingItemTemplate(sorterType)).join('')}
  </form>
`;

export default class SortingView extends AbstractView {
  get template() {
    return createSortingTemplate();
  }
}
