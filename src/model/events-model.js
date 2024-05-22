import {EVENT_COUNT} from '../const.js';

import {getRandomEvent} from '../mock/mock-event.js';
import {getMockDestinations} from '../mock/mock-destinations.js';
import {getMockOffers} from '../mock/mock-offers.js';
export default class EventsModel {
  #events = Array.from({length: EVENT_COUNT}, getRandomEvent);
  #destinations = getMockDestinations();
  #offers = getMockOffers();

  get events() {
    return this.#events;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
