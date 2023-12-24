// Home.jsx
import React from 'react';
import './Home.css'; // Assuming you have a Home.css file for styling

const Home = () => {
  return (
    <div>
      <h1>EMERY TIDES LIMITED</h1>
      <div id="triangle">
        <h2>Company</h2>
        <h2>Profile</h2>
        <h2>General Supplies.</h2>
        <ul>
          <li>Tell: +254 721 728 528</li>
          <li>Email: emerytidesltd@gmail.com</li>
        </ul>
      </div>

      <div id="whoweare">
        <h1>Who we are:</h1>
        <p>
          Emery Tides Limited is a Kenyan registered private company with various business interests
          that offer a diverse range of services and products in Kenya.
        </p>
        {/* ... rest of the "Who we are" section */}
      </div>

      {/* ... rest of the sections */}
    </div>
  );
};

export default Home;
