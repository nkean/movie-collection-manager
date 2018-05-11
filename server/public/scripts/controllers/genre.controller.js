app.controller('GenreController', ['GenreService', function(GenreService) {
    console.log('GenreController has loaded');
    var self = this;

    self.genres = GenreService.genres;
    self.newGenre = GenreService.newGenre;
    self.addGenre = GenreService.addGenre;
}]);