var app = angular.module('gabblr');

app.factory('gabsService', function (profileService, $http) {

    var $scope = {};

    $scope.submit = function (gab) {
        return profileService.getUser()
            .then(function (data) { return data.data.id;})
            .then(function (id) {
                $http.post('/api/users/'+id+'/gabs', gab);
            });
    };

    return $scope;
});



