import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setFilterText2 } from '../store/actions/cityActions';


class SearchBarRedux extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('SearchBar - filterText2', this.props.filterText2)
    return (
      <>
      <form>
        <input 
          style={{ color: 'red' }}
          type="text"
          placeholder="Search REDUX..."
          value={this.props.filterText2}
          onChange = {(e) => this.props.setFilterText2(e.target.value)}
        />
      </form>
      
      </>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setFilterText2 }, dispatch);
 }

export default connect(null,mapDispatchToProps)(SearchBarRedux);