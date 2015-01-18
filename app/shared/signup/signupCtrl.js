var gabblr = angular.module('gabblr');

gabblr.controller('SignupCtrl', function ($scope, $auth) {

    $scope.user = {
        username: $scope.username,
        password: $scope.password
    };

    $scope.signUp = function () {

        $auth.signup($scope.user)
            .then(function (response) {
                console.log(response);
            });
    };
});

