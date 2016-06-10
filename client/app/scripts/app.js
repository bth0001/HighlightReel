'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/goals', {
        templateUrl: 'views/goals.html',
        controller: 'GoalsCtrl'
      })
      .when('/create/goal', {
        templateUrl: 'views/goal-add.html',
        controller: 'GoalAddCtrl'
      })
      .when('/goal/:id', {
        templateUrl: 'views/goal-view.html',
        controller: 'GoalViewCtrl'
      })
      .when('/goal/:id/delete', {
        templateUrl: 'views/goal-delete.html',
        controller: 'GoalDeleteCtrl'
      })
      .when('/goal/:id/edit', {
        templateUrl: 'views/goal-edit.html',
        controller: 'GoalEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('GoalRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Goal', function(GoalRestangular) {
    return GoalRestangular.service('goal');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
