import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3>Google Books</h3>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
