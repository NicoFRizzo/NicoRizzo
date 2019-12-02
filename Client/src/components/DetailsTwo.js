import React from 'react'

function listAllNamesTwo(item, filterText) {
    if(filterText == "") {
    var listName = <li className="listNoneBullet">{item.name}</li>
    } 
    if (item.name.startsWith(filterText) == true) {
        var listName = <li className="listNoneBullet">{item.name}</li>;
        }
    return listName;
}

function listAllNamesOne(item) {
    var listName = <li className="listNoneBullet">{item.name}</li>
    return listName;
}

class DetailsTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          informacion: null,
          listName: null
        };
      }
    
componentDidMount() {
    console.log("asd");
     fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(data => this.setState( { informacion: data}));
}

    render() {
        const filterText = this.props.cityFilter;
        console.log(this.state.informacion)

        if(this.state.informacion === null){
         return ( 'Cargando'  )       
        }
        else
        {
            return (
                <div> 
                    <ul>{this.state.informacion.map(listAllNamesOne)}</ul>
                    {/* <ul>{listAllNamesTwo(this.state.informacion, filterText)}</ul> */}
                </div>
            );
        }   
    }
}

export default DetailsTwo;