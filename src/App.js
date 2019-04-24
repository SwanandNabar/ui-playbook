import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Greetings from "./components/Greetings";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import WorkHistory from "./components/WorkHistory";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/greetings" component={Greetings} />
          <Route path="/search" component={SearchBar} />
          <Route path="/work" component={WorkHistory} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
