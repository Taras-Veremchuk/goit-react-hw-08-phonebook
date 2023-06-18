import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(setFilterValue(event.target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input type="text" onChange={changeFilter} />
    </Label>
  );
};
export default Filter;
