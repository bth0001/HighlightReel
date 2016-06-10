'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GoalViewCtrl
 * @description
 * # GoalViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GoalViewCtrl', function (
    $scope,
    $routeParams,
    Goal
  ) {
    $scope.viewGoal = true;
    $scope.goal = Goal.one($routeParams.id).get().$object;
  });
