import React from 'react';
import Button from './Button';

const Modal = ({onClick}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Form submitted successfully!</h2>
        <Button type="reset" innerText="Close" onClick={onClick} />
      </div>
    </div>
  );
};

export default Modal;
