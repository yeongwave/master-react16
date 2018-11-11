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

const ErrorFallback = () => "Sorry"

class App extends Component {
  state = {
    hasError: false
  }
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true
    })
  }
  render() {
    const  {hasError} = this.state;
    return(
      <div className="App">
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </div>
    ) 
    
  }
}

export default App;