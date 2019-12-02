import React, { Component } from 'react';
import CitiesDetail from '../components/DetailsTwo';
import FilterCities from '../components/FilterCities';

class BodyTwo extends React.Component{
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
        this.state.onChange(e.target.value)
      }
      
        render(){
        return(
            <div>
                <label>Wich city are you looking for?</label>
                <FilterCities
                filterText={this.state.filterText}
                />

                <CitiesDetail 
                cityFilter={this.state.cityFilter}
                /> 
            </div>
        );
    }
}

export default BodyTwo;