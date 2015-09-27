/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var RatchetLayout = React.createClass({
  getDefaultProps() {
    return {};
  },

  render() {
    return (
      <div>
        <header className="bar bar-nav">
          <h1 className="title">Title</h1>
          <button className="btn btn-link btn-nav pull-left">
            <span className="icon icon-left-nav"></span>
          </button>
        </header>

        <div className="container-ratchet">
          {this.props.children}
        </div>

        <nav className="bar bar-tab">
          <a className="tab-item active" href="#/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </a>
          <a className="tab-item" href="#/contact">
            <span className="icon icon-star-filled"></span>
            <span className="tab-label">Favorites</span>
          </a>
          <a className="tab-item" href="#/search">
            <span className="icon icon-search"></span>
            <span className="tab-label">Search</span>
          </a>
          <a className="tab-item" href="#">
            <span className="icon icon-gear"></span>
            <span className="tab-label">Settings</span>
          </a>
        </nav>
      </div>
    );
  }
});

module.exports = RatchetLayout;
