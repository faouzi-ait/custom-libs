import React from 'react';
import App from '../App';

import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Testing the App component', () => {
  test('renders the App component without errors', () => {
    render(<App />);
  });

  test('renders app component content withoug errors', () => {
    render(<App />);

    const pageTitle = screen.getByText(/This is a Custom React App/i);
    expect(pageTitle).toBeInTheDocument();

    const appComponent = screen.getByTestId('app-component');
    expect(appComponent).toHaveClass('app');
  });
});
