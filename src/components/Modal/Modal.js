import ReactDOM from 'react-dom';

import css from './Modal.module.css';

export const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className={css.backdrop} />
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
