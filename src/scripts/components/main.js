'use strict';

var PabloBasagoitiRApp = require('./PabloBasagoitiRApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PabloBasagoitiRApp}>
    <Route name="/" handler={PabloBasagoitiRApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
