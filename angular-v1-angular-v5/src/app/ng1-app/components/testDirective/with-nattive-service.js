
angular.module('myApp.test.with-native', [])
  .directive('testDirectiveWithNativeService', () => { // eslint-disable-line
    return {
      restrict: 'E',
      scope: {
        id: '@',
      },
      controllerAs: '$ctrl',
      bindToController: true,
      controller: ['nativeService', 'numberService', directiveController],
      template: `
    <div>
      dsadsad
      <h1>{{$ctrl.subtitle}}</h1>
      <h1>{{$ctrl.id}}</h1>
      <h1>Resultado del servicio $http</h1>
      <h3>{{$ctrl.result}}</h3>
      <h3>number: {{$ctrl.number}}</h3>
    </div>
    `,
      link(scope, elem) {
        scope.$ctrl.onInit(elem);
      },
    };
  });


function directiveController(nativeService, numberService) {
  this.subtitle = 'con servicio nativo';
  this.onInit = () => {
    nativeService.tryHttp('http://localhost:3000/api/v1/places/all/names', (err, result) => {
      if (err) {
        console.log({ err });
      } else {
        this.result = result;
      }
    });
    this.number = numberService.toVerySmallText(10000000);
  };
}
