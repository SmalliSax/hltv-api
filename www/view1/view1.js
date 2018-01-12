'use strict';

angular.module('myApp.view1', ['ngRoute', 'angular-web-notification'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope','$http', function ($scope, $http) {

 $scope.getDetails = function (index, matches) {
    console.log("You clicked: " + matches.event); // this works fine.
    $scope.myChoice = event; // ReferenceError: myChoice is not defined

    console.log($scope.myChoice);
  }


	$http.get("http://hltv-api.herokuapp.com/v1/matches?filter=upcoming")
	.success(function(response) {

		$scope.details = response;

		//Inititate empty array
		$scope.allMatches = [];

		//Loop through the JSON data response
		angular.forEach($scope.details, function(item){
			$scope.allMatches.push(item);
			console.log($scope.allMatches)
		})

	});



}]);


