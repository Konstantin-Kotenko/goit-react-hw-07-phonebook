import { Container } from './components/UI/Container';
import { FirstHeader, SecondHeader } from './components/UI/Headers';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactsList';
import { Filter } from './components/Filter';

export const App = () => {
  return (
    <Container>
      <FirstHeader>Phonebook</FirstHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};
