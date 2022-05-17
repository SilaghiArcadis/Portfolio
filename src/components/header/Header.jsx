import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className="container header__container">
          <TypeAnimation
            sequence={[1000, 'Hello.',1000,"I'm Silaghi Arcadis."]}
            wrapper="h2"
          />
          <TypeAnimation
            sequence={[ 5000,"Let's build something special.",1000,"Let's build something special. Together."]}
            wrapper="h3"
          />
          <CTA/>
          <HeaderSocials/>

          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )
}

export default Header