import React, { Fragment } from 'react';
import { AddNoteBtn } from '../components/AddNoteBtn';
import { NotesList } from '../components/NotesList';

export const Home = () => {
  return (
    <Fragment>
      <NotesList />
      <AddNoteBtn />
    </Fragment>
  );
};
