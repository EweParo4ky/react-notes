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
    <div className='d-flex justify-content-end'>
      <button className='btn btn-lg m-2' type='submit' onClick={handleClick}>
        {/* &#43; &#925;ote */}
        <i className='fa-solid fa-pencil'></i>
      </button>
    </div>
  );
};
