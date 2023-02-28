import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
