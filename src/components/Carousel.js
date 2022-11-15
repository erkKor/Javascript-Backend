import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './items/Card';

const responsive = {
  380: { items: 1 },
  568: { items: 2 },
  767: { items: 3 },
  1024: { items: 4 },
};

const Carousel = ({items = []}) => {
  return (
    <section className="carousel">
    <h3>Related Products</h3>
    <AliceCarousel
        mouseTracking
        items={ items.map(product => <Card key={product.articleNumber} product={product} />)}
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