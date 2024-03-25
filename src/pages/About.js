import React from 'react';

export const About = () => {
  return (
    <div
      className='jumbotron d-flex justify-content-center'
      style={{ minHeight: '264px' }}
    >
      <div className=''>
        <h1 className='display-4'>Training App 'My Notes'.</h1>
        <p className='lead'>
          This is a simple app for notes.With using multi-page routing.
        </p>
        <p>Add/Edit/Delete features.</p>
        <p>With using multi-page routing.</p>
        <p>
          Created by
          <a
            href='https://github.com/EweParo4ky'
            className='text-success'
            target='_blank'
            rel='noreferrer'
          >
            {` EweParo4ky`}
          </a>
        </p>
      </div>
    </div>
  );
};
