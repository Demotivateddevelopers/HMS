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
        angularStorage: 'vendors/auth0/angular-storage',
        bootstrap: 'vendors/bootstrap/bootstrap.min',
        app:'app'
    },
	shim: {
		'app': {
			deps: ['angular', 'angularRoute', 'angularStorage', 'angularAnimate','angularResource', 'angularCookies',
                'jquery', 'bootstrap']
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
        'angularStorage': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
	}
});

require(['app','directives/directive','controllers/mainCtrl'], function (app) {
    angular.bootstrap(document, ['app']);
});