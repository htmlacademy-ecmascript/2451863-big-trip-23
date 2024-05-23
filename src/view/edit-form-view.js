import AbstractView from '../framework/view/abstract-view.js';
import {BLANK_EVENT} from '../const.js';
import {formatDate, isArrayEmpty} from '../utils.js';

const createPointTemplate = (eventType, eventID, type) => `
  <div class="event__type-item">
    <input id="event-type-${eventType}-${eventID}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType} ${eventType === type ? 'checked' : ''}">
    <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-${eventID}">${eventType.charAt(0).toUpperCase() + eventType.slice(1)}</label>
  </div>
`;

const createDestinationOptionTemplate = (name) => `<option value="${name}"></option>`;

const createOffersItemTemplate = ({id, title, price, checked}) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id} ${checked ? 'checked' : ''}">
    <label class="event__offer-label" for="event-offer-${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const createOffersTemplate = (allOffers, activeOffers) => {
  if (isArrayEmpty(allOffers)) {
    return '';
  }

  const offersTemplate = allOffers.reduce((acc, offer) => {
    const active = activeOffers.some((activeOffer) => activeOffer.id === offer.id);
    return acc + createOffersItemTemplate({...offer, active});
  }, '');

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offersTemplate}
      </div>
    </section>
  `;
};

const createPhotosTemplate = (photos) => {
  const photosList = photos.map((photo) => `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`).join('');

  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${photosList}
      </div>
    </div>
  `;
};

const createDestinationTemplate = (description, photos) => {
  if (isArrayEmpty(description)) {
    return '';
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${createPhotosTemplate(photos)}
    </section>
  `;
};

const createEditFormTemplate = (event, destinations, offers) => {
  const {type, dateFrom, dateTo, basePrice} = event;

  const eventID = event.id || 0;

  const eventTypes = offers.map((offer) => offer.type);

  const destinationNames = destinations.map((destination) => destination.name);

  const eventDestination = destinations.find((destination) => destination.id === event.destination);

  const allEventOffers = offers.find((offer) => offer.type === event.type)?.offers || [];
  const activeEventOffers = event.offers.map((offerID) => allEventOffers.find((offer) => offer.id === offerID)).filter(Boolean);

  return `
    <li>
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${eventID}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${eventID}" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${eventTypes.map((eventType) => createPointTemplate(eventType, eventID, type)).join('')}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${eventID}">
              ${type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${eventID}" type="text" name="event-destination" value="${eventDestination.name}" list="destination-list-${eventID}">
            <datalist id="destination-list-${eventID}">
              ${destinationNames.map((destinationName) => createDestinationOptionTemplate(destinationName)).join('')}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${eventID}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${eventID}" type="text" name="event-start-time" value="${formatDate(dateFrom, 'DD/MM/YY HH:mm')}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${eventID}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${eventID}" type="text" name="event-end-time" value="${formatDate(dateTo, 'DD/MM/YY HH:mm')}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${eventID}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${eventID}" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Close event</span>
          </button>
        </header>
        <section class="event__details">
          ${createOffersTemplate(allEventOffers, activeEventOffers)}
          ${createDestinationTemplate(eventDestination.description, eventDestination.pictures)}
        </section>
      </form>
    </li>
  `;
};

export default class EditFormView extends AbstractView {
  #event = null;
  #destinations = null;
  #offers = null;

  constructor({event = BLANK_EVENT, destinations, offers, onEditFormSubmit, onRollUpButtonClick}) {
    super();
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;

    this.element.querySelector('.event--edit').addEventListener('submit', onEditFormSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', onRollUpButtonClick);
  }

  get template() {
    return createEditFormTemplate(this.#event, this.#destinations, this.#offers);
  }
}
