import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);

    this.state = { isOpened: false };
  }

  toggleState = () => {
    console.log("this", this);
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    console.log("isOpened", this.state.isOpened);
    let dropdownText;

    if (this.state.isOpened) {
      dropdownText = <div>This is dopped</div>;
    }
    return (
      <div onClick={this.toggleState}>
        <h1>Dropdown</h1>
        {dropdownText}
      </div>
    );
  }
}

export default Dropdown;
