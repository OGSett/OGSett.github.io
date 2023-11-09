import React, { useState } from 'react';
import { VscChromeClose, VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const Catalog = ({ setLightboxActive, mainImage, images, imagesMain}) => {
    
    const imgs2 = images;
    const [main, setMain] = useState(mainImage);
    console.log(imgs2)
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setMain(imagesMain[nextIndex]); 
    };

    const handlePrev = (event) => {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + imgs2.length) % imgs2.length;
        setCurrentIndex(prevIndex);
        setMain(imagesMain[prevIndex]);
    };
    

    return ( 
        <div className="lightbox-active">
            <div className="imagecontainer"> {/* This is the new relative container */}
                <VscChromeClose className="close-icon" onClick={() => setLightboxActive(false)}/>
                <img src={main} alt="Main enlarged" className="lightbox-image" />
            </div>
            <VscChevronRight className="icon-right" onClick={(e) => handleNext(e)}/>
            <VscChevronLeft className="icon-left" onClick={(e) => handlePrev(e)}/>
            <div className="small-imagess light-small">
                {imgs2.map((src, idx) => (
                    <img 
                        key={idx} 
                        src={src} 
                        alt={`Small ${idx}`} 
                        className="list-image" 
                        onMouseOver={() => setMain(imagesMain[idx])}
                        onClick={(event) => {
                            event.preventDefault();
                            setCurrentIndex(idx);
                            setMain(imagesMain[idx]);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Catalog;
