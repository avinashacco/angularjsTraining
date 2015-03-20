angular.module('hrmsplus', [])
	.directive('button', [function (){
		return {
			restrict:'E',
			compile: function (element, attrs) {
				element.addClass('btn');
				if (attrs.type === 'submit') {
					element.addClass('btn-primary');
				}
			}
		};
	}])
	.directive('scopeTest1', function() {
		return {
			//scope: true, //default is false
			template: '<span>{{employee.employeeID}}</span><span class="note">scope property is false by default. Parent scope is used</span>',
			link: function (scope, element, attrs) {
				console.log(scope);
			}
		};
	})
	.directive('scopeTest2', function() {
		return {
			scope: true,
			template: '<span>{{employee.employeeID}}</span><span class="note">scope is true, directive scope inheriting from parent scope is created. </span>',
			link: function (scope, element, attrs) {
				console.log(scope);
			}
		};
	})
	.directive('scopeTest3', function() {
		return {
			scope: {
				employee: '='
			},
			template: '<span>{{employee.employeeID}}</span><span class="note">A custom scope is specified. Since property is not defined, it does not exist in new scope. Imp for reusable components, which would otherwise break if parent changes incompatibly.</span>'
		};
	})
	.directive('scopeTest4', function() {
		return {
			scope: {
				firstName: '@',
				employee: '=',
				age: '=',
				gender: '@',
				employeeID: '='
			},
			template: '<span>EmployeeID: {{employeeID}}</span>, <span>First Name: {{firstName}}</span><span class="note">A custom scope is specified. Since property is not defined, it does not exist in new scope.</span>',
			link: function (scope, element, attrs) {
				console.log(scope);
			}
		};
	})
	.directive('scopeTest5', function() {
		return {
			scope: {
				handler: '&'
			},
			template: '<span><button ng-click="handler()">Click handler with &amp;</button></span><span class="note">A custom scope is specified. Since property is not defined, it does not exist in new scope.</span>',
			link: function (scope, element, attrs) {
				console.log(scope);
			}
		};
	})
	.directive('requireTest1', function() {
		return {
			require: 'ngModel', //Mandatory.. '?ngModel' makes dependency optional. '^ngModel' looks for first ngModel up the hierarchy
			//automatically injects ngModelController as 4th param. Multiple required directives are added, an array of controllers is passed.
			link: function (scope, element, attrs, ngModelController) {
				var validate = function (input) {					
					var valid = input && input.length > 3;
					ngModelController.$setValidity('Min length must be 3', valid);
					if (valid) {
						return input;
					}
					return undefined;
				}

				ngModelController.$parsers.push(validate);
			}
		};
	})
	.directive('alert1', function() {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				type: '=',
				close: '&'
			},
			template: '<div class="alert alert-{{type}}">' + 
			'<button type="button" class="close" ng-click="close()">&times;</button>' + 
			'<div ng-transclude></div>' +
			'</div>'
		};
	})
	.directive('alert2', function() {
		return {
			restrict: 'E',
			replace: true,
			transclude: 'element',
			scope: {
				type: '=',
				close: '&'
			},
			template: '<div class="alert alert-{{type}}">' + 
			'<button type="button" class="close" ng-click="close()">&times;</button>' + 
			'<div ng-transclude></div>' +
			'</div>'
		};
	})
	.directive('accordion', function () {
		return {
			restrict: 'E',
			controller: 'AccordionController',
			template: '',
			link: function (scope, element, attrs) {
				element.addClass('accordion');
			}
		};
	})
	.directive('accordionGroup', function () {
		return {
			require: '^accordion',
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="accordion-group"><div class="accordion-heading">'
				+ '<a class="accordion-toggle" ng-click="isOpen=!isOpen">{{heading}}</a>'
				+ '<div class="accordion-body" ng-show="isOpen"><div class="accordion-inner" ng-transclude></div></div>',
			scope: {
				heading: '@'
			},

			link: function (scope, element, attrs, accordionController) {
				accordionController.addGroup(scope);
				scope.isOpen = false;
				scope.$watch('isOpen', function (value) {
					if (value) {
						accordionController.closeOthers(scope);
					}
				});
			}

		};
	})
	.controller('AccordionController', ['$scope', function ($scope) {
		this.groups = []; //Why this?? //Array of all group scopes.

		this.closeOthers = function (openGroup) {
			angular.forEach(this.groups, function(group){
				if (group !== openGroup) {
					group.isOpen = false;
				}
			});
		};

		this.addGroup = function (newGroup) {
			var that = this;
			this.groups.push(newGroup);
			newGroup.$on('$destroy', function () {
				that.removeGroup(newGroup);
			})
		};

		this.removeGroup = function (groupScope) {
			var index = this.groups.indexOf(groupScope);
			if (index != -1) {
				this.groups.splice(index, 1);
			}
		};

	}])
	.controller('AppController', ['$scope', '$sce', function($scope, $sce){
		$scope.appName = 'Angular JS Training Application - Building Custom Directives';		

		$scope.employee = {
			employeeID: 'ID1',
			firstName: 'FN1',
			lastName: 'LN1',			
			age: 22,
			gender: 'Male'

		};		

		$scope.alert = {
			type:'error',
			msg: 'This is a test alert'
		};

		$scope.closeAlert = function () {
			alert('closeAlert clicked');
		};

		$scope.employee.name = function () {
			return $scope.employee.firstName +  ', ' + $scope.employee.lastName;
		};

		$scope.helloEmployee = function (emp) {
			alert ('Hello ' + emp.employeeID);
		}
	}]);


// var directiveDiagramRects = [
// 	{x: 0, y: 0, width: 500, height: 220},
// 	{x: 10, y: 10, width: 200, height: 200},
// 	{x: 250, y: 10, width: 200, height: 200}
// ]
// var svg = d3.select('#directivesDiagram').style({
//     		height: 300,
//     		width: 600
//     	})
// svg.selectAll('rect')
// 	.data(directiveDiagramRects)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		x: function(d) {
// 			return d.x;
// 		},
// 		y: function(d) {
// 			return d.y;
// 		},
// 		width: function(d) {
// 			return d.width;
// 		},
// 		height: function(d) {
// 			return d.height;
// 		}
// 	}).style({
// 		stroke: '#000000',
// 		fill: 'none'
// 	});