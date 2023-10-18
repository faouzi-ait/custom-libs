import React from 'react';
import { Bars } from '../components';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Bars Component', () => {
  it('renders with positive width', () => {
    const { getByText } = render(<Bars width={50}>Positive Bar</Bars>);
    const barElement = getByText('Positive Bar');

    expect(barElement).toBeInTheDocument();
    // expect(barElement).toHaveStyle('width: 50%');
    // expect(barElement).toHaveStyle('color: black');
    // expect(barElement).toHaveStyle('background: lightblue');
  });

  it('renders with negative width', () => {
    const { getByText } = render(<Bars width={-50}>Negative Bar</Bars>);
    const barElement = getByText('Negative Bar');

    expect(barElement).toBeInTheDocument();
    // expect(barElement).toHaveStyle('width: 50%');
    // expect(barElement).toHaveStyle('color: white');
    // expect(barElement).toHaveStyle('background: red');
  });

  it('renders with default width and fontSize', () => {
    const { getByText } = render(<Bars>Default Bar</Bars>);
    const barElement = getByText('Default Bar');

    expect(barElement).toBeInTheDocument();
    // expect(barElement).toHaveStyle('width: 100%');
    // expect(barElement).toHaveStyle('font-size: 13px');
  });
});
