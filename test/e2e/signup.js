describe('Controller: SignupCtrl', function () {
	
	it('success message should not be shown from start', function() {
		
		element(by.id('successMessage')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
	});
	
});
