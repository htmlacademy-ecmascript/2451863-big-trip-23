import {createElement} from '../render.js';
import {formatDate, getActiveClass, getDuration} from '../utils.js';

const createOffersTemplate = (offers) => {
  if (!offers || offers.length === 0) {
    return '';
  }

  const offersList = offers.map((offer) => `
    <li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`).join('');

  return `<ul class="event__selected-offers">${offersList}</ul>`;
};

const createEventTemplate = (event, destinations, offers) => {
  const {type, dateFrom, dateTo, basePrice, isFavorite} = event;

  const eventDestination = destinations.find((destination) => destination.id === event.destination);
  const eventDestinationName = eventDestination?.name || '';

  const eventAllOffers = offers.find((offer) => offer.type === event.type)?.offers || [];
  const eventOffersActive = eventAllOffers.filter((eventOffer) => event.offers.includes(eventOffer.id));

  const favoriteButtonClass = getActiveClass(isFavorite, 'event__favorite-btn--active');

  const offersTemplate = createOffersTemplate(eventOffersActive);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${formatDate(dateFrom, 'YYYY-MM-DD')}">${formatDate(dateFrom, 'MMM DD')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${eventDestinationName}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${formatDate(dateFrom, 'YYYY-MM-DDTHH:mm')}">${formatDate(dateFrom, 'HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${formatDate(dateTo, 'YYYY-MM-DDTHH:mm')}">"${formatDate(dateTo, 'YYYY-MM-DDTHH:mm')}"</time>
          </p>
          <p class="event__duration">${getDuration(dateFrom, dateTo)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${offersTemplate}
        <button class="event__favorite-btn ${favoriteButtonClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
};

export default class EventsItemView {
  constructor({event, destinations, offers}) {
    this.event = event;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEventTemplate(this.event, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
