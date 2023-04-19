import { useSelector, useDispatch } from 'react-redux';
// import { searchReducer } from '../../redux/FeedBack/usersSlice';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/usersSlice';
import { FilterWrapper } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeSearch = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <FilterWrapper>
      <form className="filter">
        <input value={filter} type="text" onChange={handleChangeSearch} />
      </form>
    </FilterWrapper>
  );
};
