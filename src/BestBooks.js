import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import "./BestBooks.css";
import BookForm from "./components/BookForm";
import axios from "axios";
import Books from "./components/Books";
import BookUpdate from "./components/bookUpdate";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      email: "",
      server: process.env.REACT_APP_SERVER_URL,
      bookName: "",
      bookDescription: "",
      showUpdate: false,
      selectedBookName: "",
      selectedBookDesc: "",
      index: 0,
    };
  }

  componentDidMount = async () => {
    try {
      const { user } = this.props.auth0;
      const mybooks = await axios.get(
        `${this.state.server}/books?email=${user.email}`
      );

      // http://localhost:3838/books
      // console.log(mybooks);

      this.setState({
        books: mybooks.data,
        email: user.email,
      });
      // console.log(this.state.books);
    } catch (error) {
      console.log(error);
    }
  };

  updateBookName = (e) => {
    this.setState({ bookName: e.target.value });
  };
  updateBookDescription = (e) => {
    this.setState({ bookDescription: e.target.value });
  };

  addNewBook = async (e) => {
    e.preventDefault();
    const bookData = {
      email: this.state.email,
      name: this.state.bookName,
      description: this.state.bookDescription,
    };

    const newBooks = await axios.post(`${this.state.server}/books`, bookData);

    this.setState({
      books: newBooks.data,
    });
  };

  deleteBook = async (index) => {
    const newArrayOfBooks = this.state.books.filter((book, idx) => {
      return idx !== index;
    });

    this.setState({
      books: newArrayOfBooks,
    });
    const { user } = this.props.auth0;
    const query = {
      email: user.email,
    };

    await axios.delete(`${this.state.server}/books/${index}`, {
      params: query,
    });
  };

  showBookDetails = (index) => {
    // console.log(this.state.books);
    // console.log(index);
    this.setState({
      showUpdate: true,
      selectedBookName: this.state.books[index].name,
      selectedBookDesc: this.state.books[index].description,
      index: index,
    });
  };
  updateSelectName = (e) => {
    // console.log(e.target.value);
    this.setState({ selectedBookName: e.target.value });
  };
  updateSelectDesc = (e) => {
    // console.log(e.target.value);
    this.setState({ selectedBookDesc: e.target.value });
  };
  updateBooks = async (e) => {
    e.preventDefault();
    const index = this.state.index;
    const bookData = {
      email: this.state.email,
      name: this.state.selectedBookName,
      description: this.state.selectedBookDesc,
    };
    const newBook = await axios.put(`${this.state.server}/books/${index}`, bookData);
    this.setState({
      books: newBook.data
    })
  };
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <Books
          books={this.state.books}
          deleteBook={this.deleteBook}
          showBookDetails={this.showBookDetails}
        />
        <BookForm
          updateBookName={this.updateBookName}
          updateBookDescription={this.updateBookDescription}
          addNewBook={this.addNewBook}
        />
        {this.state.showUpdate && (
          <BookUpdate
            name={this.state.selectedBookName}
            description={this.state.selectedBookDesc}
            updateSelectName={this.updateSelectName}
            updateSelectDesc={this.updateSelectDesc}
            updateBooks={this.updateBooks}
          />
        )}
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
