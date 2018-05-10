app.controller('MovieController', ['MovieService', function(MovieService) {
    console.log('MovieController has loaded');
    var self = this;

    self.movies = MovieService.movies;
    self.newMovie = MovieService.newMovie;
    self.addMovie = MovieService.addMovie;
    self.getMovies = MovieService.getMovies;
    self.deleteMovie = MovieService.deleteMovie;

    self.getMovies();
}]);