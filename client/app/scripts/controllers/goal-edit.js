'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GoalEditCtrl
 * @description
 * # GoalEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GoalEditCtrl', function (
    $scope,
    $routeParams,
    Goal,
    $location
  ) {
    $scope.editGoal = true;
    $scope.goal = {};
    Goal.one($routeParams.id).get().then(function(goal) {
      $scope.goal = goal;
      $scope.saveGoal = function() {
        $scope.goal.save().then(function() {
          $location.path('/goal/' + $routeParams.id);
        });
      };
    });
  });
