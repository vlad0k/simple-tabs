import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

  render() {

    return (
      <div >
        {this.props.content}
      </div>
    );
  }
}
export default Content
