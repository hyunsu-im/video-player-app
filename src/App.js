import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Video!</h2>
        <img src="http://192.168.219.186:8081/?action=stream" width="640" height="480" alt="video" />
      </div>
    );
  }
}

export default App;
