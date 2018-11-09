import React, { Component } from 'react';


class ReturnTypes extends Component {
  render(){
    return(
      <header />
      <div />
      <footer />
      // 구 방식, 이렇게는 불가능. 전체를 div로 묶던가, 배열로 선언해서 각각 키를 주던가


    )
  }
}

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
