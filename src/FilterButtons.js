import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

function FilterButtons({ data, setProducts }) {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        // Animate buttons on mount
        gsap.fromTo('.btnOne', { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
    }, []);

    const filteredItems = searchTerm => {
        setActiveFilter(searchTerm); // Set active filter before filtering

        if (searchTerm === 'all') {
            setProducts(data);
        } else {
            const filteredResults = data.filter(item => item.searchTern.includes(searchTerm));
            setProducts(filteredResults);
        }

        // Animate button on click
        gsap.to('.btnOne', { scale: 1, backgroundColor: "#F8EEE4", color: "black", duration: 0.2 });
        gsap.to(`.btnOne.${searchTerm}`, { scale: 1.1, backgroundColor: "#EEC8C8", color: "white", duration: 0.2 });
    };

    
        return (
        <div  className="catBtn">
            <button className={`btnOne ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filteredItems('all') }>All</button>
            <button className={`btnOne ${activeFilter === 'cream' ? 'active' : ''}`} onClick={() => filteredItems('cream') }>Cream</button>
            <button className={`btnOne ${activeFilter === 'oil' ? 'active' : ''}`} onClick={() => filteredItems('oil') }>Oil</button>
            <button className={`btnOne ${activeFilter === 'multi' ? 'active' : ''}`} onClick={() => filteredItems('multi') }>Multi-Use</button>
            <button className={`btnOne ${activeFilter === 'scrub' ? 'active' : ''}`} onClick={() => filteredItems('scrub') }>Scrub</button>
            <button className={`btnOne ${activeFilter === 'mask' ? 'active' : ''}`} onClick={() => filteredItems('mask') }>Mask</button>
            <button className={`btnOne ${activeFilter === 'lip' ? 'active' : ''}`} onClick={() => filteredItems('lip') }>Lips</button>
            <button className={`btnOne ${activeFilter === 'body' ? 'active' : ''}`} onClick={() => filteredItems('body') }>Body</button>
            <button className={`btnOne ${activeFilter === 'tonic' ? 'active' : ''}`} onClick={() => filteredItems('tonic') }>Tonic</button>
        </div>
    )
}


export default FilterButtons;
