import AbstractView from '../framework/view/abstract-view';
import {getEmptyFilterMessages} from '../const';

const createBlankPageTemplate = (filter) => `<p class="trip-events__msg">${getEmptyFilterMessages()[filter]}</p>`;

export default class BlankPageView extends AbstractView {
  #filter = null;

  constructor({filter}) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createBlankPageTemplate(this.#filter);
  }
}
