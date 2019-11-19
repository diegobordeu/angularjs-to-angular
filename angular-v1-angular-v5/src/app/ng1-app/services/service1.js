'use strict';

function numberService() {
  this.toVerySmallText = function() {
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
}

angular.module('myApp.service.service1', [])
.service('numberService', numberService);

