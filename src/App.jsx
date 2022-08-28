import { Container } from './components/Container';
import { FirstHeader, SecondHeader } from './styleConfig/headers';
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
