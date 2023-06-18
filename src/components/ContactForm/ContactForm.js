import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import contactsOperations from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const form = event.currentTarget;
    const filteredName = contacts.filter(contact =>
      contact.name.includes(name.value)
    );
    if (filteredName.length > 0) {
      alert(`${filteredName[0].name} is already in contacts.`);
      form.reset();
      return;
    }
    const contact = {
      name: name.value,
      number: number.value,
    };
    dispatch(contactsOperations.addContact(contact));
    form.reset();
  };
  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
export default ContactForm;
