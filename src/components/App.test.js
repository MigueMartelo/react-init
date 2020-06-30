import React from 'react';
import { render } from '@testing-library/react';
import { exportAllDeclaration } from '@babel/types';

test('Hello world', () => {
  const { getByText } = render(<p>Hello Jest</p>);
  expect(getByText('Hello Jest')).toBeTruthy();
});
