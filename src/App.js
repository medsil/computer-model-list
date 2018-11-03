import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
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
        <h1>Select a computer model</h1>
        <select>
          <option value="">-- pick a model --</option>
            { this.state.computers.map((item) => (
            <option>{item.name  + " (" + item.year + ")"}
            </option>))
            }
        </select>
      </div>
    );
  }
}

export default App;
