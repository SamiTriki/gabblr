var gabblr = angular.module('gabblr');

gabblr.factory('userService', function ($http) {

    var $scope = {};

    $scope.getById = function (id) {

        return $http.get('/api/users/'+id);
    };

    return $scope;

});
