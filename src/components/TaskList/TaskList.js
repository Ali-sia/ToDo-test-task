import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { getTasks } from 'redux/selectors';
// import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
