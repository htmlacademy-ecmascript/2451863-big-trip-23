import {createElement} from '../render';

const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EventsListView {
  getTemplate() {
    return createEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  addListItem(listItem) {
    this.getElement().append(listItem.getElement());
  }

  removeElement() {
    this.element = null;
  }
}
