import SortingView from '../view/sorting-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventsListView from '../view/events-list-view.js';

import {render} from '../render.js';
import {getRandomEvent} from '../mock/trip-event.js';
import {EVENT_VIEW_AMOUNT} from '../const.js';

export default class MainPresenter {
  sortingComponent = new SortingView();
  eventsListComponent = new EventsListView();
  eventEditComponent = new EventEditView();

  constructor(container, eventsModel) {
    this.container = container;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];

    render(this.sortingComponent, this.container);
    render(this.eventsListComponent, this.container);
    render(this.eventEditComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < EVENT_VIEW_AMOUNT; i++) {
      render(new EventsItemView({event: this.events[i]}), this.eventsListComponent.getElement());
    }
  }
}
