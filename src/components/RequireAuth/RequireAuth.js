import React from 'react';
import FirebaseAuthentication from '../../pages/Login/Authentication/firebaseAuthentication';
import app from '../../pages/Login/Authentication/data/firebase.init';
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';
const auth = getAuth(app);
const RequireAuth = ({children}) => {
    const {user} = FirebaseAuthentication(auth);
    if (!user) {
        <Navigate to='/' element={<Login></Login>} replace></Navigate>
    }
    return children;
};

export default RequireAuth;