import React, { Component, Fragment } from 'react';


class ReturnTypes extends Component {
  render(){
    return(
      <Fragment>
        <header />
        <div />
        <footer />
      </Fragment>  
      // react 16 방식, Fragment
      // <>
      //   <header />
      //   <div />
      //   <footer />
      // </>  
      // 이런 형태도 가능 굿띠
      // 추가, render(){ return "string"; } 도 가느으으응
    )
  }
}


class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
