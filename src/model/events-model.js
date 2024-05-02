import {EVENT_COUNT} from '../const.js';
import {getRandomEvent} from '../mock/mock-event.js';

export default class EventsModel {
  events = Array.from({length: EVENT_COUNT}, getRandomEvent);

  getEvents() {
    return this.events;
  }
}
