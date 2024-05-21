import SortingView from '../view/sorting-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventView from '../view/event-view.js';
import EventsListView from '../view/events-list-view.js';
import {render} from '../framework/render.js';

export default class MainPresenter {
  sortingComponent = new SortingView();
  eventsListComponent = new EventsListView();

  constructor({container, eventsModel}) {
    this.container = container;
    this.eventsModel = eventsModel;
    this.destinations = this.eventsModel.destinations;
    this.offers = this.eventsModel.offers;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];

    render(this.sortingComponent, this.container);

    render(this.eventsListComponent, this.container);

    this.events.forEach((event) => {
      render(new EventView({event, destinations: this.destinations, offers: this.offers}), this.eventsListComponent.element);
    });
  }
}
