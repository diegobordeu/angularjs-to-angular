export class nativeService {
    
  constructor($http){

  };

  tryHttp(callback, url){
    $http.get(url)
      .success(function(results) {
        callback(null, results.amount, returnString);
      })
      .error(function(data) {
        callback(data);
      });
  }
}