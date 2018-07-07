'use strict';
angular.module("galtModel")
.controller('playersController', function ($scope, $http) {

  $scope.name = "Players Controller";

  $http.get('/api/players/')
    .then(function (res) {
        console.log("in success callback after API call");
        $scope.players = res.data;
        // console.log($scope.savedPicks);
    }, function (err) {
        console.log("in error callback after API call");
        $scope.error_message = err;
        console.log(err);
  });
  
});