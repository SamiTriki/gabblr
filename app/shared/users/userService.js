var gabblr = angular.module('gabblr');

gabblr.factory('userService', function ($http) {

    var $scope = {};

    $scope.getUserById = function (id) {

        return $http.get('/api/users/'+id);
    };

    return $scope;

});
