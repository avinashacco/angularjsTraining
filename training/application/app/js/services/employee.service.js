'use strict';

angular.module('hrmsPlus')
  .factory('employee', function($http) {
    return {
      getAll: function(_successCb, _failureCb) {
        return $http({
          url: 'api/employees',
          method: 'GET',
        });
      },
      get: function(id) {
        return $http({
          url: 'api/employees/' + id,
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
      edit: function(id, data) {
        return $http({
          method: 'POST',
          url: 'api/employees/' + id,
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
