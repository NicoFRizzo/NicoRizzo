import React from 'react';
import Header from '../components/header';
import CitiesDetail from '../components/CitiesDetail';
import Footer from '../components/footer';

class Cities extends React.Component {
    render() {
        return (
            <div className="App">
              <Header/>
              <CitiesDetail/> 
              <Footer/>
            </div>
          );
    }
}

export default Cities;