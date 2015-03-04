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
        <MainSection title="Curriculum">
          <ul className="cv__column cv__column--left">
            <ul className="cv__column__year cv__column__year--2015">
              <li className="cv__column__item cv__column__item--jan cv__column__item--10-months-duration">
                <span>10 meses</span>
                <h3>HTML5 & CSS3</h3>
                <span>Curso de introducción al diseño web con HTML5 y CSS3</span>
                <p>Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.</p>
              </li>
            </ul>
            <ul className="cv__column__year cv__column__year--2014">
              <li className="cv__column__item cv__column__item--20-months-duration">
                <span>20 meses</span>
                <h3>HTML5 & CSS3</h3>
                <span>Curso de introducción al diseño web con HTML5 y CSS3</span>
                <p>Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.</p>
              </li>
            </ul>
            <ul className="cv__column__year cv__column__year--2013">
              <li className="cv__column__item cv__column__item--pulled cv__column__item--10-months-duration">
                <span>10 meses</span>
                <h3>HTML5 & CSS3</h3>
                <span>Curso de introducción al diseño web con HTML5 y CSS3</span>
                <p>Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.</p>
              </li>
            </ul>
            <ul className="cv__column__year cv__column__year--2012">
              <li className="cv__column__item cv__column__item cv__column__item--10-months-duration">
                <span>10 meses</span>
                <h3>Nuevo item</h3>
                <span>Curso de introducción al diseño web con HTML5 y CSS3</span>
                <p>Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.</p>
              </li>
            </ul>
          </ul>
          <ul className="cv__column cv__column--right">
            <li className="cv__column__item cv__column__item--5-months-duration">
              <span>5 meses</span>
              <h3>HTML5 & CSS3</h3>
              <span>Curso de introducción al diseño web con HTML5 y CSS3</span>
              <p>Curso impartido por Seis Cocos realizado para desarrollar y diseñar sitios web con un alto nivel estético basándose en los nuevos lenguajes de diseño web.</p>
            </li>
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
      </div>
    );
  }
});

module.exports = PabloBasagoitiApp;
