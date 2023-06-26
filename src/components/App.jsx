import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Search from './Search';
import Home from "./Home";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Navbar className='navContainer'>
                <Navbar.Brand onClick={navigateHome}>Lyricify</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link onClick={navigateHome} className='listText'>Home</Nav.Link>
                    <Nav.Link onClick={navigateLyrics} className='listText'>Get Lyrics</Nav.Link>
                </Nav>
            </Navbar>
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
