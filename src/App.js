import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './components/Experience'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Experience text="Test" />
      </div>
    );
  }
}

export default App;
