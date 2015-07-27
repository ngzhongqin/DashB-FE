'use strict';
$(document).foundation(); 
/**
 * @ngdoc overview
 * @name pssdashApp
 * @description
 * # pssdashApp
 *
 * Main module of the application.
 */
var app = angular
  .module('pssdashApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tasklist', {
        templateUrl: 'views/tasklist.html',
        controller: 'TaskListCtrl',
        controllerAs: 'tasklist'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
