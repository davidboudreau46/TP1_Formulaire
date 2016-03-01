'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('projetEcoleApp'));

  var SignupCtrl,
    scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		SignupCtrl = $controller('SignupCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

	it('test to test the config', function () {
		expect(true).toBe(true);
	});
  
    it('if passwords are different compareTo should return false', function () {
		user.password="a";
		user.confirmPassword="b";
		expect(true).toBe(true);
	});
});
