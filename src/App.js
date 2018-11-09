import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('touchme'));
  }
}

const Message = () => "Now I Can touch this!!";

class App extends Component {
  render() {
    return(
      <Fragment>
        <div className="App" />
        <Portals />
      </Fragment>
    ) 
    
  }
}

export default App;