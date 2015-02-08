var gabblr = angular.module('gabblr');

gabblr.controller('ProfileCtrl', function ($scope, Me, profileService) {

    $scope.updateMe = function (me) {
        return profileService.updateUser(me).then(function (res) {
            console.log(res);
        });
    };
    $scope.me = Me;
});

