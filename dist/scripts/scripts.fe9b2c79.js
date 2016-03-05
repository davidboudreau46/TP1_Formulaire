"use strict";angular.module("projetEcoleApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/signUp",{templateUrl:"views/signup.html",controller:"SignupCtrl",controllerAs:"signUp"}).when("/search",{templateUrl:"views/search.html",controller:"SearchCtrl",controllerAs:"search"}).otherwise({redirectTo:"/"})}]).controller("HeaderController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("projetEcoleApp").controller("MainCtrl",["$scope","$http",function(a,b){var c="bcdfghjklmnpqrstvwxz",d="aeiouy";b({method:"GET",url:"http://omdbapi.com/?s="+c.charAt(Math.floor(Math.random()*c.length))+d.charAt(Math.floor(Math.random()*d.length))+"*&type=movie&y=2016"}).then(function(b){a.movies=b.data.Search;for(var c=0;c<a.movies.length;c++)"N/A"===a.movies[c].Poster&&(a.movies[c].Poster="images/posterNotAvailable.f35ad942.jpg")},function(){a.movies=[{Title:"Erreur",Year:"Erreur"}]})}]),angular.module("projetEcoleApp").controller("ContactCtrl",["$scope",function(a){a.contactType=[{name:"Problèmes"},{name:"Félicitations"},{name:"Demandes"},{name:"Plaintes"},{name:"Autre"}],a.sendForm=function(){a.sentForm=!0}}]).directive("showErrors",["$timeout","showErrorsConfig",function(a,b){var c,d;return c=function(a){var c;return c=b.showSuccess,a&&null!==a.showSuccess&&(c=a.showSuccess),c},d=function(b,d,e,f){var g,h,i,j,k,l,m;if(g=!1,k=b.$eval(e.showErrors),l=c(k),h=d[0].querySelector("[name]"),j=angular.element(h),i=j.attr("name"),!i)throw"show-errors element has no child input elements with a 'name' attribute";j.bind("blur",function(){return g=!0,m(f[i].$invalid)}),b.$watch(function(){return f[i]&&f[i].$invalid},function(a){return g?m(a):void 0}),b.$on("show-errors-check-validity",function(){return m(f[i].$invalid)}),b.$on("show-errors-reset",function(){return a(function(){return d.removeClass("has-error"),d.removeClass("has-success"),g=!1},0,!1)}),m=function(a){return d.toggleClass("has-error",a),l?d.toggleClass("has-success",!a):void 0}},{restrict:"A",require:"^form",compile:function(a){if(!a.hasClass("form-group"))throw"show-errors element does not have the 'form-group' class";return d}}}]).provider("showErrorsConfig",function(){var a;a=!1,this.showSuccess=function(b){return a=b},this.$get=function(){return{showSuccess:a}}}),angular.module("projetEcoleApp").controller("SignupCtrl",["$scope",function(a){a.sendForm=function(){a.sentForm=!0}}]).directive("compareTo",function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(a,b,c,d){d.$validators.compareTo=function(b){return b===a.otherModelValue},a.$watch("otherModelValue",function(){d.$validate()})}}}).directive("popover",function(){return{scope:{textToPopUp:"@text",iconToShow:"@icon"},templateUrl:"/scripts/controllers/popover.html"}}),angular.module("projetEcoleApp").controller("SearchCtrl",["$scope","$http",function(a,b){a.isSearch=!0,a.Search=function(){b({method:"GET",url:"https://omdbapi.com/?s="+a.filter+"&type=movie"}).then(function(b){a.isSearch=!1,a.movies=b.data.Search;for(var c=0;c<a.movies.length;c++)"N/A"===a.movies[c].Poster&&(a.movies[c].Poster="images/posterNotAvailable.f35ad942.jpg")},function(){a.movies=[{Title:"Erreur de connection"}]})}}]),angular.module("projetEcoleApp").run(["$templateCache",function(a){a.put("views/contact.html",'<form name="contactForm" novalidate ng-hide="sentForm" ng-model="form"> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Nom d\'utilisateur: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="text" class="form-control" name="contactName" ng-model="contact.name" required> <p id="emptyNameError" class="help-block text-center" ng-show="contactForm.contactName.$error.required">Le nom d\'utilisateur est requis.</p> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Adresse courriel: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="email" class="form-control" name="contactEmail" ng-model="contact.email" required> <div class="help-block text-center"> <p id="emptyEmailError" ng-show="contactForm.contactEmail.$error.required">L\'adresse courriel est requis. </p> <p id="invalidEmailError" ng-show="contactForm.contactEmail.$error.email">L\'adresse courriel est invalide. </p> </div> </div> </div> <div class="form-group row"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Sujet du message: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <select class="form-control col-xs-12 col-sm-6 col-lg-8" name="contactReason"> <option ng-repeat="type in contactType" value="{{type.name}}"> {{type.name}} </option> </select> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Votre message: </label> <div class="col-xs-12 col-sm-12 col-lg-12"> <textarea rows="4" class="form-control" name="message" ng-model="contact.message" required>\r\n			<p id="emptyMessageError" class="help-block text-center" ng-show="contactForm.message.$error.required">Le message est requis.</p>\r\n		</div>\r\n	</div>\r\n	<div class="form-group row">\r\n		<div class="col-xs-12 col-sm-12 col-lg-12">\r\n			<button id="submitButton" type="submit" class="btn btn-primary pull-right" ng-disabled="contactForm.$invalid" ng-click="sendForm()">\r\n				Envoyer\r\n			</button>\r\n			<popover text="Veuillez tout remplir correctement." class="pull-right" icon="glyphicon glyphicon-warning-sign" ng-show="contactForm.$invalid"></popover>\r\n		</div>\r\n	</div>\r\n	<br>\r\n</form>\r\n<div class="alert alert-success text-center" ng-show="sentForm" id="successMessage">\r\n  <strong>Message envoyé!</strong> Merci {{contact.name}} d\'avoir envoyé votre message.\r\n</div>'),a.put("views/main.html",'<div class="jumbotron"> <h2>Bienvenue sur DJ\'s Movies</h2> <p class="lead"> <img src="images/movie.418db19d.png" height="75%" width="75%"><br> Un site à votre écoute! </p> </div> <div class="container"> <h3>Nouveaux films (2016)</h3> </div> <div class="jumbotron"> <div class="row"> <div ng-repeat="movie in movies | limitTo:6"> <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4"> <div class="thumbnail" style="min-height: 350px"> <p>{{movie.Title}}</p> <img src="{{movie.Poster}}" width="70%" height="70%"> </div> </div> </div> </div> </div>'),a.put("views/search.html",'<div class="container"> <div class="jumbotron"> <p>Entrer le nom du film que vous recherchez :</p> <input class="ng-pristine ng-valid ng-empty ng-touched" type="text" ng-model="filter" ng-change="Search()" id="keywordInput" ng-model-options="{ debounce: 300 }"> </div> <div class="container" id="searchResult" ng-hide="isSearch" ng-model="searchResult"> <div class="jumbotron"> <div class="row"> <div ng-repeat="movie in movies"> <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4"> <div class="thumbnail" style="min-height: 325px"> <p style="font-size: medium">{{movie.Title}}</p> <img src="{{movie.Poster}}" width="75%" height="75%"> </div> </div> </div> </div> </div> </div> <!--ok--> </div>'),a.put("views/signup.html",'<form name="signUpForm" ng-model="form" novalidate ng-hide="sentForm"> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Prénom: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="text" class="form-control" name="userName" ng-model="user.name" required> <p id="emptyNameError" class="help-block text-center" ng-show="signUpForm.userName.$error.required">Le prénom est requis.</p> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Nom de famille: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="text" class="form-control" name="userFamilyName" ng-model="user.familyName" required> <p id="emptyFamilyNameError" class="help-block text-center" ng-show="signUpForm.userFamilyName.$error.required">Le nom de famille est requis.</p> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Adresse courriel: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="email" class="form-control" name="userEmail" ng-model="user.email" required> <div class="help-block text-center control-group error"> <p id="emptyEmailError" ng-show="signUpForm.userEmail.$error.required">L\'adresse courrielle est requise. </p> <p id="invalidEmailError" ng-show="signUpForm.userEmail.$error.email">L\'adresse courrielle est invalide. </p> </div> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4"> Mot de passe: <popover text="Minimum de trois caractères" icon="glyphicon glyphicon-question-sign"></popover> </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="password" class="form-control" name="userPassword" ng-model="user.password" ng-minlength="3" required> <div class="help-block text-center"> <p id="emptyPasswordError" ng-show="signUpForm.userPassword.$error.required">Le mot de passe est requis.</p> <p id="invalidPasswordError" ng-show="signUpForm.userPassword.$error.minlength">Le mot de passe doit avoir au moins 3 caractères.</p> </div> </div> </div> <div class="form-group row" show-errors="{showSuccess: true}"> <label class="control-label col-xs-12 col-sm-6 col-lg-4">Confirmer le mot de passe: </label> <div class="col-xs-12 col-sm-6 col-lg-8"> <input type="password" class="form-control" name="userPasswordConfirm" ng-model="user.passwordConfirm" required compare-to="user.password"> <p id="passwordNotMatchError" class="help-block text-center" ng-show="signUpForm.userPasswordConfirm.$error">Veuillez confirmer le mot de passe.</p> </div> </div> <div class="form-group row"> <div class="col-xs-12 col-sm-12 col-lg-12"> <button type="submit" id="submitButton" class="btn btn-primary pull-right" ng-disabled="signUpForm.$invalid" ng-click="sendForm()">Envoyer</button> <popover text="Veuillez tout remplir correctement." class="pull-right" icon="glyphicon glyphicon-warning-sign" ng-show="signUpForm.$invalid"></popover> </div> </div> </form> <div class="alert alert-success text-center" ng-show="sentForm" id="successMessage"> <strong>Inscription terminée!</strong> Merci {{user.name}} de vous être inscrit. </div>')}]);