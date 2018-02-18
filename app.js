(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  
  $scope.checkItems = function () {
    $scope.message = countItems($scope.items);
  };
    
  function countItems (items) {
    
    var n = items.length;
    
    if (n == 0 ) {
       return "Please enter data first";
    }
    else {
        
        var arrayOfStrings = items.split(',');
        n = arrayOfStrings.length;
        
        if (n <= 3) {
            return 'Enjoy!';
        } 
        else {
            return 'Too much!';
        }
    } 

  }

}

})();