import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    if(parseInt(this.state.input) % 3 === 0){
      this.setState({result: 'fizz'});
    } else if (parseInt(this.state.input) % 5 === 0) {
      this.setState({result: 'buzz'});
    } else {
      this.setState({result: this.state.input});
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
