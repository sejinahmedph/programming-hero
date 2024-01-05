import React from 'react';
import FirebaseAuthentication from '../Login/Authentication/firebaseAuthentication';
import Header from '../../components/Header/Header';

const Home = () => {
    const {user} = FirebaseAuthentication();
    return (
        <div>
            <Header></Header>
            <main className='main-container' id='main-container'>
                <h1 className='text-white'>This is home</h1>
            </main>
        </div>
    );
};

export default Home;