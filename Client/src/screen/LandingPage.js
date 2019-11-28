import React from 'react';
import Header from '../components/header';
import Body from '../components/body_LandingPage'
import Footer from '../components/footer';

function LandingPage() {
  return (
    <div className="App">
      <Header/>
      <Body/> 
      <Footer />
    </div>
  );
}

export default LandingPage;