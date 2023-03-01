import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { getTasks } from 'redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <Task task={task} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
