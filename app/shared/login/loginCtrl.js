var gabblr = angular.module('gabblr');

gabblr.controller('LoginCtrl', function ($scope, $auth) {

    $scope.user = {};

    $scope.logIn = function(user) {
        $auth.login(user)
            .then(function (response) {
                console.log(response);
            });
    };

});