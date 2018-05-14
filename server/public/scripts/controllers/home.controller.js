app.controller('HomeController', ['MovieService', function(MovieService) {
    console.log('HomeController has loaded');
    var self = this;

    self.movies = MovieService.movies;
    self.getMovies = MovieService.getMovies;

    self.getMovies();
}]);