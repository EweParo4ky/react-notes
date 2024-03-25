import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  type: null,
};

const alertSlice = createSlice({
  name: alert,
  initialState,
  reducers: {
    showAlert: (state, { payload }) => {
      state.type = payload.type;
      state.text = payload.text;
    },
    hideAlert: state => {
      state.type = null;
    },
  },
});

export default alertSlice.reducer;
export const { actions } = alertSlice;
