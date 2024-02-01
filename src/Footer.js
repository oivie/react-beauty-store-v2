import './App.css';
import fb from './icons/fb.png';
import tw from './icons/tw.png';
import ig from './icons/ig.png';



function Footer() {
    return (
        <div className='footer'>
            <div className='containerFooter'>
                <h3>Get In Touch:</h3>
                <p>59 Hayden St, Toronto, ON M4Y 2P2, Canada</p>
                <span className='spanFooter'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={ fb } alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={ ig } alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={ tw } alt="Twitter" />
                    </a>
                </span>
            </div>
        </div>
    )
}





export default Footer;