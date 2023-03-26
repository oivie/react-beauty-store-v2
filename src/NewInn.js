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
            <div className="">
                <p className='newInnTxt'>New products</p>

                { item.map(( element => {
                    const { id, name, description, images, showMore } = element;
                    return (
                        <div key={ id } className='newInn' >
                            <div className=''>
                                <img src={ images } alt='pics for carousel' />
                                
                            </div>

                            <div className=''>
                                <h3 className='h3Inn'>{ name }</h3>
                            </div>

                            <div className=''>
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



