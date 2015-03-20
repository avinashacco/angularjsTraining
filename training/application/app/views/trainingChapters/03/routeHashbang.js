var app = angular.module('hashbangModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'template1.html',
    controller: 'mainController'
  }).when('/view2/:id', {
    templateUrl: 'template2.html',
    controller: 'mainController'
  }).when('/view2/:id/:id', {
    templateUrl: 'template2.html',
    controller: 'mainController'
  }).otherwise({
    redirectTo: '/view1'
  });
}])
.controller("mainController", function($scope, $routeParams) {
  $scope.routeParams = $routeParams;
});
