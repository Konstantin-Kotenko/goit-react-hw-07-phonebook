import { Formik, ErrorMessage } from 'formik';
import { schema } from 'schema/schema';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts';
import { Notify } from 'notiflix';
import {
  FormContact,
  Label,
  Input,
  Button,
  ErrorText,
} from './ContactForm.styled';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    const isContactName = data.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isContactName) {
      return Notify.info(
        `you have this "${values.name.toUpperCase()}" contact`
      );
    }
    createContact(values);
    resetForm();
    Notify.success(`you create new "${values.name.toUpperCase()}" contact`);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </FormContact>
    </Formik>
  );
};
