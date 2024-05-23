import {getFilters} from '../const';

export default class FiltersModel {
  #filter = getFilters().EVERYTHING;

  get filter() {
    return this.#filter;
  }

  set filter(newFilter) {
    this.#filter = newFilter;
  }
}
