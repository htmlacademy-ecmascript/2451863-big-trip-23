import {createElement} from '../render.js';
import {FILTER_TYPES} from '../const.js';

const createFilterInputTemplate = (filterType) => `
  <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=" ${filterType}" ${filterType === 'everything' ? 'checked' : ''}>
`;

const createFilterItemTemplate = (filterType) => `
<div class="trip-filters__filter">
  ${createFilterInputTemplate(filterType)}
  <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
</div>
`;

const createFiltersFormTemplate = () => `
  <form class="trip-filters" action="#" method="get">
    ${FILTER_TYPES.map((filterType) => createFilterItemTemplate(filterType)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class FiltersView {
  getTemplate() {
    return createFiltersFormTemplate();
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
