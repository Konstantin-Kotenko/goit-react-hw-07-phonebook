import { ContactItem } from './Item/Item';
import { List } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <List>
        {data && <ContactItem contacts={data} onDelete={deleteContact} />}
      </List>
    </>
  );
};
