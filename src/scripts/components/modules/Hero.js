'use strict';

var React = require('react/addons');

// CSS
require('modules/hero.scss');

var Hero = React.createClass({
  render: function() {
    return (
      <header className="hero">
        <h1 className="hero__title">Pablo Basagoiti</h1>
        <h2 className="hero__subtitle">Editorial design</h2>
        <span className="hero__read-more">Read!</span>
      </header>
    );
  }
});

module.exports = Hero;
