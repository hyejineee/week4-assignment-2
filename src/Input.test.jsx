import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  function renderInput(name, value) {
    return render((
      <Input
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with value', () => {
    it('show value', () => {
      const { getByDisplayValue } = renderInput('name', '마녀주방');
      expect(getByDisplayValue('마녀주방')).not.toBeNull();
    });
  });

  context('without value', () => {
    it('show placeholder', () => {
      const { getByPlaceholderText } = renderInput('name', '');
      expect(getByPlaceholderText('이름')).not.toBeNull();
    });
  });

  context('when change input value', () => {
    it('call handleChange', () => {
      const { getByPlaceholderText } = renderInput('name', '');
      fireEvent.change(getByPlaceholderText('이름'), { target: { value: '마녀주방' } });

      expect(handleChange).toBeCalled();
    });
  });
});
