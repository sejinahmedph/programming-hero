import { React, useState } from 'react';
import app from './data/firebase.init';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, 
         getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const FirebaseAuthentication = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            localStorage.setItem('userLogedIn', true);
        }
    })
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    } 
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return {
        user,
        handleGoogleSignIn,
        handleGithubSignIn, 
        handleFacebookSignIn,
        error,
    };
};
export default FirebaseAuthentication;