import React from 'react';
import { Modal } from '../components';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Needed to use .toBeInTheDocument()

describe('Testing the Modal component', () => {
  test('renders modal content when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal Content
      </Modal>,
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render modal content when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>,
    );

    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        Modal Content
      </Modal>,
    );

    const closeButton = getByLabelText('Close Modal');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
