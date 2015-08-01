var app = angular.module('app', []);
 
 app.controller("firstCtrl", function ($scope) {
	 $scope.handleClick = function (msg) {
		 $scope.$broadcast('eventNameBroadcast', { message: msg });
		 $scope.msg = "";
	 };
	 $scope.$on('eventNameEmit', function (event, args) {
		 $scope.emitMessage = args.message;
		 console.log($scope.message);
	 });
 
 });
 
 app.controller("secondCtrl", function ($scope) {
	 $scope.$on('eventNameBroadcast', function (event, args) {
		 $scope.broadcastMessage = args.message;
		 console.log($scope.message);
	 });
	 $scope.handleClick = function (msg) {
	 	$scope.$emit('eventNameEmit', { message: msg });
	 	$scope.msg2 = "";
	 };
 });

 app.controller("thirdCtrl", function ($scope) {
	 $scope.$on('eventNameBroadcast', function (event, args) {
		 $scope.broadcastMessage = args.message;
		 console.log($scope.message);
	 });
	 $scope.handleClick = function (msg) {
	 	$scope.$emit('eventNameEmit', { message: msg });
	 	$scope.msg3 = "";
	 };
 });