import PropTypes from 'prop-types';
import { filterItems, getFilterValue } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
