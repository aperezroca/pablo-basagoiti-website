'use strict';

var React = require('react/addons'),
    Hero = require('./Hero.js'),
    ProjectList = require('./ProjectList.js'),
    MainSection = require('./MainSection.js'),
    CVItem = require('./CVItem.js'),
    CVYear = require('./CVYear.js');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.scss');

var PROJECTS = [
  { title: 'Title 1', subtitle: 'Subtitle 1', preview: 'http://placehold.it/250x250' },
  { title: 'Title 2', subtitle: 'Subtitle 2', preview: 'http://placehold.it/250x250' },
  { title: 'Title 3', subtitle: 'Subtitle 3', preview: 'http://placehold.it/250x250' },
  { title: 'Title 4', subtitle: 'Subtitle 4', preview: 'http://placehold.it/250x250' },
  { title: 'Title 5', subtitle: 'Subtitle 5', preview: 'http://placehold.it/250x250' },
  { title: 'Title 6', subtitle: 'Subtitle 6', preview: 'http://placehold.it/250x250' },
  { title: 'Title 7', subtitle: 'Subtitle 7', preview: 'http://placehold.it/250x250' },
  { title: 'Title 8', subtitle: 'Subtitle 8', preview: 'http://placehold.it/250x250' },
  { title: 'Title 9', subtitle: 'Subtitle 9', preview: 'http://placehold.it/250x250' }
], CV = {
  education: {
    2015: [
      {
        startMonth: 'jun',
        duration: 6,
        title: 'HTML5 & CSS3',
        subtitle: 'Curso de introducción al diseño web con HTML5 y CSS3',
        description: 'Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.',
        pulled: false
      }
    ]
  },
  experience: {
    2015: [
      {
        startMonth: 'mar',
        duration: 10,
        title: 'HTML5 & CSS3',
        subtitle: 'Curso de introducción al diseño web con HTML5 y CSS3',
        description: 'Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.',
        pulled: false
      }
    ]
  }
};

var PabloBasagoitiApp = React.createClass({
  buildItems: function(years) {
    return Object.keys(years).map(function(year, index) {
      var items = years[year].map(function(item, index) {
        return (
          <CVItem key={index} details={item} pulled={item.pulled}/>
        );
      });

      return (
        <CVYear key={index} year={year}>{items}</CVYear>
      );
    });
  },
  render: function() {
    var experience, education;

    experience = this.buildItems(CV.experience);
    education = this.buildItems(CV.education);

    return (
      <div className='main'>
        <Hero />
        <MainSection className="container--max-width--810" title="Work">
          <ProjectList projects={PROJECTS} />
        </MainSection>
        <MainSection title="Curriculum">
          <ul className="cv__column cv__column--education">
            {education}
          </ul>
          <ul className="cv__column cv__column--experience">
            {experience}
          </ul>
          <ul className="cv__timeline">
            <li className="cv__timeline__year">2015</li>
            <li className="cv__timeline__year">2014</li>
            <li className="cv__timeline__year">2013</li>
            <li className="cv__timeline__year">2012</li>
            <li className="cv__timeline__year">2011</li>
            <li className="cv__timeline__year">2010</li>
            <li className="cv__timeline__year">2009</li>
            <li className="cv__timeline__year">2008</li>
          </ul>
        </MainSection>
        <MainSection title="Pablo es lo más"></MainSection>
      </div>
    );
  }
});

module.exports = PabloBasagoitiApp;
