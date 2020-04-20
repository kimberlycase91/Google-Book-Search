import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Written By: {authors}</p>
            <p>Description: {description}</p>
            <button target="_blank" href={href}>
              View
            </button>
            <button target="_blank" href="/save">
              Save
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
