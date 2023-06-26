import React from 'react';
import Carousel from "react-bootstrap/Carousel";

export default function CarouselSection() {
  return (
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item interval={3000}>
        <h3>First</h3>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h3>Second</h3>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h3>Third</h3>
      </Carousel.Item>
    </Carousel>
  )
}
