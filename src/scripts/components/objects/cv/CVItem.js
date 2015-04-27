'use strict';

var React = require('react/addons');

// CSS
require('objects/cv.scss');

var CVItem = React.createClass({
  render: function() {
    var details = this.props.details,
        classNames = [
          'cv__column__item',
          'cv__column__item--' + details.startMonth,
          'cv__column__item--' + details.duration + '-months-duration',
          this.props.pulled ? 'cv__column__item--pulled' : null
        ];

    return (
      <li className={classNames.join(' ')}>
        <span>{details.duration} meses</span>
        <h3>{details.title}</h3>
        <span>{details.subtitle}</span>
        <p>{details.description}</p>
      </li>
    );
  }
});

module.exports = CVItem;
