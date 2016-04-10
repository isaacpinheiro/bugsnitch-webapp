"use strict";

var app = angular.module('bugsnitch', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    })
    .when('/sobre', {
      templateUrl: 'templates/sobre.html',
      controller: 'SobreController'
    })
    .when('/equipe', {
      templateUrl: 'templates/equipe.html',
      controller: 'EquipeController'
    })
    .when('/contato', {
      templateUrl: 'templates/contato.html',
      controller: 'ContatoController'
    })
    .when('/termos', {
      templateUrl: 'templates/termos.html',
      controller: 'TermosController'
    })
    .otherwise({
      redirectTo: '/'
    });

}]);

app.controller('MainController', function(){

});

app.controller('SobreController', function(){

});

app.controller('EquipeController', function(){

});

app.controller('ContatoController', function(){

});

app.controller('TermosController', function(){

});
