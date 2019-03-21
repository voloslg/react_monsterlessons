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
  render() {
    return (
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
    );
  }
}

export default RegistrationForm;
