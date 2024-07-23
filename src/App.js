
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='react-router/' element={<Home />} />
        <Route path='react-router/about' element={<About />} />
        <Route path='react-router/project' element={<Project />} />
        <Route path='react-router/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
