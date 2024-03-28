import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { actions as notesActions } from '../slices/notesSlice';
import { actions as alertActions } from '../slices/alertSlice';
import { AddNoteBtn } from '../components/AddNoteBtn';
import { NotesList } from '../components/NotesList';
import { Loader } from '../components/Loader';

export const Home = () => {
  // const dataUrl = process.env.REACT_APP_DB_URL;
  const dataUrl = 'https://notes-2a82e-default-rtdb.firebaseio.com';
  const status = useSelector(state => state.notes.status);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(notesActions.changeStatus('loading'));
      try {
        const response = await axios.get(`${dataUrl}/notes.json`);
        console.log('Response Data', response.data, typeof response.data);
        if (response.data) {
          const fetchNotes = Object.keys(response.data).map(key => {
            return { id: key, ...response.data[key] };
          });
          console.log('fetchNotes', fetchNotes);
          dispatch(notesActions.setNotes(fetchNotes));
          dispatch(notesActions.changeStatus('loaded'));
        }
        dispatch(notesActions.changeStatus('waiting'));
      } catch (error) {
        console.error(error);
        dispatch(
          alertActions.showAlert({
            type: 'danger',
            text: 'Network error. Something is going wrong!',
            alertTime: null,
          })
        );
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {status === 'loading' && <Loader />}
      <NotesList />
      <AddNoteBtn />
    </Fragment>
  );
};
