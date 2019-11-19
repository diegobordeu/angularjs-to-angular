'use strict';

import './test-directive';
import './with-service';


export const myAppTest = angular.module('myApp.test', [
  'myApp.test.test-directive',
  'myApp.test.with-service',
]);
