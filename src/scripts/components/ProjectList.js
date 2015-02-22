'use strict';

var React = require('react/addons'),
    Project = require('./Project.js');

var ProjectList = React.createClass({
  render: function() {
    var projects = this.props.projects.map(function(project) {
      return (
        <Project title={project.title} subtitle={project.subtitle} preview={project.preview} />
      );
    });

    return (
      <section>
        <div className="section-title-container">
          <h2 className="section-title">Work</h2>
        </div>
        <ul className="projects">
          {projects}
        </ul>
      </section>
    );
  }
});

module.exports = ProjectList;
