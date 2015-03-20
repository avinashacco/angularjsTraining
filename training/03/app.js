angular.module('hrmsplus', [])
  .controller('AppController', ['$scope', 'serverCalls', function($scope, serverCalls) {
    $scope.appName = 'Angular JS Training Application';

    $scope.httpServiceData = {
      getResult: '',
      postResult: '',
      putResult: '',
      deleteResult: '',
      postData: {
        'message': 'Sending data using post method'
      },
      putData: {
        'message': 'Sending data using put method'
      }
    };
    $scope.httpService = {
      get: function(isSuccess) {
        console.log(isSuccess);
        serverCalls.get(isSuccess).success(function(response) {
          $scope.httpServiceData.getResult = response;
        }).error(function(error) {
          $scope.httpServiceData.getResult = error;
        });
      },
      post: function(isSuccess, data) {
        serverCalls.post(isSuccess, data).success(function(response) {
          $scope.httpServiceData.postResult = response;
        }).error(function(error) {
          $scope.httpServiceData.postResult = error;
        });
      },
      delete: function(isSuccess) {
        serverCalls.delete(isSuccess).success(function(response) {
          $scope.httpServiceData.deleteResult = response;
        }).error(function(error) {
          $scope.httpServiceData.deleteResult = error;
        });
      },
      put: function(isSuccess, data) {
        serverCalls.put(isSuccess, data).success(function(response) {
          $scope.httpServiceData.putResult = response;
        }).error(function(error) {
          $scope.httpServiceData.putResult = error;
        });
      }
    }
  }]).factory('serverCalls', function($http) {
    return {
      get: function(isSuccess) {
        return $http.get('http://localhost:8089/api/serverCalls/' + isSuccess);
      },
      post: function(isSuccess, data) {
        return $http({
          method: 'POST',
          url: 'http://localhost:8089/api/serverCalls/' + isSuccess,
          data: data
        });
      },
      delete: function(isSuccess) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost:8089/api/serverCalls/' + isSuccess
        });
      },
      put: function(isSuccess, data) {
        return $http({
          method: 'PUT',
          url: 'http://localhost:8089/api/serverCalls/' + isSuccess,
          data: data
        });
      }
    }
  });
