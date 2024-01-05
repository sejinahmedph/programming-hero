import React from 'react';
import crying from './images/crying.gif';
import Header from '../../components/Header/Header';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='main-container text-center text-white' id='main-container'>
                <img src={crying} height={"300px"} width={"300px"} alt="crying"/>
                <h1 style={{fontSize: "60px"}}>404</h1>
                <h2>Oops! You'Re Lost.</h2>
                <h5>The page you are looking for was not found.</h5>
            </div>
        </div>
    );
};
export default NotFound;