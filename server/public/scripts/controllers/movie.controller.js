app.controller('MovieController', ['MovieService', 'GenreService', function(MovieService, GenreService) {
    console.log('MovieController has loaded');
    var self = this;

    self.movies = MovieService.movies;
    self.newMovie = MovieService.newMovie;
    self.addMovie = MovieService.addMovie;
    self.getMovies = MovieService.getMovies;
    self.deleteMovie = MovieService.deleteMovie;

    self.genres = GenreService.genres;
    self.getGenres = GenreService.getGenres;

    self.getGenres();
    self.getMovies();
}]);