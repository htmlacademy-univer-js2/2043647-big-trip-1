import MenuView from './view/menu-view';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import HeaderView from './view/header-items-view';
import AddNewPointView from './view/add-item-event-view';
import ContentItemView from './view/content-items-view';
import EditPointView from './view/edit-item-event-view';
import ContentListView from './view/content-list-view';
import {render, RenderPosition} from './render.js';
import {generatePoint} from './mock/point';

const POINT_COUNT = 10;

const point = Array.from({length: POINT_COUNT}, generatePoint);

const mainElement = document.querySelector('.trip-main');
const menuElement = document.querySelector('.trip-controls__navigation');
const filtersElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');
const contentListElement = new ContentListView();

render (sortElement, new SortView().element, RenderPosition.BEFOREEND);
render (sortElement, contentListElement.element, RenderPosition.BEFOREEND);
render (menuElement, new MenuView().element, RenderPosition.BEFOREEND);
render (filtersElement, new FilterView().element, RenderPosition.BEFOREEND);
render (mainElement, new HeaderView(point).element, RenderPosition.AFTERBEGIN);
render (contentListElement.element, new AddNewPointView(point[0]).element, RenderPosition.BEFOREEND);

const renderEvent = (eventListElement, event) => {
  const itemComponent = new ContentItemView(event);
  const editComponent = new EditPointView(event);

  const replaceFormToItem = () => {
    eventListElement.replaceChild(itemComponent.element, editComponent.element);
  };
  const replaceItemToForm = () => {
    eventListElement.replaceChild(editComponent.element, itemComponent.element);
  };

  itemComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceItemToForm();
  });

  editComponent.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault()
    replaceFormToItem();
  });

  render(eventListElement, itemComponent.element, RenderPosition.BEFOREEND);
};

for (let i = 1; i < POINT_COUNT; i++) {
  renderEvent(contentListElement.element, point[i]);
}
