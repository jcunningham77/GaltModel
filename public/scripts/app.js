(function() {
	'use strict';
	angular.module('galtModel',['ngRoute', 'ngCookies',  'ngMaterial'])
	.config(function($routeProvider){
		$routeProvider

		   .when('/FileUpload', {
		    templateUrl: 'templates/fileUpload.html',
		    controller: 'fileUploadController'
		    	    
			})
			.when('/Players', {
		    templateUrl: 'templates/players.html',
		    controller: 'playersController'
		    	    
		  })
		  .otherwise({ redirectTo: '/' });	
		})
})();

