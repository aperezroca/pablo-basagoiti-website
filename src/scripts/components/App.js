'use strict';

var React = require('react/addons'),
    Hero = require('modules/Hero.js'),
    MainSection = require('modules/MainSection.js'),
    ProjectList = require('objects/project/ProjectList.js'),
    CVItem = require('objects/cv/CVItem.js'),
    CVYear = require('objects/cv/CVYear.js');

// CSS
require('vendor/normalize.css');
require('globals/fonts.scss');
require('default.scss');

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
        startMonth: 'may',
        duration: 3,
        title: 'HTML5 & CSS3',
        subtitle: 'Curso de introducción al diseño web con HTML5 y CSS3',
        description: 'This is a lot of crap',
      }
    ],
    2014: [
      {
        startMonth: 'aug',
        duration: 12,
        title: 'Editorial design master',
        subtitle: 'Máster en Diseño Editorial y Publicaciones Digitales',
        description: 'This is a lot of crap'
      }
    ],
    2013: [
      {
        startMonth: 'sep',
        duration: 48,
        title: 'Publicidad y relaciones públicas',
        subtitle: 'Licenciatura de Publicidad y RRPP por la UMA',
        description: 'This is a lot of crap'
      }
    ],
    2010: [
      {
        startMonth: 'jan',
        duration: 12,
        title: 'Curso diseño fráfico publicitario',
        subtitle: 'Introducción al diseño gráfico',
        description: 'This is a lot of crap',
        pulled: true
      }
    ],
    2009: [
      {
        startMonth: 'sep',
        duration: 24,
        title: 'Técnico superior en realización de vídeo',
        subtitle: 'Grado Superior en Realización de Vídeos y espectáctulos',
        description: 'This is a lot of crap'
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

var App = React.createClass({
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
        <MainSection title="Work">
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

module.exports = App;
