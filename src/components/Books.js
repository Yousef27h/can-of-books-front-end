import React, { Component } from 'react'

export class Books extends Component {
    render() {
        return (
            <div>
                {this.props.books.map((book, idx) => {
          return (
            <div key={idx}>
              <h1> {book.name} </h1>
              <p>{book.description}</p>
              <button onClick={this.props.deleteBook(idx)}>Remove Book</button>
            </div>
          );
        })}
            </div>
        )
    }
}
export default Books
