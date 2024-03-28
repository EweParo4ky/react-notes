import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as alertActions } from '../slices/alertSlice';
import { Button } from 'react-bootstrap';
export const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);

  useEffect(() => {
    const timeMS = alert.alertTime;
    if (timeMS !== null) {
      const timer = setTimeout(
        () => dispatch(alertActions.hideAlert()),
        timeMS
      );
      return () => {
        clearTimeout(timer);
      };
    }
  });

  if (!alert.type) {
    return null;
  }

  return (
    <div
      className={`d-flex justify-content-between alert alert-${alert.type}`}
      role='alert'
      show='false'
    >
      <strong>{alert.text}</strong>
      <Button
        type='button'
        className='btn btn-sm'
        aria-label='Close'
        variant='secondary'
        onClick={() => dispatch(alertActions.hideAlert())}
        style={{ marginLeft: '1rem' }}
      >
        &#10007;
      </Button>
    </div>
  );
};
