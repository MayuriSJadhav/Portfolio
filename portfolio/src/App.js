import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Component/HomePage';
import QrCode from './Component/QrCode';

function App() {
  
  return (
    <div className="App">
      <HomePage/>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Navigate to={'HomePage'}/>}/>
          <Route path='/HomePage/qrcode' element={<QrCode/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
