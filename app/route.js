var gabblr = angular.module('gabblr');

gabblr.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $provide) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/home',
            title: 'Home',
            templateUrl: 'app/shared/home/home.html',
            controller: 'HomeCtrl',
            resolve: {
                loggedOut: function ($q, $location, $auth) {
                    var deferred = $q.defer();

                    if ($auth.isAuthenticated()) {
                        $location.path('/');
                    } else {
                        deferred.resolve();
                    }
                    return deferred.promise;
                }
            }
        })

        .state('signup', {
            url: '/signup',
            title: 'Sign Up',
            templateUrl: 'app/shared/signup/signup.html',
            controller: 'SignupCtrl',
            resolve: {
                loggedOut: function ($q, $location, $auth) {
                    var deferred = $q.defer();

                    if ($auth.isAuthenticated()) {
                        $location.path('/timeline');
                    } else {
                        deferred.resolve();
                    }
                    return deferred.promise;
                }
            }
        })

        .state('login', {
            url: '/login',
            title: 'login',
            templateUrl: 'app/shared/login/login.html',
            controller: 'LoginCtrl',
            resolve: {
                loggedOut: function ($q, $location, $auth) {
                    var deferred = $q.defer();

                    if ($auth.isAuthenticated()) {
                        $location.path('/');
                    } else {
                        deferred.resolve();
                    }
                    return deferred.promise;
                }
            }

        })
        .state('me', {
            url: '/me',
            title: 'Gabblr Profile',
            templateUrl: 'app/shared/profile/profile.html',
            controller: 'ProfileCtrl',
            resolve: {
                authenticated: function ($q, $location, $auth) {
                    var deferred = $q.defer();
                    if (!$auth.isAuthenticated()) {
                        $location.path('/home');
                    } else {
                        deferred.resolve();
                    }

                    return deferred.promise;
                },
                Me: function (userManager, authenticated) {
                    return userManager.getUser().then(function (data) {
                        return data;
                    });
                }
            }
        })
        .state('users', {
            url: '/users/:id',
            templateUrl: 'app/shared/users/user.html',
            controller: 'UserCtrl',
            resolve: {
                user: function (userService, $stateParams) {
                    return userService.getUserById($stateParams.id).then(function (data) {
                        return data.data;
                    });
                }
            }
        })
        .state('timeline', {
            url: '/',
            templateUrl: 'app/shared/timeline/timeline.html',
            controller: 'TimelineCtrl',
            resolve: {
                authenticated: function ($q, $location, $auth) {
                    var deferred = $q.defer();
                    if (!$auth.isAuthenticated()) {
                        $location.path('/home');
                    } else {
                        deferred.resolve();
                    }

                    return deferred.promise;
                },
                Me: function (userManager, authenticated) {
                    return userManager.getUser().then(function (data) {
                        return data;
                    });
                }
            }
        });

});
