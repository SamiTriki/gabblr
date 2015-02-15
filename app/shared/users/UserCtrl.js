var gabblr = angular.module('gabblr');

gabblr.controller('UserCtrl', function ($scope, user, gabsService) {

    $scope.user = user;

    $scope.getGabs = function () {
        gabsService.user(user.id)
            .then(function (data) {
                $scope.gabs = data;
            });
    };

});