import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

class Books extends Component {
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

            const paramsObj = {
                email: this.state.email
            }
            const mybooks = await axios.get(`${this.state.server}/book`, { params: paramsObj });



            this.setState({

                books: mybooks.data,

            });

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { isAuthenticated } = this.props.auth0;


        return (
            <>
                { isAuthenticated &&
                    <>
                        {
                            this.props.books.map((book, idx) => {
                                return (
                                    <div key={idx}>
                                        {book.name}
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </>
        );
    }
}
export default withAuth0(Books);

