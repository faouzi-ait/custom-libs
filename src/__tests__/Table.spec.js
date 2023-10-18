import React from 'react';
import { Table } from '../components';

import { render, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

expect.extend({ toHaveClass });

describe('Table Component', () => {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ];

  const empty = [];

  test('renders table headers and data', () => {
    render(<Table data={data} />);

    // Check if headers are rendered
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('age')).toBeInTheDocument();

    // Check if data is rendered
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  test('applies custom class names', () => {
    render(
      <Table
        data={data}
        tableClassName="customTable"
        thClassName="customTh"
        tdClassName="customTd"
      />,
    );

    expect(screen.getByRole('table')).toHaveClass('customTable');
    expect(screen.getAllByRole('columnheader')[0]).toHaveClass('customTh');
    expect(screen.getAllByRole('cell')[0]).toHaveClass('customTd');
  });

  test('renders without crashing with empty data', () => {
    const { queryByText } = render(<Table data={[]} />);

    const dataMsg = screen.getByTestId('no-data');

    expect(dataMsg).toBeInTheDocument();
    expect(queryByText('No data available')).toBeInTheDocument();
  });
});
