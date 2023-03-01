import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { toggleCompleted } from '../../redux/slice';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task.id));
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <th>{task.id}</th>
      <th className={css.line_limit_length}>{task.title}</th>
      <th className={css.line_limit_length} onClick={toggleModal}>
        {task.description}
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <h3>{task.title}</h3>
            <p>Description:</p>
            <p>{task.description}</p>
            <span>Status:</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
            />
          </Modal>
        )}
      </th>

      <th>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
      </th>
    </>
  );
};
