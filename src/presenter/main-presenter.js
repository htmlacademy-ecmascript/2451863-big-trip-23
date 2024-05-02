import SortingView from '../view/sorting-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventsListView from '../view/events-list-view.js';

import {render} from '../render.js';

const POINT_AMOUNT = 3;

export default class MainPresenter {
  sortingComponent = new SortingView();
  eventsListComponent = new EventsListView();
  eventEditComponent = new EventEditView();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(this.sortingComponent, this.container);
    render(this.eventsListComponent, this.container);
    render(this.eventEditComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < POINT_AMOUNT; i++) {
      render(new EventsItemView(), this.eventsListComponent.getElement());
    }
  }
}
