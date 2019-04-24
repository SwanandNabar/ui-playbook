import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/search">
          Search
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/greetings">
          Greetings
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/work">
          Work History
        </NavLink>
      </li>
    </ul>
  );
}
