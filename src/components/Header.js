import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {

  render(){
    return (
      <header className="App-header">Welcome to my book store<img src={logo} className="App-logo" alt="logo" /></header>
    )
  }
}

export default Header;