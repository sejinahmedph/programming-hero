import React from 'react';
import app from './data/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const GoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}


const Login = () => {
    return (
        <main>
            <button onClick={GoogleSignIn}>Google</button>
        </main>
    );
};

export default Login;