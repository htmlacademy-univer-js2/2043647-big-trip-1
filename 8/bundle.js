/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");



const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateBeginEndDates = () => {
  const maxGap = 14;
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(getRandomInteger(-maxGap, maxGap), 'day').add(getRandomInteger(-maxGap, maxGap), 'hour').add(getRandomInteger(-maxGap, maxGap), 'minute');
  const endDate = startDate.clone().add(getRandomInteger(0, 14), 'day').add(getRandomInteger(0, 59), 'hour').add(getRandomInteger(0, 59), 'minute');
  return {
    start: startDate.toDate(),
    end: endDate.toDate()
  };
};

const countDuration = (start, end) => {
  const interval = new Date(end - start);
  return {
    days: interval.getUTCDate() - 1,
    hours: interval.getUTCHours(),
    minutes: interval.getUTCMinutes()
  };
};

const generateOffers = () => {
  const offer = [{
    name: 'Add luggage',
    price: 30,
    type: 'luggage',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Switch to comfort',
    price: 100,
    type: 'flight',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Add meal',
    price: 15,
    type: 'meal',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Travel by train',
    price: 40,
    type: 'transport',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Rent a car',
    price: 200,
    type: 'car',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Add breakfast',
    price: 50,
    type: 'meal',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Order Uber',
    price: 20,
    type: 'transport',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Book tickets',
    price: 40,
    type: 'sightseeing',
    isChosen: Boolean(getRandomInteger(0, 1))
  }, {
    name: 'Lunch in city',
    price: 30,
    type: 'meal',
    isChosen: Boolean(getRandomInteger(0, 1))
  }];
  const randomIndex = getRandomInteger(0, offer.length - 1);
  return offer[randomIndex];
};

const generateCity = () => {
  const city = ['Amsterdam', 'Chamonix', 'Geneva'];
  const randomIndex = getRandomInteger(0, city.length - 1);
  return city[randomIndex];
};

const type = [{
  title: 'Taxi',
  img: 'img/icons/taxi.png'
}, {
  title: 'Bus',
  img: 'img/icons/bus.png'
}, {
  title: 'Train',
  img: 'img/icons/train.png'
}, {
  title: 'Ship',
  img: 'img/icons/ship.png'
}, {
  title: 'Drive',
  img: 'img/icons/drive.png'
}, {
  title: 'Flight',
  img: 'img/icons/flight.png'
}, {
  title: 'Check-in',
  img: 'img/icons/check-in.png'
}, {
  title: 'Sightseeng',
  img: 'img/icons/sightseeing.png'
}, {
  title: 'Restaurant',
  img: 'img/icons/restaurant.png'
}];

const generateDescriptions = () => {
  const description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'];
  const randomIndex = getRandomInteger(0, description.length - 1);
  return description[randomIndex];
};

const generatePhoto = () => {
  const photo = [];

  for (let i = 0; i <= 5; i++) {
    photo[i] = 'http://picsum.photos/248/152?';
    photo[i] += getRandomInteger(0, 99).toString();
  }

  return photo;
};

const generatePrice = () => getRandomInteger(20, 240);

const generatePoint = () => {
  const dates = generateBeginEndDates();
  return {
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
    startDate: dates.start,
    endDate: dates.end,
    duration: countDuration(dates.start, dates.end),
    offers: generateOffers(),
    description: generateDescriptions(),
    photo: generatePhoto(),
    price: generatePrice(),
    types: type[getRandomInteger(0, 8)],
    cities: generateCity(),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_content_items_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/content-items-view */ "./src/view/content-items-view.js");
/* harmony import */ var _view_edit_item_event_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/edit-item-event-view */ "./src/view/edit-item-event-view.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _tripPointsListElement = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _pointItemComponent = /*#__PURE__*/new WeakMap();

var _pointEditComponent = /*#__PURE__*/new WeakMap();

var _tripPoint = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replaceItemToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToItem = /*#__PURE__*/new WeakMap();

var _escKeyDownHandler = /*#__PURE__*/new WeakMap();

var _handleEditClick = /*#__PURE__*/new WeakMap();

var _handleRollupClick = /*#__PURE__*/new WeakMap();

var _handleFavoriteClick = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(tripPointsListElement, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _tripPointsListElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointItemComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointEditComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripPoint, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", tripPoint => {
      _classPrivateFieldSet(this, _tripPoint, tripPoint);

      const prevItemComponent = _classPrivateFieldGet(this, _pointItemComponent);

      const prevEditComponent = _classPrivateFieldGet(this, _pointEditComponent);

      _classPrivateFieldSet(this, _pointItemComponent, new _view_content_items_view__WEBPACK_IMPORTED_MODULE_0__["default"](tripPoint));

      _classPrivateFieldSet(this, _pointEditComponent, new _view_edit_item_event_view__WEBPACK_IMPORTED_MODULE_1__["default"](tripPoint));

      _classPrivateFieldGet(this, _pointItemComponent).setEditClickHandler(_classPrivateFieldGet(this, _handleEditClick));

      _classPrivateFieldGet(this, _pointItemComponent).setFavoriteClickHandler(_classPrivateFieldGet(this, _handleFavoriteClick));

      _classPrivateFieldGet(this, _pointEditComponent).setRollupClickHandler(_classPrivateFieldGet(this, _handleRollupClick));

      _classPrivateFieldGet(this, _pointEditComponent).setFormSubmit(_classPrivateFieldGet(this, _handleFormSubmit));

      if (prevItemComponent === null || prevEditComponent === null) {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _tripPointsListElement), _classPrivateFieldGet(this, _pointItemComponent), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointItemComponent), prevItemComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), prevEditComponent);
      }

      (0,_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevItemComponent);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEditComponent);
    });

    _defineProperty(this, "destroy", () => {
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointItemComponent));
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointEditComponent));
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceItemToForm, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), _classPrivateFieldGet(this, _pointItemComponent));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToItem, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointItemComponent), _classPrivateFieldGet(this, _pointEditComponent));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _escKeyDownHandler, {
      writable: true,
      value: evt => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _replaceFormToItem).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleEditClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceItemToForm).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleRollupClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleFavoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _tripPoint),
          isFavorite: !_classPrivateFieldGet(this, _tripPoint).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: point => {
        _classPrivateFieldGet(this, _changeData).call(this, point);

        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldSet(this, _tripPointsListElement, tripPointsListElement);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_content_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/content-list-view */ "./src/view/content-list-view.js");
/* harmony import */ var _view_empty_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/empty-list-view */ "./src/view/empty-list-view.js");
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _point_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-presenter */ "./src/presenter/point-presenter.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








var _mainElement = /*#__PURE__*/new WeakMap();

var _tripEventsElement = /*#__PURE__*/new WeakMap();

var _sortComponent = /*#__PURE__*/new WeakMap();

var _emptyEventList = /*#__PURE__*/new WeakMap();

var _tripEventsListElement = /*#__PURE__*/new WeakMap();

var _point = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _renderEmptyList = /*#__PURE__*/new WeakMap();

var _renderTripEventsListElement = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _handleTaskChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderTripEvent = /*#__PURE__*/new WeakMap();

var _renderTripEventsList = /*#__PURE__*/new WeakMap();

var _renderMain = /*#__PURE__*/new WeakMap();

var _clearTaskList = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(mainElement) {
    _classPrivateFieldInitSpec(this, _mainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripEventsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _sortComponent, {
      writable: true,
      value: new _view_sort_view__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _emptyEventList, {
      writable: true,
      value: new _view_empty_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _tripEventsListElement, {
      writable: true,
      value: new _view_content_list_view__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _defineProperty(this, "init", point => {
      _classPrivateFieldSet(this, _point, [...point]);

      _classPrivateFieldGet(this, _renderMain).call(this);
    });

    _classPrivateFieldInitSpec(this, _renderEmptyList, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _emptyEventList), _render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripEventsListElement, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _tripEventsListElement), _render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _handleTaskChange, {
      writable: true,
      value: updatedPoint => {
        _classPrivateFieldSet(this, _point, (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__.updateItem)(_classPrivateFieldGet(this, _point), updatedPoint));

        _classPrivateFieldGet(this, _pointPresenter).get(updatedPoint.id).init(updatedPoint);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _sortComponent), _render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.AFTERBEGIN);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripEvent, {
      writable: true,
      value: waypoint => {
        const pointPresenter = new _point_presenter__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _tripEventsListElement), _classPrivateFieldGet(this, _handleTaskChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(waypoint);

        _classPrivateFieldGet(this, _pointPresenter).set(waypoint.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripEventsList, {
      writable: true,
      value: () => {
        for (let i = 0; i < _classPrivateFieldGet(this, _point).length; i++) {
          _classPrivateFieldGet(this, _renderTripEvent).call(this, _classPrivateFieldGet(this, _point)[i]);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _renderMain, {
      writable: true,
      value: () => {
        if (_classPrivateFieldGet(this, _point).length === 0) {
          _classPrivateFieldGet(this, _renderEmptyList).call(this);
        } else {
          _classPrivateFieldGet(this, _renderSort).call(this);

          _classPrivateFieldGet(this, _renderTripEventsListElement).call(this);

          _classPrivateFieldGet(this, _renderTripEventsList).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _clearTaskList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.destroy());

        _classPrivateFieldGet(this, _pointPresenter).clear();
      }
    });

    _classPrivateFieldSet(this, _mainElement, mainElement);

    _classPrivateFieldSet(this, _tripEventsElement, _classPrivateFieldGet(this, _mainElement).querySelector('.trip-events'));
  }

}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract-view */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/content-items-view.js":
/*!****************************************!*\
  !*** ./src/view/content-items-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentItemView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createContentItemsTemplate = point => {
  const {
    types,
    cities,
    price,
    offers,
    startDate,
    endDate,
    isFavorite,
    duration
  } = point;
  const dateDayMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('D MMM');
  const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('HH:mm');
  const startDatetime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('YYYY-MM-DDTHH:mm');
  const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format('HH:mm');
  const endDatetime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format('YYYY-MM-DDTHH:mm');
  let favorite = '';
  const title = types.title;
  const img = types.img;
  const nameOffer = offers.name;
  const costOffer = offers.price;

  if (isFavorite === true) {
    favorite = 'event__favorite-btn--active';
  }

  const getDuration = interval => {
    const timeDifference = [];

    if (interval.days !== 0) {
      timeDifference[0] = `${String(interval.days).padStart(2, '0')}D`;
    }

    if (interval.hours !== 0) {
      timeDifference[1] = `${String(interval.hours).padStart(2, '0')}H`;
    }

    if (interval.minutes !== 0) {
      timeDifference[2] = `${String(interval.minutes).padStart(2, '0')}M`;
    }

    return timeDifference.join(' ');
  };

  const durationText = getDuration(duration);
  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${dateDayMonth}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${img}" alt="Event type icon">
    </div>
    <h3 class="event__title">${title} ${cities}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startDatetime}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${endDatetime}">${endTime}</time>
      </p>
      <p class="event__duration">${durationText}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${nameOffer}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${costOffer}</span>
      </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn ${favorite}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _editClickHandler = /*#__PURE__*/new WeakMap();

var _favoriteClickHandler = /*#__PURE__*/new WeakMap();

class ContentItemView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setEditClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClickHandler));
    });

    _classPrivateFieldInitSpec(this, _editClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _defineProperty(this, "setFavoriteClickHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteClickHandler));
    });

    _classPrivateFieldInitSpec(this, _favoriteClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createContentItemsTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/content-list-view.js":
/*!***************************************!*\
  !*** ./src/view/content-list-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentListView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createContentTemplate = () => `<ul class="trip-events__list">
</ul>`;

class ContentListView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createContentTemplate();
  }

}

/***/ }),

/***/ "./src/view/edit-item-event-view.js":
/*!******************************************!*\
  !*** ./src/view/edit-item-event-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createEditTripEvent = tripEditEvent => {
  const {
    cities,
    types,
    description,
    price,
    startDate,
    endDate,
    offers
  } = tripEditEvent;
  const templateDateBegin = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('DD/MM/YY HH:mm');
  const templateDateEnd = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format('DD/MM/YY HH:mm');
  const title = types.title;
  const img = types.img;
  const nameOffer = offers.name;
  const costOffer = offers.price;
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="${img}" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${title}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${cities}" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
          <option value="Moscow"></option>
          <option value="Paris"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${templateDateBegin}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${templateDateEnd}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">${nameOffer}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${costOffer}</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
            <label class="event__offer-label" for="event-offer-comfort-1">
              <span class="event__offer-title">${nameOffer}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${costOffer}</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
            <label class="event__offer-label" for="event-offer-meal-1">
              <span class="event__offer-title">${nameOffer}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${costOffer}</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
            <label class="event__offer-label" for="event-offer-seats-1">
              <span class="event__offer-title">${nameOffer}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${costOffer}</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
            <label class="event__offer-label" for="event-offer-train-1">
              <span class="event__offer-title">${nameOffer}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${costOffer}</span>
            </label>
          </div>
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
      </section>
    </section>
  </form>
</li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

var _rollupClickHandler = /*#__PURE__*/new WeakMap();

class EditPointView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setFormSubmit", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();

        this._callback.formSubmit(_classPrivateFieldGet(this, _point));
      }
    });

    _defineProperty(this, "setRollupClickHandler", callback => {
      this._callback.rollupClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _rollupClickHandler));
    });

    _classPrivateFieldInitSpec(this, _rollupClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.rollupClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createEditTripEvent(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/empty-list-view.js":
/*!*************************************!*\
  !*** ./src/view/empty-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyListView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createEmptyListTemplate = () => `<p class="trip-events__msg">Click New Event to create your first point</p>`;

class EmptyListView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createEmptyListTemplate();
  }

}

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createFilterTemplate = () => `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
                  <label class="trip-filters__filter-label" for="filter-past">Past</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;

class FilterView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFilterTemplate();
  }

}

/***/ }),

/***/ "./src/view/header-items-view.js":
/*!***************************************!*\
  !*** ./src/view/header-items-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createHeaderItemsTemplate = () => `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;

class HeaderView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createHeaderItemsTemplate();
  }

}

/***/ }),

/***/ "./src/view/menu-view.js":
/*!*******************************!*\
  !*** ./src/view/menu-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createMenuTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;

class MenuView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;

class SortView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSortTemplate();
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_menu_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/menu-view */ "./src/view/menu-view.js");
/* harmony import */ var _view_filter_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter-view */ "./src/view/filter-view.js");
/* harmony import */ var _view_header_items_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/header-items-view */ "./src/view/header-items-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");
/* harmony import */ var _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenter/trip-presenter */ "./src/presenter/trip-presenter.js");






const POINT_COUNT = 10;
const point = Array.from({
  length: POINT_COUNT
}, _mock_point__WEBPACK_IMPORTED_MODULE_4__.generatePoint);
const mainElement = document.querySelector('.page-body');
const menuElement = document.querySelector('.trip-controls__navigation');
const filtersElement = document.querySelector('.trip-controls__filters');
(0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(menuElement, new _view_menu_view__WEBPACK_IMPORTED_MODULE_0__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(filtersElement, new _view_filter_view__WEBPACK_IMPORTED_MODULE_1__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);
const tripPresenter = new _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_5__["default"](mainElement);
tripPresenter.init(point);

if (point.length !== 0) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(menuElement, new _view_header_items_view__WEBPACK_IMPORTED_MODULE_2__["default"](point), _render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREBEGIN);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map