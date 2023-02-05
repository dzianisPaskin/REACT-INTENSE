import React from 'react';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import Button from './Button';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      birthday: '',
      phone: '',
      link: '',
      // formErrors: {
      //   name: '',
      //   surname: '',
      //   burthday: '',
      //   phone: '',
      //   link: '',
      // },
      // nameValid: false,
      // surnameValid: false,
      // burthdayValid: false,
      // phoneValid: false,
      // linkValid: false,
      // formValid: false,
    };
  }

  handlerTextInput = (e) => {
    // const emptyField = <EmptyFieldError />;

    const name = e.target.className;
    const value = e.target.value;
    const error = document.querySelectorAll('.emptyField');

    this.setState({ [name]: value.trim() });

    if (name === 'name') {
      value !== ''
        ? error[0].classList.remove('visibleError')
        : error[0].classList.add('visibleError');
      !(/[A-Z]/.test(value[0])) && console.log('error');
    }
    if (name === 'surname') {
      value !== ''
        ? error[1].classList.remove('visibleError')
        : error[1].classList.add('visibleError');
    }
  };

  handleSubmit = (e) => {
    // const name = e.target.className;
    // const value = e.target.value;

    const error = document.querySelectorAll('.emptyField');

    this.state.name === ''
      ? error[0].classList.add('visibleError')
      : error[0].classList.remove('visibleError');

    this.state.surname === ''
      ? error[1].classList.add('visibleError')
      : error[1].classList.remove('visibleError');

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
            value={this.state.name}
            // required
          />

          <CustomInput
            className="surname"
            labelName="Surname:"
            type="text"
            placeholder="Surname"
            onChange={this.handlerTextInput}
            value={this.state.surname}
            // required
          />
          <CustomInput
            labelName="Date of Birth:"
            type="date"
            value={this.state.birthday}
            // required
          />
          <CustomInput
            labelName="Phone Number:"
            type="tel"
            placeholder="+48 *** *** ***"
            value={this.state.phone}
            // required
          />
          <CustomInput
            labelName="Site:"
            type="url"
            placeholder="URL"
            value={this.state.link}
            // required
          />

          <CustomTextArea areaName="About:" name="about" />
          <CustomTextArea areaName="Technology Stack:" name="stack" />
          <CustomTextArea areaName="Description of the last project:" />
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
