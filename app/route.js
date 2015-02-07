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
        .state('timeline', {
            url: '/timeline',
            title: 'Gabblr Timeline',
            templateUrl: 'app/shared/timeline/timeline.html',
            controller: 'TimelineCtrl'
        });

});
