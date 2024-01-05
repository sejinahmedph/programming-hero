import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '../../App.css';
import logo from '../../logo-phero.svg';
import avatar from './images/avatar.jpg';
import icMenu from './images/ic_menu.svg';
import icClose from './images/ic_close.svg';
import icHome from './icons/home.svg';
import icCourse from './icons/course.svg';
import icAssignment from './icons/assignment.svg';
import icNotification from './icons/notifications.svg';
import icInstall from './icons/install.svg';
import icSupportSession from './icons/support-session.svg';
import icProfile from './icons/profile.svg';
import FirebaseAuthentication from '../../pages/Login/Authentication/firebaseAuthentication';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const {user} = FirebaseAuthentication();
    const toggleSidebar = () => {
        let Sidebar = document.getElementById('sidebar');
        let Header = document.getElementById('header');
        let Main = document.getElementById('main-container');
        Sidebar.classList.toggle("active");
        Header.classList.toggle('active');
        Main.classList.toggle('active');
    }
    return (
        <main>
            <header className='header' id='header'> 
                <div>
                    <button className='bg-none border-0' onClick={toggleSidebar}>
                        <img src={icMenu} alt="ic_menu"/>
                    </button>
                </div>
                <div id='header-brand'>
                    <img src={logo} style={{marginTop: "-10px"}} alt="logo"/>
                    <div className='text-start'>
                        <span className='fw-500 text-white' style={{marginLeft: "-15px"}}>Programming Hero</span>
                    </div>
                </div>
                <Link to="/profile">
                    <div className='cursor-pointer' id='user-image'>
                        <img src={user && user.photoURL ? user.photoURL : avatar} height={"50px"} width={"50px"} 
                        className='rounded-circle' style={{border: "2px dashed yellow"}} alt="Avatar"/>
                    </div>
                </Link>
            </header>
            <aside className='sidebar shadow-lg' id='sidebar'>
                <nav id='navigation' key={"navigation"}>
                    <div className='p-3 text-end' style={{height: "80px"}} id='navigation-header'>
                        <button className='bg-none border-0 d-lg-none' onClick={toggleSidebar}>
                            <img src={icClose} alt="ic_close"/>
                        </button>
                    </div>
                    <ul>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to={window.location.pathname === "/" ? '/' : '/home'}>
                                <img src={icHome} alt="icon"/>
                                <span>Home</span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/courses">
                                <img src={icCourse} alt="icon"/>
                                <span>Courses</span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/assignments">
                                <img src={icAssignment} alt="icon"/>
                                <span>Assignments</span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/support-session">
                                <img src={icSupportSession} alt="icon"/>
                                <span>Question</span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/notifications">
                                <img src={icNotification} alt="icon"/>
                                <span>Notifications</span>
                                <span className='bg-warning ms-auto rounded-circle' style={{height: "20px", width: "20px"}}></span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/installation">
                                <img src={icInstall} alt="icon"/>
                                <span>Installation</span>
                            </CustomLink>
                        </li>
                        <li onClick={toggleSidebar}>
                            <CustomLink className='link gap-3' to="/profile">
                                <img src={icProfile} alt="icon"/>
                                <span>Profile</span>
                            </CustomLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </main>
    );
};
export default Header;