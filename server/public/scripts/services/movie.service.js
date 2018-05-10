app.service('MovieService', ['$http', function($http) {
    console.log('MovieService has loaded');
    var self = this;

    self.newMovie = {
        title: '',
        release_date: '',
        run_time: '',
        image_url: 'http://lexingtonvenue.com/media/poster-placeholder.jpg',
        genre_id: ''
    };

    self.defaultInput = function() {
        self.newMovie.title = '';
        self.newMovie.release_date = '';
        self.newMovie.run_time = '';
        // self.newMovie.image_url = '';
        self.newMovie.genre_id = '';
    }

    self.addMovie = function(newMovie) {
        console.log('Adding to database: ', newMovie);
        $http({
            method: 'POST',
            url: '/movie/add',
            data: newMovie,
        })
        .then(function(response) {
            console.log('Successful POST: ', response);
            self.defaultInput();
        })
        .catch(function(error) {
            console.log('Error with POST: ', error);
        })
    }

    self.getMovies = function() {
        console.log('Grabbing all movies from database');
        $http({
            method: 'GET',
            url: '/movie/all',
        })
        .then(function(response) {
            console.log('Successful GET: ', response.data);
        })
        .catch(function(error) {
            console.log('Error with GET: ', error);
        })
    }
}]);