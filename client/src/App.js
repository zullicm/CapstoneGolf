import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
