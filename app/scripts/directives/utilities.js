'use strict';

var app = angular.module('fullpageApp');

    app.directive('background', function () {
        return {
//            template: '<div></div>',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                attrs.$observe('background', function(value) {
                    if(value == 'h') {
                        scope.h = window.innerHeight;
                        element.css({
                            'min-height': scope.h + 'px'
                        })
                    }
                    else if (value == 'w') {
                        scope.w = window.innerWidth;
                        scope.h = window.innerHeight;
                        element.css({
                            'width': scope.w,
                            'height': scope.h
                        })
                    }
                })
            }
        }
    });

    app.directive('horizontalBkgdContainer', function () {
        return {
//            template: '<div></div>',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                attrs.$observe('background', function(value) {
                    scope.panelsNo = document.getElementsByClassName('fullpage').length;
                    scope.w = window.innerWidth;
                    scope.h = window.innerHeight;
                    element.css({
                        'max-height': scope.h + 'px',
                        'min-width': scope.w + 'px',
                        'width': (scope.w * scope.panelsNo) + 'px'
                    })
                })
            }
        }
    });

    app.directive('panelInView', function($window) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var windowEl = angular.element($window);
                var element = $(element)
                console.log(element);

                windowEl.on('scroll', function(){
                    var top = element.offset;
                    var left = element.offset;
                    var width = element.width;
                    var height = element.height;

                    while(element.offsetParent) {
                        element = element.offsetParent;
                        top += element.offsetTop;
                        left += element.offsetLeft;
                    }

                    var inView = (
                        top >= windowEl.pageYOffset &&
                            left >= windowEl.pageXOffset &&
                            (top + height) <= (windowEl.pageYOffset + windowEl.innerHeight) &&
                            (left + width) <= (windowEl.pageXOffset + windowEl.innerWidth)
                        );
                    console.log(inView);
                });
//                element.bind('scroll', function(){

            }
        }
    });