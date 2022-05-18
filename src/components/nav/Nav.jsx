import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {GiThreeFriends} from 'react-icons/gi'
import { useState } from 'react'



const Nav = () => {

	React.useEffect(() => {
      // simple function to use for callback in the intersection observer
    const changeNav = (entries, observer) => {
      entries.forEach((entry) => {
        // verify the element is intersecting
        if(entry.isIntersecting && entry.intersectionRatio >= 0.40) {
      //console.log(entry.target.id);
          // remove old active class
          document.querySelector('.active').classList.remove('active');
          // // get id of the intersecting section
          var id = entry.target.getAttribute('id');
          // // find matching link & add appropriate class
          var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
        }
      });
    }
    
    // init the observer
    const options = {
      threshold: 0.40
    }
    
    const observer = new IntersectionObserver(changeNav, options);
    
    // target the elements to be observed
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
	  
    <nav>
		
      <a href="#header" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio" ><RiServiceLine/></a>
      <a href="#testimonials" ><GiThreeFriends/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}


export default Nav
