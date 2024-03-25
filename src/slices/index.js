import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import alertReducer from './alertSlice';

export default configureStore({
  reducer: {
    notes: notesReducer,
    alert: alertReducer,
  },
});
