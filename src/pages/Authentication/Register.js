import React, { useState } from 'react';
import './css/style.css';
// Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
// Firebase Authentication
import app from './data/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, 
         createUserWithEmailAndPassword, FacebookAuthProvider, updateProfile,
         sendEmailVerification, 
         onAuthStateChanged} from "firebase/auth";
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

onAuthStateChanged(auth, (user) => {
    console.log(user)
})



const Register = () => {
    // Set Data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    // Handle Name Blur
    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then(() => {
            console.log('success')
        }).catch((error) => {
            console.log(error)
        });
    }
    // Handle Email Blur
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    // Handle Password Blur
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    // Handle Photo
    const handlePhoto = (event) => {
        const image = event.target.files[0];
        const reader = new FileReader(image);
        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
             const imageUrl = reader.result;
             setPhoto(imageUrl);
        })
    }
    // Send Email Verification
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('sent email')
        });
    }
    // Handle Registration Form Submit
    const handleFormSubmit = (event) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUserName();
            emailVerification();
            console.log(result.user)
        })
        .catch((error) => {
          console.log(error.code)
        });
        event.preventDefault();
    }
    return (
        <main id='container'>
            <div className='p-5 shadow rounded' id='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' onBlur={handleNameBlur} placeholder='Name' id='name'/>
                    </div>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' onBlur={handleEmailBlur} placeholder='Email Address' id='email'/>
                    </div>
                    <div>
                        <input type="text" className='py-3 ps-4 my-2' onBlur={handlePasswordBlur} placeholder='Password' id='password'/>
                    </div>
                    <div>
                        <input type="file" onChange={handlePhoto} id="file"/>
                    </div>
                    <div className='py-2'>
                        <button className='fw-bold shadow-sm my-2 rounded' type='submit' id='submit-btn' onClick={handleFormSubmit}>
                            Register
                        </button>
                        <h5 className='text-white text-center'>Or</h5>
                        <button className='fw-bold shadow-sm my-2 rounded' type='button' id='google' onClick={GoogleSignIn}>Google</button>
                        <button className='fw-bold shadow-sm my-2 rounded' type='button' id='github' onClick={GithubSignIn}>Github</button>
                        <button className='fw-bold shadow-sm my-2 rounded' type='button' id='facebook' onClick={FacebookSignIn}>Facebook</button>
                    </div>
                </form>
            </div>
        </main>
    );
};
export default Register;