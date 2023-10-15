import React from 'react';
import App from '../components/Home';

import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

test('renders App component', () => {
  const { getByText } = render(<App />);

  const headingElement = getByText(/HELLO, React App!/i);
  expect(headingElement).toBeInTheDocument();

  const testMessageElement = getByText(/HELLO/i);
  expect(testMessageElement);
});
