(function () {
  'use strict';
  angular.module("FilterModule", [])
  .controller("FilterController", FilterController);
  FilterController.$inject['$scope'];
  function FilterController($scope) {
      $scope.name = "ramesh";
      $scope.stateofBeing = "hungry";
      $scope.sayHello = function () {
        return "Ramesh likes to eat fruits at night"
      };
      $scope.feedRamesh = function () {
        $scope.stateofBeing = "fed";
      };

   }
})();
