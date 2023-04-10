import { Feedbacks } from './FeedBack/FeedBack';
import { getError, getItem, getLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(getItem());
  // }, [dispatch]);

  return (
    <div>
      <Feedbacks>
        {isLoading && !error && <p>Reques in progress...</p>}
      </Feedbacks>
    </div>
  );
};
