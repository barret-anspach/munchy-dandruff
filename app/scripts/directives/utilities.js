'use strict';

var app = angular.module('fullpageApp');

    app.directive('backgroundImg', function () {

        return function (scope, element, attrs) {
            attrs.$observe('backgroundImg', function(value) {
                console.log(attrs.position);
                if(!attrs.position) {
                    scope.position = 'center center';
                    console.log(scope.position);
                }
                else {
                    scope.position = attrs.position;
                }
                element.css({
                    'background-image': 'url(' + value + ')',
                    'background-size': attrs.size,
                    'background-position': scope.position,
                    'background-repeat': 'no-repeat'
                })
            });

        }
    });


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

//    app.directive('bottom', function() {
//       return {
//           restrict: 'A',
//           link: function postLink(scope, element, attrs) {
//               attrs.$observe('bottom', function() {
//                   })
//               })
//           }
//       }
//    });

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
                var el = $(element);
                console.log(el);

                windowEl.on('scroll', function(){
                    var top = el.offset;
                    var left = el.offset;
                    var width = el.width;
                    var height = el.height;

                    while(el.offsetParent) {
                        el = el.offsetParent;
                        top += el.offsetTop;
                        left += el.offsetLeft;
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