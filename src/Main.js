import React, { Component } from 'react';

import Gantt from './Gantt';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1> gantt-for-react </h1>
        <h3>
          Frappe Gantt components for React wrapper.
          <a href='https://github.com/hustcc/gantt-for-react'>gantt-for-react</a>
        </h3>


        <Gantt />

        <h3>Get it on GitHub! <a href='https://github.com/hustcc/gantt-for-react'>gantt-for-react</a></h3>
      </div>
    );
  }
}