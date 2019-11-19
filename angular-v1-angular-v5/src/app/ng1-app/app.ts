/* eslint-disable import/prefer-default-export */


// import 'angular-route';
import { module } from "angular";
import './view1/view1';
import './view2/view2';
import './components/version/version';
import './components/testDirective/test';
import './services/services';
import './components/imported/new-component';

// Declare app level module which depends on views, and components
export const myApp = module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.test',
  'myApp.services',
])
  . config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

  // $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
