import React, { Component, Fragment } from 'react';

class ErrorMaker extends Component {
  state = {
    friends: ["aa", "vbb", "sadas", "cbg"]
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000);
  }

  render(){
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class App extends Component {
  componentDidCatch = (error, info) => {
    console.log(`${error}, @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ${info}, @@@@@@@@@@@@@@@@@@ ${JSON.stringify(info)}`)
  }
  render() {
    return(
      <div className="App">
        <ErrorMaker />  
      </div>
    ) 
    
  }
}

export default App;