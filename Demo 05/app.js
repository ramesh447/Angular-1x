(function () {
'use strict';
angular.module('myFirstApp', [])
.controller('myFirstController', function ($scope) {
   $scope.name = "ramesh mullapudi";
   $scope.sayHello = function () {
     return "mullapudi";
   }
});
})();
