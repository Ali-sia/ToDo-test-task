import { Layout } from './/Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
// import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
