import React, { Component } from 'react';
import NavBar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <NavBar />
        {this.props.children}
      </div>
    );
  }
}
 
export default App;
