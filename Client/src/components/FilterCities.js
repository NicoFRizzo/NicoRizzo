import React from 'react';

class FilterCities extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  } 
  
  handleChange(e) {
    this.props.onFilterTextChange(e.target.value);
    console.log("Handling Change", e.target.value);
  }
  render() {
    return (
      <form>
        <input className="inputOtherLine" align="right"
                value={this.props.cityFilter} 
                onChange={this.handleChange}/>
      </form>
    );
  }
}

export default FilterCities;