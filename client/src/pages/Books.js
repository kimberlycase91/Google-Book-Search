import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

class Books extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
              <h1>Saved Books</h1>
          </Col>
        </Row>
        <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <BookListItem 
                        bookID={book.id}
                          title={book.volumeInfo.title}
                          authors={book.volumeInfo.authors}
                          href={book.volumeInfo.previewLink}
                          description={book.volumeInfo.description}
                          // thumbnail={book.volumeInfo.imageLinks.thumbnail}
                          thumbnail={"https://placehold.it/300x300"}
                          deleteBook={this.description}
                          >
                        </BookListItem>
                      );
                    })}
                  
                  </BookList>
                )}
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Books;
