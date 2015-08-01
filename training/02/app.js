angular.module('hrmsplus', [])
  .controller('AppController', ['$scope', '$sce', function($scope, $sce) {
    $scope.appName = 'Directives and Filters';


    var getKeyboardEventResult = function(keyEvent, keyEventDesc) {
      return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
    };

    $scope.directiveData = {
      array:[1,2,3,4,5],
      includeFrag2: true,
      ngBindData: 'NG Bind Data',
      interpolationData: 'Interpolation Data',
      htmlData: '<b>I am bold</b>',
      clickEventText: 'Click Me',
      clickEventCount: 0,
      dbClickEventText: 'Double Click Me',
      dbClickEventCount: 0,
      mouseLocationEventText: 'Mouse out',
      mousePressEventText: 'Mouse not pressed',
      mouseMoveEventText: 'Mouse did not enter',
      mouseOverEventText: 'Mouse not over',
      onKeyDownResult: '',
      onKeyUpResult: '',
      onKeyPressResult: '',
      editValue: ''
    };
    $scope.directiveFunction = {
      clickEvent: function() {
        $scope.directiveData.clickEventCount += 1;
        if ($scope.directiveData.clickEventCount == 1) {
          $scope.directiveData.clickEventText = 'I am clicked';
        } else {
          $scope.directiveData.clickEventText = 'I am clicked again';
        }
      },
      addArrayItem: function(){
        $scope.directiveData.array.push($scope.directiveData.array.length+1);
      },
      dbClickEvent: function() {
        $scope.directiveData.dbClickEventCount += 1;
        if ($scope.directiveData.dbClickEventCount == 1) {
          $scope.directiveData.dbClickEventText = 'I am double clicked';
        } else {
          $scope.directiveData.dbClickEventText = 'I am double clicked again';
        }
      },
      mouseenter: function() {
        $scope.directiveData.mouseLocationEventText = 'Mouse entered';
      },
      mouseleave: function() {
        $scope.directiveData.mouseLocationEventText = 'Mouse left';
      },
      mousedown: function() {
        $scope.directiveData.mousePressEventText = 'Mouse Down';
      },
      mouseup: function() {
        $scope.directiveData.mousePressEventText = 'Mouse up';
      },
      mousemove: function(e) {
        var x = e.clientX;
        var y = e.clientY;
        $scope.directiveData.mouseMoveEventText = 'Mouse at (' + x + ',' + y + ')';
      },
      mouseover: function() {
        $scope.directiveData.mouseOverEventText = 'Mouse Over';
      },
      mouseleaveOver: function() {
        $scope.directiveData.mouseOverEventText = 'Mouse is not here';
      },
      onKeyDown: function($event) {
        $scope.directiveData.onKeyDownResult = getKeyboardEventResult($event, "Key down");
      },
      onKeyUp: function($event) {
        $scope.directiveData.onKeyUpResult = getKeyboardEventResult($event, "Key up");
      },
      onKeyPress: function($event) {
        $scope.directiveData.onKeyPressResult = getKeyboardEventResult($event, "Key press");
      },
      onEditChange: function() {
        $scope.directiveData.onEditChangeResult = "The value is '" + $scope.directiveData.editValue + "'";
      },
    };

    $scope.filterDate = {
      stringData: "Angular JS Tutorial",
      dateData: new Date(),
      numberData: 20032015.033,
      areAllPeopleSelected: false,
      objProp1AgeFilter:'',
      objProp1LastNameFilter:'',
      people: [{
        firstName: "John",
        lastName: "Doe",
        age: 10
      }, {
        firstName: "Bob",
        lastName: "Smith",
        age: 40
      }, {
        firstName: "Jack",
        lastName: "White",
        age: 30
      }, {
        firstName: "Michael",
        lastName: "Green",
        age: 20
      }],
      selectablePeople: [{
        firstName: "John",
        lastName: "Doe",
        isSelected: false
      }, {
        firstName: "Bob",
        lastName: "Smith",
        isSelected: false
      }, {
        firstName: "Jack",
        lastName: "White",
        isSelected: false
      }, {
        firstName: "Michael",
        lastName: "Green",
        isSelected: false
      }]
    };

    $scope.directiveData.htmlDataSafe = $sce.trustAsHtml($scope.directiveData.htmlData)

  }]).filter("customCurrency", function(numberFilter) {
    function isNumeric(value) {
      return (!isNaN(parseFloat(value)) && isFinite(value));
    }
    
    return function(inputNumber, currencySymbol, decimalSeparator, thousandsSeparator, decimalDigits) {
      if (isNumeric(inputNumber)) {
        currencySymbol = (typeof currencySymbol === "undefined") ? "$" : currencySymbol;
        decimalSeparator = (typeof decimalSeparator === "undefined") ? "." : decimalSeparator;
        thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "," : thousandsSeparator;
        decimalDigits = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 2 : decimalDigits;

        if (decimalDigits < 0) decimalDigits = 0;
        var formattedNumber = numberFilter(inputNumber, decimalDigits);
        var numberParts = formattedNumber.split(".");
        numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);
        var result = currencySymbol + numberParts[0];
        if (numberParts.length == 2) {
          result += decimalSeparator + numberParts[1];
        }
        return result;
      } else {
        return inputNumber;
      }
    };
  });
