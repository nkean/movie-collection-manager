console.log('client.js has loaded');

var app = angular.module('MovieCollectionApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/movie', {
        templateUrl: 'views/movie.html',
        controller: 'MovieController as vm',
    }).otherwise({
        templateUrl: 'views/error.html',
    })
});