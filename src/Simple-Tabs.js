import React, { Component } from 'react';
import './Simple-Tabs.css';
import Tab from './Tab';
import Content from './Content';

class SimpleTabs extends Component {
  constructor(props){
    super(props);
    this.content = {
      'Tab1': 'Text 1',
      'Tab2': 'Text 2',
      'Tab3': 'Text 3'
    }
    this.state = {
      activeTab: 'Tab1',
    };
  }
  render() {
    return (
      <div>
        <header className='Header'>
          <Tab className='Tab_active' tabName={'Tab1'} setState={(p)=>this.setState(p)}/>
          <Tab tabName={'Tab2'} setState={(p)=>this.setState(p)}/>
          <Tab tabName={'Tab3'} setState={(p)=>this.setState(p)}/>
        </header>
        <Content content={this.content[this.state.activeTab]}/>
      </div>
    );
  }
}

export default SimpleTabs;
