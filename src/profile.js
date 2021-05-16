import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './user'

export class Profil extends Component {
    // const {name }

    render() {
        return (
            <div>
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{useAuth0.user.name}</Card.Title>
                        <img src={useAuth0.user.picture} alt='' />
                        <Card.Text>
                            {useAuth0.user.email}
                        </Card.Text>
                    </Card.Body>
        </Card> */}
               { <Profile/>}
            </div>
        )
    }
}

export default Profile
