import { useEffect, useState } from "react";
import prod from "./images/image-product-1-thumbnail.jpg"
import cycle from "./images/icon-delete.svg"

const Cart = ({numberOfItems, addedToCart, setNumberOfItems, setCartState, setAddedToCart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const price = 125.00;
    const clearCart = () => {
        setNumberOfItems(0);
        setAddedToCart(null);
    }
    useEffect(() => {
        setTotalPrice(price * numberOfItems)
    }, [numberOfItems, price]);
    return ( 
        <div className="checkout-box">
            <div className="title">
                <span>Cart</span>
            </div>
            {addedToCart && (<div className="check-op">
                <div className="product-info">
                    <img src={prod} alt="" />
                    <p>Fall Limited Edition Sneakers 
                        $125.00 x {numberOfItems} <span>${totalPrice.toFixed(2)}</span>
                    </p>
                    <img className="cycle" src={cycle} alt="" onClick={clearCart}/>
                </div>
                <div className="btnHolder">
                    <button className="checkoutBtn">Checkout</button>
                </div>
            </div>)}
        </div>
     );
}
 
export default Cart;