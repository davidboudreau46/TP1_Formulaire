'use strict';

/**
 * @ngdoc function
 * @name projetEcoleApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the projetEcoleApp
 */
  
angular.module('projetEcoleApp')
	.controller('SignupCtrl', function ($scope) {
		$scope.sendForm= function(){
			$scope.sentForm=true;
		};
	})
	.directive('compareTo', function() {
		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=compareTo'
			},
			link: function(scope, element, attributes, ngModel) {
             
				ngModel.$validators.compareTo = function(modelValue) {
					return modelValue === scope.otherModelValue;
				};
 
				scope.$watch('otherModelValue', function() {
					ngModel.$validate();
				}); 
			}
		};
	})
	.directive('popover', function(){
		return{
			scope: {
				textToPopUp: '@text',
				iconToShow: '@icon'
			},
			templateUrl: '/scripts/controllers/popover.html'
		};
		
	});
	
	
	
	
	

