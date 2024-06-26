import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions as notesActions } from '../slices/notesSlice';

export const AddNoteBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(notesActions.clearNote());
    navigate('/edit');
  };
  return (
    <div
      className='d-flex justify-content-end'
      style={{ position: 'sticky', bottom: 0 }}
    >
      <button className='btn btn-lg m-2' type='submit' onClick={handleClick}>
        <i className='fa-solid fa-pencil'></i>
      </button>
    </div>
  );
};
