import {Filters} from '../const.js';

export default class FiltersModel {
  #filter = Filters.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  set filter(newFilter) {
    this.#filter = newFilter;
  }
}
