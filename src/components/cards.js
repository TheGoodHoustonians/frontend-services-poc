import React from 'react';
import { Link } from 'react-router';
import organizations from '../data/organizations';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="card mui-panel">
        <h3 className="name">Name</h3>
        <p className="description">info here</p>
        <p className="hours">times</p>
        <p className="address">address</p>
        <p className="county">Harris</p>
        <p className="phone">123-456-7890</p>
        <p className="email">youremail@email.com</p>
      </div>
    );
  }
}