'use strict';

angular.module('myApp.view1', ['ngRoute', 'angular-web-notification'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope','$http', function ($scope, $http) {


  $scope.loading = true;
	$http.get("https://www.hltv-api.com/v1/matches?filter=upcoming")
	.success(function(response) {

		$scope.details = response;

		//Inititate empty array
		$scope.allMatches = [];
		$scope.loading = false;
		//Loop through the JSON data response
		angular.forEach($scope.details, function(item){
			$scope.allMatches.push(item);
			console.log($scope.allMatches)
		})
	});


			$http.get("https://www.hltv-api.com/v1/news?limit=5")
	.success(function(response) {

		$scope.details = response;

		//Inititate empty array
		$scope.allNews = [];
		//Loop through the JSON data response
		angular.forEach($scope.details, function(item){
			$scope.allNews.push(item);
			console.log($scope.allNews)
		})


	});

}]);


