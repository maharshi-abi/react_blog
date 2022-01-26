import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <Carousel autoPlay={true} showThumbs={false} stopOnHover={true} swipeable={false}>
            <div>
                <img src="images/article4.jpg" alt='image1'/>
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="images/article1.jpg"  alt='image2'/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="images/article2.jpg"  alt='image3'/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="images/article3.jpg"  alt='image4'/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}