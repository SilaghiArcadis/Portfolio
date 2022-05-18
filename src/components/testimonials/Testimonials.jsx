import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/rici.JPG'
import AVTR2 from '../../assets/vancea.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Friends</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container" 
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
        <SwiperSlide className='testimonials'>
          <div className="friend__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h3 className='friend__name'>Trombitas Richard</h3>
          <h5 className='friend__occupation'>Endava Developer</h5>
          
          <small className='friend__review'>He is a funny and energetic person and it's always a joy to be around him. He is passionate about web development and is an aspiring full-stack engineer.</small>

        </SwiperSlide>
        {/* <SwiperSlide className='testimonials'>
          <div className="friend__avatar">
            <img src={AVTR2} alt="Avatar One" />
            </div>
            <h3 className='friend__name'>Vancea Cristian</h3>
            <h5 className='friend__occupation'>Accesa Junior Dev</h5>
            <small className='friend__review'>Ce as putea spune, decat ca este un camarad de succes repeatCe as putea spune, decat ca este un camarad de succes repeatCe as putea spune, decat ca este un camarad de succes repeat</small>
        </SwiperSlide> */}
      </Swiper>
    </section>
  )
}

export default Testimonials