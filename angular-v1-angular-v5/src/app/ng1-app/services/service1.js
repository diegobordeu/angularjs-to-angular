

function numberService() {
  this.toVerySmallText = (n) => {
    if(n < 1000) {
      return n.toString();
    }
    if(n > 500000) {
        return '>500k';
    }
    if(n < 1000000) {
        var x = Math.round(n/1000);
        return x + 'k';
    }
  }
  return this;
}

angular.module('myApp.services.service1', [])
.factory('numberService', numberService);

