import React, { useRef, useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import Footer from './Footer';
import imageMain from './img/main.jpg';
import longImg from './img/116.png';
import NewInn from './NewInn';

function Main() {
    // Create refs for the elements  to animate
    const imageRef = useRef(null);
    const bannerRef = useRef(null);

    useEffect(() => {
        // GSAP timeline for animations
        const tl = gsap.timeline();

        // Animate the main image with a fade-in effect
        tl.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

        // Animate the banner text with a slide-up effect
        tl.fromTo(
            bannerRef.current.children,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 },
            "-=0.5" // Overlap the animation slightly with the previous one
        );
    }, []);

    return (
        <div>
            {/* page one */}
            <div className='containerMain'>
                <img ref={imageRef} src={imageMain} className='imageMain' alt='woman image' />
                <div ref={bannerRef} className='banner'>
                    <h3>Welcome to</h3>
                    <h1 className='extraBigTxt'>SKINCARE LOVE</h1>
                    <h4>Discover your passion</h4>
                </div>
            </div>
            
            {/* page two */}
            <div className='containerMainGreen'>
                <div className='greenSpace'>
                    <img src={longImg} alt='visual' className='imgVs' />
                    <h3>About Us</h3>
                    <h2 className='sloganTxt'>DISCOVER YOUR BEST SKIN YET</h2>
                    <p className='greenWriting'>Our company is a natural cosmetics brand that is committed to using only the finest natural ingredients in our products. We specialize in serums and oils that are designed to nourish and enhance your skin's natural beauty. We also offer multi-purpose creams that provide all-around skincare benefits.</p>
                </div>
            </div>

            {/* page three */}
            <NewInn />
        </div>
    );
}

export default Main;
