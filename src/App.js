import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  render() {

    // let todos = ['Acquire nuclear', 'Hack NASA', 'Drop nuclear on Trump Tower', 'Eat tacos', 'Take a cab', 'Eat grapes']
    let todos = ['Acquire nuclear', 'Hack NASA', 'Drop nuclear on Trump Tower']


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-body">
          <Todo todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
