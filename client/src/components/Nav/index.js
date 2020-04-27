import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3>Search and Save Books You Love!</h3>
      <ul className="navbar-nav">
        <h5>
          <Link to="/">
            Search
      </Link>
        </h5>
        
        <h5>
          <Link to="/saved">
            Saved
      </Link>
        </h5>
        
      </ul>
    </nav>
  );
}

export default Nav;
