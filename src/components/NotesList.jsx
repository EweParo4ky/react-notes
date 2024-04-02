import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions as notesActions } from '../slices/notesSlice';
import Card from 'react-bootstrap/Card';

export const NotesList = ({ notes }) => {
  const dispatch = useDispatch();
  console.log('notes in notesList', notes);
  // const notes = useSelector(state => state.notes.notes);
  const status = useSelector(state => state.notes.status);
  const visibleLengthOfNote = 14;

  if (notes.length === 0 && status !== 'loading') {
    return (
      <div className='d-flex flex-column align-items-center'>
        <div className='mb-1'>
          <i className='fa-2xl fa-solid fa-note-sticky'></i>
        </div>
        <div>No Notes...</div>
      </div>
    );
  } else
    return (
      <div className='cardContainer overflow-auto'>
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
                <span className='me-3 ms-0'>{`№_${index + 1} `}</span>
              </small>

              <small>{new Date().toLocaleDateString()}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
};
