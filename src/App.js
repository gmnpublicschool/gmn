import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes/Classes';
import Teachers from './components/Teachers/Teachers';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/gmn" element={<Home />} />
          <Route path="/gmn/classes" element={<Classes />} />
          <Route path="/gmn/teachers" element={<Teachers />} />
          <Route path="/gmn/gallery" element={<Gallery />} />
          <Route path="/gmn/about" element={<About />} />
          <Route path="/gmn/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

