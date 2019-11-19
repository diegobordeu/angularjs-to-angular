'use strict';
import 'angular-route';

// Declare app level module which depends on views, and components

// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   // $locationProvider.hashPrefix('!');
//   $locationProvider.html5Mode(true);

//   // $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
export const myApp = angular.module('myApp2', [])
.directive('testDirective', function() {
	return {
		restrict: 'E',
		scope: {
			id: '@',
		},
		controllerAs: '$ctrl',
		bindToController: true,
		controller: function () {
			this.subtitle = 'directive de angular js app 2';
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

