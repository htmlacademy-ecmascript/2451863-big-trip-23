import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filterType) => `
<div class="trip-filters__filter">
  <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}" ${filterType === 'everything' ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
</div>
`;

const createFiltersTemplate = (filters) => `
  <form class="trip-filters" action="#" method="get">
    ${Object.values(filters).map((filterType) => createFilterItemTemplate(filterType)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;

  constructor({filters, currentFilter, onFilterChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilter;

    this.element.addEventListener('change', onFilterChange);
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
