/* eslint-disable import/prefer-default-export */

export class nativeService {

  constructor($http) {
    this.$http = $http;
  }

  tryHttp(url, callback) {
    this.$http.get(url)
      .success((results) => {
        callback(null, results);
      })
      .error((data) => {
        callback(data);
      });
  }
}
