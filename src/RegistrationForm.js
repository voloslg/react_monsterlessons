import React, { Component } from "react";

class RegistrationForm extends Component {
  state = {
    email: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submited", this.state.email);
  };

  handleEmailChange = e => {
    console.log("Changet email", e.target.value);
    this.setState({ email: e.target.value });
  };

  submit = () => {
    console.log("SUBMIT", this.testInput.value);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          {console.log(this.state.email)}
          <input
            type="text"
            value={this.state.email}
            placeholder="E-mail"
            onChange={this.handleEmailChange}
          />
          <button>Save</button>
        </form>

        <input
          type="text"
          placeholder="Submit"
          ref={input => (this.testInput = input)}
        />
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}

export default RegistrationForm;
