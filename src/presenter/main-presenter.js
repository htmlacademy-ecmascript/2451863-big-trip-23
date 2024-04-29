//import EventsListView from '../view/event-list';
import SortingView from '../view/sorting.js';
import EventEditView from '../view/event-edit.js';
import EventsItemView from '../view/event-item.js';
import EventsListView from '../view/event-list.js';

import {render} from '../render.js';

const POINT_AMOUNT = 3;

export default class MainPresenter {
  sortingElement = new SortingView();
  eventsListElement = new EventsListView();
  eventEditElement = new EventEditView();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(this.sortingElement, this.container);
    render(this.eventsListElement, this.container);
    render(this.eventEditElement, this.eventsListElement.getElement());

    for (let i = 0; i < POINT_AMOUNT; i++) {
      const eventsItemElement = new EventsItemView();
      render(eventsItemElement, this.eventsListElement.getElement());
    }
  }
}
