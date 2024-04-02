import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import alertReducer from './alertSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    notes: notesReducer,
    alert: alertReducer,
    modal: modalReducer,
  },
});
