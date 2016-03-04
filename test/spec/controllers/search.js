'use strict';

describe('Controller: SearchCtrl', function () {

	var $httpBackend, $rootScope, createController, authRequestHandler;

	// load the controller's module
	beforeEach(module('projetEcoleApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		authRequestHandler = $httpBackend.when('GET', '/auth')
		.respond({userId: 'userX'}, {'A-Token': 'xxx'});
		$rootScope = $injector.get('$rootScope');
		var $controller = $injector.get('$controller');
		createController = function() {
			return $controller('SearchCtrl', {'$scope' : $rootScope });
		};
	}));

	it('should fetch authentication token', function() {
		$httpBackend.expectGET('/auth');
		var controller = createController();
		$httpBackend.flush();
	});
});
