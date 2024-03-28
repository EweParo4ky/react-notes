import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  currentNote: {
    title: '',
    id: null,
    noteText: '',
  },
  status: 'waiting',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
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
    changeStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { actions } = notesSlice;
export default notesSlice.reducer;
