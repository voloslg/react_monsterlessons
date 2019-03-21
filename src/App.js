import React, { Component } from "react";
import Header from "./Header";

let menu = [
  { link: "/articles", label: "Articles" },
  { link: "/contacts", label: "Contacts" },
  { link: "/posts", label: "Posts" }
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Test from App</h1>
        <Header items={menu} />
      </div>
    );
  }
}

export default App;
