import Gallery from "./Gallery";
import ProdInfo from "./ProdInfo";


const Product = ({numberOfItems, setNumberOfItems, addedToCart, setAddedToCart}) => {
    return ( 
        <div className="TEST">
            <div className="container">
                <Gallery  />
                <ProdInfo numberOfItems={numberOfItems}
                setNumberOfItems={setNumberOfItems}
                addedToCart= {addedToCart}
                setAddedToCart={setAddedToCart}
                />
            </div>
         </div>
     );
}
 
export default Product;