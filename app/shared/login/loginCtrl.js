var gabblr = angular.module('gabblr');

gabblr.controller('LoginCtrl', function ($scope, $auth, $state, $http) {

    $scope.user = {};

    $scope.logIn = function (user) {
        $auth.login(user)
            .then(function (response) {
                console.log(response);
            });
    };

});