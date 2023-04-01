import './App.css';
import ImageAbout0 from './img/bath.jpg';
import ImageAbout1 from './img/happy.jpg'



function About() {
    return (
        <div className='containerMainAbout'>
            <div className='containerAbout'>
                <div>
                    <h1 className='h1AboutUs'>ABOUT US</h1>
                    <p className='aboutUsTxt'>
                        Our company is a natural cosmetics brand that is committed to using only the finest natural ingredients in our products. We specialize in serums and oils that are designed to nourish and enhance your skin's natural beauty. We also offer multi-purpose creams that provide all-around skincare benefits.
                    </p>
                </div>
                <img src={ ImageAbout0 } className='imgAbout' />
                <img src={ ImageAbout1 } className='imgAboutSm' />

            </div>


        </div>
    )
}


export default About;
