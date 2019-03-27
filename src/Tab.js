import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    var tabs = [...document.getElementsByClassName('Tab')];
    tabs.forEach(elem => {
      elem.className = 'Tab';
    });
    event.target.className += ' Tab_active';
    this.props.setState({'activeTab': this.props.tabName});
  }
  render() {

    return (
      <div className={"Tab " + this.props.className} onClick={this.handleClick}>
        {this.props.tabName}
      </div>
    );
  }
}

export default Tab;

//
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
