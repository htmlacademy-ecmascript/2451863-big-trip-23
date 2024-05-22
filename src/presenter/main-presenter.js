import SortingView from '../view/sorting-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventView from '../view/event-view.js';
import EventsListView from '../view/events-list-view.js';
import {render, replace} from '../framework/render.js';
import {isEscapeKey} from '../utils.js';
export default class MainPresenter {
  #container = null;
  #eventsModel = null;

  #sortingComponent = new SortingView();
  #eventsListComponent = new EventsListView();

  #events = [];

  constructor({container, eventsModel}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];

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
