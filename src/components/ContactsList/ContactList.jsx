import { ContactItem } from './Item/Item';
import { List } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts';

// import { Spinner } from 'components/Spinner';

export const ContactList = () => {
  const {
    data,
    // isFetching
  } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation;

  return (
    <>
      {/* {isFetching&& <Spinner/>} */}
      <List>
        {data && <ContactItem contacts={data} onDelete={deleteContact} />}
      </List>
      ;
    </>
  );
};
