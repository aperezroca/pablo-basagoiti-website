'use strict';

var React = require('react/addons');

// CSS
require('objects/cv.scss');

var CVYear = React.createClass({
  render: function() {
    var classNames = [
      'cv__column__year',
      'cv__column__year--' + this.props.year
    ];

    return (
      <ul className={classNames.join(' ')}>
        {this.props.children}
      </ul>
    );
  }
});

module.exports = CVYear;
