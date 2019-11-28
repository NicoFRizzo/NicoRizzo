import React from 'react';
//import FetchCities from './fetchApi';

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
                        <h1> asd</h1>
                        
<h1>{this.state.informacion[0].name}</h1>
                </div>
                    
                    

            );
        }
    }
}

export default CitiesDetails;