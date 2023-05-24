import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Search from './Search';
import Home from "./Home";

export default function App() {
    const navigate = useNavigate();

    const navigateLyrics = () => {
        navigate('/lyrics');
    };

    const navigateHome = () => {
        navigate('/');
      };

    return (
        <div>
            <div className='navbar navContainer'>
                <h1 className='logo navbar-brand' onClick={navigateHome}>Lyricify</h1>
                <ul className='navbar-nav'>
                    <li className='nav-item listItem'><a className='nav-link listText' onClick={navigateHome}>Home</a></li>
                    <li className='nav-item listItem'><a className='nav-link listText' onClick={navigateLyrics}>Get Lyrics</a></li>
                </ul>
            </div>
            <Routes>
                    <Route path="/lyrics" element={<Search />} />
                    <Route path="/" element={<Home />} />
            </Routes>
            <div id='footer' className='navContainer'>
                <a href="">
                    <i class="fa-brands fa-twitter fa-xl footer-icon"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-facebook-f fa-xl footer-icon"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-instagram fa-xl footer-icon"></i>
                </a>
                <a href="">
                    <i class="fa-solid fa-envelope fa-xl footer-icon"></i>
                </a>
                <p className='footerText'>© Copyright Lyricify</p>
            </div>
        </div>
    )
}
