import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Courses from '../../pages/Courses/Courses';
import Assignments from '../../pages/Assignments/Assignments';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import FirebaseAuthentication from '../../pages/Login/Authentication/firebaseAuthentication';
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
                        <Route path='/courses' element={<Courses></Courses>}></Route>
                        <Route path='/assignments' element={<Assignments></Assignments>}></Route>
                        <Route path='/profile' element={<Profile></Profile>}></Route>
                        <Route path='/login' element={<Profile></Profile>}></Route>
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