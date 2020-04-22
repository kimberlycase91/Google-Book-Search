import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SavedList, SavedListItem } from "../components/SavedList";

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
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => {
        this.loadBooks();
        console.log("delteting book");
      })
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
                <SavedList>
                  {this.state.books.map(book => {
                    return (
                      <SavedListItem
                        key={book._id}
                        bookID={book._id}
                        title={book.title}
                        authors={book.authors}
                        href={book.link}
                        description={book.description}
                        thumbnail={book.image}
                        deleteBook={this.deleteBook}
                      >
                      </SavedListItem>
                    );
                  })}
                </SavedList>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
