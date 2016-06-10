'use strict';

describe('Controller: GoalsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var GoalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalsCtrl = $controller('GoalsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalsCtrl.awesomeThings.length).toBe(3);
  });
});
