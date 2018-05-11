app.service('GenreService', ['$http', function($http) {
    console.log('GenreService has loaded');
    var self = this;

    self.newGenre = {
        name: '',
    };

    self.genres = {
        list: [],
    };

    self.defaultInput = function() {
        self.newGenre.name = '';
    }

    self.addGenre = function() {
        console.log('Adding to database: ', self.newGenre);
        $http({
            method: 'POST',
            url: '/genre/add',
            data: self.newGenre,
        })
        .then(function(response) {
            console.log('Successful POST: ', response);
        })
        .catch(function(error) {
            console.log('Error with POST: ', error);
        })
    }
    
}]);