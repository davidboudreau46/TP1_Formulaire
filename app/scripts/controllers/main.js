'use strict';

/**
 * @ngdoc function
 * @name projetEcoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetEcoleApp
 */
angular.module('projetEcoleApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: 'http://omdbapi.com/?s=a*&type=movie&y=2016'
    }).then(function successCallback(response) {
      $scope.movies = response.data.Search;
      console.log(response);
    }, function errorCallback() {
      $scope.movies = [{Title : 'Erreur', Year : 'Erreur' }];
    });

    //$scope.movies = [{Title : "ok", Year : "2016"}];
    //$scope.movies = $http.get('http://omdbapi.com/?s=a*&y=2016');
  });
