var gabblr = angular.module('gabblr');

gabblr.controller('LoginCtrl', function ($scope, $auth,$state) {

    $scope.user = {};

    $scope.logIn = function (user) {
        $auth.login(user)
            .then(function (response) {
                $state.go('timeline');
            });
    };

});