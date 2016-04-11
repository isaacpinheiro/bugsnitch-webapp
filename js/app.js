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
    })
    .when('/equipe', {
      templateUrl: 'templates/equipe.html',
    })
    .when('/contato', {
      templateUrl: 'templates/contato.html',
      controller: 'ContatoController'
    })
    .when('/termos', {
      templateUrl: 'templates/termos.html',
    })
    .otherwise({
      redirectTo: '/'
    });

}]);

app.controller('MainController', function($scope){

  $scope.errMsg = '';
  $scope.nome = '';
  $scope.email = '';
  $scope.senha = '';
  $scope.confSenha = '';

  $scope.Cadastrar = function(){

    if($scope.nome == ''){

      $scope.errMsg = 'Por favor, informe o seu nome.';

    }else if($scope.email == ''){

      $scope.errMsg = 'Por favor, informe o seu E-mail.';

    }else if($scope.senha == ''){

      $scope.errMsg = 'Por favor, informa a sua nova senha.';

    }else if($scope.confSenha == ''){

      $scope.errMsg = 'Por favor, confirme a sua nova senha.';

    }else if($scope.confSenha != $scope.senha){

      $scope.errMsg = 'A confirmação está diferente da senha.';

    }else{

      $scope.errMsg = '';
      alert('Cadastrado');

      // TODO

    }

  };

});

app.controller('ContatoController', function($scope){

});
