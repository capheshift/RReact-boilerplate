/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));

var HomePage = React.createClass({
  displayName: 'Home page',

  getDefaultProps: function() {
    return {
      layout: RatchetLayout
    };
  },

  render: function() {
    return (
      <div>
        <p>HOME PAGE</p>
      </div>
    );
  }
});

module.exports = HomePage;
