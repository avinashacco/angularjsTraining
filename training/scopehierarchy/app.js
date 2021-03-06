angular.module('hrmsplus', [])
	.controller('parentController', ['$scope','$rootScope', function($scope,$rootScope){
		
		$scope.controllerName = "ParentController";
		$scope.contact = "parent";
		$scope.destroyVar = function(){
			delete $scope.contact;
		}
	}])
	.controller('AppController', ['$scope','$rootScope', function($scope,$rootScope){
		
		$scope.controllerName = "Child Controller";
		$scope.destroyVar = function(){
			delete $scope.contact;
		}
		
	}])
	.controller('AppController2',['$scope',function($scope){
		$scope.controllerName = "Child Controller 2";
		$scope.destroyVar= function(){
			delete $scope.contact;
		}
	}])
	.directive('hoverClass', ['$parse', function($parse){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
				iElm.bind('mouseenter', function(e) {
		        	iElm.addClass(iAttrs.hoverClass);
		      	});

				iElm.bind('mouseleave', function(e) {
		        	iElm.removeClass(iAttrs.hoverClass);
		      	});

			}
		};
	}]);