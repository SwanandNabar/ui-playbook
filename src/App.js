import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Greetings from "./components/Greetings";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Nav} />
          <Route path="/greetings" component={Greetings} />
          <Route path="/search" component={SearchBar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
