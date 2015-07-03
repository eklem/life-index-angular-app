'use strict';

/* Controllers */

var searchcatControllers = angular.module('searchcatControllers', ['ui.bootstrap']);

searchcatControllers.controller('SearchListCtrl', ['$sce', '$http', '$scope', '$location', 'Search',
  function($sce, $http, $scope, $location, Search) {
    var queryObject = $location.search();
    var queryString = "";
    $scope.searchresult = Search.srch.query($location.search());
    try {
      queryString = JSON.parse(queryObject['JSONq'])['query']['*']
    } catch(e){}
    $scope.searchTerm = queryString;


    $scope.matcher = function(suggestion) {
      return $http.get("http://localhost:3030/matcher?beginsWith=" + suggestion)
        .then(function (response) {
          return response.data;
        });
    };


    //watch the search box
    $scope.$watch("searchTerm", function(){ 
      if ($scope.searchTerm) if ($scope.searchTerm.length > 2) {
//something like
//http://localhost:3030/search?JSONq={"query":{"*":["ethiopia"]},%20"facets":{"mjtheme":{}}}
        var JSONq = {};
        JSONq['query'] = {};
        JSONq['query']['*'] = $scope.searchTerm.split(' ');
        JSONq['facets'] = {};
        JSONq['facets']['type'] = {};
        JSONq['facets']['user'] = {"limit":10};
        JSONq['facets']['tags'] = {"limit":10};
        queryObject['JSONq'] = JSON.stringify(JSONq);
        $scope.searchresult = Search.srch.query(queryObject);
      }
    })

    
    //for the facet/filter links
    $scope.getFilterUrl = function(facetGroup, facetEntry, lastQuery) {
      var newQuery = JSON.parse(JSON.stringify(lastQuery));
      if (!newQuery.filter) newQuery.filter = {};
      if (!newQuery.filter[facetGroup.key]) newQuery.filter[facetGroup.key] = [];
      newQuery.filter[facetGroup.key].push([facetEntry.gte, facetEntry.lte]);
      var url = '/app/#/search?JSONq=' + JSON.stringify(newQuery);
      return url;
    };


    //for the [remove] links
    $scope.getUnFilterUrl = function(facetGroup, facetEntry, lastQuery) {
      var newQuery = JSON.parse(JSON.stringify(lastQuery));
      for (var i in newQuery.filter[facetGroup.key]) {
        var thisFilter = newQuery.filter[facetGroup.key][i];
        if ((thisFilter[0] == facetEntry.gte) && (thisFilter[1] == facetEntry.lte)) {
          newQuery.filter[facetGroup.key].splice(i, 1);
          continue;
        }
      }
      if ((newQuery.filter[facetGroup.key]).length == 0) delete newQuery.filter[facetGroup.key];
      if (Object.keys(newQuery.filter).length == 0) delete newQuery.filter;
      //
      var url = '/app/#/search?JSONq=' + JSON.stringify(newQuery);
      return url;
    };

    $scope.trustworthy = function(html) {
      return $sce.trustAsHtml(html);
    };

       $scope.orderProp = 'age';
  }]);
