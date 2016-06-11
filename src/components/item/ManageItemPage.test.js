import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageItemPage} from './ManageItemPage';

describe ('Manage Item Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      topics: [],
      actions: { saveItem: () => { return Promise.resolve(); }},
      item: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageItemPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
