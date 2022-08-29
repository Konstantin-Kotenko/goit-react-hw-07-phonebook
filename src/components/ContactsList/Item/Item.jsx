import { Item, Text, Button } from './Item.styled';
import { getFilterValue, useGetContactsQuery } from 'redux/contacts/contacts';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';

export const ContactItem = ({ contacts, onDelete, isLoading }) => {
  const filter = useSelector(getFilterValue);

  const checkedContact = useMemo(() => {
    return createSelector(
      [r => r.data, (contacts, filter) => filter],
      (contacts, filter) =>
        contacts?.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
    );
  }, []);

  const { filteredContacts } = useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return { ...result, filteredContacts: checkedContact(result, filter) };
    },
  });

  return (
    <>
      {filteredContacts?.map(({ id, name, phone }) => (
        <Item key={id}>
          <Text>
            {name} : {phone}
          </Text>
          <Button onClick={() => onDelete(id)} disabled={isLoading}>
            Delete
          </Button>
        </Item>
      ))}
    </>
  );
};
