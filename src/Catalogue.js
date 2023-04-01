import { useState } from 'react';
import CatItemsShow from './CatItemsShow';
import { data } from './data';
import FilterButtons from './FilterButtons';


function Catalogue() {
    const [ product, setProducts ] = useState(data);


    return (
        <div className='containerFooter'>
            <h1 className="h1Cat">CATALOGUE</h1>

            <FilterButtons 
                data={ data }
                setProducts={ setProducts }
            />    

            <CatItemsShow anyItem={ product } />
        </div>
    )
}



export default Catalogue;