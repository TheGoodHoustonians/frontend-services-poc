import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container mui-container-fluid">
        <header>
          <h1>Services Search</h1>
        </header>
        <div className="app-content">
          {this.props.children}
        </div>
        <footer>
          <p>Prototype of Services condensed to one place.</p>
        </footer>
      </div>
    );
  }
}