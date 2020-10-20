import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  addRestaurant,
  updateRestaurantField,
} from './actions';

export default function InputContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  function handleChangeField(fieldName, value) {
    dispatch(updateRestaurantField(fieldName, value));
  }

  return (
    <div>

      <Input name="name" onChange={handleChangeField} value={name} />
      <Input name="category" onChange={handleChangeField} value={category} />
      <Input name="address" onChange={handleChangeField} value={address} />

      <button type="button" onClick={handleClickAddRestaurant}>
        등록
      </button>
    </div>
  );
}
