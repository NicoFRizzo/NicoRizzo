import React from 'react';
import Header from '../components/header';
import Body_LandingPage from '../components/body_LandingPage'
import Footer from '../components/footer';

function LandingPage() {
  return (
    <div className="App">
      <Header/>
      <Body_LandingPage/> 
      <Footer />
    </div>
  );
}

export default LandingPage;