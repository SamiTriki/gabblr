gabblr = angular.module('gabblr');

gabblr.controller('TimelineCtrl', function($scope, gabsService) {

    $scope.getTimeLine = function() {
        gabsService.getAllGabs()
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

});