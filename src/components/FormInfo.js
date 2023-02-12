import React, {useEffect, useState} from 'react';
import Modal from './Modal';
import Button from './Button';

export const FormInfo = ({
  name,
  surname,
  birthday,
  phone,
  url,
  about,
  stack,
  description,
  btnReset,
  showModal,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(showModal);
    }, 100);
  });

  return (
    <>
      <div className="infoContainer">
        <Modal
          className={showPopup ? 'modal modal-show' : 'modal modal-hide'}
        />
        <h2>{name + ' ' + surname}</h2>
        <div className="info">
          <span>{'Birthday:  ' + birthday}</span>
          <span>{'Phone:  ' + phone}</span>
          <span>{'Site:  ' + url}</span>
          <p className="infoText">{'About:  ' + about}</p>
          <p className="infoText">{'Stack:  ' + stack}</p>
          <p className="infoText">{'Description:  ' + description}</p>
        </div>
        <Button type="reset" innerText="Close" onClick={btnReset} />
      </div>
    </>
  );
};
