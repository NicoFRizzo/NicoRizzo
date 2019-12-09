import React, { Component } from 'react';
import listcitiesfounded from './listCities'

class BodyTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stringFilter: null,
      listCities: null
    }
  }

  componentDidMount() {
    console.log("Fetching");
    fetch('http://localhost:5000/cities/all')
      .then(response => response.json())
      .then(data => this.setState({ listCities: data }));
  }

  handleChange(e) {
    this.setState({ stringFilter: e.target.value })
  }

  render() {

    console.log(this.state.stringFilter)
    if (this.state.listCities === null) {
      return ('Cargando')
    }
    else {
      return (
        <div>
          <form>
            <input className="inputOtherLine" align="right"
              value={this.props.cityFilter}
              onChange={(e) => { this.handleChange(e) }} />
          </form>

          <ul>
            {this.state.listCities &&
              this.state.listCities.filter((city) => {
                return (city.name.indexOf(this.state.stringFilter) != -1) || this.state.stringFilter == null
              })

                .map(listcitiesfounded)}
          </ul>

        </div>
      );
    }
  }
}

export default BodyTwo;