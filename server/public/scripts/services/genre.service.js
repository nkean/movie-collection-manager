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
            self.getGenres();
            self.defaultInput();
        })
        .catch(function(error) {
            console.log('Error with POST: ', error);
        })
    }

    self.getGenres = function() {
        console.log('Grabbing all genres from the database');
        $http({
            method: 'GET',
            url: '/genre/all',
        })
        .then(function(response) {
            console.log('Successful GET: ', response.data);
            self.genres.list = response.data;
        })
        .catch(function(error) {
            console.log('Error with GET: ', error);
        })
    }

    self.deleteGenre = function(removeGenre) {
        console.log('Deleting from database: ', removeGenre);
        if(removeGenre.count == 0) {
            $http({
                method: 'DELETE',
                url: '/genre/delete',
                params: removeGenre,
            })
            .then(function(response) {
                console.log('Successful DELETE: ', response);
                self.getGenres();
            })
            .catch(function(error) {
                console.log('Error with DELETE: ', error);
            })
        } else {
            alert('Genre Contains Movies! Cannot DELETE!')
        }
    }
}]);