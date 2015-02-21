'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var PabloBasagoitiRApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PabloBasagoitiRApp = require('../../../src/scripts/components/PabloBasagoitiRApp.js');
    component = React.createElement(PabloBasagoitiRApp);
  });

  it('should create a new instance of PabloBasagoitiRApp', function () {
    expect(component).toBeDefined();
  });
});
