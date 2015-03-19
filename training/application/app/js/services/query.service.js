'use strict';

angular.module('hrmsPlus')
  .factory('queries', function($http) {
    return {
      getAll: function() {
        return $http({
          url: 'api/queries',
          method: 'GET',
        });
      },
      get: function(id) {
        return $http({
          url: 'api/queries/' + id,
          method: 'GET',
        });
      },
      add: function(data) {
        return $http({
          method: 'POST',
          url: 'api/queries/',
          data: data
        });
      },
      edit: function(id, data) {
        return $http({
          method: 'POST',
          url: 'api/queries/' + id,
          data: data
        });
      },
      remove: function(id, data) {
        return $http({
          method: 'DELETE',
          url: 'api/queries/' + id,
          data: data
        });
      }
    }
  });
