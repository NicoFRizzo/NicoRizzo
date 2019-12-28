import React from 'react';
import { connect } from 'react-redux';

class CitiesTableRedux extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { filterChange: props.filterText2 }
  }

  render() {
    console.log('TableBody - filterText2', this.props.filterText2)
    const filterText2 = this.props.filterText2;
    const largoFilterText2 = this.props.filterText2.length;
    console.log('log largoTextFind2', largoFilterText2);
    console.log('log ultimo valor TextFind2',filterText2[largoFilterText2 -1])
    
    const rows = [];
       this.props.remoteCities.filter((city) => {
      if (!city.name.startsWith(filterText2) === true) {
        console.log('fileterTerxt start equal true')
        return '';
      }

      rows.push(
        <tr key={city._id}>
          <td>{city.country}</td>
          <td>{city.name}</td>
        </tr>
      );
    });

    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>City Name</th>
            <th>{filterText2[largoFilterText2 -1]}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remoteCities: state.remoteCities,
    filterText2: state.filterText2
  };
}

export default connect(mapStateToProps)(CitiesTableRedux);