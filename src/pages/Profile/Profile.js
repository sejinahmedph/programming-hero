import React from 'react';
import '../../App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Header/images/avatar.jpg';
import assignmentImage from './images/assignment.png';
import githubImage from './images/github.svg';
import arrowRight from './images/arrow-right.svg';
import icLogout from './images/logout.svg';
import FirebaseAuthentication from '../Login/Authentication/firebaseAuthentication';
import { Spinner } from 'react-bootstrap';
import Header from '../../components/Header/Header';
const Profile = () => {
    const {user, handleSignOut} = FirebaseAuthentication();
    return (
        <div>
            <Header></Header>
            <main className='main-container' id='main-container'>
                {user ? (
                    <>
                    <section id='grid'>
                        <article id='user-info-container'>
                            <div>
                                <div className='avatar mx-auto rounded-circle'>
                                    <img src={user?.photoURL ? user.photoURL : Avatar} 
                                    className='rounded-circle' height={"100px"} width={"100px"} alt="avatar"/>
                                </div><br/>
                                <span className='fs-5 text-white fw-500'>{user?.displayName ? user.displayName : "User"}</span><br/>
                                <span className='fs-6 fw-500 text-white'>{user?.email ? user.email : "-- User Email --"}</span><br/>
                                <span className='fs-6 fw-500 text-white'>{user?.phoneNumber ? user.phoneNumber : "-- Phone Number --"}</span>
                            </div>
                        </article>
                        <article id='points-container'>
                            <div className='item'>
                                <div className='text-center'>
                                    <img src={assignmentImage} height={"100px"} width={"150px"} alt="img"/><br/>
                                    <span className='fs-3 fw-500 text-white'>Assignments Marks</span><br/>
                                    <h1 className='text-white' style={{fontSize: "50px"}}>00</h1>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section id='info-container'>
                        <article>
                            <Link to="https://github.com/sejinahmedph" target="_blank">
                                <div className='item p-3 px-4'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={githubImage} alt="img"/>
                                        <h5 className="text-white mb-1">GitHub: Sejin Ahmed</h5>
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="icon"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://github.com/masud1989" target="_blank">
                                <div className='item p-3 px-4'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={githubImage} alt="img"/>
                                        <h5 className="text-white mb-1">GitHub: Masud Rana</h5>
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="icon"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://github.com/jhankarpHero" target="_blank">
                                <div className='item p-3 px-4'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={githubImage} alt="img"/>
                                        <h5 className="text-white mb-1">GitHub: Jhankar M.</h5>
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="icon"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://github.com/programminghero1" target="_blank">
                                <div className='item p-3 px-4'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={githubImage} alt="img"/>
                                        <h5 className="text-white mb-1">GitHub: P. Hero</h5>
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="icon"/>
                                    </div>
                                </div>
                            </Link>
                            <div className='item bg-none p-3 px-4' style={{width: "200px"}} onClick={handleSignOut}>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src={icLogout} alt="img"/>
                                    <h5 className='mb-1' style={{color: "red"}}>Log Out</h5>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" fill="red" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 
                                    0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                                </div>
                            </div>
                        </article>
                    </section>
                    </>
                ):(
                    <div className='text-center' style={{width: "100%"}}>
                        <Spinner className='text-warning mx-auto my-auto' style={{height: "100px", width: "100px"}} 
                        animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )
            }
            </main>
        </div>
    );
};
export default Profile;