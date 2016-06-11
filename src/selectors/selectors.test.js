import expect from 'expect';
import {topicsFormattedForDropdown} from './selectors';

describe('Topic Selectors', () => {
  describe('topicsFormattedForDropdown', () => {
    it('should return topic data formatted for use in a dropdown', () => {
      const topics = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(topicsFormattedForDropdown(topics)).toEqual(expected);
    });
  });
});
