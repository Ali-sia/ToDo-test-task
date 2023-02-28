import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, title: 'html', description: 'Learn HTML and CSS', completed: true },
  {
    id: 1,
    title: 'js',
    description: 'Get good at JavaScript',
    completed: true,
  },
  { id: 2, title: 'react', description: 'Master React', completed: false },
  { id: 3, title: 'redux', description: 'Discover Redux', completed: false },
  { id: 4, title: 'app', description: 'Build amazing apps', completed: false },
];

export const tasksSlice = createSlice({
  name: 'task',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ id, title, description }) {
        return {
          payload: {
            id,
            title,
            description,
            completed: false,
          },
        };
      },
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
