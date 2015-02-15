var app = angular.module('gabblr');

app.factory('userManager', function ($http) {

    var $scope = {};

    $scope.get = function () {
        return $http.get('/api/me')
            .then(function (data) {
                return data.data;
            });
    };

    $scope.update = function (updatedUser) {
        return $http.put('/api/me', updatedUser);
    };

    return $scope;
});