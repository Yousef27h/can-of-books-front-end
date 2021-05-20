import React, { Component } from 'react'

export class BookUpdate extends Component {
    render() {
        return (
            <div>
                
                <form onSubmit={(e)=> this.props.updateBooks(e)}>
                    <label>Book's Name </label>
                    <input type='text' value={this.props.name} onChange={(e) => this.props.updateSelectName(e)}/>

                    <label>Book's Description </label>
                    <input type='text' value={this.props.description} onChange={(e) => this.props.updateSelectDesc(e)}/>
                    <input type='submit' value='Update'/>

                </form>
                
            </div>
        )
    }
}

export default BookUpdate
