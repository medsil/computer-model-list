import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

      computers : [
        {
          name: "Ivel Z3",
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
         },
        {
          name: "Bally Astrocade",
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
        },
        {
          name: "Sord M200 Smart Home Computer",
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
        },
        {
          name: "Commodore 64",
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
        }
      ]

    };
  }


  render() {
    return (
      
      <div className="App">
        <span>
        <img src={logo} className="App-logo" alt="logo" />
        </span>

        <h1>Select a computer model</h1>
      
      { this.state.computers.map((item) => (
        <p>{item.name + item.year}</p>
      ))
      }

      </div>
    );
  }
}

export default App;
