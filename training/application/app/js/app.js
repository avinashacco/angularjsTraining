var app = angular.module('hrmsPlus', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).when('/employee', {
    templateUrl: 'views/employeeList.html',
    controller: 'listEmployeeCtrl'
  }).when('/employee/:id', {
    templateUrl: 'views/employeeDetails.html',
    controller: 'viewEmployeeCtrl'
  }).when('/employee/:id/edit', {
    templateUrl: 'views/employeeAdd.html',
    controller: 'editEmployeeCtrl'
  }).when('/employee/add', {
    templateUrl: 'views/employeeAdd.html',
    controller: 'addEmployeeCtrl'
  }).when('/query', {
    templateUrl: 'views/queryList.html',
    controller: 'addPatientCtrl'
  }).when('/query/:id', {
    templateUrl: 'views/queryDetails.html',
    controller: 'addPatientCtrl'
  }).when('/query/:id/edit', {
    templateUrl: 'views/queryAdd.html',
    controller: 'addPatientCtrl'
  }).when('/query/add', {
    templateUrl: 'views/queryAdd.html',
    controller: 'addPatientCtrl'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
