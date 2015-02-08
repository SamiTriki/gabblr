var gabblr = angular.module('gabblr');

gabblr.controller('ProfileCtrl', function ($scope, User, userManager) {

    $scope.updateUser = function (user) {
        return userManager.updateUser(user).then(function (res) {
            console.log(res);
        });
    };
    $scope.user = User;
});

