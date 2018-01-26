import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput userName="jsmith" />
        <UserOutput userName="jdoe" />
      </div>
    );
  }
}

export default App;
