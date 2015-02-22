'use strict';

var React = require('react/addons');

var Grid = React.createClass({
  render: function() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Grid;
