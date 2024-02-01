import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function CatItemsShow({ anyItem }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Animate the items as they mount
        gsap.fromTo(
            containerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
        );
    }, [anyItem]); // Re-run the animation if the items change

    return (
        <div className="containerCatalogue" ref={containerRef}>
            {anyItem.map((element) => {
                const { id, name, info, searchTern, price, image } = element;
                return (
                    <div key={id} className="containerMainCat">
                        <div className="containerCat">
                            <img src={image} className="imgCat" alt="catalogue items" />
                        </div>
                        <div className="containerCat">
                            <p className="txtCat">{name}</p>
                        </div>
                        <div className="containerCat">
                            <p>{info}</p>
                        </div>
                        <div className="containerCat">
                            <p className="price">$ {price}</p>
                        </div>
                        <div className="containerCat">
                            <p className="hash">#{searchTern[0]}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CatItemsShow;
