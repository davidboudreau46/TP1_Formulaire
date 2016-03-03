'use strict';

/**
 * @ngdoc function
 * @name projetEcoleApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the projetEcoleApp
 */

angular.module('projetEcoleApp')
  .controller('SearchCtrl', function ($scope, $http) {
    $scope.Search = function(){
      $http({
        method: 'GET',
        url: 'http://omdbapi.com/?s=' + document.getElementById('keywordInput').value + '&type=movie'
      }).then(function successCallback(response) {
        document.getElementById('searchResult').style = "display: inline"
        $scope.movies = response.data.Search;
        for(var i = 0; i < $scope.movies.length; i++){
          if($scope.movies[i].Poster === "N/A"){
            $scope.movies[i].Poster = "images/posterNotAvailable.jpg";
          }
        }
      }, function errorCallback() {
        $scope.movies = [{Title : "Erreur de connection"}];
      });
    }
  });
