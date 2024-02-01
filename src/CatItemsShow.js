function CatItemsShow({ anyItem }) {

    return (
        <div className="containerCatalogue">
            { anyItem.map(( element => {
                const { id, name, info ,searchTern, price, image } = element;
            
                return (
                    <div key={ id } className='containerMainCat'>
                        <div className="containerCat">
                            <img src={ image } className='imgCat' alt="catalogue items" />
                        </div>

                        <div className="txtCat containerCat">
                            <p>{ name }</p>
                        </div>

                        <div className="containerCat">
                            <p>{info }</p>
                        </div>

                        <div className="containerCat">
                            <p className='price'>$ { price }</p>
                        </div>

                        <div className="containerCat">
                            <p className="hash">#{searchTern[0]}</p>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}


export default CatItemsShow;