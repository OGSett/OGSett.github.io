
const ProdInfo = ({numberOfItems, setNumberOfItems, addedToCart, setAddedToCart}) => {
    const handleDecrement = () => {
        if(numberOfItems > 0)
        {
            setNumberOfItems(prevCount => prevCount - 1)
        }
    }
    const handleIncrement = () => {
        setNumberOfItems(prevCount => prevCount + 1)
    }
    const handleAddToCart = () => {
        if (numberOfItems > 0)
        {
            setAddedToCart(true);
            console.log("added");
        }
    }

    return ( 
        <div className="prodInfo">
            <div className="info">
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            <div className="pricing">
                <div className="price">
                    <span className="newPrice">$125.00</span>
                    <div className="discount">
                        <span>50%</span>
                    </div>
                </div>
                <div className="oldPrice">
                    <span className="old-price">$250.00</span>
                </div>
            </div>
            <div className="Controls">
                <div className="itemQuantity">
                    <button onClick={handleDecrement} className="mines">-</button>
                    <span className="controlSpan">{numberOfItems}</span>
                    <button onClick={handleIncrement} className="plus">+</button>
                </div>
                <div className="add-to-cart">
                    <button onClick={handleAddToCart} className="addToCartBtn">Add too cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProdInfo;