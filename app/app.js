var gabblr = angular.module('gabblr', ['satellizer', 'ngAnimate', 'ui.bootstrap', 'ui.router', 'templates']);

gabblr.controller('MainCtrl', function ($scope, $auth, $state) {

    $scope.logout = function () {

        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout()
            .then(function () {
                $stage.go('/');
            });
    };

    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    };

});