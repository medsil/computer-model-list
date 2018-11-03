import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">

        <select>
        <option value="">-- pick a model --</option>
        <option value="Ivel Z3">Ivel Z3 (1969)</option>
        <option value="Bally Astrocade">Bally Astrocade (1977)</option>
        <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
        <option value="Commodore 64">Commodore 64 (1982)</option>
        </select>

      
      </div>
    );
  }
}

export default App;
