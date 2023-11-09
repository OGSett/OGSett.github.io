import React, { useState } from 'react';
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import pfp from "./images/image-avatar.png";
import Cart from "./Cart";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const NavBar = ({ setCartState, cartState, numberOfItems, addedToCart, setNumberOfItems, setAddedToCart }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false); // State to handle the toggle

    const openCart = () => {
        setCartState(!cartState);
    };

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    const closeNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                <button className={`hamburger ${!isNavExpanded ? "hide" : ""}`} onClick={toggleNav}>
                    {<GiHamburgerMenu />}
                </button>
                <img src={logo} alt="Logo" className="logo" />

                <div className={`roots ${isNavExpanded ? "expanded" : ""}`}>
                    {isNavExpanded && (<AiOutlineClose onClick={closeNav}/>)}
                    <a href="/">Collections</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </div>

            <div className="cart-prof">
                <div className="cart">
                    {numberOfItems > 0 && addedToCart && (<span className="count">{numberOfItems}</span>)}
                    <img className="cartimg" src={cart} alt="/" onClick={openCart}/>
                </div>

                {cartState && <Cart
                numberOfItems={numberOfItems}
                addedToCart={addedToCart}
                setAddedToCart={setAddedToCart}
                setNumberOfItems={setNumberOfItems}
                setCartState={setCartState}/>}

                <div className="profile">
                    <img className="cartimg"src={pfp} alt="/" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
