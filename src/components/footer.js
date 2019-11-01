import React from 'react';
import HomeIcon from './Images/homeIcon.png';

class Footer extends React.Component{
    render(){
        return(
            <img class = 'App-footer' src={HomeIcon}/>
        );
    }
}

export default Footer;