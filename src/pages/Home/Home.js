import React from 'react';
import FirebaseAuthentication from '../Login/Authentication/firebaseAuthentication';
import { Link } from 'react-router-dom';

const Home = () => {
    const {handleSignOut} = FirebaseAuthentication();
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Welcome to your Home!!!</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Home;