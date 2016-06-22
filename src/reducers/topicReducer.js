import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.topics, action) {
  switch (action.type) {

    default:
      return state;
  }
}
