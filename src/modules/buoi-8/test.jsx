import React, { useState } from 'react';

function SubmitForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setInputValue('');
  };

  return (
    <>
      <A inputValue={inputValue} handleInputChange={handleInputChange} />
      <B handleButtonClick={handleButtonClick} />
    </>
  );
}

function A({ inputValue, handleInputChange }) {
  return <input value={inputValue} onChange={handleInputChange} />;
}

function B({ handleButtonClick }) {
  return <button onClick={handleButtonClick}>Clear Input</button>;
}

export default SubmitForm;
