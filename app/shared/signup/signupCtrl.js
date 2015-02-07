var gabblr = angular.module('gabblr');

gabblr.controller('SignupCtrl', function ($scope, $auth) {

    $scope.user = {};

    $scope.signUp = function () {
        $auth.signup($scope.user)
            .then(function (response) {
                console.log(response);
            });
    };
});

