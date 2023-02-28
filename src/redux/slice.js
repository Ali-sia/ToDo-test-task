import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = [
  {
    id: 1,
    title: 'redux provider',
    description:
      ' Для того щоб будь-який компонент у додатку міг використовувати стор, обертаємо Provider все дерево компонентів.',
    completed: true,
  },
  {
    id: 2,
    title: 'configureStore',
    description:
      'Також функція configureStore() може автоматично створити кореневий редюсер. ',
    completed: true,
  },
  {
    id: 3,
    title: 'redux dev tools',
    description:
      'Інструменти розробника це розширення браузера, яке додає зручний візуальний інтерфейс для налагодження змін стану програми та стеження за потоком даних у Redux, від відправлення дій до зміни стану.',
    completed: false,
  },
  {
    id: 4,
    title: 'devToolsEnhancer',
    description:
      ' Імпортуємо функцію devToolsEnhancer і використовуємо її при створенні стора, передавши її результат третім аргументом, замість початкового стану.',
    completed: false,
  },
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
