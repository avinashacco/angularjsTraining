'use strict';

angular.module('hrmsPlus')
  .controller('addQueryCtrl', function($scope, queries, $location) {
    $scope.data = {
      title: 'Add',
      subtitle: 'Fill',
      types: ['Type 1', 'Type 2', 'Type 3'],
      query: {
        type: '',
        title: '',
        description: ''
      },
      submit: function(data) {
        queries.add(data).success(function(data) {
          $location.path('/query');
        }).error(function(error) {
          alert(error);
        })
      }
    };
  }).controller('editQueryCtrl', function($scope, queries, $routeParams, $location) {
    $scope.data = {
      title: 'Edit',
      subtitle: 'Modify',
      types: ['Type 1', 'Type 2', 'Type 3'],
      query: {
        type: '',
        title: '',
        description: ''
      },
      submit: function(data) {
        queries.edit($routeParams.id, data).success(function(data) {
          $location.path('/query');
        }).error(function(error) {
          alert(error);
        })
      }
    };
    queries.get($routeParams.id).success(function(data) {
      $scope.data.query = data;
    });
  }).controller('viewQueryCtrl', function($scope, queries, $routeParams) {
    $scope.data = {
      query: {}
    }
    queries.get($routeParams.id).success(function(data) {
      $scope.data.query = data;
    });
  }).controller('listQueryCtrl', function($scope, queries, $location) {
    $scope.data = {
      queries: []
    }
    var getAll = function() {
      queries.getAll().success(function(response) {
        $scope.data.queries = response.data;
      });
    }();

    $scope.queryDetails = function(id) {
      $location.path('/query/' + id);
    }
    $scope.remove = function(id, event) {
      queries.remove(id).success(function(response) {
        getAll();
        alert(response);
      }).error(function(error) {
        alert(error);
      });
      event.stopPropagation();
    }
  });
