import React from 'react';
import {Link} from "react-router-dom";
import googleImage from './Images/GoogleImage.png';
import facebookImage from './Images/Facebook.jpg';

import '../css/LogIn.css'

class Body_LogIn extends React.Component{
    render(){
        return(
            <div>
                <table align="center" className="conditions_margin">
                    <tr>
                        <td><label for="username">Username</label></td>
                        <td><input type="text" id="username" name="username"/></td>
                    </tr>
                    <tr>
                        <td><label for="pass">Password</label></td>
                        <td><input type="text" id="pass" name="password"/></td>
                    </tr>
                </table>

                <label className="checkboxLeft"><input type="checkbox" id="cbox1" value="first_checkbox"/> 
                Remember me<br/>
                </label>

                <button type="button" className="button">OK</button>

                <div class="container_ConnectWith" id="Google">
                    <img className="ConnectWith_Image" src={googleImage}/>
                    <p className="LogWithText">Log in with Google</p>
                </div>
                <div class="container_ConnectWith" id="Facebook">
                    <img className="ConnectWith_Image" src={facebookImage}/>
                    <p className="LogWithText">Log in with Google</p>
                </div>

                <p className="Sholud_create_account">Don't have a MyItenary Account yet?<br/>You should create one! It's totaly free and only takes a minute.</p>
                
                <Link to="/Account"><a href="/Account">Create Account</a><br/></Link>
            </div>
        );
    }
}

export default Body_LogIn;