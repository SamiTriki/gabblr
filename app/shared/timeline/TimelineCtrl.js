gabblr = angular.module('gabblr');

gabblr.controller('TimelineCtrl', function($scope, gabsService, Me) {

    $scope.getTimeLine = function() {
        gabsService.getAll()
            .then( function(data) {
                $scope.gabs = data;
            });
    };


    $scope.submit = function(newGab) {
        gabsService.submit(newGab)
            .then( function() {
                $scope.getTimeLine();
            });
    };

    $scope.me = Me;


});