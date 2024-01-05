import React from 'react';
import './css/style.css';
import Header from '../../components/Header/Header';
import assignmentImage from './images/assignment.png';
import { Button } from 'react-bootstrap';

const Assignments = () => {
    return (
        <div>
            <Header></Header>
            <main className='main-container' id='main-container'>
                <section>
                    <article className='text-center shadow-lg' id='add-assignment-container'>
                        <img src={assignmentImage} alt="img"/>
                        <h1 className='text-white'>Assignment : <span className='text-warning'>1</span></h1>
                        <h2 className='text-white'>Total Marks : <span className='text-warning'>60</span></h2>
                        <Button className='my-2' disabled>Start Assignment</Button>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Assignments;