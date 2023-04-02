function Clothes ({itemsForSale}) {
    return(
        <div className="products">
            {itemsForSale.map (item => {
                const {id, name, searchTerm, price, image} = item;
                
                return (
                    <div className="product-card" key = {id}>
                        <img src={image} alt='element' width='400px' height='500px'/>

                        <div className="product-card">
                            <h3>{name}</h3>
                            <h4 className="invisible">{searchTerm}</h4>
                            <h4>$ {price}</h4>
                        </div>                          
                    </div>
                )
            })}
        </div>
    )
}

export default Clothes;