angular.module('hrmsplus', [])
	.controller('AppController', ['$scope', function($scope){
		
		$scope.controllerName = "AppController";
		$scope.contacts =["ashu@accolite.com"];
		$scope.add = function(){
			$scope.contacts.push($scope.contact);
			$scope.contact ="";
		}
	}])