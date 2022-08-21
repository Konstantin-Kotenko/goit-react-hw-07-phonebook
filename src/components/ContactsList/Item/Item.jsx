// import { useSelector, useDispatch } from 'react-redux';
// import { remove, getFilterValue, getItemsValue } from 'redux/contacts';
import { Item, Text, Button } from './Item.styled';

export const ContactItem = ({ contacts, onDelete }) => {
  // const filter = useSelector(getFilterValue);
  // const states = useSelector(getItemsValue);
  // const dispatch = useDispatch();

  // const deleteContact = id => {
  //   dispatch(remove(id));
  // };

  // const getVisibleContacts = states?.filter(state =>
  //   state?.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <>
      {contacts?.map(({ id, name, phone }) => (
        <Item key={id}>
          <Text>
            {name} : {phone}
          </Text>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </Item>
      ))}
    </>
  );
};
