import React from 'react';
import MYtineraryLogo from './Images/MYtineraryLogo.png';

class Header extends React.Component{
    render(){
        return(
            <img class = 'App-header' src={MYtineraryLogo}/>
        );
    }
}

export default Header;