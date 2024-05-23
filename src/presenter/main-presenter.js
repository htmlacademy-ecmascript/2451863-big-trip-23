import SortingView from '../view/sorting-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventView from '../view/event-view.js';
import EventsListView from '../view/events-list-view.js';
import BlankPageView from '../view/blank-page-view.js';
import FiltersView from '../view/filters-view.js';

import {getEmptyFilterMessages} from '../const.js';
import {render, replace} from '../framework/render.js';
import {isEscapeKey, isArrayEmpty} from '../utils.js';
export default class MainPresenter {
  #container = null;
  #eventsModel = null;
  #filtersModel = null;

  #sortingComponent = new SortingView();
  #eventsListComponent = new EventsListView();

  #events = [];

  constructor({container, eventsModel, filtersModel}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#filtersModel = filtersModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];

    if (!isArrayEmpty(this.#events)) {
      this.#renderEventsListContent();
    } else {
      this.#renderBlankPage(this.#filtersModel.filter);
    }
  }

  #renderBlankPage(filter) {
    const blankPageComponent = new BlankPageView({filter});
    console.log(filter);
    render(blankPageComponent, this.#container);
  }

  #renderEventsListContent() {
    render(this.#sortingComponent, this.#container);

    render(this.#eventsListComponent, this.#container);

    this.#events.forEach((event) => {
      this.#renderEvent(event);
    });
  }

  #renderEvent(event) {
    const onEscKeydown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceEditFormToEvent();
        document.removeEventListener('keydown', onEscKeydown);
      }
    };

    const eventComponent = new EventView({
      event,
      destinations: this.#eventsModel.destinations,
      offers: this.#eventsModel.offers,
      onRollUpButtonClick: () => {
        replaceEventToEditForm();
        document.addEventListener('keydown', onEscKeydown);
      }
    });

    const editFormComponent = new EditFormView({
      event,
      destinations: this.#eventsModel.destinations,
      offers: this.#eventsModel.offers,
      onEditFormSubmit: () => {
        replaceEditFormToEvent();
        document.removeEventListener('keydown', onEscKeydown);
      },
      onRollUpButtonClick: () => {
        replaceEditFormToEvent();
        document.removeEventListener('keydown', onEscKeydown);
      }
    });

    function replaceEventToEditForm () {
      replace(editFormComponent, eventComponent);
    }

    function replaceEditFormToEvent () {
      replace(eventComponent, editFormComponent);
    }

    render(eventComponent, this.#eventsListComponent.element);
  }
}
