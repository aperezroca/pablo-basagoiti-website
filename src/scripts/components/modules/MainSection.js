'use strict';

var React = require('react/addons');

// CSS
require('modules/main-section.scss');

var MainSection = React.createClass({
  render: function() {
    return (
      <section>
        <div className="main-section__title-container">
          <h2 className="main-section__title">{this.props.title}</h2>
        </div>
        <div className="main-section__main-container">
          {this.props.children}
        </div>
      </section>
    );
  }
});

module.exports = MainSection;
