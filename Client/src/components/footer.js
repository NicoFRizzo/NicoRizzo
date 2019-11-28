import React from 'react';
import HomeIcon from './Images/homeIcon.png';
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <Link to="/"><img className='App-footer' src={HomeIcon}/></Link>
        );
    }
}

export default Footer;