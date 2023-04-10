import { Feedbacks } from './FeedBack/FeedBack';
import { getError, getLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <div>
      <Feedbacks>
        {isLoading && !error && <p>Reques in progress...</p>}
      </Feedbacks>
    </div>
  );
};
