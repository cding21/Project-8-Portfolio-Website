import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
