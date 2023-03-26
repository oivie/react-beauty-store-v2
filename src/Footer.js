import './App.css';
import fb from './icons/fb.png';
import tw from './icons/tw.png';
import ig from './icons/ig.png';



function Footer() {
    return(
        <div className='footer'>
            <div className='containerFooter'>
                <h3>Get In Touch:</h3>
                <p>59 Hayden St, Toronto, ON M4Y 2P2, Canada</p>
                <span className='spanFooter'>
                    <img src={ fb } /> 
                    <img src={ ig } /> 
                    <img src={ tw } /> 
                </span>

            </div>

        </div>
    )
}




export default Footer;