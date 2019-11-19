

angular.module('myApp.test.with-service', [])
.directive('testDirectiveWithService', function(numberService) {
  return {
    restrict: 'E',
    scope: {
      id: '@',
    },
    controllerAs: '$ctrl',
    bindToController: true,
    controller: ['numberService',function (numberService) {
      this.subtitle = 'con servicio';
      this.onInit = function(elem) {
        this.serviceResult = numberService.toVerySmallText(1000000);
      }
    }],
    template: `
    <div>
      dsadsad
      <h1>{{$ctrl.subtitle}}</h1>
      <h1>{{$ctrl.id}}</h1>
      <h1>Resultado del servicio</h1>
      <h3>{{$ctrl.serviceResult}}</h3>
    </div>
    `,
    link: function(scope, elem) {
      scope.$ctrl.onInit(elem);
    }
  }
});
  
  