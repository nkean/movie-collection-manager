console.log('client.js has loaded');

var app = angular.module('MovieCollectionApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm',
    }).when('/movie', {
        templateUrl: 'views/movie.html',
        controller: 'MovieController as vm',
    }).when('/genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as vm',
    }).otherwise({
        templateUrl: 'views/error.html',
    })
});