import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: '1', isDone: false, text: 'my first todo' }],
};
const todoslice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isDone: false,
      };

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      console.log('deleting item ......');
      state.todos = state.todos.filter(todo => {
        console.log(
          `item checking ${todo.text} and ${todo.id !== action.payload}`,
        );
        return todo.id !== action.payload;
      });
      console.log(JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, text, isDone } = action.payload;
      const existingTodo = state.todos.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        existingTodo.isDone = !isDone;
      }

    }
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer;
