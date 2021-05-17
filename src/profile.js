import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Books from './books'


class Profile extends Component {
   

    render() {
        const { user, isAuthenticated } = this.props.auth0;
        
       
        return (
            <>
                { isAuthenticated &&
                    <>
                        <div>Hello {user.name}</div>
                        <div> {user.email}</div>
                        <div><img src={user.picture} alt='' /></div>
                        <Books email={user.email}/>
                    </>
                }
            </>
        );
    }
}
export default withAuth0(Profile);