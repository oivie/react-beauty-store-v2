import { useState } from "react";


    function FilterButtons({ data, setProducts }) {
        const [activeFilter, setActiveFilter] = useState('all');
    
        const filteredItems = searchTern => {
            // If 'all' is selected, show all products
            if (searchTern === 'all') {
                setProducts(data);
                setActiveFilter('all');
            } else {
                // Otherwise, filter by the search term
                const filteredResults = data.filter(item =>
                    item.searchTern.includes(searchTern)
                );
                setProducts(filteredResults);
                setActiveFilter(searchTern);
            }
        }
    
        return (
        <div  className="catBtn">
            <button className="btnOne" onClick={() => filteredItems('all') }>All</button>
            <button className="btnOne" onClick={() => filteredItems('cream') }>Cream</button>
            <button className="btnOne" onClick={() => filteredItems('oil') }>Oil</button>
            <button className="btnOne" onClick={() => filteredItems('multi') }>Multi-Use</button>
            <button className="btnOne" onClick={() => filteredItems('scrub') }>Scrub</button>
            <button className="btnOne" onClick={() => filteredItems('mask') }>Mask</button>
            <button className="btnOne" onClick={() => filteredItems('lip') }>Lips</button>
            {/* <button className="btnOne" onClick={() => filteredItems('moisture') }>Moisturizer</button> */}
            <button className="btnOne" onClick={() => filteredItems('body') }>Body</button>
            <button className="btnOne" onClick={() => filteredItems('tonic') }>Tonic</button>
        </div>
    )
}


export default FilterButtons;
