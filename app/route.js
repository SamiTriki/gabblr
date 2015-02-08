var gabblr = angular.module('gabblr');

gabblr.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            title: 'Home',
            templateUrl: 'app/shared/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('signup', {
            url: '/signup',
            title: 'Sign Up',
            templateUrl: 'app/shared/signup/signup.html',
            controller: 'SignupCtrl'
        })
        .state('login', {
            url: '/login',
            title: 'login',
            templateUrl: 'app/shared/login/login.html',
            controller: 'LoginCtrl'
        })
        .state('me', {
            url: '/me',
            title: 'Gabblr Profile',
            templateUrl: 'app/shared/profile/profile.html',
            controller: 'ProfileCtrl',
            resolve: {
                authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();
                if (!$auth.isAuthenticated()) {
                    $location.path('/login');
                } else {
                    deferred.resolve();
                }

                return deferred.promise;
                },
                User: function(userManager) {
                    return userManager.getUser().then(function(data){
                        return data.data;
                    });
                }
            }
        });

});
