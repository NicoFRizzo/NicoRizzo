import React from 'react';
import { Link } from "react-router-dom";

import '../css/Account.css'

class Body_Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                user: '',
                password: ''
            }
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            info: {
                ...this.state.info,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.info);
        fetch('http://localhost:5000/accounts/create', {
            method: 'POST',
            body: JSON.stringify(this.state.info),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error al hacer el Post', error))
            .then(response => console.log('Post exitoso', response));
    }

    render() {
        return (
            <div>
                <div className="circle"><a href="#">Add photo</a></div>

                <form onSubmit={this.handleSubmit}>
                    {/* <table align="center" className="conditions_margin">
                        <tr>
                            <td><label for="user">User</label></td>
                            <td><input type="text" id="user" name="user" placeholder="Your Username or Email.." required/></td>
                        </tr>
                        <tr>
                            <td><label for="pass">Password</label></td>
                            <td><input type="text" id="pass" name="password" required/></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email</label></td>
                            <td><input type="text" id="email" name="email" required/><br/></td>
                        </tr>
                        <tr>
                            <td><label for="fName">First Name</label></td>
                            <td><input type="text" id="fName" name="firstName" required/><br/></td>
                        </tr>
                        <tr>
                            <td><label for="lName">Last Name</label></td>
                            <td><input type="text" id="lName" name="lastName" required/><br/></td>
                        </tr>
                        <tr>
                            <td><label for="country">Country</label></td>
                            <td><select id="country" name="country" pattern="England|France|Germany|Holland|Ireland|Spain|United States" required>
                                    <option selected value="choose">Choose your country..</option>
                                    <option value="england">England</option>
                                    <option value="frnace">France</option>
                                    <option value="germany">Germany</option>
                                    <option value="holland">Holland</option>
                                    <option value="ireland">Ireland</option>
                                    <option value="spain">Spain</option>
                                    <option value="unitedStates">United States</option>
                                </select>   
                            </td>
                        </tr>
                    </table>

                    <input type="checkbox" id="cbox1" value="first_checkbox"/> 
                    I agree to MtItenary's <Link to="#"><a href="#" className="conditionsLink">Terms &amp; Conditions</a><br/></Link>
                     */}

                    <label for="user">User</label>
                    <input type="text" id="user" name="user" required
                        value={this.state.user}
                        onChange={(e) => this.handleChange(e)}
                    /><br />

                    <label for="pass">Password</label>
                    <input type="text" id="pass" name="password" required
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                    />

                    <input type="submit" value="Submit" className="submit" />
                </form>
            </div>
        );
    }
}

export default Body_Account;