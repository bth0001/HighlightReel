'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GoalAddCtrl
 * @description
 * # GoalAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GoalAddCtrl', function ($scope, Goal, $location) {
    $scope.goal = {};
    $scope.saveGoal = function() {
      Goal.post($scope.goal).then(function() {
        $location.path('/goals');
      });
    };
  });
