'use strict';

angular.module('hrmsPlus')
  .factory('employee', function($http) {
    return {
      getAll: function() {
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
          headers: {
            'Content-Type': undefined
          },
          data: data
        });
      },
      edit: function(id, data) {
        return $http({
          method: 'POST',
          url: 'api/employees/' + id,
          headers: {
            'Content-Type': undefined
          },
          data: data
        });
      }

    }
  });
