'use strict';

var React = require('react/addons'),
    Project = require('objects/project/Project'),
    Grid = require('objects/Grid');

var ProjectList = React.createClass({
  render: function() {
    var projects = [],
        buildRow = function(project, index) {
          return (
            <Project key={index}
              className="grid__col-1-3"
              title={project.title}
              subtitle={project.subtitle}
              preview={project.preview} />
          );
        };

    for (var i = 0; i < this.props.projects.length; i += 3) {
      var projectRow = this.props.projects.slice(i, i+3).map(buildRow);

      projects.push(
        <Grid key={i}>{projectRow}</Grid>
      );
    }

    return (
      <div>
        {projects}
      </div>
    );
  }
});

module.exports = ProjectList;
