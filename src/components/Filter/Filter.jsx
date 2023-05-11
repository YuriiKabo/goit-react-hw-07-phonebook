import css from './filter.module.css';

import { useDispatch } from 'react-redux';
import { getFlter } from 'redux/Filter/slice';

export function Filter({ getFilterValue }) {
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.filterLabel}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input
          className={css.filterInput}
          onChange={e => dispatch(getFlter(e.target.value))}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
}
