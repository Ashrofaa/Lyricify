import React from 'react';
import img from "../mobile.jpg";
import CarouselSection from './CarouselSection';

export default function Home() {
    return (
        <div id='home'>
            <div className='container'>
                <div className='header-text-container'>
                    <h1 className='header-text'>Welcome to Lyricify!</h1>
                    <p className='header-paragraph'>Here you will find all your music needs and more! More prominently, you can
                        search for your favorite songs lyrics. Check out our website sections to learn
                        more.</p>
                </div>
                <div className='header-img-container'>
                    <img src={img} className='header-img'></img>
                </div>
            </div>
            <div id='test'>
                <h1 className='test-header'>Testimonials</h1>
                <CarouselSection />
            </div>
        </div>
    )
}
