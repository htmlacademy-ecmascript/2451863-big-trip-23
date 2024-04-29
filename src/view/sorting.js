import {createElement} from '../render';

const SORTER_TYPES = [
  'day',
  'event',
  'time',
  'price',
  'offer'
];

const createSortingItemInputTemplate = (sorterType) => {
  if (sorterType === 'day') {
    return `<input id="sort-${sorterType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorterType}" checked>`;
  }

  if (sorterType === 'event' || sorterType === 'offer') {
    return `<input id="sort-${sorterType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorterType}" disabled>`;
  }

  return `<input id="sort-${sorterType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorterType}">`;
};

const createSortingItemTemplate = (sorterType) => `
  <div class="trip-sort__item  trip-sort__item--${sorterType}">
    ${createSortingItemInputTemplate(sorterType)}
    <label class="trip-sort__btn" for="sort-${sorterType}">${sorterType}</label>
  </div>
`;

const createSortingFormTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORTER_TYPES.map((sorterType) => createSortingItemTemplate(sorterType)).join('')}
  </form>
`;

export default class SortingView {
  getTemplate() {
    return createSortingFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}