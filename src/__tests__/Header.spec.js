import React from 'react';
import Header from '../components/Header';

import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

test('renders Header component with a message', () => {
  const message = 'Hello, World!';
  const { getByText } = render(<Header message={message} />);

  const headingElement = getByText(message);
  expect(headingElement).toBeInTheDocument();
});

test('renders Header component with custom class', () => {
  const message = 'Hello, World!';
  const { getByText } = render(<Header message={message} />);

  const headerComponent = getByText(message).closest('h1');
  expect(headerComponent).toBeInTheDocument();
});
