import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../../src/react/counter';


describe('Counter', () => {
  it('with no clicks', () => {
    const { container } = render(<Counter/>);
    expect(container).toHaveTextContent(/0 clicks/i)
  });

  it('clicked once', () => {
    const { container, getByText } = render(<Counter/>);
    fireEvent.click(getByText(/clicks/i));
    expect(container).toHaveTextContent(/1 clicks/i);
  });
});
