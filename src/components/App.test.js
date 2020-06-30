import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('Test Jest config', () => {
  test('Hello world', () => {
    const { getByText } = render(<p>Hello Jest</p>);
    expect(getByText('Hello Jest')).toBeTruthy();
  });

  test('App component', () => {
    const title = 'Hello React';
    const { getByText } = render(<App title={title} />);

    expect(getByText('Hello React')).toBeTruthy();
  });

  test('Alt in img', () => {
    expect(screen.findAllByAltText('Logo React')).toBeTruthy();
  });
});
