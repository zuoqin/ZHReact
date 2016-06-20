import expect from 'expect';
import courseReducer from './itemReducer';
import * as actions from '../actions/itemActions';

describe('Item Reducer', () => {
  //it('should add item when passed CREATE_ITEM_SUCCESS', () => {
  //  // arrange
  //  const initialState = [
  //    {title: 'A'},
  //    {title: 'B'}
  //  ];
  //
  //  const newItem = {title: 'C'};
  //
  //  const action = actions.createItemSuccess(newItem);
  //
  //  //act
  //  const newState = courseReducer(initialState, action);
  //
  //  //assert
  //  expect(newState.length).toEqual(3);
  //  expect(newState[0].title).toEqual('A');
  //  expect(newState[1].title).toEqual('B');
  //  expect(newState[2].title).toEqual('C');
  //});

  //it('should update item when passed UPDATE_ITEM_SUCCESS', () => {
    // arrange
    //const initialState = [
    //  {id: 'A', title: 'A'},
    //  {id: 'B', title: 'B'},
    //  {id: 'C', title: 'C'}
    //];

    //const item = {id: 'B', title: 'New Title'};
    //const action = actions.updateItemSuccess(item);

    // act
    //const newState = courseReducer(initialState, action);
    //const updatedItem = newState.find(a => a.id == item.id);
    //const untouchedItem = newState.find(a => a.id == 'A');

    // assert
    //expect(updatedItem.title).toEqual('New Title');
    //expect(untouchedItem.title).toEqual('A');
    //expect(newState.length).toEqual(3);
  //});
});
