import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { userName: "harry.potter" },
      { userName: "hermione.granger" }
    ]
  }

  render() {
    return (
      <div className="App">
        <UserOutput userName={ this.state.users[0].userName } />
        <UserOutput userName={ this.state.users[1].userName } />
      </div>
    );
  }
}

export default App;
