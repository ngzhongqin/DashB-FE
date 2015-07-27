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
      .when('/tasks', {
        templateUrl: 'views/tasks/all.html',
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
      })
      .when('/tasks/new', {
        templateUrl: 'views/tasks/new.html',
        controller: 'TasksNewCtrl',
        controllerAs: 'tasksNew'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
