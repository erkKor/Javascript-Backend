import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import OriginalCard from './items/OriginalCard';

const responsive = {
  380: { items: 1 },
  568: { items: 2 },
  767: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€35.00" orgPrice=""/>,
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€25.00" orgPrice="€35.00"/>,
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€20.00" orgPrice=""/>,
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€22.00" orgPrice="€25.00"/>,
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€25.00" orgPrice=""/>,
  <OriginalCard productName="Modern Black Blouse" productCategory="Category" discPrice="€25.00" orgPrice=""/>,
];

const Carousel = () => {
  return (
    <section className="carousel">
    <h3>Related Products</h3>
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls="false"
        renderPrevButton={() => {
          return <span className="left-button"><i className="fa-regular fa-chevron-left"></i></span>
        }}
        renderNextButton={() => {
          return <span className="right-button"><i className="fa-regular fa-chevron-right"></i></span>
        }}
    />
    </section>
  )
}

export default Carousel