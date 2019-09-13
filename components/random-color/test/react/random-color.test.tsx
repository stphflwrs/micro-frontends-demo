import React from 'react';
import { render } from '@testing-library/react';
import { RandomColor } from '../../src/react/random-color';


describe('<RandomColor/>', () => {
  describe('no initial color', () => {
    it('assigns a random color', () => {
      const { getByText } = render(<RandomColor/>);
      expect(getByText(/current color/i)).toHaveTextContent(/#[0-9a-f]{6}/i);
    });
  });

  describe('initial color #ff0000', () => {
    it('assigns color', () => {
      const { getByText } = render(<RandomColor initialColor={'#ff0000'}/>);
      expect(getByText(/current color/i)).toHaveTextContent(/#ff0000/i);
    });
  });
});
