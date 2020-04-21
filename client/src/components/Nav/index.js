import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3>Google Books</h3>
      <button type="button">
        <Link to="/">
          Search
      </Link>
      </button>
      <button type="buton">
        <Link to="/saved">
          Saved
      </Link>
      </button>
    </nav>
  );
}

export default Nav;
