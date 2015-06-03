'use strict';
define(['app'], function(app){
    app.controller('mainCtrl',function($scope, $location) {
           $scope.menuConfig = [{
                    "name": "Home",
                    "key":"home",
                    "url":"/#/home",
                    "selected": true
               },{
                    "name": "About",
                    "key":"about",
                    "url":"/#/about",
                    "selected": false
               },{
                    "name": "Rooms",
                    "key":"rooms",
                    "url":"#/rooms/index",
                    "selected": false
               },{
                    "name": "Restaurant",
                    "key":"restaurant",
                    "url":"#/rooms/index",
                    "selected": false
               },{
                    "name": "Gallery",
                    "key":"gallery",
                    "url":"#/rooms/index",
                    "selected": false
               },{
                    "name": "Contact",
                    "key":"contact",
                    "url":"#/rooms/index",
                    "selected": false
               }]
    });
});