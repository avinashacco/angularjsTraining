angular.module('hrmsplus', [])
  .controller('AppController', ['$scope', 'serverCalls', function($scope, serverCalls) {
    $scope.appName = 'Angular JS Training Application';

    $scope.httpServiceData = {
      simpleGetCallResult: ''
    };
    $scope.httpService = {
      get: function(isSuccess) {
        serverCalls.get().success(function() {

        }).error(function() {

        });
      },
      post: function(isSuccess) {
        serverCalls.post().success(function() {

        }).error(function() {

        });
      },
      delete: function(isSuccess) {
        serverCalls.delete().success(function() {

        }).error(function() {

        });
      },
      put: function(isSuccess) {
        serverCalls.put().success(function() {

        }).error(function() {

        });
      }
    }
  }]).factory('serverCalls', function($http) {
    return {
      getAll: function(_successCb, _failureCb) {
        return $http.get({
          url: 'api/employees',
          method: 'GET',
        });
      },
      add: function(data) {
        return $http({
          method: 'POST',
          url: 'api/employees/',
          data: data
        });
      },
      remove: function(id, data) {
        return $http({
          method: 'DELETE',
          url: 'api/employees/' + id,
          data: data
        });
      }
    }
  });
