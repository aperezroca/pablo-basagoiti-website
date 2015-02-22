'use strict';

var React = require('react/addons');

var Project = React.createClass({
  render: function() {
    var imgStyle = {
      width: '100%'
    };

    return (
      <div className={this.props.className}>
        <a href="#"><img src={this.props.preview} style={imgStyle} /></a>
        <div className="caption">
          <span className="title">{this.props.title}</span>
          <span className="subtitle">{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
});

module.exports = Project;
