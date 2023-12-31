import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../../pages/Authentication/Register';
import Login from '../../pages/Authentication/Login';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';

const Router = () => {
    return (
        <Routes>
            {/* <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route> */}
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    );
};

export default Router;