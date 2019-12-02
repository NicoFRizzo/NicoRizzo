import React, { Component } from 'react';
import CitiesDetail from '../components/CitiesDetail';

class Body_Cities extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        cityFilter: ""
        }
      }
          
      handleChange = (e) => {
        this.setState({
          cityFilter: e.target.value
        })
        this.props.onChange(e.target.value)
      }
      
        render(){
        return(
            <div>
                <label>Wich city are you looking for?</label>
                <input className="inputOtherLine" align="right"
                value={this.state.cityFilter} 
                onChange={this.handleChange}/>

                <CitiesDetail/> 
            </div>
        );
    }
}

export default Body_Cities;