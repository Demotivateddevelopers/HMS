'use strict';
define([], function()
{
    return {
        defaultRoutePath: '/login',
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
                templateUrl: 'views/home.html',
                controller:'homeCtrl',
                dependencies: ['controllers/homeCtrl']
            }
        }
    };
});