import React from 'react';

const Button = ({ type, innerText, onClick }) => {
  return <button type={type} onClick={onClick}>{innerText}</button>;
};

export default Button;
