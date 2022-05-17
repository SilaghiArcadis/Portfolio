import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> Less Than 1 Year Experience</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 3+</small>
            </article>
          </div>
          <p>
          My passion for web development has been clear since middle school when i worked on an advertising website for a local client. In high school, i developed my algorithmic skills by participating in programming competitions and olympiads. In college i continued to expand my knowledge by learning various programming languages and technologies. Im currently pursuing a master's degree in Software Engineering and i'm aspiring to become an excellent full-stack developer. Feel free to contact me !
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
      </section>
  )
}

export default About