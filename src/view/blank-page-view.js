import AbstractView from '../framework/view/abstract-view';

const createBlankPageTemplate = (message) => `<p class="trip-events__msg">${message}</p>`;

export default class BlankPageView extends AbstractView {
  #message = null;

  constructor({message}) {
    super();
    this.#message = message;
  }

  get template() {
    return createBlankPageTemplate(this.#message);
  }
}
