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
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to home
            $urlRouterProvider.otherwise("/");
            //
            // Now set up the states
            $stateProvider
                .state('index', {
                    url: '/',
                    abstract: true,
                    templateUrl: 'views/index.main.html'
//                    views: {
//                        'nav': {
//                            templateUrl: 'views/nav.html'
//                        },
//                        'home': {
//                            templateUrl: 'views/home.html'
//                        },
//                        'about': {
//                            templateUrl: 'views/about.html'
//                        },
//                        'platform': {
//                            templateUrl: 'views/platform.html'
//                        },
//                        'work': {
//                            templateUrl: 'views/work.html'
//                        },
//                        'contact': {
//                            templateUrl: 'views/contact.html'
//                        }
//                    }
                })
                .state('index.main', {
                    url: '',
//                    controller: 'MainCtrl',
                    views: {
                        'nav@index': {
                            templateUrl: 'views/nav.html'
                        },
                        'home@index': {
                            templateUrl: 'views/home.html'
                        },
                        'about@index': {
                            templateUrl: 'views/about.html'
                        },
                        'platform@index': {
                            templateUrl: 'views/platform.html'
                        },
                        'work@index': {
                            templateUrl: 'views/work.html'
                        },
                        'contact@index': {
                            templateUrl: 'views/contact.html'
                        }
                    }
                });
    //            .state('about', {
    //                url: "/about",
    //                templateUrl: "views/about.html",
    //                controller: 'AboutCtrl'
    //            })
    //            .state('platform', {
    //                url: "/platform",
    //                templateUrl: "views/platform.html"
    //            })
    //            .state('work', {
    //                url: "/work",
    //                templateUrl: "views/work.html"
    //            })
    //            .state('contact', {
    //                url: "/contact",
    //                templateUrl: "views/contact.html"
    //            })
    }])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])

    .controller('AppCtrl', function($scope, $state, $location, $anchorScroll) {
        $scope.$state = $state;
        $scope.$location = $location;
//        console.log($location.hash());
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };

//        $scope.$watch($location.hash(), function(newVal){
//            console.log(newVal);
//        })
    });
