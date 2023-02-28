import { useDispatch } from 'react-redux';
import { toggleCompleted } from '../../redux/slice';
// import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p>
        Task: {task.id}, Title: {task.title}, Description: {task.description}
      </p>
    </div>
  );
};
