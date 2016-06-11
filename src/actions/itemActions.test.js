import expect from 'expect';
import * as itemActions from './itemActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Item Actions', () => {
  describe('createItemSuccess', () => {
    it('should create a CREATE_ITEM_SUCCESS action', () => {
      //arrange
      const item = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_ITEM_SUCCESS,
        item: item
      };

      //act
      const action = itemActions.createItemSuccess(item);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_ITEMS_SUCCESS when loading items', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/items')
    //   .reply(200, { body: { item: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_ITEMS_SUCCESS, body: {items: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({items: []}, expectedActions);
    store.dispatch(itemActions.loadItems()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_ITEMS_SUCCESS);
      done();
    });
  });
});
