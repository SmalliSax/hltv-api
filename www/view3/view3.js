'use strict';

var app = angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

app.controller('View3Ctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.loading = true;
    $http.get("https://www.hltv-api.com/v1/results?limit=10")
    .success(function(response) {

        $scope.details = response;

        //Inititate empty array
        $scope.resultMatches = [];
        $scope.loading = false;

        //Loop through the JSON data response
        angular.forEach($scope.details, function(item){
            $scope.resultMatches.push(item);
            console.log($scope.resultMatches)
        })



    });

}]);