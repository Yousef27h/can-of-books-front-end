import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import "./BestBooks.css";
import BookForm from "./components/BookForm";
import axios from "axios";
import Books from "./components/Books";

// const axios = require("axios");

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      email: "",
      server: process.env.REACT_APP_SERVER_URL,
      bookName: "",
      bookDescription: "",
    };
  }

  componentDidMount = async () => {
    try {
      const { user } = this.props.auth0;
      const mybooks = await axios.get(
        `${this.state.server}/books?email=${user.email}`
      );

      // http://localhost:3838/books
      console.log(mybooks);

      this.setState({
        books: mybooks.data,
      });
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
      books: newBooks,
    });
  };

  // deleteBook = async (index) => {
  //   const newArrayOfBooks = this.state.books.filter((book, idx) => {
  //     return idx !== index;
  //   });

  //   this.setState({
  //     books: newArrayOfBooks,
  //   });

  //   const query = {
  //     email: this.state.email,
  //   };

  //   await axios.delete(`${this.state.server}/books/${index}`, { params: query });
  // };

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <Books books={this.state.books}  deleteBook={this.deleteBook}/>
        <BookForm
          updateBookName={this.updateBookName}
          updateBookDescription={this.updateBookDescription}
          addNewBook={this.addNewBook}
        />
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
