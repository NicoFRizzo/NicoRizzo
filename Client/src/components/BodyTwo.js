import React, { Component } from 'react';
import listcities from './listCities'

function filterCitiesList(item,filterText) {

  for(var i = 1; i < item.length; i += 1) {
      if (item[i].name.startsWith(filterText) == true) {
          var listName = <li className="listNoneBullet">{item.name}</li>;
      }
    }
  return listName;
}

class BodyTwo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        informacion: null,
        listName: null
        }
      }

      componentDidMount() {
        console.log("Fetching");
         fetch('http://localhost:5000/cities/all')
            .then(response => response.json())
            .then(data => this.setState( { informacion: data } ));
      }
      
      handleChange(e) {
        console.log("Handling Change", e.target.value);
        filterCitiesList(this.informacion,e.target.value)
        // e.state.informacion.map((informacion, e.target.value) => {
        //     if (e.state.informacion.name.startsWith(cityFilter) == true) {
        //         var listName = <li className="listNoneBullet">{informacion.name}</li>;
        //     }
        //     return listName;
        //   })
        
      }

        render(){

          console.log(this.state.informacion)
          if(this.state.informacion === null){
            return ( 'Cargando'  )       
           }
           else
           {
            return(
              <div>
                  <form>
                    <input className="inputOtherLine" align="right"
                              value={this.props.cityFilter} 
                              onChange={this.handleChange}/>
                  </form>
                   
                  {/* <ul>{this.state.informacion.map(listAllNamesOne)}</ul> */}
                  <ul>{this.state.informacion.map(listcities)}</ul>
                  {/* <ul>{listAllNamesTwo(this.state.informacion, filterText)}</ul> */}
                  
              </div>
            );
        }
    }
}

export default BodyTwo;