import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal_ = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  return (
    isOpen && (
      <dialog className={styles.modal} ref={modalRef} open aria-modal="true">
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) onClose();
          }}
        ></div>
        <article className={styles.modalContent} aria-labelledby="modalTitle">
          <header className={styles.modalHeader}>
            <h2 id="modalTitle" className={styles.modalTitle}>
              {title}
            </h2>
            <button
              className={styles.closeBtn}
              aria-label="Close Modal"
              onClick={onClose}
            >
              Close
            </button>
          </header>
          <section className={styles.modalBody}>{children}</section>
        </article>
      </dialog>
    )
  );
};

export default Modal_;
