

import './test-directive';
import './with-service';
import './with-nattive-service';


export const myAppTest = angular.module('myApp.test', [
  'myApp.test.test-directive',
  'myApp.test.with-service',
  'myApp.test.with-native',
]);
