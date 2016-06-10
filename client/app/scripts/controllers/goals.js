'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GoalsCtrl
 * @description
 * # GoalsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GoalsCtrl', function ($scope, Goal) {
    $scope.goals = Goal.getList().$object;
  });
