'use strict';

var app = angular.module('myApp.view2', ['ngRoute', 'angular-web-notification'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

app.controller('View2Ctrl', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {

    $http.get("http://hltv-api.herokuapp.com/v1/matches?filter=live")
    .success(function(response) {

        $scope.details = response;

        //Inititate empty array
        $scope.liveMatches = [];

        //Loop through the JSON data response
        angular.forEach($scope.details, function(item){
            $scope.liveMatches.push(item);
            console.log($scope.liveMatches)
        })



    });

//     'use strict';

//     $scope.title = 'G2 vs FaZe | 18:00 | bo3';
//     $scope.text = 'Match is about to start! Link: hltv.org';
// }]).directive('showButton', ['webNotification', function (webNotification) {
//     'use strict';

//     return {
//         restrict: 'C',
//         scope: {
//             notificationTitle: '=',
//             notificationText: '='
//         },
//         link: function (scope, element) {
//             element.on('click', function onClick() {
//                 webNotification.showNotification(scope.notificationTitle, {
//                     body: scope.notificationText,
//                     onClick: function onNotificationClicked() {
//                         console.log('Notification clicked.');
//                     },
//                     autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
//                 }, function onShow(error, hide) {
//                     if (error) {
//                         window.alert('Unable to show notification: ' + error.message);
//                     } else {
//                         console.log('Notification Shown.');

//                         setTimeout(function hideNotification() {
//                             console.log('Hiding notification....');
//                             hide(); //manually close the notification (you can skip this if you use the autoClose option)
//                         }, 5000);
//                     }
//                 });
//             });
//         }
//     };
}]);