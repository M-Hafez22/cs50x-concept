import React from 'react';
import {HashRouter as Router, Routes, Route}from 'react-router-dom'
import Home from './pages/Home'
import Week from './pages/Week'
import './style/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/week/:number' element={<Week/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
