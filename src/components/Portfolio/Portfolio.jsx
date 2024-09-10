import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assests/portfolio1.jpg';
import IMG2 from '../../assests/portfolio2.jpg';
import IMG3 from '../../assests/portfolio3.jpg';
import IMG4 from '../../assests/portfolio4.jpg';
import IMG5 from '../../assests/portfolio5.png';
import IMG6 from '../../assests/portfolio6.jpg';

function Portfolio(){
    return (
        <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
            </article>
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
            </article>
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG5} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
        <div className="portfolio__item-image">
            <img src={IMG6} alt="Portfolio-Image-1"/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" target='_blank' className="btn btn-primary">Live Demo</a>
            </div>
        </article>
        </div>
         </section>
    );
}
export default Portfolio;   