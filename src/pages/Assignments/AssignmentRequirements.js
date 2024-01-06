import React from 'react';
import './css/style.css';
import logo from '../../logo-phero.svg';
import assignmentvideo1 from './videos/assignment-1.mp4';
import { Link } from 'react-router-dom';


const AssignmentRequirements = () => {
    return (
        <div>
            <header className='p-3' id='fake-header'>
                <img src={logo} style={{marginTop: "-10px"}} alt="logo"/>
                <span className='fw-500 text-white' style={{marginLeft: "-15px"}}>Programming Hero</span>
            </header>
            <main className='main-container w-100' style={{paddingTop: "100px", left: "0px"}} id='main-container'>
                <section className='mx-auto' style={{maxWidth: "991px"}}>
                    <div>
                        <video src={assignmentvideo1} className='border border-secondary shadow-sm' width={"100%"} 
                        controls controlsList='nodownload noremoteplayback noplaybackrate nopictureinpicture' autoplay></video>
                    </div>
                    <div className='w-100 p-3 d-flex align-items-center gap-3' id='requirements-header'>
                        <Link to="/assignments">
                            <button className='bg-none border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="23" fill='white' viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 
                                0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 
                                12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                            </button>
                        </Link>
                        <h4 className='text-white mb-1'>Assignment Requirements</h4>
                    </div>
                </section>
                <section className='mx-auto' style={{maxWidth: "991px"}}>
                    <article id='video-list-container'>
                        <div className='item active'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 
                                    8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-
                                    7.4-4.5-16.7-4.7-24.3-.5z"/>
                                </svg>
                            </div>
                            <div>
                                <span>Assignment-1: Personal Portfolio</span>
                            </div>
                            <a href={assignmentvideo1} download={"programming-hero-assignment.mp4"}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-download" 
                                    viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2
                                        2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 
                                        0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className='item'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 
                                    8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-
                                    7.4-4.5-16.7-4.7-24.3-.5z"/>
                                </svg>
                            </div>
                            <div>
                                <span>Assignment-1: Personal Portfolio</span>
                            </div>
                            <a href={assignmentvideo1} download={"programming-hero-assignment.mp4"}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-download" 
                                    viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2
                                        2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 
                                        0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default AssignmentRequirements;