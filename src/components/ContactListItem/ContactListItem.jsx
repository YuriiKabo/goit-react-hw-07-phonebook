import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/slice';

export function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <p className={css.name}>{name}: </p>
      <p className={css.number}>{number}</p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
