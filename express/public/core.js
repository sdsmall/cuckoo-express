// public/core.js
var cuckooApp = angular.module('cuckooApp', []);

cuckooApp.controller('mainController', function($scope){



  //$scope.$broadcast('timer-start');

  $scope.testVar = "TESTING TESTING"
  $scope.test = function () {
    console.log('TESTING');
  };
});

cuckooApp.controller('countdownClockController', function($scope, $countdownFactory, $interval){
  var endTime = Date.parse("2021/01/20");
  console.log(endTime.toString());

  var updateTime = function(endTime){
    var remainder = $countdownFactory.getRemainder(endTime);
    $scope.days = remainder.days;
    $scope.hours = remainder.hours;
    $scope.minutes = remainder.minutes;
    $scope.seconds = remainder.seconds;
  }

  $interval(updateTime, 1000);

});

cuckooApp.directive('countdownClock', function(){
  return {
      restrict : "E",
      templateUrl: "./countdownClock.html",
      controller:"countdownClockController"
  };
});

cuckooApp.factory('$countdownFactory', function(){

  // var getRemainder = function(endTime){
  //   var t = endTime - Date.parsnew Date();
  //
  //   var seconds = Math.floor( (t/1000) % 60 );
  //   var minutes = Math.floor( (t/1000/60) % 60 );
  //   var hours = Math.floor( (t/(1000*60*60)) % 24 );
  //   var days = Math.floor( t/(1000*60*60*24) );
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };
  // }

  var getRemainder = function(){
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 21, 2021 00:00:00").getTime();

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  return {
    getRemainder: getRemainder
  };
});

// function mainController($scope) {
//   $scope.days = "123";
//   $scope.hours = "45";
//   $scope.minutes = "67";
//   $scope.seconds = "89";
//
//   //$scope.$broadcast('timer-start');
//
//   $scope.testVar = "TESTING TESTING"
//   $scope.test = function () {
//     console.log('TESTING');
//   };

//}
