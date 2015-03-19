'use strict';

angular.module('hrmsPlus')
  .controller('addQueryCtrl', function($scope, queries) {
    $scope.data = {
      queries: []
    }
    queries.getAll().success(function(response) {
      $scope.data.queries = response.data;
    });

  }).controller('editQueryCtrl', function($scope, queries) {

  }).controller('viewQueryCtrl', function($scope, queries, $routeParams) {
    $scope.data = {
      query: {}
    }
    queries.get($routeParams.id).success(function(data) {
      $scope.data.queries = data;
    });
  }).controller('listQueryCtrl', function($scope, queries) {

  });
