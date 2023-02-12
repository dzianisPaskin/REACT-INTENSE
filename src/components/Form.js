import React, { useState } from 'react';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import Button from './Button';
import Modal from './Modal';

const Form = () => {
  const [inputName, setInputName] = useState({ value: '', error: '' });
  const [inputSurname, setInputSurname] = useState({ value: '', error: '' });
  const [inputBirthday, setInputBirthday] = useState({ value: '', error: '' });
  const [inputPhone, setInputPhone] = useState({ value: '', error: '' });
  const [inputSite, setinputSite] = useState({ value: 'https://', error: '' });
  const [textAbout, setTextAbout] = useState({ value: '', error: '' });
  const [textStack, setTextStack] = useState({ value: '', error: '' });
  const [textDescription, setTextDescription] = useState({
    value: '',
    error: '',
  });

  const [validField, setValidField] = useState({
    isValidName: false,
    isValidSurname: false,
    isValidBirthday: false,
    isValidPhone: false,
    isValidSite: false,
    isValidTextAbout: false,
    isValidTextStack: false,
    isValidTextDescription: false,
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputName = (e) => {
    const targetValue = e.target.value;

    if (!/[A-Z]/.test(targetValue[0])) {
      setInputName({
        ...inputName,
        value: targetValue,
        error: 'First letter should be capitalized',
      });
      setValidField({
        ...validField,
        isValidName: false,
      });
    } else {
      setInputName({
        ...inputName,
        value: targetValue,
        error: '',
      });
      setValidField({
        ...validField,
        isValidName: true,
      });
    }

    if (targetValue === '') {
      setInputName({
        ...inputName,
        value: targetValue,
        error: 'Fill in the field',
      });
      setValidField({
        ...validField,
        isValidName: false,
      });
    }
  };
  const handleInputSurname = (e) => {
    const targetValue = e.target.value;

    if (!/[A-Z]/.test(targetValue[0])) {
      setInputSurname({
        ...inputSurname,
        value: targetValue,
        error: 'First letter should be capitalized',
      });
      setValidField({
        ...validField,
        isValidSurname: false,
      });
    } else {
      setInputSurname({
        ...inputSurname,
        value: targetValue,
        error: '',
      });
      setValidField({
        ...validField,
        isValidSurname: true,
      });
    }

    if (targetValue === '') {
      setInputSurname({
        ...inputSurname,
        value: targetValue,
        error: 'Fill in the field',
      });
      setValidField({
        ...validField,
        isValidSurname: false,
      });
    }
  };
  const handleBirthday = (e) => {
    const targetValue = e.target.value;
    setInputBirthday({ ...inputBirthday, value: targetValue });

    if (targetValue === '') {
      setInputBirthday({
        ...inputBirthday,
        value: targetValue,
        error: 'Fill in the field',
      });
      setValidField({
        ...validField,
        isValidBirthday: false,
      });
    } else {
      setInputBirthday({ ...inputBirthday, value: targetValue, error: '' });
      setValidField({
        ...validField,
        isValidBirthday: true,
      });
    }
  };
  const handlePhone = (e) => {
    const targetValue = e.target.value;
    const valReplace = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

    if (targetValue !== '') {
      setInputPhone({
        ...inputPhone,
        value: !valReplace[2]
          ? valReplace[1]
          : valReplace[1] +
            '-' +
            valReplace[2] +
            (valReplace[3] ? '-' + valReplace[3] : '') +
            (valReplace[4] ? '-' + valReplace[4] : ''),
        error: '',
      });
      setValidField({
        ...validField,
        isValidPhone: true,
      });
    } else {
      console.log(targetValue);
      console.log();
      setInputPhone({
        ...inputPhone,
        value: '',
        error: 'Fill in the field',
      });
      setValidField({
        ...validField,
        isValidPhone: true,
      });
    }
  };
  const handleUrl = (e) => {
    const targetValue = e.target.value;

    if (targetValue.startsWith('https://')) {
      setinputSite({ ...inputSite, value: targetValue, error: '' });
      setValidField({ ...validField, isValidSite: true });
    } else if (targetValue === '') {
      setinputSite({
        ...inputSite,
        value: targetValue,
        error: 'Fill in the field',
      });
      setValidField({ ...validField, isValidSite: false });
    } else {
      setinputSite({
        ...inputSite,
        value: targetValue,
        error: 'the site should begin with https://',
      });
      setValidField({ ...validField, isValidSite: true });
    }
  };
  const handleTextArea = (e) => {
    const name = e.target.className;
    const targetValue = e.target.value;

    switch (name) {
      case 'textAbout':
        setTextAbout({ ...textAbout, value: targetValue });

        if (targetValue) {
          setValidField({
            ...validField,
            isValidTextAbout: true,
          });
          setTextAbout({ ...textAbout, value: targetValue, error: '' });
        } else {
          setTextAbout({
            ...textAbout,
            value: targetValue,
            error: 'Fill in the field',
          });
        }

        break;
      case 'textStack':
        setTextStack({ ...textStack, value: targetValue });

        if (targetValue) {
          setValidField({
            ...validField,
            isValidTextStack: true,
          });
          setTextStack({ ...textStack, value: targetValue, error: '' });
        } else {
          setTextStack({
            ...textStack,
            value: targetValue,
            error: 'Fill in the field',
          });
          setValidField({
            ...validField,
            isValidTextStack: true,
          });
        }
        break;
      case 'textDescription':
        setTextDescription({ ...textDescription, value: targetValue });

        if (targetValue) {
          setValidField({
            ...validField,
            isValidTextDescription: true,
          });
          setTextDescription({
            ...textDescription,
            value: targetValue,
            error: '',
          });
        } else {
          setTextDescription({
            ...textDescription,
            value: targetValue,
            error: 'Fill in the field',
          });
          setValidField({
            ...validField,
            isValidTextDescription: true,
          });
        }
        break;
      default:
        return;
    }
  };

  const buttonReset = (e) => {
    const targetType = e.target.type;

    setInputName({ value: '', error: '' });
    setInputSurname({ value: '', error: '' });
    setInputBirthday({ value: '', error: '' });
    setInputPhone({ value: '', error: '' });
    setinputSite({ value: 'https://', error: '' });
    setTextAbout({ value: '', error: '' });
    setTextStack({ value: '', error: '' });
    setTextDescription({ value: '', error: '' });

    if (targetType === 'reset') {
      setFormValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let field in validField) {
      const isValidField = validField[field];

      if (isValidField !== true) {
        switch (field) {
          case 'isValidName':
            setInputName({
              ...inputName,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidSurname':
            setInputSurname({
              ...inputSurname,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidBirthday':
            setInputBirthday({
              ...inputBirthday,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidPhone':
            setInputPhone({
              ...inputPhone,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidSite':
            setinputSite({
              ...inputSite,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidTextAbout':
            setTextAbout({
              ...textAbout,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidTextStack':
            setTextStack({
              ...textStack,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          case 'isValidTextDescription':
            setTextDescription({
              ...textDescription,
              error: 'Fill in the field correctly',
            });
            isValid = false;
            break;
          default:
            break;
        }
      }
    }
    if (isValid) {
      setFormValid(true);
      buttonReset(e);
    }
  };

  return (
    <>
      {formValid && <Modal onClick={buttonReset} />}
      <div className="formContainer">
        <h1>Create a questionnaire</h1>
        <form onSubmit={handleSubmit}>
          <CustomInput
            className="name"
            labelName="Name:"
            type="text"
            placeholder="Name"
            onChange={handleInputName}
            record={inputName}
          />

          <CustomInput
            className="surname"
            labelName="Surname:"
            type="text"
            placeholder="Surname"
            onChange={handleInputSurname}
            record={inputSurname}
          />
          <CustomInput
            className="birthday"
            labelName="Date of Birth:"
            type="date"
            onChange={handleBirthday}
            record={inputBirthday}
          />

          <CustomInput
            className="phone"
            labelName="Phone Number:"
            type="tel"
            placeholder="7-7777-77-77"
            onChange={handlePhone}
            record={inputPhone}
            maxLength="12"
          />
          <CustomInput
            className="link"
            labelName="Site:"
            type="url"
            placeholder="https://"
            onChange={handleUrl}
            record={inputSite}
          />

          <CustomTextArea
            className="textAbout"
            areaName="About:"
            name="about"
            onChange={handleTextArea}
            record={textAbout}
            maxLength="600"
          />
          <CustomTextArea
            className="textStack"
            areaName="Technology Stack:"
            name="stack"
            onChange={handleTextArea}
            record={textStack}
            remCharacters={textStack.remaining}
            maxLength="600"
          />
          <CustomTextArea
            className="textDescription"
            areaName="Description of the last project:"
            onChange={handleTextArea}
            record={textDescription}
            remCharacters={textDescription.remaining}
            maxLength="600"
          />
          <div className="formButtons">
            <Button type="reset" innerText="Cancel" onClick={buttonReset} />
            <Button type="submit" innerText="Save" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
