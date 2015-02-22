'use strict';

var React = require('react/addons');

var MainSection = React.createClass({
  render: function() {
    return (
      <section>
        <div className="section-title-container">
          <h2 className="section-title">{this.props.title}</h2>
        </div>
        <div className={this.props.className}>
          {this.props.children}
        </div>
      </section>
    );
  }
});

module.exports = MainSection;
