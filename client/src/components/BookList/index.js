import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
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
            <button onClick={() =>{props.saveBook(props.bookID)}}>
              Save
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
