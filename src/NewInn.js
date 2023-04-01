import { useState } from 'react';
import { dataNew } from './dataIn';
import './App.css';



function NewInn({  }) {
    const [ item, setItem ] = useState(dataNew);
    const [ showText, setShowText ] = useState(false);


    const showTextClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText);
    }

    return (
        <div>
            <p className='newInnTxt'>New products</p>

            <div className="newInn">
                { item.map(( element => {
                    const { id, name, description, images, showMore } = element;
                    return (
                        <div key={ id } className='newInnContainer' >
                            <div className='newInnContainer'>
                                <img className='newInnImg' src={ images } alt='pics for carousel' />
                            </div>

                            <div className='newInnContainer'>
                                <h3 className='h3Inn'>{ name }</h3>
                            </div>

                            <div className='newInnContainer'>
                                { showMore ? description : description.substring(0, 40) + '...' }
                                <button onClick={ () => showTextClick(element) } className='moreLessBtn' > { showMore ? 'Read Less' : 'Read More' } </button> 
                                {/* !showMore every click different state */}                            
                            </div>
                        </div>
                    )})) }
                        
            </div>
        </div>
    )
}


export default NewInn;



