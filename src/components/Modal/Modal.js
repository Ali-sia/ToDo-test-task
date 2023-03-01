import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyClose);

    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={css.backdrop} onClick={handleBackdropClick} />
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <div>{children}</div>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};
