import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Questionnaire from './Components/Questionnaire/Questionnaire';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Testimonials from './Components/Testimonials/Testimonials';
import LowStress from './Components/LowStress/LowStress'; // New import
import ModerateStress from './Components/ModerateStress/ModerateStress'; // New import
import HighStress from './Components/HighStress/HighStress'; // New import

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/low-stress" element={<LowStress />} /> {/* New route */}
        <Route path="/moderate-stress" element={<ModerateStress />} /> {/* New route */}
        <Route path="/high-stress" element={<HighStress />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
