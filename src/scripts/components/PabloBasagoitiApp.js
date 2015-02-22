'use strict';

var React = require('react/addons'),
    Hero = require('./Hero.js'),
    ProjectList = require('./ProjectList.js'),
    MainSection = require('./MainSection.js');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.scss');

var PabloBasagoitiApp = React.createClass({
  getInitialState: function() {
    return { projects: [
        { title: 'Title 1', subtitle: 'Subtitle 1', preview: 'http://placehold.it/250x250' },
        { title: 'Title 2', subtitle: 'Subtitle 2', preview: 'http://placehold.it/250x250' },
        { title: 'Title 3', subtitle: 'Subtitle 3', preview: 'http://placehold.it/250x250' },
        { title: 'Title 4', subtitle: 'Subtitle 4', preview: 'http://placehold.it/250x250' },
        { title: 'Title 5', subtitle: 'Subtitle 5', preview: 'http://placehold.it/250x250' },
        { title: 'Title 6', subtitle: 'Subtitle 6', preview: 'http://placehold.it/250x250' },
        { title: 'Title 7', subtitle: 'Subtitle 7', preview: 'http://placehold.it/250x250' },
        { title: 'Title 8', subtitle: 'Subtitle 8', preview: 'http://placehold.it/250x250' },
        { title: 'Title 9', subtitle: 'Subtitle 9', preview: 'http://placehold.it/250x250' }
      ]};
  },
  render: function() {
    return (
      <div className='main'>
        <Hero />
        <MainSection className="container--max-width--810" title="Work">
          <ProjectList projects={this.state.projects} />
        </MainSection>
      </div>
    );
  }
});

module.exports = PabloBasagoitiApp;
