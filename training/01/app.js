angular.module('hrmsplus', [])
	.controller('AppController', ['$scope', function($scope){
		$scope.appName = 'Angular JS Training Application';

		$scope.metadata = {
			bus: [
				{name: 'Healthcare'},
				{name: 'Telecom'},
				{name: 'Banking'},
				{name: 'New Biz'}
			]
		}
	}]);