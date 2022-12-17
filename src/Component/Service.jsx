import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";

const Service = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      interval={1000}
      showThumbs={false}>
        <div>
          <img src={img1} alt="item1" />
          <p className='legend'>Full Stack</p>
        </div>

        <div>
        <img src={img2} alt="item2" />
        <p className='legend'>Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Service