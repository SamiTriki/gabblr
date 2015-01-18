var gabblr = angular.module('gabblr');

gabblr.controller('LoginCtrl', function ($scope, $auth) {

    $scope.user = {
        username: $scope.username,
        password: $scope.password
    };

    $auth.login($scope.user);

});