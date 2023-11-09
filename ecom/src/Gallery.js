import { useState } from "react"
import image1 from "./images/image-product-1-thumbnail.jpg"
import image2 from "./images/image-product-2-thumbnail.jpg"
import image3 from "./images/image-product-3-thumbnail.jpg"
import image4 from "./images/image-product-4-thumbnail.jpg"
import main1 from "./images/image-product-1.jpg"
import main2 from "./images/image-product-2.jpg"
import main3 from "./images/image-product-3.jpg"
import main4 from "./images/image-product-4.jpg"
import Catalog from "./Catalog"

const Gallery = () => {
    const imagesVault = [image1, image2, image3, image4];
    const imagesMain = [main1, main2, main3, main4];
    const [mainImage, setMainImage] = useState(main1);
    const [lightboxActive, setLightboxActive] = useState(false);

    return ( 
        <div className="image-container">
            <div className="small-imagess">
                {
                    imagesVault.map((image, index) => (
                    <img src={image}
                        alt="/"
                        key={index}
                        className="small-image"
                        onMouseOver={() => setMainImage(imagesMain[index])}
                        onClick={() => {setMainImage(imagesMain[index])
                                        setLightboxActive(true)
                                }}
                    />
                ))}
            </div>
            <div className="divMainImg">
                <img src={mainImage} alt="/" className="main-image"/>
            </div>
            {lightboxActive && (<Catalog
                setLightboxActive={setLightboxActive}
                images={imagesVault}
                imagesMain={imagesMain}
                mainImage={mainImage}/>)}
            </div>
    );
}
 
export default Gallery;