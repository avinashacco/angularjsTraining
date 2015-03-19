'use strict';

angular.module('hrmsPlus')
  .controller('addEmployeeCtrl', function($scope, employee, $location) {
    $scope.data = {
      title: 'Add',
      subtitle: 'Enter',
      employee: {
        "currentEmploymentInfo": {
          "jobCategory": "",
          "designation": ""
        },
        "phone": '',
        "qualification": {
          "degree": "",
          "institution": "",
          "finalScore": ""
        },
        "email": {
          "work": "",
          "personal": ''
        },
        "personalDetails": {
          "gender": "",
          "name": {
            "first": "",
            "last": ""
          }
        }
      },
      submit: function(data) {
        console.log(data);
        employee.add(data).success(function(response) {
          $location.path('/employee');
        }).error(function(error) {
          alert(error);
        });
      }
    };



  }).controller('editEmployeeCtrl', function($scope, employee, $routeParams, $location) {
    $scope.data = {
      title: 'Edit',
      subtitle: 'Modify',
      employee: {
        "currentEmploymentInfo": {
          "jobCategory": "",
          "designation": ""
        },
        "phone": '',
        "qualification": {
          "degree": "",
          "institution": "",
          "finalScore": ""
        },
        "email": {
          "work": "",
          "personal": ''
        },
        "personalDetails": {
          "gender": "",
          "name": {
            "first": "",
            "last": ""
          }
        }
      },
      submit: function(data) {
        console.log(data);
        employee.edit($routeParams.id, data).success(function(response) {
          $location.path('/employee');
        }).error(function(error) {
          alert(error);
        });
      }
    };
    employee.get($routeParams.id).success(function(response) {
      $scope.data.employee = response;
    });
  }).controller('viewEmployeeCtrl', function($scope, employee, $routeParams) {
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
    $scope.queryDetails = function(id) {
      $location.path('/employee/' + id);
    }
    employee.getAll().success(function(response) {
      $scope.data.employees = response.data;
    });
    $scope.remove = function(id, event) {
      employee.remove(id).success(function(response) {
        alert(response);
        employee.getAll().success(function(response) {
          $scope.data.employees = response.data;
        });
      }).error(function(error) {
        alert(error);
      });
      event.stopPropagation();
    }

  });
