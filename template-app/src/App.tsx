import * as React from 'react';
import './App.css';
import Child from './Child';
import { CallbackButton } from './CallbackButton';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    const callback = () => { alert('pressed'); };
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        
        </p>
        <Child />

        <CallbackButton 
          callback={callback} 
          label="Press me!"
        />
      </div>
    );
  }
}

export default App;
