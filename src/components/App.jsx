import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'api';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { error } = useSelector(state => state.contacts);
  return (
    <>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <div className={css.container}>
          <h1 className={css.mainTitle}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.secondTitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </>
  );
};
