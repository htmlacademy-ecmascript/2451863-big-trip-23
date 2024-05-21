import MainPresenter from './presenter/main-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import EventsModel from './model/events-model.js';

import {render, RenderPosition} from './framework/render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);

render(new FiltersView(), tripControlsFiltersElement);

const eventsModel = new EventsModel();

const mainPresenter = new MainPresenter({
  container: tripEventsElement,
  eventsModel
});

mainPresenter.init();
