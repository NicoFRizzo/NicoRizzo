import React from 'react';
import circled_right from './Images/circled-right-2.png';
import {Link} from "react-router-dom";

class Body_landingPage extends React.Component{
    render(){
        return(
            <div>
            <p className='center'>Find your perfect trip, design by <br/> insiders who knows and love their cities</p>
            <h2>Start browsing</h2>
            <Link to="/Cities"><img className='img-circled_right' src={circled_right}/></Link>
            <p>Want to build tour own MYtinerary?</p>
            <Link to="/LogIn"><a href="#">Log in</a></Link>
            <Link to="/Account"><a href="#">Create Account</a></Link>
            </div>
        );
    }
}

export default Body_landingPage;