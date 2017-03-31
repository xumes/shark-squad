/**
 * Reginaldo Santos (reginaldo.online) Portfolio
 * @author Reginaldo Santos <reginaldosantos.br@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/manager", {templateUrl: "partials/index.html", controller: "PageCtrl"})
    // Preview Cards
    .when("/data", {templateUrl: "partials/data.html", controller: "PageCtrl"})
    .when("/dev", {templateUrl: "partials/dev.html", controller: "PageCtrl"})

    // Overview Cards
    .when("/cezar", {templateUrl: "overview/expanded.html", controller: "CezarCtrl"})

    .when("/talita", {templateUrl: "overview/expanded.html", controller: "TalitaCtrl"})

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Overview
 */
app.controller('CezarCtrl', function ($scope, $location, $http ) {
  $scope.nome = "Cezar Alberto Rachti";
  $scope.historico = "Trabalho desde...";
  $scope.hobby = "Meu hobby";
  console.log("Titulo", $scope.titulo);
});

app.controller('TalitaCtrl', function ($scope, $location, $http ) {
  $scope.nome = "Talita Vieira Carvalho";
  $scope.historico = "Trabalho desde...";
  $scope.hobby = "Meu hobby";
  console.log("Titulo", $scope.titulo);
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
