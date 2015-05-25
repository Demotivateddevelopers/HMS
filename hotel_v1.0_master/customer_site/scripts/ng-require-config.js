"use strict";
require.config({
    baseUrl: 'scripts/',
    paths: {
		angular: 'vendors/angular/angular',
		angularRoute: 'vendors/angular/angular-route',
        angularAnimate: 'vendors/angular/angular-animate',
        angularResource: 'vendors/angular/angular-resource',
        angularCookies: 'vendors/angular/angular-cookies',
        jquery: 'vendors/jquery/jquery-2.1.3.min',
        bootstrap: 'vendors/bootstrap/bootstrap.min',
        Auth0: 'vendors/auth0/auth0-6',
        angularJwt: 'vendors/auth0/angular-jwt',
        Auth0Ang: 'vendors/auth0/auth0-angular',
        angularStorage: 'vendors/auth0/angular-storage'
    },
	shim: {
		'app': {
			deps: ['angular', 'angularRoute', 'Auth0', 'angularJwt', 'Auth0Ang', 'angularStorage', 'angularAnimate',
                'angularResource', 'angularCookies', 'jquery', 'bootstrap']
		},
		'angularRoute': {
			deps: ['angular']
		},
        'angularAnimate': {
            deps: ['angular']
        },
        'angularCookies': {
            deps: ['angular']
        },
        'angularResource': {
            deps: ['angular']
        },
        'angularJwt': {
            deps: ['angular']
        },
        'angularStorage': {
            deps: ['angular']
        },
        'Auth0Ang': {
            deps: ['angular', 'Auth0']
        },
        'bootstrap': {
            deps: ['jquery']
        }
	}
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});