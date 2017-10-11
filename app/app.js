'use strict';

// Declare app level module which depends on views, and components

angular.module('myApp', ['ui.router', 'myApp.controllers'])

    // .run(function($rootScope,$state) {
    //   $rootScope.$on('api:ready', function (event) {

    //   });
    // })

    .config(function($stateProvider, $urlRouterProvider) {

        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })

            // .state('home', {
            //     url: '/home',
            //     templateUrl: 'partials/home.html',
            //     controller: 'HomeCtrl as ctrl',
            //     authenticate: true
            
            // })

            // .state('company-details', {
            //     url: '/company-details',
            //     templateUrl: 'partials/company-details.html',
            //     controller: 'CompanyCtrl'
            // })

            // .state('table', {
            //     url: '/table',
            //     templateUrl: 'partials/table.html',
            //     controller: 'tableCtrl'
            // })


            // .state('dashboard', {
            //     url: '/dashboard',
            //     templateUrl: 'partials/dashboard.html'
            //     // controller: 'DashCtrl'
            // })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    })
