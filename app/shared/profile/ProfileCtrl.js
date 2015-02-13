var gabblr = angular.module('gabblr');

gabblr.controller('ProfileCtrl', function ($scope, Me, userManager) {

    $scope.updateMe = function (me) {
        return userManager.updateUser(me).then(function (res) {
            console.log(res);
        });
    };
    $scope.me = Me;
});

