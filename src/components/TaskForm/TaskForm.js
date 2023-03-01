import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/slice';
import { getTasks } from '../../redux/selectors';
import css from './TaskForm.module.css';

import { useState } from 'react';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidDescription, setIsValidDescription] = useState(true);

  const handleChangeTitle = e => setTitle(e.currentTarget.value);
  const handleChangeDescription = e => setDescription(e.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (title.trim() === '') {
      setIsValidTitle(false);
      return;
    }
    if (description.trim() === '') {
      setIsValidDescription(false);
      return;
    }

    const id = tasks.length + 1;

    const newTask = {
      id,
      title,
      description,
    };

    dispatch(addTask(newTask));
    setTitle(' ');
    setDescription(' ');
    setIsValidTitle(true);
    setIsValidDescription(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Title task</p>
        {!isValidTitle && (
          <span className={css.empty_field}>This field is empty</span>
        )}
        <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          onChange={handleChangeTitle}
        />
      </label>
      <label>
        <p>Description task</p>
        {!isValidDescription && (
          <span className={css.empty_field}>This field is empty</span>
        )}
        <input
          type="text"
          name="description"
          value={description}
          placeholder="description"
          onChange={handleChangeDescription}
        />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};
