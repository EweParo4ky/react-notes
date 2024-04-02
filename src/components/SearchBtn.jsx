import { useDispatch } from 'react-redux';
import { actions as modalActions } from '../slices/modalSlice';

export const SearchBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalActions.openModal());
    console.log('click');
  };
  return (
    <div
      className='d-flex justify-content-end'
      style={{ position: 'sticky', bottom: 0 }}
    >
      <button className='btn btn-lg m-2' type='submit' onClick={handleClick}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </div>
  );
};
