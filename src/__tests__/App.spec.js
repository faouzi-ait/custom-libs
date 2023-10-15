import React from 'react';
import App from '../App';
import { expect, test } from '@jest/globals';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders App component', () => {
  const { getByText } = render(<App />);

  // Verify component renders without crashing
  const headingElement = getByText(/HELLO, React App!/i);
  expect(headingElement).toBeInTheDocument();

  // Verify the presence of specific text content
  const testMessageElement = getByText(/HELLO/i);
  expect(testMessageElement).toBeInTheDocument();
});
