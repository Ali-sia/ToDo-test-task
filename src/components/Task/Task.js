import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { toggleCompleted } from '../../redux/slice';
// import css from './Task.module.css';

export const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task.id));
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal}>modal</Modal>}

      <p onClick={toggleModal}>
        Task: {task.id}, Title: {task.title}
      </p>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
    </div>
  );
};
