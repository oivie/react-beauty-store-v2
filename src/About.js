import './App.css';
import ImageAbout0 from './img/bath.jpg';
import ImageAbout1 from './img/happy.jpg'



function About() {
    return (
        <div className='containerMainAbout'>
            <div className='containerAbout'>
                <h1 className='h1AboutUs'>ABOUT US</h1>

                <div className='box1'>

                    <p className='aboutUsTxt'>
                        Our company is a natural cosmetics brand that is dedicated to using only the finest natural ingredients in our products. We are passionate about helping people achieve healthy, radiant skin without relying on harsh chemicals or synthetic additives. Our best-selling products include serums and oils that are formulated to nourish and enhance your skin's natural beauty, as well as multi-purpose creams that provide all-around skincare benefits. We believe in a holistic approach to skincare, which is why we prioritize the use of natural, plant-based ingredients that work with your skin's natural processes.
                    
                    <span>                   
                        We strive to make our products accessible and affordable to all, without compromising on quality or effectiveness. We are committed to sustainability and ethical practices, and all of our products are cruelty-free and packaged in eco-friendly materials. Our mission is to empower individuals to take control of their skincare journey and embrace their natural beauty with confidence.
                    </span>
                    </p>

                    <img src={ ImageAbout0 } className='imgAbout' />
                </div>
                <img src={ ImageAbout1 } className='imgAboutSm' />

            </div>


        </div>
    )
}


export default About;
