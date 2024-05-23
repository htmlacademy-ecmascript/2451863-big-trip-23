import MainPresenter from './presenter/main-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import EventsModel from './model/events-model.js';
import FiltersModel from './model/filters-model.js';
import {render, RenderPosition} from './framework/render.js';
import {getFilters} from './const.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);

const eventsModel = new EventsModel();

const filtersModel = new FiltersModel();

const filtersComponent = new FiltersView({
  filters: getFilters(),
  currentFilter: filtersModel.filter,
  onFilterChange: (evt) => {
    evt.preventDefault();
    filtersModel.filter = evt.target.value;
  }
});

render(filtersComponent, tripControlsFiltersElement);

const mainPresenter = new MainPresenter({
  container: tripEventsElement,
  eventsModel,
  filtersModel
});

mainPresenter.init();
