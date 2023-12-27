// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './landingpage/Home';
import Navbar from './landingpage/Navbar';
import Contact from './landingpage/Contact'; // Import the Contact component

const About = () => <div>About Us</div>;
const Products = () => <div>Products</div>;
const Services = () => <div>Services</div>;

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this line */}
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

export default App;
