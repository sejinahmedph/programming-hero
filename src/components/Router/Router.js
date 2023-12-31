import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../../pages/Authentication/Register';
import Login from '../../pages/Authentication/Login';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import app from '../../pages/Authentication/data/firebase.init';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Router = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    })
    return (
        <main>
            {user? (
              <>
                <Routes>
                    <Route path='/register' element={<DefaultPath></DefaultPath>}></Route>
                    <Route path='/login' element={<DefaultPath></DefaultPath>}></Route>
                    <Route path='/profile' element={<Profile></Profile>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
                </Routes>
              </>
              ):(
                <Routes>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                    <Route path='*' element={<DefaultPath></DefaultPath>}></Route>
                </Routes>
              )
            }
        </main>
    );
};

const DefaultPath = () => {
    window.location.pathname = '/';
}

export default Router;