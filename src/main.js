import MainPresenter from './presenter/main-presenter.js';
import TripInfoView from './view/trip-info.js';
import FiltersView from './view/filters.js';
import {render, RenderPosition} from './render.js';

const pageMainElement = document.querySelector('.page-main');
const pageHeaderElement = document.querySelector('.page-header');

const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = pageHeaderElement.querySelector('.trip-controls__filters');

const tripEventsElement = pageMainElement.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);

render(new FiltersView(), tripControlsFiltersElement, RenderPosition.BEFOREEND);

const mainPresenter = new MainPresenter(tripEventsElement);

mainPresenter.init();
