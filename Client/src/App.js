import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './screen/LandingPage';
import Account from './screen/Account';
import Cities from './screen/Cities';
import LogIn from './screen/LogIn';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={Landing} />
          <Route path='/Cities' component={Cities} />
          <Route path='/Account' component={Account} />
          <Route path='/LogIn' component={LogIn} />
        </BrowserRouter>
      </div>
    )
  };
}

export default App;

// class App extends React.Component  {
//     state = {
//       response: '',
//       post: '',
//       responseToPost: '',
//     };

//     componentDidMount() {
//       this.callApi()
//         .then(res => this.setState({ response: res.express }))
//         .catch(err => console.log(err));
//     }

//     callApi = async () => {
//       const response = await fetch('/api/hello');
//       const body = await response.json();
//       if (response.status !== 200) throw Error(body.message);

//       return body;
//     };

//     handleSubmit = async e => {
//       e.preventDefault();
//       const response = await fetch('/api/world', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ post: this.state.post }),
//       });
//       const body = await response.text();

//       this.setState({ responseToPost: body });
//     };

//   render() {    
//   return (
//     <div className="App">
//     <header className="App-header">
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//     <p>{this.state.response}</p>
//     <form onSubmit={this.handleSubmit}>
//       <p>
//         <strong>Post to Server:</strong>
//       </p>
//       <input
//         type="text"
//         value={this.state.post}
//         onChange={e => this.setState({ post: e.target.value })}
//       />
//       <button type="submit">Submit</button>
//     </form>
//     <p>{this.state.responseToPost}</p>
//   </div>
//   );
// }
// }


