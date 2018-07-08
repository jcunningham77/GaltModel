'use strict';
angular.module("galtModel")
.controller('playersController', function ($scope, $http, rx, $timeout) {

    $scope.name = "Players Controller";
    $scope.isLoading = true;
    $scope.players = [];
    $scope.errorMessage = '';

    var playersPromiseObservable = Rx.Observable
        .fromPromise($http({
            url: "/api/players/",
            method: "GET"
        }))
        .safeApply($scope);

    playersPromiseObservable.subscribe(response=>{                 
                    $scope.isLoading = false;
                    $scope.players = response.data;

                },
                err=>{
                    $scope.errorMessage = 'oopps';
                    console.log('rx observable error');
                    console.log(err);
                },
                ()=>{
                    console.log('rx observable completed');
                    
                }
        );
});