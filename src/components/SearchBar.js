import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const searchIcon = (<img className="search-icon" src={require('../content/search-icon.png')} alt="search icon"/>);
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter search query"
            id="search-bar-input"
          />
          {/* {searchIcon} */}
        </div>
        <p>You entered : {this.state.value}</p>
      </div>
    );
  }
}

export default SearchBar;
