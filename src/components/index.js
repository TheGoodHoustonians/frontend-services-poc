import Cards from './cards';
import Filters from './filters';
import { Link } from 'react-router';
import organizations from '../data/organizations';
import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="home mui-row">
        <Filters />
        <div className="mui-col-md-8">
          <Cards />
        </div>
      </div>
    );
  }
}