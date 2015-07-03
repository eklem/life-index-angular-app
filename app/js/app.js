'use strict';

/* App Module */

var searchcatApp = angular.module('searchcatApp', [
  'ngRoute',
  'searchcatAnimations',
  'searchcatControllers',
  'searchcatFilters',
  'searchcatServices'
]);

searchcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/search', {
        templateUrl: 'partials/search-list.html',
        controller: 'SearchListCtrl'
      }).
      otherwise({
        redirectTo: '/search'
      });
  }]);
