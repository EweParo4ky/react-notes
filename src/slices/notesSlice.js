import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  currentNote: {
    title: '',
    id: null,
    noteText: '',
  },
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, { payload }) => {
      state.notes.unshift(payload);
    },
    deleteNote: (state, { payload }) => {
      const taskId = payload;
      state.notes = state.notes.filter(task => task.id !== taskId);
    },
    editNote: (state, { payload }) => {
      const currentIndex = state.notes.findIndex(
        note => note.id === payload.id
      );
      state.notes[currentIndex] = payload;
    },
    openEdit: (state, { payload }) => {
      state.currentNote = payload;
    },
    clearNote: state => {
      state.currentNote = {
        title: '',
        id: null,
        noteText: '',
      };
    },
  },
});

export const { actions } = notesSlice;
export default notesSlice.reducer;
