'use strict';

angular.module('fullpageApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.router',
  'angular-inview',
  'angular-inview-horiz'
])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to home
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/index.main.html',
                controller: 'MainCtrl'
//                views: {
//                    "main": {
//                        templateUrl: "views/index.main.html"
//                    }
//                    "about": {
//                        templateUrl: "views/index.about.html"
//                    },
//                    "platform": {
//                        templateUrl: "views/index.platform.html"
//                    },
//                    "work": {
//                        templateUrl: "views/index.work.html"
//                    },
//                    "contact": {
//                        templateUrl: "views/index.contact.html"
//                    },
//                    "footer": {
//                        templateUrl: "views/index.footer.html"
//                    }
//                }
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html",
                controller: 'AboutCtrl'
            })
            .state('platform', {
                url: "/platform",
                templateUrl: "views/platform.html"
            })
            .state('work', {
                url: "/work",
                templateUrl: "views/work.html"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "views/contact.html"
            })
    })

    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('AppCtrl', function($scope, $state, $location, $anchorScroll) {
        $scope.$state = $state;
//        console.log($location.hash());
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };

//        $scope.$watch($location.hash(), function(newVal){
//            console.log(newVal);
//        })
    });
