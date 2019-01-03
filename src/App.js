import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value="10" onChange={(event) => {this.setState({input: event.target.value})}}/>
          <p>
            {this.state.result}
          </p>
          <button onClick={() => {this.setState({result: 10})}}/>
        </header>
      </div>
    );
  }
}

export default App;
