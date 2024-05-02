import MainPresenter from './presenter/main-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import EventsModel from './model/events-model.js';

import {render, RenderPosition} from './render.js';

const pageMainElement = document.querySelector('.page-main');
const pageHeaderElement = document.querySelector('.page-header');

const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = pageHeaderElement.querySelector('.trip-controls__filters');

const tripEventsElement = pageMainElement.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);

render(new FiltersView(), tripControlsFiltersElement);

const eventsModel = new EventsModel();

const mainPresenter = new MainPresenter(tripEventsElement, eventsModel);

mainPresenter.init();
