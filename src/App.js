import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    if(this.state.input === '3'){
      this.setState({result: 'fizz'});
    } else {
      this.setState({result: 10});
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value="10" onChange={(event) => {this.setState({input: event.target.value})}}/>
          <p>
            {this.state.result}
          </p>
          <button onClick={this.handleClick}/>
        </header>
      </div>
    );
  }
}

export default App;
