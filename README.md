# ---- react-type-animation ----

![](https://github.com/SilaghiArcadis/Portfolio/blob/master/typeanimation.gif)

# Install

     npm install react-type-animation
Requires a react and react-dom version of at least 15.0.0.

# Usage

    import TypeAnimation from 'react-type-animation';

    const ExampleComponent = () => {
      return (
        <TypeAnimation
          cursor={false}
          sequence={['React typing animation based on typical', 1000, '']}
          wrapper="h2"
        />
      );
    };
# Custom Cursor Animation

    .type::after {
      content: '|';
      animation: cursor 1.1s infinite step-start;
    }

    @keyframes cursor {
      50% {
        opacity: 0;
      }
    }
    
# Props

Prop | Required | Type | Example | Description
--- | --- | --- | --- |--- 
sequence | yes | array[] | ['One', 1000, 'Two'] | Animation sequence: TEXT followed by DELAY-IN-MS
wrapper | no | string | p,h2,div | HTML elements that Animation is wrapped around
repeat | no | number | 3, Infinity | Amount of animation repetitions
cursor | no | boolean | false, true | Display blinking cursor css-animation
className | no | string | custom-class-name | HTML class name applied to the wrapper to style the text






# ---- Swiper ----
![](https://github.com/SilaghiArcadis/Portfolio/blob/master/testimonials-gif.gif)

# Install
     npm i swiper
     
# Usage
  
     // Import Swiper React components
     import { Swiper, SwiperSlide } from 'swiper/react';
     import { Pagination } from 'swiper';

     // Import Swiper styles
     import 'swiper/css';
     import 'swiper/css/pagination';

     export default () => {
       return (
         <Swiper
           spaceBetween={50}
           slidesPerView={3}
         >
           <SwiperSlide>Slide 1</SwiperSlide>
           <SwiperSlide>Slide 2</SwiperSlide>
           <SwiperSlide>Slide 3</SwiperSlide>
           <SwiperSlide>Slide 4</SwiperSlide>
           ...
         </Swiper>
       );
     };


# Modules

Virtual - Virtual Slides module

Keyboard - Keyboard Control module

Mousewheel - Mousewheel Control module

Navigation - Navigation module

Pagination - Pagination module

Scrollbar - Scrollbar module

Parallax - Parallax module

FreeMode - Free Mode module

Grid - Grid module

Manipulation - Slides manipulation module (only for Core version)

Zoom - Zoom module

Lazy - Lazy module

Controller - Controller module

A11y - Accessibility module

History - History Navigation module

HashNavigation - Hash Navigation module

Autoplay - Autoplay module

EffectFade - Fade Effect module

EffectCube - Cube Effect module

EffectFlip - Flip Effect module

EffectCoverflow - Coverflow Effect module

EffectCards - Cards Effect module

EffectCreative - Creative Effect module

Thumbs - Thumbs module


# What I used

I used Pagination as you can see in the GIF above.

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
          <h3 className='friend__name'>FriendName</h3>
          <h5 className='friend__occupation'>FriendOccupation</h5>
          
          <small className='friend__review'>YourTextHere</small>

        </SwiperSlide>
      </Swiper>
      
# Props



Prop | Type | Default | Description | ----
--- | --- | --- | --- |--- 
init | boolean | true | Initializes Swiper
params | object | - | Object with Swiper API parameters
pagination | boolean | - | Enables pagination
scrollbar | boolean | - | Enables scrollbar
navigation | boolean | - | Enables prev/next navigation buttons


