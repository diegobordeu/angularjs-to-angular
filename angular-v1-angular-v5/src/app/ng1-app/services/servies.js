'use strict';
import 'angular-route';
import './service1';

export const myAppServices = angular.module('myApp.services', [
  'myApp.services.service1',
]);