'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GoalDeleteCtrl
 * @description
 * # GoalDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GoalDeleteCtrl', function (
    $scope,
    $routeParams,
    Goal,
    $location
  ) {
    $scope.goal = Goal.one($routeParams.id).get().$object;
    $scope.deleteGoal = function() {
      $scope.goal.remove().then(function() {
        $location.path('/goals');
      });
    };
    $scope.back = function() {
      $location.path('/goal/' + $routeParams.id);
    };
  });
