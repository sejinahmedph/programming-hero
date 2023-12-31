import React, { useState } from 'react';
// Firebase Authentication
import app from './data/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

// Auth and Providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Google Sign In
const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
// Github Sign In
const GithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
// Facebook Sign In
const FacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}



const Login = () => {
    // set data 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Handle Email Blur
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    // Handle Password Blur
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    // Handle Registration Form Submit
    const handleFormSubmit = (event) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
          console.log(error.code)
        });
        event.preventDefault();
    }
    return (
        <main>
            <h1>Login</h1>
            <div id="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' onBlur={handleEmailBlur} placeholder='Email Address' id='email'/>
                    </div>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' onBlur={handlePasswordBlur} placeholder='Password' id='password'/>
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                        <button type='button' onClick={GoogleSignIn}>Google Sign In</button>
                        <button type='button' onClick={GithubSignIn}>GitHub Sign In</button>
                        <button type='button' onClick={FacebookSignIn}>Facebook Sign In</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;