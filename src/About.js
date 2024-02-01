import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ImageAbout0 from './img/bath.jpg';
import ImageAbout1 from './img/happy.jpg';

function About() {
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const imgSmallRef = useRef(null);
    const titleRef = useRef(null); // Ref for the title

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            titleRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4 }
        )
        .fromTo(
            textRef.current.children, // Animate each child paragraph separately
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.3, duration: 1.6 },
            "-=0.5" // Overlap the animation with the title
        )
        .fromTo(
            imgRef.current,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.3 },
            "-=0.75" // Overlap the animation
        )
        .fromTo(
            imgSmallRef.current,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.3 },
            "-=1.25" // Overlap the animation
        );
    }, []);

    return (
        <div className='containerMainAbout'>
            <div className='containerAbout'>
                <h1 ref={titleRef} className='h1AboutUs'>ABOUT US</h1>

                <div className='box1'>

                <div ref={textRef} className='aboutUsTxt'>
                    <p>
                        {`Our company is a natural cosmetics brand that is dedicated to using only the finest natural ingredients in our products. We are passionate about helping people achieve healthy, radiant skin without relying on harsh chemicals or synthetic additives. Our best-selling products include serums and oils that are formulated to nourish and enhance your skin's natural beauty, as well as multi-purpose creams that provide all-around skincare benefits. We believe in a holistic approach to skincare, which is why we prioritize the use of natural, plant-based ingredients that work with your skin's natural processes.`}
                    </p>

                    <p>
                        {`We strive to make our products accessible and affordable to all, without compromising on quality or effectiveness. We are committed to sustainability and ethical practices, and all of our products are cruelty-free and packaged in eco-friendly materials. Our mission is to empower individuals to take control of their skincare journey and embrace their natural beauty with confidence.`}
                    </p>
                </div>



                    <img ref={imgRef} src={ ImageAbout0 } className='imgAbout' img="bathing with soap" />
                </div>
                <img ref={imgSmallRef} src={ ImageAbout1 } className='imgAboutSm' alt='women holding glass' />

            </div>
        </div>
    )
}

export default About;
