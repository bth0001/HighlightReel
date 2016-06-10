'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, Goal, $location) {
    $scope.goal = {};
    $scope.saveGoal = function() {
      Goal.post($scope.goal).then(function() {
        $location.path('/goals');
      });
    };
  });
