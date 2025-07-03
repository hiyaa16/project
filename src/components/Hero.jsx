import React from 'react';
import './Hero.css';
import coffee from '../assets/coffee.png';
import coffeeBeans from '../assets/bean.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="subheading">Locally-Owned Coffee Shop Serving Cleveland</p>
        <h1>Brewing Hope & Great Coffee in the heart of Buckeye</h1>
        <p className="description">
          Once a bar, now a beacon of ambition — <strong>The Tavern Coffee House</strong> is a unique & eclectic café revitalizing the Buckeye-Shaker neighborhood through <strong>community</strong>, <strong>careers</strong>, and <strong>coffee</strong>.
        </p>
        <p className="hours">Open 8am – 1pm Monday–Friday</p>
        <div className="hero-buttons">
          <button className="btn btn-dark" onClick={() => navigate('/menu')}>
            Our Menu →
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={coffee} alt="Coffee Cup" className="coffee-cup" />
       
      </div>
    </section>
  );
};

export default Hero;