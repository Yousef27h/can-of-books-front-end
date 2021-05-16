import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    
  const { user  } = useAuth0();

  return <div>Hello {user.name} {user.email} {user.picture}</div>;
}

export default Profile;