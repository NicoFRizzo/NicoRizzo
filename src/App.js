import React from 'react';
import './App.css';
import Navbar from './screen/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './screen/LandingPage'
import Account from './screen/Account'
import LogIn from './screen/LogIn'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route path='/Landing' commponent={Landing} />
        <Route path='/Account' commponent={Account} />
        <Route path='/LogIn' commponent={LogIn} />
      </div>
    </BrowserRouter>
  );
}

export default App;
