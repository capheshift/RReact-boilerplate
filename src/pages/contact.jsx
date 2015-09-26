/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));

var ContactPage = React.createClass({

  getDefaultProps: function() {
    return {
      layout: RatchetLayout
    };
  },

  render: function() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="search" placeholder="Search" />
          <textarea rows="5"></textarea>
          <button className="pull-right">Skeleton</button>
        </form>
      </div>
    );
  }
});

module.exports = ContactPage;
