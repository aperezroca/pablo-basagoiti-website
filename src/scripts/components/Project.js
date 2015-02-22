'use strict';

var React = require('react/addons');

var Project = React.createClass({
  render: function() {
    return (
      <li class="project">
        <a href="#"><img src={this.props.preview} /></a>
        <div class="caption">
          <span class="title">{this.props.title}</span>
          <span class="subtitle">{this.props.subtitle}</span>
        </div>
      </li>
    );
  }
});

module.exports = Project;
