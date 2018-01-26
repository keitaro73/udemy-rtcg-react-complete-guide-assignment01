import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { userName: "harry.potter", greeting: "You're a wizard, Harry!" },
      { userName: "hermione.granger", greeting: "Well done!" }
    ]
  }

  clickHandler = () => {
    this.setState({
      users: [
        { userName: "harry.potter", greeting: "5 points to Gryffindor!" },
        { userName: "hermione.granger", greeting: "Well done!" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.clickHandler } >Award Points</button>
        <UserInput />
        <UserOutput userName={ this.state.users[0].userName } greeting={ this.state.users[0].greeting } />
        <UserOutput userName={ this.state.users[1].userName } greeting={ this.state.users[1].greeting } />
      </div>
    );
  }
}

export default App;
