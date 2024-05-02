(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}const n=["day","event","time","price","offer"],i=["everything","future","present","past"],s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],a=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."];class l{getTemplate(){return`\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${n.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    ${(e=>`\n  <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${(e=>"day"===e?"checked":"event"===e||"offer"===e?"disabled":"")(e)}>\n`)(e)}\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("")}\n  </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const o=[{id:"luggage",title:"Add luggage",price:30,checked:!0},{id:"comfort",title:"Switch to comfort class",price:100,checked:!0},{id:"meal",title:"Add meal",price:15,checked:!1},{id:"seats",title:"Choose seats",price:5,checked:!1},{id:"train-",title:"Travel by train",price:40,checked:!1}];class r{getTemplate(){return`\n<li>\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${s.map((e=>(e=>`\n  <div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e.charAt(0).toUpperCase()+e.slice(1)}</label>\n  </div>\n`)(e))).join("")}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          Flight\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n        <datalist id="destination-list-1">\n          <option value="Amsterdam"></option>\n          <option value="Geneva"></option>\n          <option value="Chamonix"></option>\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Cancel</button>\n    </header>\n    <section class="event__details">\n      \n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${o.map((e=>(({id:e,title:t,price:n,checked:i})=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${i?"checked":""}>\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </label>\n  </div>\n`)(e))).join("")}\n    </div>\n  </section>\n\n      \n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n        <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n        <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n        <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n        <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n      </div>\n    </div>\n  </section>\n\n    </section>\n  </form>\n</li>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">MAR 18</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">Flight Chamonix</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>\n          &mdash;\n          <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>\n        </p>\n        <p class="event__duration">01H 10M</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">160</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        <li class="event__offer">\n          <span class="event__offer-title">Add luggage</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">50</span>\n        </li>\n        <li class="event__offer">\n          <span class="event__offer-title">Switch to comfort</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">80</span>\n        </li>\n      </ul>\n      <button class="event__favorite-btn" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const d=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),v=e=>e[Math.floor(Math.random()*e.length)],m=()=>`https://loremflickr.com/248/152?random=${d(0,100)}`,u=()=>{const e=d(0,5);let t="";for(let n=0;n<e;n++)t+=`${v(a)} `;return t.trim()},_=[{id:"dest1",description:u(),name:"Chamonix",pictures:[{src:m(),description:u()},{src:m(),description:u()},{src:m(),description:u()}]},{id:"dest2",description:u(),name:"Amsterdam",pictures:[]},{id:"dest3",description:u(),name:"Jeneva",pictures:[{src:m(),description:u()}]}],h=[{type:"taxi",offers:[{id:"t1",title:"Upgrade to a comfort class",price:120}]},{type:"flight",offers:[{id:"f1",title:"Business class food",price:40},{id:"f2",title:"Extra luggage",price:80},{id:"f3",title:"On-board TV-station",price:20}]},{type:"check-in",offers:[{id:"c1",title:"Mini-bar code",price:30},{id:"c2",title:"Double bedroom",price:160}]}],f=[{id:"flight-chamonix",basePrice:600,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest1",isFavorite:!1,offers:["f1","f3"],type:"flight"},{id:"flight-amsterdam",basePrice:400,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest2",isFavorite:!0,offers:["f2"],type:"flight"},{id:"check-in-jeneva",basePrice:1200,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest3",isFavorite:!0,offers:["f1"],type:"check-in"},{id:"taxi-jeneva",basePrice:90,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest3",isFavorite:!1,offers:[],type:"taxi"},{id:"bus-chamonix",basePrice:30,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest1",isFavorite:!1,offers:[],type:"bus"}],g=e=>_.find((t=>t.id===e.destination)),b=e=>h.find((t=>t.type===e.type)),y=()=>{const e=v(f);return{event:e,description:g(e),offers:b(e)}},T=document.querySelector(".page-main"),E=document.querySelector(".page-header"),$=E.querySelector(".trip-main"),x=E.querySelector(".trip-controls__filters"),k=T.querySelector(".trip-events");t(new class{getTemplate(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},$,"afterbegin"),t(new class{getTemplate(){return`\n  <form class="trip-filters" action="#" method="get">\n    ${i.map((e=>(e=>`\n<div class="trip-filters__filter">\n  ${(e=>`\n  <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=" ${e}" ${"everything"===e?"checked":""}>\n`)(e)}\n  <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n</div>\n`)(e))).join("")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},x);const C=new class{events=Array.from({length:5},y);getEvents(){return this.events}},w=new class{sortingComponent=new l;eventsListComponent=new p;eventEditComponent=new r;constructor(e,t){this.container=e,this.eventsModel=t}init(){this.events=[...this.eventsModel.getEvents()],t(this.sortingComponent,this.container),t(this.eventsListComponent,this.container),t(this.eventEditComponent,this.eventsListComponent.getElement());for(let e=0;e<5;e++)t(new c({event:this.events[e]}),this.eventsListComponent.getElement())}}(k,C);w.init()})();
//# sourceMappingURL=bundle.8ba62def055c94e8dcc4.js.map