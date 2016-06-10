'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, Goal, $location) {
    $scope.goal = {};
    $scope.saveGoal = function() {
      Goal.post($scope.goal).then(function() {
        $location.path('/goals');
      });
    };
  });
