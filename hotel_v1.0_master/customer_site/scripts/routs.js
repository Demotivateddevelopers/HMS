'use strict';
define([], function()
{
    return {
        defaultRoutePath: '/home',
        routes: {
            '/login': {
                templateUrl: 'modules/login/views/login.html',
                controller:'loginCtrl',               
                dependencies: ['../modules/login/scripts/controllers/loginCtrl']
            },
            '/signup': {
                templateUrl: 'modules/login/views/signup.html',
                controller:'signUpCtrl',
                dependencies: ['../modules/login/scripts/controllers/signUpCtrl']
            },
            '/home': {
                templateUrl: 'modules/home/views/home.html',
                controller:'homeCtrl',
                dependencies: ['../modules/home/scripts/controllers/homeCtrl']
            },
            '/': {
                templateUrl: 'modules/home/views/home.html',
                controller:'homeCtrl',
                dependencies: ['../modules/home/scripts/controllers/homeCtrl']
            },
            '/about': {
                templateUrl: 'modules/about/views/about.html',
                controller:'',
                dependencies: []
            },
            '/rooms/index': {
                templateUrl: 'modules/rooms/views/index.html',
                controller:'',
                dependencies: []
            },
            '/rooms/show/:id': {
                templateUrl: 'modules/rooms/views/show.html',
                controller:'',
                dependencies: []
            }
        }
    };
});