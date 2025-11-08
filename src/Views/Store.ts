import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Views/RTK_Todo/TodoReducer';

export const AppStore = configureStore({ reducer: todoReducer });
