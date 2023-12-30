import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';


const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    );
};

export default Router;