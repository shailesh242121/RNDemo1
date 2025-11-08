import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: '1', text: 'my first todo' }],
};
const todoslice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
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
  },
});

export const { addTodo, deleteTodo } = todoslice.actions;
export default todoslice.reducer;
