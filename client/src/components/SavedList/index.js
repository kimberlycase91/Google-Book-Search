import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return 
  <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  bookID,
  title,
  authors,
  description,
  href,
  thumbnail="https://placehold.it/300x300",
  deleteBook
}) {
  return (
    <li className="list-group-item">
      <Container key={bookID}>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail alt={title} src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Written By: {authors}</p>
            <p>Description: {description}</p>
            <button>
              <a target="_blank" rel="noopener noreferrer" href={href}>View</a>
            </button>
            <button onClick={deleteBook(
              {title: title,
              authors: authors,
              description: description,
              image: thumbnail,
              link: href}
            )}>
              Delete
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
