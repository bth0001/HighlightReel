'use strict';

describe('Controller: GoalAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var GoalAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalAddCtrl = $controller('GoalAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalAddCtrl.awesomeThings.length).toBe(3);
  });
});
