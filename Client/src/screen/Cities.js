import React from 'react';
import Header from '../components/header';
import Body_Cities from '../components/BodyTwo';
import Footer from '../components/footer';

class Cities extends React.Component {
    render() {
        return (
            <div className="App">
              <Header/>
              <Body_Cities/> 
              <Footer/>
            </div>
          );
    }
}

export default Cities;