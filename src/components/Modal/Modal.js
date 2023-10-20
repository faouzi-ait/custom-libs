import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

/**
 * Modal component for displaying content in a modal dialog.
 * @component
 * @param {boolean} props.isOpen - A boolean indicating whether the modal is open.
 * @param {string} [props.width = '60%'] - The width of the modal. Defaults to '60%'.
 * @param {string} [props.height = 'auto'] - The height of the modal. Defaults to 'auto'.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 *
 * @returns {JSX.Element | null} Rendered modal component or null if not open.
 *
 * @example
 * // Example usage of the Modal component.
 * const ExampleModal = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const openModal = () => {
 *     setIsOpen(true);
 *   };
 *
 *   const closeModal = () => {
 *     setIsOpen(false);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={openModal}>Open Modal</button>
 *       <Modal isOpen={isOpen} onClose={closeModal} width="400px" height="300px">
 *         <p>Modal Content</p>
 *       </Modal>
 *     </div>
 *   );
 * };
 */
const Modal = ({ isOpen, onClose, contentStyle, btnStyle, children }) => {
  const modalRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex="-1"
      className={styles.modal}
      ref={modalRef}
    >
      <section className={contentStyle}>
        <div className={btnStyle}>
          <button onClick={onClose} aria-label="Close Modal">
            Close
          </button>
        </div>
        <section>{children}</section>
      </section>
    </dialog>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  width: '100%',
  height: '100%',
};

export default Modal;
