'use strict';

angular.module('hrmsPlus')
  .controller('menuCtrl', function ($scope,$location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
});