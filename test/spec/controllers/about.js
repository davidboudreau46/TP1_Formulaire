'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('projetEcoleApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('test to test the config', function () {
    expect(true).toBe(true);
  });
});
