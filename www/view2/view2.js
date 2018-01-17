'use strict';

var app = angular.module('myApp.view2', ['ngRoute', 'angular-web-notification'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

app.controller('View2Ctrl', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $scope.loading = true;
    $http.get("https://www.hltv-api.com/v1/matches?filter=live")
    .success(function(response) {

        $scope.details = response;

        //Inititate empty array
        $scope.liveMatches = [];
        $scope.loading = false;

        //Loop through the JSON data response
        angular.forEach($scope.details, function(item){
            $scope.liveMatches.push(item);
        })



    });
}]);