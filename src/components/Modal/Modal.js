// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('root');

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
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={css.backdrop} />
      <div className={css.modal} onClick={handleBackdropClick}>
        <button type="button" onClick={onClose}>
          close
        </button>
        modal window info
        <div>{children}</div>
      </div>
      {/* </div> */}
    </>
  );
};
