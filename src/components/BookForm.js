import React, { Component } from 'react';


export class BookForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addNewBook}>
                    <label for='bookName'>Add a book</label>

                    <input type='text' id='bookName' placeholder='Name of the book' onChange={this.props.updateBookName}/>
                    <input type='text' id='bookDescription' placeholder='Description of the book' onChange={this.props.updateBookDescription}/>
            

                    <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}

export default BookForm;
