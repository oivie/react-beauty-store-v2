import './App.css';
import Footer from './Footer';
import imageMain from './img/main.jpg';
import vs from './img/vs.png';
import longImg from './img/111.jpg';
import NewInn from './NewInn';



function Main() {
    return (
        <div>
            {/* page one */}
            <div className='containerMain'>
                <img src={ imageMain } className='imageMain' alt='woman image' />
                <div className='banner'>
                    <h3>Welcome to</h3>
                    <h1 className='extraBigTxt'>SKINCARE LOVE</h1>
                    <h4>Discover your passion</h4>
                </div>
            </div>
            
            {/* page two */}
            <div className='containerMainGreen'>
                <div className='greenSpace'>

                        <img src={ longImg } alt='visual' className='imgVs' />

                            <h3>About Us</h3>
                            <h1 className='extraBigTxt'>DISCOVER YOUR BEST SKIN YET</h1>
                            <p className='greenWriting'>Our company is a natural cosmetics brand that is committed to using only the finest natural ingredients in our products. We specialize in serums and oils that are designed to nourish and enhance your skin's natural beauty. We also offer multi-purpose creams that provide all-around skincare benefits.</p>
                            {/* <button className='goTo' >GO TO CATALOGUE </button> */}
                            {/* <link>GO TO CATALOGUE</link> */}

                </div>
            </div>

            {/* page three */}
            <NewInn />
            </div>
            
        // </div>
    )
}



export default Main;


