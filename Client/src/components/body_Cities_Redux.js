import React, { Component } from 'react';

import SearchBarRedux from './SearchBarRedux';
import CitiesRedux from './CitiesRedux';

import { bindActionCreators } from 'redux';
import { setFilterText2 } from '../store/actions/cityActions';
import { connect } from "react-redux";

import listcitiesfounded from './listCities'


class BodyTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringFilter: null,
      listCities: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/cities/all')
      .then(response => response.json())
      .then(data => this.setState({ listCities: data }));
      console.log("Fetching", this.state.listCities);

  }

  render() {
    const filterText2 = this.props.filterText2;

    console.log('FilterText2:', filterText2)
    if (this.state.listCities === null) {
      return ('Cargando')
    }
    else {
      console.log("Fetch Ready", this.state.listCities);
       return (
//        <div>
//           <form>
//             <input 
//               value={this.props.filterText2}
//               onChange = {(e) => this.props.setFilterText2(e.target.value)}
//             />
//           </form>
          
//           <ul>
//             {this.state.listCities && 
//               this.state.listCities.filter((city) => {
//                 return (city.name.startsWith(filterText2) != -1) || filterText2 == null
//             })
//             .map(listcitiesfounded)}
//           </ul> 
          
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = (state) => {
//   console.log('MapState function')
//   return {
//     listCities: state.listCities,
//     filterText2: state.filterText2
    
//   };
// }

// function mapDispatchToProps(dispatch){
//   console.log('MapDispatch function')
//   return bindActionCreators({ setFilterText2 }, dispatch);
//  }

//  export default connect(mapStateToProps,mapDispatchToProps)(BodyTwo);
  <div>
    <SearchBarRedux />
    <CitiesRedux />
  </div>
       )
  }
}
}
export default BodyTwo ;