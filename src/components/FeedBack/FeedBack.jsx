import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { FeedbackStyle } from './FeedBack.styled';

export const Feedbacks = () => {
  return (
    <FeedbackStyle className="wrapper-feedback">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </FeedbackStyle>
  );
};
