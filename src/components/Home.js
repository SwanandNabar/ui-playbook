import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="home-container">
        <h1>Welcome to swanand nabar resume</h1>
      </div>
    );
  }
}
