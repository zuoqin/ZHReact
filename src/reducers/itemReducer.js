import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState, action) {
  let oldState = {};
  Object.assign(oldState, state);
  let newState1 = {};
  let view = {view: 0};
  let newState = {};
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      /*eslint-disable no-case-declarations */
      let newItems = {items: [...state.items.filter(item => item.pageId !== action.items[0].pageId).concat(action.items)]};
      let page = {page: parseInt(action.items[0].pageId)};
      Object.assign(oldState, page);
      Object.assign(oldState, view);
      Object.assign(oldState, newItems);
      Object.assign(newState, oldState);
      return newState;
    case types.LOAD_ITEM_SUCCESS:
      /*eslint-disable no-case-declarations */
      let newItem = {item: action.item};
      view = {view: 1};

      if(action.item.Body !== undefined){
        Object.assign(oldState, newItem);
      }

      Object.assign(oldState, view);


      Object.assign(newState, oldState);
      return newState;

    default:
      return state;
  }
}
