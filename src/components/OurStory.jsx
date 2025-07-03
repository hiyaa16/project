import React from 'react';
import './OurStory.css';
import { useNavigate } from 'react-router-dom';

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="our-story">
      {/* Header Section */}
      <section className="story-header">
        <h1>Our Story</h1>
        <button className="btn btn-dark" onClick={() => navigate('/menu')}>
          Our Menu →
        </button>
      </section>

      {/* Story Section 1: Fueled by a Dream */}
      <section className="story-section">
        <h2>Fueled by a Dream to Revitalize Buckeye</h2>
        <p>
          The Tavern Coffeehouse is more than just a spot for your morning brew—it’s a tale of transformation rooted in the heart of Buckeye. Once an old bar (a nod that inspired its name, "Tavern"), this space has been reborn through the vision and support of The Meeting Place Church into a nonprofit coffee shop and vibrant community hub. The name "Tavern" honors its history, while the interior radiates renewal, purpose, and connection.
        </p>
      </section>

      {/* Story Section 2: Our Mission */}
      <section className="story-section">
        <h2>Our Mission: Brewing Hope in the Heart of Buckeye</h2>
        <p>
          At The Tavern Coffeehouse, our mission is to infuse hope back into Buckeye with every cup of rich coffee and every opportunity we create. We’re committed to brewing change—starting with high-quality coffee and extending to meaningful jobs that strengthen our community. This space serves as a launchpad for local growth, a welcoming gathering spot for connection, and a beacon of what’s possible when a neighborhood’s spirit is reignited.
        </p>
      </section>

      {/* Story Section 3: To Show the World the Power of Buckeye */}
      <section className="story-section">
        <h2>To Show the World the Power of Buckeye</h2>
        <p>
          We believe in the incredible potential unleashed when people unite. The Tavern Coffeehouse aims to prove that Buckeye is far more than a map marker—it’s a testament to resilience, creativity, and deep community care. With each cup served, every heartfelt conversation, and every job opportunity offered, we’re showcasing the true essence of community spirit.
        </p>
      </section>
    </div>
  );
};

export default OurStory;