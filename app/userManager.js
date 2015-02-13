var app = angular.module('gabblr');

app.factory('userManager', function ($http) {

    var $scope = {};

    $scope.getUser = function () {
        return $http.get('/api/me');
    };

    $scope.updateUser = function (updatedUser) {
        return $http.put('/api/me', updatedUser);
    };

    return $scope;
});