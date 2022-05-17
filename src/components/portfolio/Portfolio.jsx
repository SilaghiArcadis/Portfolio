import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/game-snake-final.JPG'
import IMG2 from '../../assets/game-tictactoe-final.JPG'
import IMG3 from '../../assets/arisa-flowers.JPG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Java Snake Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SilaghiArcadis/SnakeGame" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1b_l7JYLxx84NgBVfcRAPQWdShRLkB3Ym/view?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Java Tic Tac Toe Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SilaghiArcadis/TicTacToe" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1p_IMQkNUzVeabT9IA5UztB0kRH9z1V6X/view?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Online E-Commerce Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SilaghiArcadis/ArisaFlowers" className='btn' target='_blank'>GitHub</a>
            <a href="https://arisaflowers.ro/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio