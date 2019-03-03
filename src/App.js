import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
