var app = angular.module('hrmsPlus', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).when('/employee', {
    templateUrl: 'views/employee/employeeList.html',
    controller: 'listEmployeeCtrl'
  }).when('/employee/:id', {
    templateUrl: 'views/employee/employeeDetails.html',
    controller: 'viewEmployeeCtrl'
  }).when('/employee/:id/edit', {
    templateUrl: 'views/employee/employeeAdd.html',
    controller: 'editEmployeeCtrl'
  }).when('/employee/add', {
    templateUrl: 'views/employee/employeeAdd.html',
    controller: 'addEmployeeCtrl'
  }).when('/query', {
    templateUrl: 'views/query/queryList.html',
    controller: 'addQueryCtrl'
  }).when('/query/:id', {
    templateUrl: 'views/query/queryDetails.html',
    controller: 'editQueryCtrl'
  }).when('/query/:id/edit', {
    templateUrl: 'views/query/queryAdd.html',
    controller: 'viewQueryCtrl'
  }).when('/query/add', {
    templateUrl: 'views/query/queryAdd.html',
    controller: 'listQueryCtrl'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
