import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name = '' }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return (
    contacts.length > 0 && (
      <ul className={css.list}>
        {filteredContacts.map(({ name, phone, id }) => {
          return (
            <ContactListItem key={id} name={name} number={phone} id={id} />
          );
        })}
      </ul>
    )
  );
}
