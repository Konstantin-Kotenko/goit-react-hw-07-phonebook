import { useSelector, useDispatch } from 'react-redux';
import { remove, getFilterValue, getItemsValue } from 'redux/contacts';
import { Item, Text, Button } from './Item.styled';

export const ContactItem = () => {
  const filter = useSelector(getFilterValue);
  const states = useSelector(getItemsValue);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(remove(id));
  };

  const getVisibleContacts = states?.filter(state =>
    state?.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {getVisibleContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name} : {number}
          </Text>
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </>
  );
};
