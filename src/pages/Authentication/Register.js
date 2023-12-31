import React from 'react';
import './css/style.css';
// Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
// Firebase Authentication
import app from './data/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, 
         createUserWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
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

const emailPassword = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
  })
  .catch((error) => {
    console.log(error.code)
  });
}



const Login = () => {
    return (
        <main id='container'>
            <div className='p-5 shadow rounded' id='form'>
                <form>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' placeholder='Name' id='name'/>
                    </div>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' placeholder='Email Address' id='email'/>
                    </div>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' placeholder='Password' id='password'/>
                    </div>
                    <div className='py-2'>
                        <button className='fw-bold shadow-sm my-2 rounded' id='submit-btn' onClick={emailPassword}>Register</button>
                        <h5 className='text-white text-center'>Or</h5>
                        <button className='fw-bold shadow-sm my-2 rounded' id='google' onClick={GoogleSignIn}>Google</button>
                        <button className='fw-bold shadow-sm my-2 rounded' id='github' onClick={GithubSignIn}>Github</button>
                        <button className='fw-bold shadow-sm my-2 rounded' id='facebook' onClick={FacebookSignIn}>Facebook</button>
                    </div>
                </form>
            </div>
        </main>
    );
};
export default Login;