import React, {Component} from 'react';

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import '../styles/App.css'

// import {Link} from "react-router-dom";
import {fetchLogin} from '../store/actions/logInActions';

import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

// let jwtDecode = require('jwt-decode');

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username:"",
          password:"",
          remember:false,
          redirect: false
        };

        this.loginUser = this.loginUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    async loginUser() {
        await this.props.dispatch(fetchLogin(this.state));
        //validar la res que me viene del back, si no esta ok por user o pass, mostrar mensaje;   
        //si esta ok:
        this.setState({
            redirect: true
        })
      }
  

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    async handleForm(e){
            if(
                this.state.username =="" ||
                this.state.password =="" 
            ){
                e.preventDefault()
            }
            e.preventDefault();
        await this.loginUser()
    }
  

    render() { 
        const redirect  = this.state.redirect;
        if (redirect) {
            return <Redirect to={`/profile/${this.props.token}`}/>;
        } else {         
            return ( 
            <div>
                <form onSubmit={(e)=>{this.handleForm(e)}}> 
                    <form controlId="username">
                        <form column xs={3} >
                            <span>Username:</span>
                        </form>
                        <div xs={8}>
                            <input
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </div>
                    </form> 
                    <form controlId="password">
                        <form column xs={3}>
                            <span>Password:</span>
                        </form>
                        <div xs={8}>
                            <input
                                name="password"
                                type="text"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </div>
                    </form>
                    <form>
                        <input
                            name="remember"
                            type="checkbox"
                            checked={this.state.remember}
                            onChange={this.handleInputChange} />
                        <form column xs={10} className="ml-3 text-left">
                            <span>Remember Me</span>
                        </form>
                    </form>   
                    <input type= 'submit' variant="secondary" type="submit" name="submitBtn"/>
                </form>
                <div className="text-center mt-4">
                    <a  href="http://localhost:5000/auth/google">Login with Google</a> 
                    <p>Don't have a Mytinerary Account yet? You should create one! It's totally free and only takes a minute.</p>
                </div>
            </div>
            );
        }    
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token
    }
}

export default connect(mapStateToProps)(LoginForm); 