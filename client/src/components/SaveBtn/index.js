import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button type="button" className="save-btn" 
    onClick={props.saveBook(
      {
        title: props.title, 
        authors: props.authors, 
        description: props.description, 
        image: props.thumbnail, 
        link: props.href
        })} 
        role="button">
      Save
    </button>
  );
}

export default SaveBtn;
