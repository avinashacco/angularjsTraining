angular.module('hrmsplus', [])
	.controller('AppController', ['$scope', '$compile', '$sce', '$timeout', '$rootScope', 
		function($scope, $compile, $sce, $timeout, $rootScope){
		$scope.appName = 'Angular JS Training Application';

		var testScope1 = function () {
			var newScope = $scope.$new();
			$scope.newScopeIsChild = (newScope.$parent === $scope);

			$scope.parentProp1 = 'Parent Prop 1';

			$scope.parentProp1Same = ($scope.parentProp1 === newScope.parentProp1);

			newScope.childProp1 = 'Child Property 1';

			newScope.parentProp1 = 'parentProp1 from newScope';

			$scope.getNewScope = function() {
				return newScope;
			};
			$scope.getScope = function() {
				return $scope;
			};
		};	


		var testCustomTempalteCompilation = function() {
			$scope.customCompileVar1 = 'Custom Compile Variable 1';

			var templateHtml = '<strong>{{customCompileVar1}}</strong>';
			var finalHtml = $compile(templateHtml)($scope);
			console.log(finalHtml);
			finalHtml.appendTo($('#customCompiledAndEvaluatedHtml'));

			$timeout(function () {
				$scope.customCompileVar1 = 'Modified after 1 second';
			}, 1000);
		};

		// var testEventBus1 = function () {
		// 	$rootScope.$on('emitEvent', function (event, emitEventPayload) {
		// 		console.log('Handling emitEvent in $rootScope', emitEventPayload);
		// 	});
		// 	$scope.$on('emitEvent', function (event, emitEventPayload) {
		// 		console.log('Handling emitEvent in $scope', emitEventPayload);
		// 	});

		// 	var grandChildScope = $scope.$new();
		// 	grandChildScope.$on('emitEvent', function (event, emitEventPayload) {
		// 		console.log('Handling emitEvent in grandChildScope', emitEventPayload);
		// 	});

		// 	$scope.$emit('emitEvent', {message: 'Emit event emitted at ' + new Date()});
		// };

		// var testEventBus2 = function () {
		// 	$rootScope.$on('broadcastEvent', function (event, emitEventPayload) {
		// 		console.log('Handling broadcastEvent in $rootScope', emitEventPayload);
		// 	});
		// 	$scope.$on('broadcastEvent', function (event, emitEventPayload) {
		// 		console.log('Handling broadcastEvent in $scope', emitEventPayload);
		// 	});

		// 	var grandChildScope = $scope.$new();
		// 	grandChildScope.$on('broadcastEvent', function (event, emitEventPayload) {
		// 		console.log('Handling broadcastEvent in grandChildScope', emitEventPayload);
		// 	});

		// 	$scope.$broadcast('broadcastEvent', {message: 'Broadcast event emitted at ' + new Date()});
		// };


		testScope1();
		testCustomTempalteCompilation();
		// testEventBus1();
		// testEventBus2();
	}]);