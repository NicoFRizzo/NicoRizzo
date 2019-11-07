import React from 'react';
import circled_right from './Images/circled-right-2.png'

class Body_landingPage extends React.Component {
    render(){
        return(
            <div>
            <p class = 'center'>Find your perfect trip, design by <br/> insiders who knows and love their cities</p>
            <h2>Start browsing</h2>
            <img class = 'img-circled_right' src={circled_right}/>
            <p>Want to build tour own MYtinerary?</p>
            <a href="#">Log in</a>
            <a href="#">Create Account</a>
            </div>
        );
    }
}

export default Body_landingPage;