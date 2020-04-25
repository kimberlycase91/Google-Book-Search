# Google-Book-Search
A React-based Google Books Search app that uses React components, with helper/util functions, and utilizes React lifecycle methods to query and display books based on user searches. It also use Node, Express and MongoDB so that users can save books to review or purchase later

## What does it do?
When a user searches for a book, the app searches the Google Books API, then dynamicaly displays the Books on the page. The user then has an option to click "view" to go to the book information or "save" to save the book to the Saved Books list. 

When the user clicks the "Saved books" button, the page will display all books that have been saved. Here the user has the option to click "view" to see the book information or "delete" to remove the book from the page.

## How does it work?
When the user searches for a book the app uses axios to access the Google Books API and dynammically displays the books in a list component on the page. 
When the user clicks "Save" the app saves the book information to the database using Mongoose. 
When the user clicks the "Saved Books" button, the app uses react-router-dom to display the saved books.
When the user clicks the "Delete" button on a book, the app uses mongoose to remove the book from the database.

[Try it out](https://google-book-search-app-1.herokuapp.com/)
