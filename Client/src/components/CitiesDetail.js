import React from 'react'

function listAllNames(item) {
    var listName = <li className="listNoneBullet">{item.name}</li>;
    return listName;
  }

class CitiesDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          informacion: null,
        };
      }
    
componentDidMount() {
    console.log("asd");
     fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(data => this.setState( { informacion: data}));
}

    render() {
        console.log(this.state.informacion)

        if(this.state.informacion === null){
         return ( 'Cargando'  )       
        }
        else
        {
            return (
                <div>                       
                    <ul>{this.state.informacion.map(listAllNames)}</ul>
                </div>
            );
        }   
    }
}

export default CitiesDetails;