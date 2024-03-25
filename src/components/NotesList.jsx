import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions as notesActions } from '../slices/notesSlice';
import { actions as alertActions } from '../slices/alertSlice';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export const NotesList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(notesActions.deleteNote(id));
    dispatch(
      alertActions.showAlert({ type: 'warning', text: 'Note was deleted!' })
    );
  };
  const notes = useSelector(state => state.notes.notes);
  const visibleLengthOfNote = 14;

  if (notes.length === 0) {
    return <div>Hello! Please, add your first note...</div>;
  } else
    return (
      <div className='cardContainer'>
        {notes.map((note, index) => (
          <Card className='noteCard text-center' key={note.id}>
            <Card.Header
              className='d-flex flex-wrap'
              style={{
                fontWeight: 'bold',
                justifyContent: 'space-between',
                padding: '0.5rem 0.5rem',
                border: 'none',
              }}
            >
              <div>
                <strong>
                  {note.title.length > visibleLengthOfNote
                    ? `${note.title.slice(0, visibleLengthOfNote)}...`
                    : note.title}
                </strong>
              </div>
              <div>
                <Button
                  type='button'
                  className='btn btn-sm'
                  aria-label='Close'
                  variant='secondary'
                  onClick={() => handleDelete(note.id)}
                  style={{ marginLeft: '1rem' }}
                >
                  &#10007;
                </Button>
              </div>
            </Card.Header>
            <NavLink
              onClick={() => dispatch(notesActions.openEdit(note))}
              className='nav-link'
              aria-current='page'
              to='/edit'
              exact='true'
            >
              <Card.Body style={{ border: 'none' }}>
                <Card.Text>
                  {note.noteText.length > visibleLengthOfNote
                    ? `${note.noteText.slice(0, visibleLengthOfNote)}...`
                    : note.noteText}
                </Card.Text>
              </Card.Body>
            </NavLink>
            <Card.Footer
              className='d-flex'
              style={{ border: 'none', justifyContent: 'space-between' }}
            >
              <small>
                <span>{`№_${index + 1} `}</span>
              </small>
              <small>{new Date().toLocaleDateString()}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
};
