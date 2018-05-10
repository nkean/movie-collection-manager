app.service('MovieService', ['$http', function($http) {
    console.log('MovieService has loaded');
    var self = this;

    self.newMovie = {
        title: '',
        release_date: '',
        run_time: '',
        image_url: '',
        genre_id: ''
    };

    self.movies = {
        list: '',
    };

    self.defaultInput = function() {
        self.newMovie.title = '';
        self.newMovie.release_date = '';
        self.newMovie.run_time = '';
        self.newMovie.image_url = '';
        self.newMovie.genre_id = '';
    }

    self.addMovie = function() {
        console.log('Fetching poster url from TMDB');
        var baseUrl = 'https://image.tmdb.org/t/p/w185';
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '913c5b9e62af318acbd0e2b18f576ecf',
                query: self.newMovie.title,
            }
        })
        .then(function(response) {
            var posterPath = response.data.results[0].poster_path;
            var posterUrl = baseUrl + posterPath;
            self.newMovie.image_url = posterUrl;
            self.postMovie();
        })
        .catch(function(error) {
            console.log('Error with TMDB search: ', error);
        })
    }

    self.postMovie = function() {
        console.log('Adding to database: ', self.newMovie);
        $http({
            method: 'POST',
            url: '/movie/add',
            data: self.newMovie,
        })
        .then(function(response) {
            console.log('Successful POST: ', response);
            self.getMovies();
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
            self.movies.list = response.data;
        })
        .catch(function(error) {
            console.log('Error with GET: ', error);
        })
    }
}]);