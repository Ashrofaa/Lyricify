import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id='carousel' className='carousel carousel-dark slide' data-bs-ride="carousel" data-bs-interval="3000">
        <div className='carousel-inner'>
            <div className='carousel-item active'>
                <h3>First</h3>
            </div>
            <div className='carousel-item'>
                <h3>Second</h3>
            </div>
            <div className='carousel-item'>
                <h3>Third</h3>
            </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target="#carousel" data-bs-slide="prev">
            <span className='carousel-control-prev-icon' aria-hidden="true"></span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target="#carousel" data-bs-slide="next">
            <span className='carousel-control-next-icon'></span>
        </button>
      </div>
    </div>
  )
}
