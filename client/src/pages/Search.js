import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  componentDidMount() {
    API.searchBooks("Stargirl")
      .then(response => {
        // console.log(response.data);
        this.setState({ books: response.data })
      })
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.searchBooks(this.state.bookSearch)
      .then(response => {
        this.setState({ books: response.data })
        // console.log(response.data);
      })
      .catch(err => console.log(err));
    console.log("books: " + this.state.books);
  };

  saveBook = bookID => {
    console.log(bookID);
    let thisBook = this.state.books.find(bookID => this.state.books = bookID);
    console.log(thisBook);
      API.saveBook({
      title: thisBook.volumeInfo.title,
      authors: thisBook.volumeInfo.authors[0],
      description: thisBook.volumeInfo.description,
      image: thisBook.volumeInfo.imageLinks.thumbnail,
      link: thisBook.volumeInfo.previewLink
    })
        .then(res => {
          console.log("Saving Book");
          console.log(res);
        })
      .catch(err => console.log(err));
      thisBook = [];
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
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
                          key={book.id}
                          bookID={book.id}
                          title={book.volumeInfo.title}
                          authors={book.volumeInfo.authors}
                          href={book.volumeInfo.previewLink}
                          description={book.volumeInfo.description}
                          thumbnail={(book.volumeInfo.imageLinks.thumbnail) ? book.volumeInfo.imageLinks.thumbnail : "https://placehold.it/300x300"}
                          // thumbnail={"https://placehold.it/300x300"}
                          saveBook={this.saveBook}
                        />
                      );
                    })}
                  </BookList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
