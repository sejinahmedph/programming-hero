import React from 'react';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../Authentication/data/firebase.init';

const auth = getAuth(app);


const handleSignOut = () => {
    signOut(auth).then(() => {
        window.location.pathname = '/';
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
}



const Profile = () => {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    })
    return (
        <main>
            {user?(
                <>
                Logged In
                <h1>{user.displayName}</h1>
                <img src={user.photoURL} alt="userimage"/>
                <button onClick={handleSignOut}>Sign Out</button>
                </>
            ):(
                <>
                rfty
                </>
            )

            }
        </main>
    );
};

export default Profile;