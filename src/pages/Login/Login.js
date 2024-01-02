import React from 'react';
import './css/style.css';
import logo from '../../logo-phero.svg';
import bgCity from './images/city.jpg';
import icGoogle from './images/ic_google.png';
import icGithub from './images/ic_github.png';
import icFacebook from './images/ic_facebook.png';
import FirebaseAuthentication from './Authentication/firebaseAuthentication';
const backgroundStyle = {
    background: `url(${bgCity})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
}
const Login = () => {
    const {handleGoogleSignIn, handleGithubSignIn, handleFacebookSignIn, error} = FirebaseAuthentication();
    return (
        <main style={backgroundStyle} id='container'>
            <div className='mx-auto' id='form-container'>
                <div id='brand'>
                    <img src={logo} height={"85px"} width={"85px"} alt="logo-phero"/><br/>
                    <span>Programming Hero</span>
                </div>
                <form>
                    <button type='button' className='bg-warning' onClick={handleGoogleSignIn}>
                        <img src={icGoogle} height={"40px"} width={"40px"} alt="ic_google"/>
                        <span>Google Sign In</span>
                    </button><br/>
                    <button type='button' className='bg-dark' onClick={handleGithubSignIn}>
                        <img src={icGithub} height={"35px"} width={"35px"} alt="ic_github"/>
                        <span>Github Sign In</span>
                    </button><br/>
                    <button type='button' className='bg-primary' style={{gap: "0rem"}} onClick={handleFacebookSignIn}>
                        <img src={icFacebook} height={"40px"} width={"40px"} alt="ic_facebook"/>
                        <span>Facebook Sign In</span>
                    </button>
                    <p style={{color: "red", textAlign: "center"}}>{error}</p>
                </form>
            </div>
        </main>
    );
};
export default Login;