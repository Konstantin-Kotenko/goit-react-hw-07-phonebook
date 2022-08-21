import { Container } from './components/Container';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactsList';
import { Filter } from './components/Filter';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
