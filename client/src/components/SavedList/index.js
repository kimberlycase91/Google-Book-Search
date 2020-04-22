import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function SavedList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedListItem(props) {
  return (
    <li className="list-group-item">
      <Container key={props.bookID}>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail alt={props.title} src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>Written By: {props.authors}</p>
            <p>Description: {props.description}</p>
            <button>
              <a target="_blank" rel="noopener noreferrer" href={props.href}>View</a>
            </button>
            <button onClick={() => {props.deleteBook(props.bookID)}}>
              Delete
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
