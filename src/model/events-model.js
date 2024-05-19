import {EVENT_COUNT} from '../const.js';

import {getRandomEvent} from '../mock/mock-event.js';
import {getMockDestinations} from '../mock/mock-destinations.js';
import {getMockOffers} from '../mock/mock-offers.js';
export default class EventsModel {
  events = Array.from({length: EVENT_COUNT}, getRandomEvent);
  destinations = getMockDestinations();
  offers = getMockOffers();

  getEvents() {
    return this.events;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
