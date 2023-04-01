function FilterButtons({ data, setProducts }) {

    const filteredItems = searchTern => {
        const filteredResults = [];

        data.forEach(item => {
            item.searchTern.forEach(term => {
                if (term === searchTern ) {
                    filteredResults.push(item);
                    setProducts(filteredResults);
                }
            })
        })
    }


    return (
        <div>
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
