import React from 'react';
import FirebaseAuthentication from '../Login/Authentication/firebaseAuthentication';

const Profile = () => {
    const {user, handleSignOut} = FirebaseAuthentication();
    return (
        <main>
            {user ? (
                <><h1>Signed In: {user.displayName}</h1></>
            ):(
                <><h1>No User</h1></>
            )
        }
        </main>
    );
};

export default Profile;