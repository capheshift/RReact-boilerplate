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
      title: 'Search'
    };
  },

  render: function() {
    return (
      <div>
        <ul className="table-view">
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right">
              <div className="media-body">
                Item 1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = SearchPage;
