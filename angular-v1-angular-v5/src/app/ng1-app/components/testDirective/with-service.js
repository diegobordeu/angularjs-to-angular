'use strict';

angular.module('myApp.test.test-directive', []).directive('testDirective', function() {
    return {
      restrict: 'E',
      scope: {
        id: '@',
      },
      controllerAs: '$ctrl',
      bindToController: true,
      controller: function () {
        this.subtitle = 'Esta semana';
      },
      template: `
      <div>
        dsadsad
        <h1>{{$ctrl.subtitle}}</h1>
        <h1>{{$ctrl.id}}</h1>
      </div>
      `,
      link: function(scope, elem) {
      }
    }
  });
  
  