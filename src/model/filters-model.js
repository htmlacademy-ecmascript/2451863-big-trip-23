import {getFilters} from '../const.js';
export default class FiltersModel {
  #filter = getFilters().EVERYTHING;

  get filter() {
    return this.#filter;
  }

  set filter(newFilter) {
    this.#filter = newFilter;
  }
}
