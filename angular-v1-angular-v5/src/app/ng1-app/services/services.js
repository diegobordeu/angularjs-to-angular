
import 'angular-route';
import './service1';
import './native';

const myAppServices = angular.module('myApp.services', [
  'myApp.services.service1',
  'myApp.services.native',
]);

export default myAppServices;
