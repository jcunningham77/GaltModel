angular.module('galtModel').controller('navBarController', function ($scope) {
    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
      $scope.status = "Goto " + page;
    };
});