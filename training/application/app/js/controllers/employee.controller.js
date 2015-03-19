'use strict';

angular.module('hrmsPlus')
  .controller('addEmployeeCtrl', function($scope, employee) {


  }).controller('editEmployeeCtrl', function($scope, employee) {

  }).controller('viewEmployeeCtrl', function($scope, employee) {
    $scope.data = {
      query: {}
    }
    queries.get($routeParams.id).success(function(response) {
      $scope.data.query = response;
    });
  }).controller('listEmployeeCtrl', function($scope, employee) {
    $scope.data = {
      employees: []
    };
    employee.getAll().success(function(response) {
      console.log(response);
      $scope.data.employees = response.data;
    });

  });
