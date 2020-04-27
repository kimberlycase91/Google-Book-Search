import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <div className="header"> <h1>Google Book Search</h1>
        <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books">
          Powered by Google Books API
      </a>
      </div>
    </div>
  );
}

export default Jumbotron;
