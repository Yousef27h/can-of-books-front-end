import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBooks.css';
const axios = require('axios');

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      email: '',
      server: process.env.REACT_APP_SERVER_URL
    }
  };


  getbooks = async () => {


    try {

      const { user } = this.props.auth0;
      const mybooks = await axios.get(`${this.state.server}/books?email=${user.email}`);

      // http://localhost:3838/books



      this.setState({

        books: mybooks.data,

      });

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {     this.state.books.map((book, idx) => {
          return (
            <div key={idx}>
              {book.name}
            </div>
          )
        })
        }
      </Jumbotron>
    )
  }
}

export default withAuth0 (MyFavoriteBooks);
