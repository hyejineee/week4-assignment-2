import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '마녀주방',
    category: '한식',
    location: '서울사 강남구',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  it('show a form for add restaurant\'s info', () => {
    const { getByPlaceholderText, getByText } = renderInputContainer();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('add restautant with input value', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('after add restaurant, reset value of inputs', () => {
    const { getByText, getByPlaceholderText } = renderInputContainer();

    const nameInput = getByPlaceholderText(/이름/);
    const categoryInput = getByPlaceholderText(/분류/);
    const locationInput = getByPlaceholderText(/주소/);

    fireEvent.change(nameInput, { target: { value: '마녀주방' } });
    fireEvent.change(categoryInput, { target: { value: '한식' } });
    fireEvent.change(locationInput, { target: { value: '서울시 강남구' } });

    fireEvent.click(getByText(/등록/));

    expect(nameInput).not.toHaveDisplayValue();
    expect(categoryInput).not.toHaveDisplayValue();
    expect(locationInput).not.toHaveDisplayValue();
  });

  it('change restaurant name input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const name = '김가네';

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantField',
      payload: {
        name: 'name',
        value: name,
      },
    });
  });

  it('change restrant category input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const category = '일식';

    fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantField',
      payload: {
        name: 'category',
        value: category,
      },
    });
  });

  it('change restrant location input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const address = '서울시 성북구';

    fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantField',
      payload: {
        name: 'address',
        value: address,
      },
    });
  });
});
