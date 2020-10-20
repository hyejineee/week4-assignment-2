import React from 'react';

const placeholderText = {
  name: '이름',
  category: '분류',
  address: '주소',
};

export default function Input({
  name, value, onChange,
}) {
  function handleChange(event) {
    const { target } = event;
    onChange(target.name, target.value);
  }

  return (
    <input
      type="text"
      placeholder={placeholderText[name]}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}
