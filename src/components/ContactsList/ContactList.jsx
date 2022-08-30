import { ContactItem } from './Item/Item';
import { List } from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contacts';

export const ContactList = () => {
  const { data } = useGetContactsQuery('');
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <List>
        {data && (
          <ContactItem
            contacts={data}
            onDelete={deleteContact}
            isLoading={isLoading}
          />
        )}
      </List>
    </>
  );
};
