import React from 'react';
import './css/style.css';
import Avatar from '../../components/Header/images/avatar.jpg';
import FirebaseAuthentication from '../Login/Authentication/firebaseAuthentication';

const Profile = () => {
    const {user, handleSignOut} = FirebaseAuthentication();
    return (
        <main id='main-container'>
            <section id='grid'>
                <article id='user-info-container'>
                    <div>
                        <img src={user?.photoURL ? user.photoURL : Avatar} 
                        className='avatar rounded-circle' height={"100px"} width={"100px"} alt="avatar"/><br/><br/>
                        <span className='fs-5 text-white fw-500'>{user?.displayName ? user.displayName : "User"}</span><br/>
                        <span className='fs-6 fw-500 text-white'>{user?.email ? user.email : "-- User Email --"}</span><br/>
                        <span className='fs-6 fw-500 text-white'>{user?.phoneNumber ? user.phoneNumber : "-- Phone Number --"}</span>
                    </div>
                </article>
                <article id='points-container'>
                    <div className='item'>
                        <div className='border-end'>
                            <span className='fs-3 fw-500 text-white'>Assignments</span>
                        </div>
                    </div>
                    <div className='item'>
                    <span className='fs-3 fw-500 text-white'>Assignments</span>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Profile;