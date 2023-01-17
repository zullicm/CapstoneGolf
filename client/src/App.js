import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Reservation from './Pages/Reservation';
import Background from '/home/zullicm/development/code/phase-5/golf/client/src/Images/HomeImage.jpg';

function App() {

  const imageBack = {
    backgroundImage: 
`url(${Background})`,
    height:'100vh',
    width: '100vw',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  
  return (
    <div className="App" style={imageBack}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
