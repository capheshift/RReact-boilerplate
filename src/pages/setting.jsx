/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));

var SearchPage = React.createClass({

  getDefaultProps: function() {
    return {
      layout: RatchetLayout,
      title: 'Settings'
    };
  },

  render: function() {
    return (
      <div>
        <ul className="table-view">
          <li className="table-view-cell">
            <a className="navigate-right">
              Item 1
            </a>
          </li>
          <li className="table-view-cell">
            <a className="navigate-right">
              Item 2
            </a>
          </li>
          <li className="table-view-cell">
            <a className="navigate-right">
              Item 3
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = SearchPage;
