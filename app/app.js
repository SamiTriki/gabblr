var gabblr = angular.module('gabblr', ['satellizer', 'ngAnimate', 'ui.bootstrap', 'ui.router', 'templates']);

gabblr.controller('MainCtrl', function ($scope, $auth, $state, userManager) {

    $scope.logout = function () {

        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout()
            .then(function () {
                $state.reload();
            });
    };

    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    };

    // if ($auth.isAuthenticated()) {
    //     debugger;
    //     console.log('auth');
    //     userManager.getUser()
    //         .success( function(data) {
    //             $scope.User = data.data;
    //         })
    //         .error( function(data) {
    //             console.log(data);
    //         });
    // }


});