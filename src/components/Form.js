import React from 'react';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', error: '', isStringInput: true },
      surname: { value: '', error: '', isStringInput: true },
      birthday: { value: '', error: '', isStringInput: false },
      phone: { value: '', error: '', isStringInput: false },
      link: { value: '', error: '', isStringInput: true },
      textAbout: {
        value: '',
        error: '',
        remaining: 600,
        isStringInput: true,
      },
      textStack: {
        value: '',
        error: '',
        remaining: 600,
        isStringInput: true,
      },
      textDescription: {
        value: '',
        error: '',
        remaining: 600,
        isStringInput: true,
      }
    };
  }

  handlerTextInput = (e) => {
    const name = e.target.className;
    const value = e.target.value;

    const record = this.state[name];

    if (name === 'name') {
      !/[A-Z]/.test(value[0])
        ? (record.error = 'First letter should be capitale')
        : (record.error = '');
    }
    if (name === 'surname') {
      !/[A-Z]/.test(value[0])
        ? (record.error = 'First letter should be capitale')
        : (record.error = '');
    }

    this.setState({ [name]: { ...record, value: value.trim() } });
  };

  handlePhone = (e) => {
    const val = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

    const record = this.state.phone;

    this.setState({
      phone: {
        ...record,
        value: !val[2]
          ? val[1]
          : val[1] +
            '-' +
            val[2] +
            (val[3] ? '-' + val[3] : '') +
            (val[4] ? '-' + val[4] : ''),
      },
    });
  };

  handleUrl = (e) => {
    const record = this.state.link;
    const url = e.target.value;
    const pattern = /^(https:\/\/)/;
    const isValid = pattern.test(url);

    if (isValid) {
      this.setState({ link: { ...record, value: url } });
    } else {
      this.setState({ link: { ...record, value: '' } });
      record.error = 'the site should begin with https://';
    }

    this.setState({ link: { value: e.target.value } });
  };

  handleTextArea = (e) => {
    const name = e.target.className;
    const value = e.target.value;

    const record = this.state[name];
    console.log(record)

    const rem = 600 - value.length;

    this.setState({
      [name]: {
        ...record,
        value: value,
        remaining: rem,
      },
    });
    console.log(value.length);
  };

  handleSubmit = (e) => {
    const newState = { ...this.state };

    for (let key in newState) {
      const record = newState[key];

      record.error = '';

      if (!record.value) {
        record.error = 'Please fill the field';
      }
    }
    this.setState(newState);
    e.preventDefault();
  };

  render() {
    return (
      <div className="formContainer">
        <h1>Create a questionnaire</h1>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            className="name"
            labelName="Name:"
            type="text"
            placeholder="Name"
            onChange={this.handlerTextInput}
            record={this.state.name}
          />

          <CustomInput
            className="surname"
            labelName="Surname:"
            type="text"
            placeholder="Surname"
            onChange={this.handlerTextInput}
            record={this.state.surname}
          />
          <CustomInput
            className="birthday"
            labelName="Date of Birth:"
            type="date"
            onChange={this.handlerTextInput}
            record={this.state.birthday}
          />

          <CustomInput
            className="phone"
            labelName="Phone Number:"
            type="tel"
            placeholder="7-7777-77-77"
            onChange={this.handlePhone}
            record={this.state.phone}
            maxLength="12"
          />
          <CustomInput
            className="link"
            labelName="Site:"
            type="url"
            placeholder="https://"
            onChange={this.handleUrl}
            record={this.state.link}
          />

          <CustomTextArea
            className="textAbout"
            areaName="About:"
            name="about"
            onChange={this.handleTextArea}
            record={this.state.textAbout}
            remCharacters={this.state.textAbout.remaining}
            maxLength="600"
          />
          <CustomTextArea
            className="textStack"
            areaName="Technology Stack:"
            name="stack"
            onChange={this.handleTextArea}
            record={this.state.textStack}
            remCharacters={this.state.textStack.remaining}
            maxLength="600"
          />
          <CustomTextArea
            className="textDescription"
            areaName="Description of the last project:"
            onChange={this.handleTextArea}
            record={this.state.textDescription}
            remCharacters={this.state.textDescription.remaining}
            maxLength="600"
          />
          <div className="formButtons">
            <Button type="reset" innerText="Cancel" />
            <Button type="submit" innerText="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
