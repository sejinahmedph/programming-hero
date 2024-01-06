import React from 'react';
import { useState } from 'react';
import './css/style.css';
import Header from '../../components/Header/Header';
import assignmentImage from './images/assignment.png';
import assignmentImage2 from '../Profile/images/assignment.png';
import icClose from '../../components/Header/images/ic_close.svg';
import icVideo from './images/video.svg';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../components/CustomLink/CustomLink';
import { getDatabase, set, ref, onValue } from 'firebase/database';
import app from '../Login/Authentication/data/firebase.init';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
const database = getDatabase(app);

const Assignments = () => {
    // Modal ==============================
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ====================================
    // Database ===========================
    const [user, setUser] = useState(null);
    const [userID, setUserID] = useState('');
    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
            setUserID(user.uid);
        }
    })
    const getStartedAssignment = () => {
        if (user) {
            set(ref(database, `assignments/${userID}`), "");
            localStorage.setItem("databaseURL", `assignments/${userID}`);   
        }
    }
    let assignmentContainer = [];
    const addData = () => {
        const repo = document.getElementById('repo').value;
        const link = document.getElementById('link').value;
        const assignmentData = {
            id: Math.round(Math.random() * 1000000000),
            repository: repo,
            link: link,
        };
        assignmentContainer.push(assignmentData);
    };
    const readData = () => {
        if (user) {
            const starCountRef = ref(database, `assignments/${userID}`);
            onValue(starCountRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
                    let data = childSnapshot.val();
                    const id = data.id;
                    const repo = data.repository;
                    const livesite = data.link;
                    assignmentContainer.push({"id": id, "repository": repo, "link": livesite});  
                    localStorage.setItem("databaseURL", `assignments/${userID}`);
                })
            });
        }
    };
    readData();
    const postData = () => {
        if (user) {
            addData();
            set(ref(database, `assignments/${userID}`), assignmentContainer);
            window.location.reload();
        }
    }
    // ====================================

    return (
        <div>
            <Header></Header>
            <main className='main-container' id='main-container'>
                {localStorage.getItem('databaseURL') ? (""):(<button onClick={getStartedAssignment}>Get Started</button>)}
                <section className='px-2'>
                    <CustomLink to="/assignment-requirements">
                        <article className='p-4 rounded' id='requirements-container'>
                            <div className='d-flex align-items-center gap-3'>
                                <img src={icVideo} alt="icon"/>
                                <h3 className='text-warning'>Assignment Requirements</h3>
                            </div>
                        </article>
                    </CustomLink>
                </section>
                <section className='grid py-3 px-2'>
                    <article className='text-center shadow-lg' id='add-assignment-container'>
                        <img src={assignmentImage} alt="img"/>
                        <h1 className='text-white'>Assignment : <span className='text-warning'>1</span></h1>
                        <h2 className='text-white'>Total Marks : <span className='text-warning'>60</span></h2>
                        <input type="text" id='repo' />
                        <input type="text" id='link' />
                        <Button className='my-2' onClick={postData}>Start Assignment</Button>
                    </article>
                    <article className='text-center shadow-lg' id='add-assignment-container'>
                        <img src={assignmentImage2} alt="img"/>
                        <h1 className='text-white'>Assignment Marks <br/> 
                        <span style={{fontSize: "60px"}} className='text-warning'>00</span></h1>
                    </article>
                </section>
                <section className='my-3 pb-2 px-2 rounded' id='dashboard-container'>
                    <div className='p-3 px-4 pb-2'>
                        <h4 className='text-white'>Assignments</h4>
                        <div className='pt-2' id='dashboard-header'>
                            <span className='text-white fw-bold'>Sr.</span>
                            <span className='text-white fw-bold'>Name</span>
                        </div>
                    </div>
                    <article className='w-100' id='dashboard'>
                        <div className='item my-2 p-2 px-4'>
                            <span>1</span>
                            <span>Personal Portfolio</span>
                            <div>
                                <div className='text-end'>
                                    <Button variant="outline-success" className='fw-bold' onClick={handleShow} disabled>Submission</Button>
                                </div>
                                <Modal show={show} backdrop="static" keyboard={false} style={{zIndex: "1234567"}}>                     
                                    <Modal.Header className='border-0'>
                                        <Modal.Title>Your Submission</Modal.Title>
                                        <Button className='bg-none border-0' onClick={handleClose}>
                                            <img src={icClose} alt="icon"/>
                                        </Button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='py-2'>
                                            <span className='fs-6 fw-bold'>GitHub Repository</span><br/>
                                            <Link to="" target='_blank'>
                                                <span className='link'>https://github.com/sejinahmedph/programming-hero</span>
                                            </Link>
                                        </div>
                                        <div className='py-2'>
                                            <span className='fs-6 fw-bold'>Live Website Link</span><br/>
                                            <Link to="" target='_blank'>
                                                <span className='link'>https://sejinahmedph.github.oi/programming-hero/index.html</span>
                                            </Link>
                                        </div>
                                        <div className="pt-2 px-3 text-end">
                                            <span className='fs-6 fw-bold text-warning'>01 Jan 2024</span>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Assignments;