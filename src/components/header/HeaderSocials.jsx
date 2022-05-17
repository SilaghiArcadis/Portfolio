import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/armand-arcadis-silaghi-155b75178/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SilaghiArcadis" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/mr.curface/" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/arcadissss/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials