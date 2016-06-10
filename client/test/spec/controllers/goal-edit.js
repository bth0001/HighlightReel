'use strict';

describe('Controller: GoalEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var GoalEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalEditCtrl = $controller('GoalEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalEditCtrl.awesomeThings.length).toBe(3);
  });
});
