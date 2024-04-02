import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpened = true;
    },
    closeModal: state => {
      state.isOpened = false;
    },
  },
});

export default modalSlice.reducer;
export const { actions } = modalSlice;
