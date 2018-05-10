console.log('client.js has loaded');

var app = angular.module('MovieCollectionApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
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