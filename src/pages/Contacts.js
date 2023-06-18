import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

const styles = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 10,
    border: 'solid 2px grey',
    borderRadius: 10,
    backgroundColor: ' #7fcdcd',
  },

  phoneTitle: {
    textAlign: 'center',
  },
  contactTitle: {
    textAlign: 'center',
  },
};

export default function Contacts() {
  return (
    <div style={styles.container}>
      <h1 style={styles.phoneTitle}>Phonebook</h1>
      <ContactForm />
      <h2 style={styles.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
