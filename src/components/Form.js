import React from 'react';
import '../App.css';

class Form extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <h1>Create a questionnaire</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label>
            Surname:
            <input type="text" name="surname" placeholder="Surname" />
          </label>
          <label>
            Date of Birth:
            <input type="date" name="birthday" />
          </label>
          <label>
            Phone Number:
            <input type="tel" id="phone" placeholder="+48 *** *** ***" />
          </label>
          <label>
            Site:
            <input type="url" name="link" placeholder="URL" />
          </label>
          <label>
            About:
            <textarea className="about" name="about" rows={7} />
          </label>
          <label>
            Technology Stack:
            <textarea className="stack" name="stack" rows={7} />
          </label>
          <label>
            Description of the last project:
            <textarea className="description" name="description" rows={7} />
          </label>
          <div className="formButtons">
            <button type="reset">Cancel</button>

            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
