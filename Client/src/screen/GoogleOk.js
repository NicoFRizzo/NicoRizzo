import React from 'react';
import Header from '../components/header';
// import Body_LogIn from '../components/body_LogIn'
import Body_LogIn from '../components/body_LogIn_Copia'
import Footer from '../components/footer';

function LogIn() {
  return (
    <div class ="App">
      <Header/>
      <h2>You just logged in with google</h2>
      <Footer />
    </div>
  );
}

export default LogIn;