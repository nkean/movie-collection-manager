app.controller('MovieController', ['MovieService', function(MovieService) {
    console.log('MovieController has loaded');
    var self = this;

    self.newMovie = MovieService.newMovie;
    self.addMovie = MovieService.addMovie;
}]);