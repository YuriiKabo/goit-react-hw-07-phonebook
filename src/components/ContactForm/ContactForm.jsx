// import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Form, Formik, Field, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Contacts/slice';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const getValues = inputValues => {
    if (inputValues.name === '' || inputValues.number === '') {
      return;
    } else if (
      contacts.find(contact => {
        return contact.name === inputValues.name;
      })
    ) {
      return alert(`${inputValues.name} is already in contacts`);
    } else {
      const contact = {
        name: inputValues.name,
        number: inputValues.number,
        id: nanoid(),
      };

      dispatch(addContact(contact));
      inputValues.name = '';
      inputValues.number = '';
    }
  };

  const values = {
    name: '',
    number: '',
  };

  const submitForm = values => {
    getValues(values);
  };

  return (
    <Formik initialValues={values} onSubmit={submitForm}>
      <Form>
        <Label>
          Name
          <Field name="name" />
        </Label>
        <Label>
          Number
          <Field name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}
