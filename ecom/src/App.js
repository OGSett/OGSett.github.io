import './App.css';
import NavBar from './NavBar';
import Product from './Product';
import { useState } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartState, setCartState] = useState(null);
  const [addedToCart, setAddedToCart] = useState(null);

  return (
    <div className="App">
      <NavBar cartState={cartState}
      setCartState={setCartState}
      setNumberOfItems={setNumberOfItems}
      addedToCart= {addedToCart}
      numberOfItems={numberOfItems}
      setAddedToCart={setAddedToCart}
      />

      <Product numberOfItems={numberOfItems}
      setNumberOfItems={setNumberOfItems}
      addedToCart= {addedToCart}
      setAddedToCart={setAddedToCart}
      />
    </div>
  );
}

export default App;
