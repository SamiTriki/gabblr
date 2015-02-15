var app = angular.module('gabblr');

app.factory('gabsService', function (userManager, $http) {

    var $scope = {};

    $scope.submit = function (gab) {
        return userManager.get()
            .then(function (data) { return data.id; })
            .then(function (id) {
                $http.post('/api/users/' + id + '/gabs', gab);
            });
    };

    $scope.getAll = function () {
        return $http.get('/api/gabs')
            .then(function (data) {
                return data.data;
            });
    };

    return $scope;
});



