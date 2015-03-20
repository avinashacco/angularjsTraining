var app = angular.module('hashbangModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).when('/view1', {
    templateUrl: 'template1.html',
    controller: 'listEmployeeCtrl'
  }).when('/view2/:id', {
    templateUrl: 'template2.html',
    controller: 'editEmployeeCtrl'
  }).when('/view2/:id/:id', {
    templateUrl: 'template2.html',
    controller: 'addEmployeeCtrl'
  }).otherwise({
    redirectTo: '/view1'
  });
}]);


angular.module("mainModule", ["ngRoute"])
  .provider("startupInfo", function() {
    var isHtml5Mode = false;
    var hashPrefix = "";
    var baseURL = "/code/examples/routing/02_RouteService/example";

    return {
      $get: function() {
        return {
          getBaseURL: function() {
            return baseURL;
          },
          getIsHtml5Mode: function() {
            return isHtml5Mode;
          },
          getHashPrefix: function() {
            return hashPrefix;
          }
        };
      },
      setURLsConfig: function(isHtml5ModeValue, hashPrefixValue) {
        isHtml5Mode = isHtml5ModeValue;
        hashPrefix = hashPrefixValue;
      }
    };
  })
  .provider("routesManager", function($routeProvider, startupInfoProvider) {
    var routesOutputScope;

    return {
      $get: function() {
        return {
          setOutputScope: function(outputScope) {
            routesOutputScope = outputScope;
          }
        };
      },
      configRoutes: function(baseRouteURL) {
        $routeProvider
          .when(baseRouteURL + "/theviews/viewone", {
            templateUrl: startupInfoProvider.$get().getBaseURL() + "/views/view1.html"
          })
          .when(baseRouteURL + "/theviews/viewtwo", {
            templateUrl: function() {
              return startupInfoProvider.$get().getBaseURL() + "/views/view2.html";
            }
          })
          .when(baseRouteURL + "/theviews/viewthree/:param1/subview1/:param2*\/subview2/", {
            templateUrl: function(params) {
              routesOutputScope.view3 = {
                param1: params.param1,
                param2: params.param2
              };
              return startupInfoProvider.$get().getBaseURL() + "/views/view3.html";
            }
          })
          .otherwise({
            redirectTo: baseRouteURL + "/theviews/defaultview"
          });
      }
    };
  })
  .controller("mainController", function($scope, startupInfo, routesManager) {
    $scope.controllerName = "mainController";
    if (startupInfo.getIsHtml5Mode()) {
      $scope.localLinksPrefix = startupInfo.getBaseURL() + "/html5";
    } else {
      $scope.localLinksPrefix = "#" + startupInfo.getHashPrefix();
    }
    routesManager.setOutputScope($scope);
  })
  .controller("additionalController1", function($scope, $routeParams) {
    $scope.controllerName = "additionalController1";
    $scope.param1Value = $routeParams.param1;
    $scope.param2Value = $routeParams.param2;
  })
  .controller("additionalController3", function($routeParams) {
    this.controllerName = "additionalController3";
    this.param1Value = $routeParams.param1;
    this.param2Value = $routeParams.param2;
  })
  .controller("additionalController4", function($scope, routingDelay, routeParamsAlias, customFunction) {
    $scope.controllerName = "additionalController4";
    $scope.delayTime = routeParamsAlias.delayTime;
    $scope.routingDelayResult = routingDelay;
    $scope.customFunctionResult = customFunction;
  });
