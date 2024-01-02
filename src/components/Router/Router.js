import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';

const Router = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
            </Routes>
        </main>
    );
};

export default Router;