import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/search">
          Search
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Greetings">
          Greetings
        </NavLink>
      </li>
    </ul>
  );
}
