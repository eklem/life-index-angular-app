'use strict';

/* Services */

var searchcatServices = angular.module('searchcatServices', ['ngResource']);

searchcatServices.factory('Search', ['$resource',
  function($resource){
    return {
      srch: $resource('http://localhost:3030/search', {}, {
        query: { method: 'GET', params: {}, isArray: false }
      }),
      mtch: $resource('http://localhost:3030/matcher', {}, {
        query: { method: 'GET', params: {}, isArray: true }
      }),
    }
    }]
).service('auth', [
  '$http',
  function ($http) {
    this.login = function (username, password) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3030/login',
        data: JSON.stringify({document: {username: username, password: password}}),
      })
        .then(function (res) {
          if (res.status == 200) {
            localStorage.setItem('userData', JSON.stringify({timestamp: Date.now(), loggedIn: true}));
          }
          return true
        });

    }
  }]
);