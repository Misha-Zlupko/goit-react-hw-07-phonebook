import { useDispatch, useSelector } from 'react-redux';
// import { deliteReducer } from '../../redux/FeedBack/usersSlice';
import { selectFiltersContacts } from '../../redux/selectors';
import { deliteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { ContactWrapper } from './ContactList.style';

export const ContactList = () => {
  const dispatch = useDispatch();
  const getFilteredContacts = useSelector(selectFiltersContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deliteContact(id));
  };

  return (
    <ContactWrapper>
      <ul>
        {getFilteredContacts.map(({ name, phone, id }) => (
          <li key={name}>
            <p>
              {name}: {phone}
            </p>
            <button onClick={() => handleDelete(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </ContactWrapper>
  );
};
