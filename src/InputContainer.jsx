import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  updateRestaurantField,
} from './actions';

export default function InputContainer() {
  const { name, category, location } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  function handleChangeField(event) {
    const { name, value } = event.target;
    dispatch(updateRestaurantField(name, value));
  }
  return (
    <div>
      <input placeholder="이름" name="name" onChange={handleChangeName} value={name} />
      <input placeholder="분류" name="category" onChange={handleChangeCategory} value={category} />
      <input placeholder="주소" name="address" onChange={handleChangeLocation} value={location} />
      <button type="button" onClick={handleClickAddRestaurant}>
        등록
      </button>
    </div>
  );
}
