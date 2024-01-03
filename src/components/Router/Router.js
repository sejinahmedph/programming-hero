import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import FirebaseAuthentication from '../../pages/Login/Authentication/firebaseAuthentication';
import FirebaseFirestore from '../../pages/Login/Authentication/firebaseFirestore';
const Router = () => {
    const {user} = FirebaseAuthentication();
    const storageData = localStorage.getItem('userLogedIn');
    return (
        <main>
            {user || storageData ? (
                <>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/login' element={<Profile></Profile>}></Route>
                        <Route path='/profile' element={<Profile></Profile>}></Route>
                        <Route path='/database' element={<FirebaseFirestore></FirebaseFirestore>}></Route>
                        <Route path='*' element={<NotFound></NotFound>}></Route>
                    </Routes>
                </>
            ):(
                <>
                    <Routes>
                        <Route path='/' element={<Login></Login>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='*' element={<Login></Login>}></Route>
                    </Routes>
                </>
            )
            }
        </main>
    );
};
export default Router;