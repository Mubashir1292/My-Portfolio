import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/appointment.png";
import IMG2 from "../../assests/qr-code.png";
import IMG3 from "../../assests/tic_tac_toe.png";
import IMG4 from "../../assests/image-slider.jpg";
import IMG5 from "../../assests/weather.jpg";
import IMG6 from "../../assests/github profile finder.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio-Image-1" />
          </div>
          <h3>BIIT Project Supervisor Appointment System</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/Biit-Project-Supervisor-Appointment-System"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://project-supervisor-appointment-system.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio-Image-1" />
          </div>
          <h3>Real Bar Code Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/React-Projects/tree/main/qr-code-designr"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://bar-code-generator.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio-Image-1" />
          </div>
          <h3>Tic Tac Toe Game 3X3 & 6X6</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/React-Projects/tree/main/tic-tac-teo-game"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://tic-tac-toe-3x3-game.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfolio-Image-1" />
          </div>
          <h3>Custom Image Slider</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/React-Projects/tree/main/image-slider"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://customimageslider.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Portfolio-Image-1" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/React-Projects/tree/main/weather-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://custom-weather-app-react-project.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Portfolio-Image-1" />
          </div>
          <h3>Github Profile Finder</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mubashir1292/React-Projects/tree/main/github-profile-finder"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github-profile-finder-react-project.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Portfolio;
